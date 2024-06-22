import { NextResponse } from "next/server";
import { connectToDb } from "@/app/utils/config/mongodb";
import Restaurant from "@/app/utils/models/RestaurantRegister";

export async function DELETE(req, { params }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ status: 404, message: "Missing restaurant ID" });
  }

  try {
    await connectToDb();

    const deletedRestaurant = await Restaurant.findByIdAndDelete({ _id: id });
    if (!deletedRestaurant) {
      return NextResponse.json({
        status: 404,
        message: "Restaurant not found",
      });
    }

    return NextResponse.json({
      status: 200,
      message: "  Restaurant successfully deleted",
      deletedRestaurant,
    });
  } catch (error) {
    console.error("Error deleting restaurant:", error);
    NextResponse.json({ status: 500, message: "Internal server error" });
  }
}

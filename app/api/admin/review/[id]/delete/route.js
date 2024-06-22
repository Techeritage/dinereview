import { NextResponse } from "next/server";
import { connectToDb } from "@/app/utils/config/mongodb";
import Review from "@/app/utils/models/Review";

export async function DELETE(req, { params }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ status: 404, message: "Missing review ID" });
  }

  try {
    await connectToDb();

    const deletedReview = await Review.findByIdAndDelete({ _id: id });
    if (!deletedReview) {
      return NextResponse.json({ status: 404, message: "Review not found" });
    }

    return NextResponse.json({
      status: 200,
      message: "  Review successfully deleted",
      deletedReview,
    });
  } catch (error) {
    console.error("Error deleting review:", error);
    NextResponse.json({ status: 500, message: "Internal server error" });
  }
}

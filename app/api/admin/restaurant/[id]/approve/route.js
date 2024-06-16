import { NextResponse } from "next/server";
import { connectToDb } from "@/app/utils/config/mongodb";
import Restaurant from "@/app/utils/models/RestaurantRegister";

export async function POST(req, { params }) {
  const { id } = params;
  await connectToDb();

  await Restaurant.findByIdAndUpdate(id, { status: "approved" });
  return NextResponse.json({
    message: "Restaurant approved.",
    success: true,
  });
}

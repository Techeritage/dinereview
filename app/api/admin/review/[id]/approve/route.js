import { NextResponse } from "next/server";
import { connectToDb } from "@/app/utils/config/mongodb";
import Review from "@/app/utils/models/Review";

export async function POST(req, { params }) {
  const { id } = params;
  await connectToDb();

  await Review.findByIdAndUpdate(id, { status: "approved" });
  return NextResponse.json({
    message: "Review approved.",
    success: true,
  });
}

import { NextResponse } from "next/server";
import { connectToDb } from "@/app/utils/config/mongodb";
import Review from "../../utils/models/Review";
import User from "@/app/utils/models/UserRegister";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDb();

    const { user, restaurant, rating, comment } = await req.json();

    const newReview = new Review({
      user,
      restaurant,
      rating,
      comment,
    });

    const savedReview = await newReview.save();

    // Update the User document to add the new review's ObjectId to `reviews`
    await User.findByIdAndUpdate(user, { $push: { reviews: savedReview._id } });

    return NextResponse.json({
      message: "Review created successfully",
      success: true,
      data: savedReview,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await connectToDb();

    const allReviews = await Review.find()
      .populate("restaurant") // Populate the 'restaurant' field
      .populate("user"); // Populate the 'user' field

    return NextResponse.json(
      {
        status: 200,
        success: true,
        data: allReviews,
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Failed to fetch reviews",
      error: error.message,
    });
  }
}

export const revalidate = 0;

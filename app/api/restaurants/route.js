import { NextResponse } from "next/server";
import { connectToDb } from "@/app/utils/config/mongodb";
import Restaurant from "@/app/utils/models/RestaurantRegister";

export const dynamic = "force-dynamic";

export async function POST(req) {
  await connectToDb();

  try {
    const { name, email, password, address, phone } = await req.json();

    const ifUserExists = await Restaurant.findOne({ email });
    if (ifUserExists) {
      return NextResponse.json(
        { error: "Restaurant already exists" },
        { status: 400 }
      );
    }

    const newRestaurant = new Restaurant({
      name,
      email,
      password,
      address,
      phone,
    });

    const savedRestaurant = await newRestaurant.save();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      data: savedRestaurant,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await connectToDb();

    const allRestaurants = await Restaurant.find();
    return NextResponse.json({
      status: 200,
      success: true,
      data: allRestaurants,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Failed to fetch restaurants",
      error: error.message,
    });
  }
}

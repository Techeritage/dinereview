import { NextResponse } from "next/server";
import { connectToDb } from "@/app/utils/config/mongodb";
import User from "@/app/utils/models/UserRegister";

export const dynamic = "force-dynamic";

export async function POST(req) {
  await connectToDb();

  try {
    const { name, email, password } = await req.json();

    const ifUserExists = await User.findOne({ email });
    if (ifUserExists) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      data: savedUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await connectToDb();

    const allUsers = await User.find().populate("reviews");
    return NextResponse.json({
      status: 200,
      success: true,
      data: allUsers,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Failed to fetch users",
      error: error.message,
    });
  }
}

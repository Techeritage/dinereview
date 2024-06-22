import { NextResponse } from "next/server";
import { connectToDb } from "@/app/utils/config/mongodb";
import User from "@/app/utils/models/UserRegister";

export async function DELETE(req, { params }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ status: 404, message: "Missing user ID" });
  }

  try {
    await connectToDb();

    const deletedUser = await User.findByIdAndDelete({ _id: id });
    if (!deletedUser) {
      return NextResponse.json({ status: 404, message: "User not found" });
    }

    return NextResponse.json({
      status: 200,
      message: "  User successfully deleted",
      deletedUser,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    NextResponse.json({ status: 500, message: "Internal server error" });
  }
}

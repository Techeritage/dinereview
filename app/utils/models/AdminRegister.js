import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "please write your name"],
    },
    email: {
      type: String,
      required: [true, "please provide a valid email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please provide a password"],
    },
    role: { type: String, default: "admin" },
  },
  { timestamps: true }
);

const Admin = mongoose.models.admin || mongoose.model("admin", adminSchema);
export default Admin;

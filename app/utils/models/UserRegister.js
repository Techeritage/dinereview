import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    name: String,
    status: { type: String, default: "active" },
    profilePicture: {
      type: String,
      default:
        "https://ik.imagekit.io/krr3p3joi/default%20profile%20pics.jpg?updatedAt=1718465235746",
    },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;

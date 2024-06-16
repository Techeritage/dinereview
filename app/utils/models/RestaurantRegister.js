import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, default: "restaurant" },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  address: String,
  cuisineType: { type: String },
  profilePictureUrl: {
    type: String,
    default:
      "https://ik.imagekit.io/krr3p3joi/Mcdonalds-logo-on-transparent-background-PNG.png?updatedAt=1718492651176",
  },
  operatingHours: [String],
  images: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Restaurant =
  mongoose.models.Restaurant || mongoose.model("Restaurant", RestaurantSchema);
export default Restaurant;

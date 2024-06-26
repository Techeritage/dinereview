import mongoose from "mongoose";

// MongoDB connection string
const mongoURI = process.env.MONGODB_URI;

// Function to connect to MongoDB
const connectToMongoDB = async ()=> {
  try {
    // Connect to MongoDB without the deprecated options
    await mongoose.connect(mongoURI, {
      // Other connection options can be specified here
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export async function connectToDb() {
  if (!mongoose.connection.readyState) {
    await connectToMongoDB();
  }
}

<<<<<<< HEAD
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Avoid reconnecting if already connected
    if (mongoose.connection.readyState >= 1) return;

    // Connect to MongoDB (no need for deprecated options)
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
=======
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Avoid reconnecting if already connected
    if (mongoose.connection.readyState >= 1) return;

    // Connect to MongoDB (no need for deprecated options)
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
>>>>>>> 596f450929b3e7b8b3e9e131ff9b69202ef0b17b

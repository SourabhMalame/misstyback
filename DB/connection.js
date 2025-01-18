import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error.message);
  }
};

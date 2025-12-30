import mongoose from "mongoose";

let connoceted = false;

 const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (connoceted) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connoceted = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
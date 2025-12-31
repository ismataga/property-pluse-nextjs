<<<<<<< HEAD
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

=======
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

>>>>>>> 8effb7bc4213b9b81f98894449d1530402dd0fbf
export default connectDB;
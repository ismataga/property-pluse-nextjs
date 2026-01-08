import connectDB from "@/config/database";
import Property from "@/models/Property";

export const dynamic = "force-dynamic"; // ⚠️ vacib

export const GET = async () => {
  try {
    await connectDB();

    const properties = await Property.find({}).limit(20).lean();

    return Response.json(properties, { status: 200 });
  } catch (error) {
    return Response.json(
      {
        message: "Failed to fetch properties",
        error: error.message,
      },
      { status: 500 }
    );
  }
};

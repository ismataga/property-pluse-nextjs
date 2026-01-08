import connectDB from "@/config/database";
import Property from "@/models/Property";

export const dynamic = "force-dynamic";

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const property = await Property.findById(params.id).lean();

    if (!property) {
      return Response.json(
        { message: "Property not found" },
        { status: 404 }
      );
    }

    return Response.json(property, { status: 200 });
  } catch (error) {
    return Response.json(
      {
        message: "Failed to fetch property",
        error: error.message,
      },
      { status: 500 }
    );
  }
};

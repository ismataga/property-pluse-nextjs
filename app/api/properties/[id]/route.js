import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);
    if (!property) {
      return new Response(
        JSON.stringify({
          message: "Property not found",
        }),
        {
          status: 404,
        }
      );
    }
    return new Response(property, {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed to fetch properties",
        error: error.message,
      }),
      {
        status: 500,
      }
    );
  }
};

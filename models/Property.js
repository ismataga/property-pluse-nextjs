import { Schema, model, models } from "mongoose";

const propertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Owner is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    beds: {
      type: Number,
      required: [true, "Number of beds is required"],
    },
    baths: {
      type: Number,
      required: [true, "Number of baths is required"],
    },
    sequare_feet: {
      type: Number,
      required: [true, "Square feet is required"],
    },
    amenities: [
      {
        type: String,
      },
    ],
    rates: {
      nightly: {
        type: Number,
        required: [true, "Nightly rate is required"],
      },
      weekly: {
        type: Number,
        required: [true, "Weekly rate is required"],
      },
      monthly: {
        type: Number,
        required: [true, "Monthly rate is required"],
      },
    },
    seller_info: {
      name: {
        type: String,
        required: [true, "Seller name is required"],  
      },
      email: {
        type: String,
        required: [true, "Seller email is required"],
      },
      phone: {
        type: String,
        required: [true, "Seller phone is required"],
      },
    },    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Property = models.Property || model("Property", propertySchema);
export default Property;

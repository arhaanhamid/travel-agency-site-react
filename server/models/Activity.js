import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    desc: { type: String, required: true },
    images: { type: [String], required: true }, // Array of image URLs or identifiers
    duration: { type: Number, required: true }, // Duration in hours or days
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const Activity = mongoose.model("Activity", ActivitySchema);
export default Activity;

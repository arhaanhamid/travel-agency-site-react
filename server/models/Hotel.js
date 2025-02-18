import mongoose from "mongoose";

const AmenitySchema = new mongoose.Schema({
  label: { type: String, required: true },
  title: { type: String, required: true },
});

const HotelSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    desc: { type: String, required: true },
    images: { type: [String], required: true }, // Array of image URLs or identifiers
    price: { type: String, required: true },
    amenities: { type: [AmenitySchema], required: true },
  },
  { timestamps: true }
);

const Hotel = mongoose.model("Hotel", HotelSchema);
export default Hotel;

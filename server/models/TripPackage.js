import mongoose from "mongoose";

const TimelineSchema = new mongoose.Schema({
  day: { type: String, required: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  desc: { type: String, required: true },
});

const AmenitySchema = new mongoose.Schema({
  title: { type: mongoose.Schema.Types.Mixed }, // Can be string or number
  label: { type: String },
});

const PackageSchema = new mongoose.Schema(
  {
    images: { type: [String], required: true }, // Array of image URLs or identifiers
    location: { type: String, required: true },
    duration: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: String },
    isPopular: { type: Boolean, default: false },
    amenities: { type: [AmenitySchema] },
    timelineData: { type: [TimelineSchema] },
  },
  { timestamps: true }
);

const TripPackage = mongoose.model("TripPackage", PackageSchema);
export default TripPackage;

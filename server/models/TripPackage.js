import mongoose from "mongoose";

const TimelineSchema = new mongoose.Schema({
  day: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
});

const AmenitySchema = new mongoose.Schema({
  title: { type: mongoose.Schema.Types.Mixed }, // Can be string or number
  label: { type: String },
});

const imageSchema = new mongoose.Schema({
  avif: { type: String },
  webp: { type: String },
  jpg: { type: String, required: true },
});

const PackageSchema = new mongoose.Schema(
  {
    images: { type: [imageSchema], default: [] },
    location: { type: [String] },
    tags: { type: [String] },
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

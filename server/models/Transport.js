import mongoose from "mongoose";

const AmenitySchema = new mongoose.Schema({
  label: { type: String, required: true },
  title: { type: String, required: true },
});

const imageSchema = new mongoose.Schema({
  avif: { type: String },
  webp: { type: String },
  jpg: { type: String, required: true },
});

const TransportSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String },
    price: { type: Number },
    images: { type: [imageSchema], default: [] },
    passengers: { type: Number },
    baggage: { type: Number },
    desc: { type: String, required: true },
    amenities: { type: [AmenitySchema] },
  },
  { timestamps: true }
);

const Transport = mongoose.model("Transport", TransportSchema);
export default Transport;

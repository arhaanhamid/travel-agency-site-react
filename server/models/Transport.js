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
    location: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: [imageSchema], default: [] },
    passengers: { type: Number, required: true },
    baggage: { type: Number, required: true },
    desc: { type: String, required: true },
    amenities: { type: [AmenitySchema], required: true },
  },
  { timestamps: true }
);

const Transport = mongoose.model("Transport", TransportSchema);
export default Transport;

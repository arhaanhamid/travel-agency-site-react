import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  avif: { type: String },
  webp: { type: String },
  jpg: { type: String, required: true },
});

const ActivitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String },
    desc: { type: String, required: true },
    images: { type: [imageSchema], default: [] },
    duration: { type: Number, required: true },
    price: { type: Number },
  },
  { timestamps: true }
);

const Activity = mongoose.model("Activity", ActivitySchema);
export default Activity;

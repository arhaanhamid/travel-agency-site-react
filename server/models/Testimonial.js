import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true }, // The testimonial message
  },
  { timestamps: true }
);

const Testimonial = mongoose.model("Testimonial", TestimonialSchema);
export default Testimonial;

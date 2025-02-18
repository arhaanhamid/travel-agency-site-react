import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true }, // CEO, Manager, etc.
    image: { type: String, required: true }, // Image URL or filename
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

const Team = mongoose.model("Team", TeamSchema);
export default Team;

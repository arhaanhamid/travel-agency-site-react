import mongoose from "mongoose";

const FormDataSchema = new mongoose.Schema(
  {
    showLocations: { type: Boolean, default: false },
    destinations: { type: [String], default: [] },
    requestType: { type: [String], default: "" },
    subject: { type: [String], default: "" },
    service: { type: [String], default: "" },
    date: {
      day: { type: String, default: "" },
      month: { type: String, default: "" },
      year: { type: String, default: "" },
      nights: { type: String, default: "" },
    },
    party: {
      adults: { type: String, default: "" },
      children: { type: String, default: "" },
    },
    mustSees: { type: String, default: "" },
    message: { type: String, default: "" },
    showOccasions: { type: Boolean, default: false },
    selectedOccasion: { type: String, default: "" },
    clientDetails: {
      fName: { type: String, default: "" },
      lName: { type: String, default: "" },
      email: { type: String, default: "" },
      phone: { type: String, default: "" },
    },
    conditions: {
      recieveUpdates: { type: Boolean, default: false },
      acceptTerms: { type: Boolean, default: false },
    },
    budget: { type: [Number], default: [5000, 10000] },
  },
  { timestamps: true }
);

const FormDataModel = mongoose.model("FormData", FormDataSchema);

export default FormDataModel;

import dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import packagesRoutes from "./routes/packages.js";
import transportRoutes from "./routes/cars.js";
import testimonialRoutes from "./routes/testimonials.js";
import teamRoutes from "./routes/teams.js";
import hotelRoutes from "./routes/hotels.js";
import boatRoutes from "./routes/boats.js";
import activityRoutes from "./routes/activities.js";
import formRoutes from "./routes/form.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

app.use("/api/packages", packagesRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/boats", boatRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/cars", transportRoutes);
app.use("/api/form", formRoutes);

// Connect to MongoDB
connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "API is working!" }); // Return a JSON response
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

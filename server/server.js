import dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import packagesRoutes from "./routes/tripPackages.js";
import transportRoutes from "./routes/transport.js";
import testimonialRoutes from "./routes/testimonial.js";
import teamRoutes from "./routes/team.js";
import hotelRoutes from "./routes/hotel.js";
import boatRoutes from "./routes/boat.js";
import activityRoutes from "./routes/activity.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

app.use("/api/package", packagesRoutes);
app.use("/api/activity", activityRoutes);
app.use("/api/boat", boatRoutes);
app.use("/api/hotel", hotelRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/testimonial", testimonialRoutes);
app.use("/api/transport", transportRoutes);

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

import { Router } from "express";
const router = Router();

import Hotel from "../models/Hotel.js"; // Import Hotel model

// GET all hotels
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch hotels" });
  }
});

// GET a single hotel by id
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch hotel" });
  }
});

// POST create a new hotel
router.post("/", async (req, res) => {
  try {
    const newHotel = new Hotel(req.body);
    const savedHotel = await newHotel.save();
    res.status(201).json({ message: "Hotel created", data: savedHotel });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating hotel", error: error.message });
  }
});

// PUT: Update a hotel by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    res.json({ message: "Hotel updated", data: updatedHotel });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating hotel", error: error.message });
  }
});

// DELETE: Delete a hotel by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);

    if (!deletedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    res.json({ message: "Hotel deleted", data: deletedHotel });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting hotel", error: error.message });
  }
});

export default router;

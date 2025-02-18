import { Router } from "express";
const router = Router();

import Boat from "../models/Boat.js"; // Import Boat model

// GET all boats
router.get("/", async (req, res) => {
  try {
    const boats = await Boat.find();
    res.json(boats);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch boats" });
  }
});

// GET a single boat by id
router.get("/:id", async (req, res) => {
  try {
    const boat = await Boat.findById(req.params.id);
    res.json(boat);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch boat" });
  }
});

// POST create a new boat
router.post("/", async (req, res) => {
  try {
    const newBoat = new Boat(req.body);
    const savedBoat = await newBoat.save();
    res.status(201).json({ message: "Boat created", data: savedBoat });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating boat", error: error.message });
  }
});

// PUT: Update a boat by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedBoat = await Boat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBoat) {
      return res.status(404).json({ message: "Boat not found" });
    }

    res.json({ message: "Boat updated", data: updatedBoat });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating boat", error: error.message });
  }
});

// DELETE: Delete a boat by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedBoat = await Boat.findByIdAndDelete(req.params.id);

    if (!deletedBoat) {
      return res.status(404).json({ message: "Boat not found" });
    }

    res.json({ message: "Boat deleted", data: deletedBoat });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting boat", error: error.message });
  }
});

export default router;

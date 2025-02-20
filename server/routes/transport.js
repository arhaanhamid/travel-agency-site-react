import { Router } from "express";
const router = Router();

import Transport from "../models/Transport.js"; // Import Transport model

// GET all transport options
router.get("/", async (req, res) => {
  try {
    const transports = await Transport.find();
    res.json(transports);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transport options" });
  }
});

// GET a single transport option by id
router.get("/:id", async (req, res) => {
  try {
    const transport = await Transport.findById(req.params.id);
    res.json(transport);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transport option" });
  }
});

// POST create a new transport option
router.post("/", async (req, res) => {
  try {
    const newTransport = new Transport(req.body);
    const savedTransport = await newTransport.save();
    res
      .status(201)
      .json({ message: "Transport option created", data: savedTransport });
  } catch (error) {
    res.status(500).json({
      message: "Error creating transport option",
      error: error.message,
    });
  }
});

// POST Bulk create a new Transports
router.post("/insertBulk", async (req, res) => {
  try {
    const insertedTransports = await Transport.insertMany(req.body);
    console.log("Transports inserted successfully:", insertedTransports);
    res
      .status(201)
      .json({ message: "Transports inserted", data: insertedTransports });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating Transports", error: error.message });
  }
});

// PUT: Update a transport option by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedTransport = await Transport.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedTransport) {
      return res.status(404).json({ message: "Transport option not found" });
    }

    res.json({ message: "Transport option updated", data: updatedTransport });
  } catch (error) {
    res.status(500).json({
      message: "Error updating transport option",
      error: error.message,
    });
  }
});

// DELETE: Delete a transport option by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedTransport = await Transport.findByIdAndDelete(req.params.id);

    if (!deletedTransport) {
      return res.status(404).json({ message: "Transport option not found" });
    }

    res.json({ message: "Transport option deleted", data: deletedTransport });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting transport option",
      error: error.message,
    });
  }
});

export default router;

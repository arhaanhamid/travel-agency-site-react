import { Router } from "express";
const router = Router();

import TripPackage from "../models/TripPackage.js";

// GET all packages
router.get("/abc", async (req, res) => {
  try {
    const tripPackages = await TripPackage.find();
    res.json(tripPackages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch packages" });
  }
});

// GET a single package by id
router.get("/:id", async (req, res) => {
  try {
    const tripPackage = await TripPackage.findById(req.params.id);
    res.json(tripPackage);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch packages" });
  }
  res.json({ message: `Get package with id ${req.params.id}` });
});

// POST create a new package
router.post("/abcc", async (req, res) => {
  try {
    const newPackage = new TripPackage(req.body);
    const savedPackage = await newPackage.save();
    res.status(201).json({ message: "Package created", data: savedPackage });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating package", error: error.message });
  }
});

// PUT: Update a package by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedPackage = await TripPackage.findByIdAndUpdate(
      req.params.id, // Get ID from params
      req.body, // Update data from request body
      { new: true, runValidators: true } // Return updated document, apply validation
    );

    if (!updatedPackage) {
      return res.status(404).json({ message: "Package not found" });
    }

    res.json({ message: "Package updated", data: updatedPackage });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating package", error: error.message });
  }
});

// DELETE: Delete a package by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedPackage = await TripPackage.findByIdAndDelete(req.params.id);

    if (!deletedPackage) {
      return res.status(404).json({ message: "Package not found" });
    }

    res.json({ message: "Package deleted", data: deletedPackage });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting package", error: error.message });
  }
});

export default router;

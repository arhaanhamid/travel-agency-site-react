import { Router } from "express";
const router = Router();

import Activity from "../models/Activity.js"; // Import Activity model

// GET all activities
router.get("/", async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch activities" });
  }
});

// GET a single activity by id
router.get("/:id", async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    res.json(activity);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch activity" });
  }
});

// POST create a new activity
router.post("/", async (req, res) => {
  try {
    const newActivity = new Activity(req.body);
    const savedActivity = await newActivity.save();
    res.status(201).json({ message: "Activity created", data: savedActivity });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating activity", error: error.message });
  }
});

// PUT: Update an activity by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedActivity = await Activity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedActivity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    res.json({ message: "Activity updated", data: updatedActivity });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating activity", error: error.message });
  }
});

// DELETE: Delete an activity by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedActivity = await Activity.findByIdAndDelete(req.params.id);

    if (!deletedActivity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    res.json({ message: "Activity deleted", data: deletedActivity });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting activity", error: error.message });
  }
});

export default router;

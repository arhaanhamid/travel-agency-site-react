import { Router } from "express";
const router = Router();

import Team from "../models/Team.js"; // Import Team model

// GET all team members
router.get("/", async (req, res) => {
  try {
    const teamMembers = await Team.find();
    res.json(teamMembers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch team members" });
  }
});

// GET a single team member by id
router.get("/:id", async (req, res) => {
  try {
    const teamMember = await Team.findById(req.params.id);
    res.json(teamMember);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch team member" });
  }
});

// POST create a new team member
router.post("/", async (req, res) => {
  try {
    const newTeamMember = new Team(req.body);
    const savedTeamMember = await newTeamMember.save();
    res
      .status(201)
      .json({ message: "Team member created", data: savedTeamMember });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating team member", error: error.message });
  }
});

// PUT: Update a team member by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedTeamMember = await Team.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedTeamMember) {
      return res.status(404).json({ message: "Team member not found" });
    }

    res.json({ message: "Team member updated", data: updatedTeamMember });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating team member", error: error.message });
  }
});

// DELETE: Delete a team member by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedTeamMember = await Team.findByIdAndDelete(req.params.id);

    if (!deletedTeamMember) {
      return res.status(404).json({ message: "Team member not found" });
    }

    res.json({ message: "Team member deleted", data: deletedTeamMember });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting team member", error: error.message });
  }
});

export default router;

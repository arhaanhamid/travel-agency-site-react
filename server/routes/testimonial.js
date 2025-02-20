import { Router } from "express";
const router = Router();

import Testimonial from "../models/Testimonial.js"; // Import the Testimonial model

// GET all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
});

// GET a single testimonial by ID
router.get("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch testimonial" });
  }
});

// POST: Create a new testimonial
router.post("/", async (req, res) => {
  try {
    const newTestimonial = new Testimonial(req.body);
    const savedTestimonial = await newTestimonial.save();
    res
      .status(201)
      .json({ message: "Testimonial created", data: savedTestimonial });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating testimonial", error: error.message });
  }
});

// POST Bulk create a new Testimonials
router.post("/insertBulk", async (req, res) => {
  try {
    const insertedTestimonials = await Testimonial.insertMany(req.body);
    console.log("Testimonials inserted successfully:", insertedTestimonials);
    res
      .status(201)
      .json({ message: "Testimonials inserted", data: insertedTestimonials });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating Testimonials", error: error.message });
  }
});

// PUT: Update a testimonial by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.json({ message: "Testimonial updated", data: updatedTestimonial });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating testimonial", error: error.message });
  }
});

// DELETE: Delete a testimonial by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(
      req.params.id
    );

    if (!deletedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.json({ message: "Testimonial deleted", data: deletedTestimonial });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting testimonial", error: error.message });
  }
});

export default router;

import { Router } from "express";
const router = Router();
import transporter from "../transporter.js";

import FormData from "../models/FormData.js"; // Import FormData model

// API Endpoint to handle form submission
router.post("/submit-form", async (req, res) => {
  try {
    // Save form data to MongoDB
    const newFormData = new FormData(req.body);
    await newFormData.save();

    //send email
    const mailOptions = {
      from: process.env.ZOHO_EMAIL,
      // to: process.env.ZOHO_RECEIVE_EMAIL,
      to: "suhamhamid321@gmail.com",
      subject: "New Form Submission",
      text: `You have a new form submission:\n\n${JSON.stringify(req.body, null, 2)}`,
      // Optionally, you can also use HTML:
      // html: `<p>You have a new form submission:</p><pre>${JSON.stringify(req.body, null, 2)}</pre>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

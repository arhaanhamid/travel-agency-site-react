import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465, // For SSL; use 587 for TLS if needed
  secure: true, // true for port 465; false for port 587
  auth: {
    user: process.env.ZOHO_EMAIL, // your Zoho email address
    pass: process.env.ZOHO_PASS, // your Zoho email password or app-specific password
  },
  // Optional: Additional TLS settings if you run into certificate issues
  // tls: {
  //   rejectUnauthorized: false,
  // },
});

export default transporter;

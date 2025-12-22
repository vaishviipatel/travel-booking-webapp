import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

// Fix for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from backend folder
dotenv.config({ path: path.join(__dirname, ".env") });

import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// CORS Configuration (Important for frontend on port 3000)
app.use(
  cors({
    origin: "http://localhost:3000", // Allow only your React app
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// Debug: Check if Gmail credentials are loaded
console.log("GMAIL_USER:", process.env.GMAIL_USER || "MISSING!");
console.log(
  "GMAIL_APP_PASS:",
  process.env.GMAIL_APP_PASS ? "Loaded (hidden)" : "MISSING!"
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", contactRoutes);

// EMAIL CONFIRMATION ENDPOINT - FULLY UPDATED
app.post("/api/send-confirmation-email", async (req, res) => {
  try {
    const {
      toEmail,
      userName,
      packageTitle,
      date,
      code,
      destination,
      totalPrice = "Not specified",     // fallback
      travelersDetails = []             // fallback empty array
    } = req.body;

    if (!toEmail || !userName || !packageTitle || !code) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    // Generate Traveler Details Table
    const travelersTable = travelersDetails.length > 0
      ? `
        <h3 style="color: #333; margin: 30px 0 15px 0; font-size: 18px;">Traveler Details (${travelersDetails.length} travelers)</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 15px; background: #f8f9fa; border-radius: 8px; overflow: hidden;">
          <thead>
            <tr style="background: #e8f5e8;">
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #28a745;">Name</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #28a745;">Age</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #28a745;">Gender</th>
            </tr>
          </thead>
          <tbody>
            ${travelersDetails.map(t => `
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${t.name || "-"}</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${t.age || "-"}</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${t.gender || "-"}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `
      : "<p style='color: #666; font-style: italic; margin: 20px 0;'>No traveler details provided.</p>";

    await transporter.sendMail({
      from: `"TravelPoint" <${process.env.GMAIL_USER}>`,
      to: toEmail,
      subject: "🎉 Your Trip Booking is Confirmed! | TravelPoint",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 20px auto; padding: 30px; background: #f9f9f9; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1);">
          <h2 style="color: #28a745; text-align: center; margin-bottom: 25px;">Booking Confirmed! 🎉</h2>
          
          <p style="font-size: 17px; line-height: 1.7;">Dear <strong>${userName}</strong>,</p>
          <p style="font-size: 17px; line-height: 1.7;">
            Great news! Your booking has been <strong style="color: #28a745;">confirmed</strong> by our team.
          </p>

          <div style="background: white; padding: 25px; border-radius: 12px; margin: 30px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            <h3 style="color: #333; margin-top: 0;">Trip Details</h3>
            <ul style="font-size: 16px; line-height: 2; padding-left: 20px; margin: 15px 0;">
              <li><strong>Package:</strong> ${packageTitle}</li>
              <li><strong>Destination:</strong> ${destination}</li>
              <li><strong>Travel Date:</strong> ${date}</li>
              <li><strong>Booking Code:</strong> 
                <span style="background: #e8f5e8; padding: 8px 14px; border-radius: 8px; font-weight: bold; font-family: monospace;">${code}</span>
              </li>
              <li><strong>Total Amount Paid:</strong> 
                <span style="color: #28a745; font-size: 1.4em; font-weight: bold;">${totalPrice}</span>
              </li>
            </ul>
          </div>

          ${travelersTable}

          <div style="background: #d4edda; padding: 20px; border-radius: 12px; text-align: center; margin: 30px 0;">
            <p style="font-size: 18px; margin: 0; color: #155724;">
              🌍 Your adventure is confirmed! Get ready for an unforgettable journey. ✈️
            </p>
          </div>

          <p style="font-size: 16px; line-height: 1.7;">
            Have questions? Just reply to this email — we're here to help!
          </p>

          <p style="font-size: 16px; margin-top: 35px;">
            Best regards,<br>
            <strong>TravelPoint Team</strong><br>
            <a href="mailto:vishubpatel102@gmail.com" style="color: #007bff; text-decoration: none;">vishubpatel102@gmail.com</a>
          </p>

          <hr style="border: none; border-top: 1px dashed #ccc; margin: 40px 0;">
          <p style="font-size: 12px; color: #888; text-align: center;">
            Automated confirmation • TravelPoint ✨
          </p>
        </div>
      `,
    });

    console.log(`Confirmation email sent to: ${toEmail}`);
    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ success: false, message: "Email failed", error: error.message });
  }
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
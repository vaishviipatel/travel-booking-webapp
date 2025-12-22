import bcrypt from "bcryptjs";
import db from "../config/db.js";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log("\n========== ENV DEBUG ==========");
console.log("Current Directory:", process.cwd());
console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_APP_PASS exists:", !!process.env.GMAIL_APP_PASS);
console.log("GMAIL_APP_PASS length:", process.env.GMAIL_APP_PASS?.length);
console.log("===============================\n");
// REGISTER USER
export const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const [existingUser] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await db
      .promise()
      .query("INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)", [
        fullName,
        email,
        hashedPassword,
      ]);
    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error in registerUser:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
// LOGIN USER
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "All fields are required" });
  try {
    const [userResult] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);
    if (userResult.length === 0)
      return res.status(400).json({ message: "Invalid email or password" });
    const user = userResult[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Error in loginUser:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
// FORGOT PASSWORD
export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  
  console.log("\n========== FORGOT PASSWORD DEBUG ==========");
  console.log("Email from request:", email);
  console.log("GMAIL_USER:", process.env.GMAIL_USER);
  console.log("GMAIL_APP_PASS exists:", !!process.env.GMAIL_APP_PASS);
  console.log("===========================================\n");
  
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASS) {
    console.error("❌ GMAIL credentials not found in .env file!");
    return res.status(500).json({
      message: "Email service not configured. Contact administrator.",
      error: "Missing GMAIL_USER or GMAIL_APP_PASS in environment variables"
    });
  }
  try {
    const [userResult] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);
    if (userResult.length === 0) {
      return res.status(404).json({ message: "No user found with this email" });
    }
    const otp = Math.floor(100000 + Math.random() * 900000);
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
    await db.promise().query("DELETE FROM password_resets WHERE email = ?", [email]);
    await db.promise().query(
      "INSERT INTO password_resets (email, otp, expires_at, created_at) VALUES (?, ?, ?, NOW())",
      [email, otp, expiresAt]
    );
    console.log("📧 Attempting to send email...");
    console.log("From:", process.env.GMAIL_USER);
    console.log("To:", email);
    console.log("OTP:", otp);
    // Updated: Use Config 2 (465/SSL) for reliability; fallback to service if needed
        const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // false = STARTTLS (this is what worked in your test)
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
      }
    });
    // Optional: Verify connection before sending
    try {
      await transporter.verify();
      console.log("✅ SMTP connection verified");
    } catch (verifyErr) {
      console.error("❌ SMTP verification failed:", verifyErr.message);
      throw verifyErr;
    }
    await transporter.sendMail({
      from: `"Tour Management System" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Password Reset OTP",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; text-align: center; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #1565c0; margin-bottom: 20px;">Password Reset Request</h2>
            <p style="color: #555; font-size: 16px; margin-bottom: 30px;">
              You requested to reset your password. Use the OTP below:
            </p>
            <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h1 style="color: #1565c0; font-size: 48px; letter-spacing: 10px; margin: 0;">
                ${otp}
              </h1>
            </div>
            <p style="color: #777; font-size: 14px; margin-top: 20px;">
              This code is valid for <strong>5 minutes</strong>.
            </p>
            <p style="color: #999; font-size: 12px; margin-top: 30px;">
              If you didn't request this, please ignore this email.
            </p>
          </div>
        </div>
      `,
    });
    console.log(`✅ OTP sent successfully to: ${email}`);
    return res.json({
      message: "OTP sent to your email! Check your inbox.",
      email: email
    });
  } catch (err) {
    console.error("❌ Error in forgotPassword:", err);
    
    let errorMessage = "Failed to send OTP.";
    if (err.code === 'EAUTH') {
      errorMessage = "Gmail authentication failed. Invalid credentials.";
      console.error("🔧 Fix: Generate new app password at https://myaccount.google.com/apppasswords");
    } else if (err.code === 'ESOCKET' || err.code === 'ETIMEDOUT') {
      errorMessage = "Connection to Gmail failed. Check your internet connection.";
    }
    
    return res.status(500).json({
      message: errorMessage,
      error: err.message,
      code: err.code
    });
  }
};
// VERIFY OTP & RESET PASSWORD
export const verifyOtp = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  
  if (!email || !otp || !newPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (newPassword.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }
  try {
    const [otpResult] = await db
      .promise()
      .query(
        "SELECT * FROM password_resets WHERE email = ? AND otp = ? ORDER BY id DESC LIMIT 1",
        [email, otp]
      );
    if (otpResult.length === 0) {
      return res.status(400).json({ message: "Invalid OTP" });
    }
    const record = otpResult[0];
    const now = new Date();
    if (now > new Date(record.expires_at)) {
      await db.promise().query("DELETE FROM password_resets WHERE id = ?", [record.id]);
      return res.status(400).json({ message: "OTP expired. Request a new one." });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await db
      .promise()
      .query("UPDATE users SET password = ? WHERE email = ?", [
        hashedPassword,
        email,
      ]);
    await db.promise().query("DELETE FROM password_resets WHERE email = ?", [email]);
    console.log(`✅ Password reset successful for ${email}`);
    return res.status(200).json({ message: "Password reset successful!" });
  } catch (err) {
    console.error("❌ Error in verifyOtp:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
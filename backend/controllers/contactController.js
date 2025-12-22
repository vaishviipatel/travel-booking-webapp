import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// 🔍 DEBUG: Check if .env values are loading
console.log("🔍 CONTACT CONTROLLER DEBUG:");
console.log("GMAIL_USER =", process.env.GMAIL_USER);
console.log("GMAIL_APP_PASS =", process.env.GMAIL_APP_PASS ? "Loaded" : "NOT Loaded");

// Gmail transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASS
  }
});

export const sendContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "All fields are required"
    });
  }

  try {

    // Email to Admin
    await transporter.sendMail({
      from: `"TravelPoint Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    // Auto reply to user
    await transporter.sendMail({
      from: `"TravelPoint Team" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We received your message!",
      html: `
        <h3>Hello ${name},</h3>
        <p>Thank you for contacting us. We will get back to you soon.</p>
        <p>— TravelPoint Team</p>
      `
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully!"
    });

  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to send email."
    });
  }
};

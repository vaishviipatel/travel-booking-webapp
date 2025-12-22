import React, { useState } from "react";
import axios from "axios";
import "./OtpForm.css";
import { Link, useNavigate } from "react-router-dom";

export default function OtpForm() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // <-- added this

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!email || !otp || !newPassword) {
      alert("Please fill all fields!");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/api/auth/verify-otp", {
        email,
        otp,
        newPassword,
      });

      alert(response.data.message);

      // ⭐ Redirect to login page after success
      navigate("/login");

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <h2>🔐 Verify OTP</h2>
        <p>Enter your registered email, the OTP you received, and your new password.</p>

        <form onSubmit={handleVerifyOtp}>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="otp-input"
          />
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="otp-input"
          />
          <input
            type="password"
            placeholder="Enter New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="otp-input"
          />

          <button type="submit" className="otp-btn" disabled={loading}>
            {loading ? "Verifying..." : "Verify & Reset Password"}
          </button>
        </form>

        <p className="back-login">
          Back to <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

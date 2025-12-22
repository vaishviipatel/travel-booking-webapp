import React, { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgot = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your registered email!");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );
      alert(response.data.message);
      navigate("/otp", { state: { email } });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2>🔑 Forgot Password</h2>
        <p>Enter your registered email to receive an OTP.</p>

        <form onSubmit={handleForgot}>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="forgot-input"
            required
          />

          <button type="submit" className="forgot-btn" disabled={loading}>
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>

        <p className="back-login">
          Remembered your password? <Link to="/login">Back to Login</Link>
        </p>
      </div>
    </div>
  );
}
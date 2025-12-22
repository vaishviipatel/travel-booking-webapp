import React, { useState } from "react";
import "./Signup.css";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        fullName,
        email,
        password,
      });

      alert(response.data.message);
      navigate("/login");  // redirect to login page after success
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Registration failed. Try again!");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        {/* LEFT SIDE */}
        <div className="signup-left">
          <h1>Start Your Journey</h1>
          <h3>Create Your Account</h3>
          <p>
            Join our global community of explorers. Save destinations, plan
            trips, and share your adventures — all in one place!
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="signup-right">
          <h2>Sign Up</h2>
          <p>Join our travel community today.</p>

          <form onSubmit={handleRegister}>
            <div className="input-group">
              
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="input-group">
              
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="signup-btn">
              Create Account
            </button>
          </form>

          <p className="signin-link">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./SignIn.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      alert(response.data.message);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard"); // redirect to dashboard after login
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Login failed. Try again!");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* LEFT SIDE */}
        <div className="login-left">
          <h1>WELCOME</h1>
          <h3>Explore the World, One Journey at a Time</h3>
          <p>
            Discover breathtaking destinations, plan unforgettable trips, and
            share your travel stories. Whether you're a globetrotter or a
            first-time explorer, your adventure starts here.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-right">
          <h2>Sign In</h2>
          <p>Sign in to explore your personalized travel world.</p>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <FaUser className="icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <FaLock className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>

            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="signin-btn">
              Sign in
            </button>
          </form>

          <p className="signup-link">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

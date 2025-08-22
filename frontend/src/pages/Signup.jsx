import React from 'react';
import './Signup.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-left">
          <h1>Start Your Journey</h1>
          <h3>Create Your Account</h3>
          <p>
            Join our global community of explorers. Save destinations, plan trips, and share your adventures — all in one place!
</p>
        </div>
        <div className="signup-right">
          <h2>Sign Up</h2>
          <p>Join our travel community today.</p>

          <div className="input-group">
             <FaUser className="icon" />
             <input type="text" placeholder="     Full Name" />
          </div>

          <div className="input-group">
             <FaEnvelope className="icon" />
             <input type="email" placeholder="Email" />
          </div>

          <div className="input-group">
             <FaLock className="icon" />
             <input type="password" placeholder="Password" />
          </div>

          <button className="signup-btn">Create Account</button>

          <p className="signin-link">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

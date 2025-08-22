// SignIn.jsx
import React from 'react';
import './SignIn.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const SignIn = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* Left Side */}
        <div className="login-left">
          <h1>WELCOME</h1>
          <h3>Explore the World, One Journey at a Time</h3>
          <p>
             Discover breathtaking destinations, plan unforgettable trips, and share your travel stories. 
              Whether you're a globetrotter or a first-time explorer, your adventure starts here.
          </p>
        </div>

        {/* Right Side */}
        <div className="login-right">
          <h2>Sign In</h2>
           <p>Sign in to explore your personalized travel world.</p>
          <div className="input-group">
            <FaUser className="icon" />
            <input type="text" placeholder="User Name" />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" v/>
            <button className="show-btn">SHOW</button>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button className="signin-btn">Sign in</button>

          

          <p className="signup-link">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

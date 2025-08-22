import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-box">
          <h2>Travel with us</h2>
          <p>Keep in touch</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter Email Address" />
            <button>SEND</button>
          </div>
        </div>

        <div className="footer-box">
          <h3>Our Agency</h3>
          <ul>
            <li>Services</li>
            <li>Insurance</li>
            <li>Agency</li>
            <li>Tourism</li>
            <li>Payment</li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Partners</h3>
          <ul>
            <li>Booking</li>
            <li>RentalCar</li>
            <li>HostelWorld</li>
            <li>Trivago</li>
            <li>TripAdvisor</li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Last Minute</h3>
          <ul>
            <li>London</li>
            <li>California</li>
            <li>Indonesia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>2025 Travel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

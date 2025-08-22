import React from 'react';
import './Contact.css';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="contact-us-page">
      <div className="background-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
      </div>

      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
}

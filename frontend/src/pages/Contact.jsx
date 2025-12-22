import React, { useState } from 'react';
import './Contact.css';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch('/api/contact', {   // ← THIS IS THE FIXED LINE
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Message sent successfully! We'll get back to you soon", {
        position: "top-center",
        autoClose: 5000,
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast.error(data.error || "Failed to send message");
    }
  } catch (err) {
    console.error(err);
    toast.error("No connection. Check if backend is running.");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <div className="contact-us-page">
        <div className="background-blobs">
          <div className="blob blob1"></div>
          <div className="blob blob2"></div>
        </div>

        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message, Tip or Advice..."
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
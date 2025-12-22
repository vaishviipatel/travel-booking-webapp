import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

export default function AboutUs() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
    // Optional: smooth scroll to top when navigating
    window.scrollTo(0, 0);
  };

  return (
    <div className="aboutus-container">
      <header className="aboutus-header">
        <h1>About Us</h1>
        <p>Your gateway to unforgettable journeys and serene destinations.</p>
      </header>

      <section className="aboutus-section mission">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdH-S2_HnXDgl6EnhQ1x4853B_XMAuMWW-g&s"
          alt="Travel Mission"
        />
        <div>
          <h2>Our Mission</h2>
          <p>
            We aim to inspire and empower travelers to explore the world with ease. Whether you're
            looking for adventure, relaxation, or cultural experiences, our platform helps you find
            the perfect destination and plan a seamless journey.
          </p>
        </div>
      </section>

      <section className="aboutus-section offer">
        <div>
          <h2>What We Offer</h2>
          <ul>
            <li>Curated travel packages across the globe</li>
            <li>Verified stays and local guides</li>
            <li>24/7 travel support and customer care</li>
            <li>Custom itinerary planning</li>
            <li>Affordable and flexible pricing</li>
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="What We Offer"
        />
      </section>

      <section className="aboutus-section why-us">
        <img
          src="https://images.unsplash.com/photo-1493558103817-58b2924bce98"
          alt="Why Choose Us"
        />
        <div>
          <h2>Why Choose Us</h2>
          <p>
            We stand out by offering personalized travel experiences, a user-friendly booking
            system, and unbeatable customer satisfaction. Our team ensures your trip becomes a
            memory you’ll cherish forever.
          </p>
        </div>
      </section>

      <section className="aboutus-section testimonials">
        <h2>What Travelers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"The best trip planning experience! Everything was perfectly arranged."</p>
            <span>- Aakash R., India</span>
          </div>
          <div className="testimonial-card">
            <p>"Loved the curated packages. Bali was just like a dream. Highly recommended!"</p>
            <span>- Priya M., Singapore</span>
          </div>
        </div>
      </section>

      {/* CTA Section with Working Button */}
      <section className="aboutus-cta">
        <h2>Ready to Explore?</h2>
        <p>Contact our team to start planning your perfect getaway today.</p>
        <button onClick={handleContactClick} className="cta-button">
          Contact Us
        </button>
      </section>
    </div>
  );
}
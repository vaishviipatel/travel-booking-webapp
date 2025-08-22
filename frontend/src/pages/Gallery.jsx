// src/pages/Gallery.jsx
import React, { useState } from "react";
import "./Gallery.css";

const images = [
  {
    src: "/images/paris.jpg",
    alt: "Eiffel Tower",
    title: "Paris at Sunset",
    location: "France",
    category: "Cities"
  },
  {
    src: "/images/kerala.jpg",
    alt: "Backwaters of Kerala",
    title: "Peaceful Kerala",
    location: "India",
    category: "Nature"
  },
  {
    src: "/images/bali.jpg",
    alt: "Bali Island",
    title: "Bali Beach",
    location: "Indonesia",
    category: "Beaches"
  },
  {
    src: "/images/london.jpg",
    alt: "London Bridge",
    title: "Iconic London",
    location: "UK",
    category: "Cities"
  },
  {
    src: "/images/switzerland.jpg",
    alt: "Swiss Alps",
    title: "Snowy Switzerland",
    location: "Switzerland",
    category: "Mountains"
  },
  {
    src: "/images/maldives.jpg",
    alt: "Maldives Water Villa",
    title: "Maldives Escape",
    location: "Maldives",
    category: "Beaches"
  },

 
  
  
  { src: "/images/barce.jpg", alt: "Barcelona", title: "Barcelona Streets", location: "Spain", category: "Cities" },
  { src: "/images/barcelona.jpeg", alt: "Barcelona", title: "Barcelona Charm", location: "Spain", category: "Cities" },
  { src: "/images/bangkok.jpg", alt: "Bangkok", title: "Bustling Bangkok", location: "Thailand", category: "Cities" },
  { src: "/images/dubai.jpg", alt: "Dubai", title: "Modern Dubai", location: "UAE", category: "Cities" },
  { src: "/images/london.jpg", alt: "London", title: "Iconic London", location: "UK", category: "Cities" },
  { src: "/images/istanbul.jpeg", alt: "Istanbul", title: "Historic Istanbul", location: "Turkey", category: "Cities" },
  { src: "/images/paris.jpg", alt: "Paris", title: "Paris at Sunset", location: "France", category: "Cities" },
  { src: "/images/rome.jpg", alt: "Rome", title: "Ancient Rome", location: "Italy", category: "Cities" },
  { src: "/images/sydney.jpg", alt: "Sydney", title: "Sydney Harbour", location: "Australia", category: "Cities" },

 
  { src: "/images/kerala.jpg", alt: "Kerala", title: "Peaceful Kerala", location: "India", category: "Nature" },
  { src: "/images/himachal.jpg", alt: "Himachal", title: "Himachal Valleys", location: "India", category: "Nature" },
  { src: "/images/darjeeling.jpg", alt: "Darjeeling", title: "Darjeeling Views", location: "India", category: "Nature" },
  { src: "/images/kashmir.jpg", alt: "Kashmir", title: "Heavenly Kashmir", location: "India", category: "Nature" },
  { src: "/images/leh.jpeg", alt: "Leh", title: "Leh Landscapes", location: "India", category: "Nature" },
  { src: "/images/manali.jpeg", alt: "Manali", title: "Manali Meadows", location: "India", category: "Nature" },
  { src: "/images/sikkim.jpg", alt: "Sikkim", title: "Serene Sikkim", location: "India", category: "Nature" },
  { src: "/images/odisa.jpg", alt: "Odisha", title: "Odisha Greens", location: "India", category: "Nature" },
  { src: "/images/ooty.jpg", alt: "Ooty", title: "Ooty Tea Gardens", location: "India", category: "Nature" },
  { src: "/images/himalaya.jpg", alt: "Himalaya", title: "The Himalayas", location: "Asia", category: "Nature" },

 
  { src: "/images/goa.jpeg", alt: "Goa", title: "Goa Beach Life", location: "India", category: "Beaches" },
  { src: "/images/goaa.jpg", alt: "Goa Coast", title: "Sunny Goa", location: "India", category: "Beaches" },
  { src: "/images/maldives.jpg", alt: "Maldives", title: "Maldives Escape", location: "Maldives", category: "Beaches" },
  { src: "/images/phuket.jpg", alt: "Phuket", title: "Phuket Paradise", location: "Thailand", category: "Beaches" },
  { src: "/images/havlock.jpeg", alt: "Havelock", title: "Havelock Island", location: "India", category: "Beaches" },
  { src: "/images/bora.jpeg", alt: "Bora Bora", title: "Bora Bora Bliss", location: "French Polynesia", category: "Beaches" },
  { src: "/images/boraa.jpeg", alt: "Bora", title: "Bora Serenity", location: "French Polynesia", category: "Beaches" },
  { src: "/images/reef.jpeg", alt: "Reef", title: "Coral Reef Waters", location: "Australia", category: "Beaches" },
  { src: "/images/laksha.jpg", alt: "Lakshadweep", title: "Lakshadweep Waters", location: "India", category: "Beaches" },
  { src: "/images/istanbul.jpeg", alt: "Istanbul Shore", title: "Bosporus Views", location: "Turkey", category: "Beaches" },

  
  { src: "/images/chandratal.jpeg", alt: "Chandratal", title: "Chandratal Lake", location: "India", category: "Mountains" },
  { src: "/images/banff.jpeg", alt: "Banff", title: "Banff National Park", location: "Canada", category: "Mountains" },
  { src: "/images/machu.jpeg", alt: "Machu Picchu", title: "Machu Picchu Ruins", location: "Peru", category: "Mountains" },
  { src: "/images/machuu.jpeg", alt: "Machu", title: "Machu Peaks", location: "Peru", category: "Mountains" },
  { src: "/images/lapland.jpg", alt: "Lapland", title: "Lapland Snowlands", location: "Finland", category: "Mountains" },
  { src: "/images/switzerland.jpg", alt: "Switzerland", title: "Snowy Switzerland", location: "Switzerland", category: "Mountains" },
  { src: "/images/cape.jpg", alt: "Cape Town", title: "Table Mountain", location: "South Africa", category: "Mountains" },
  { src: "/images/himachal.jpg", alt: "Himachal", title: "Himachal Hills", location: "India", category: "Mountains" },
  { src: "/images/leh.jpeg", alt: "Leh", title: "Leh Mountains", location: "India", category: "Mountains" },
  { src: "/images/kutch.jpg", alt: "Kutch", title: "Kutch Highlands", location: "India", category: "Mountains" }


];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const categories = ["All", ...new Set(images.map((img) => img.category))];
  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">📸 Travel Gallery</h1>

      <div className="gallery-filters">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((img, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(img)}>
            <img src={img.src} alt={img.alt} />
            <div className="overlay">
              <h5>{img.title}</h5>
              <span>{img.location}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>×</span>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.location}</p>
          </div>
        </div>
      )}
    </div>
  );
}

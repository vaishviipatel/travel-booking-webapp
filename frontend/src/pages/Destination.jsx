// frontend/src/pages/destination.jsx
import React, { useState } from 'react';
import './Destination.css';

const destinationsData = [
  { id: 1, name: "Bora Bora", country: "French Polynesia", image: "/images/boraa.jpeg", description: "Turquoise waters and luxury resorts." },
  { id: 2, name: "Machu Picchu", country: "Peru", image: "/images/machuu.jpeg", description: "Ancient Incan city in the Andes." },
  { id: 3, name: "Santorini", country: "Greece", image: "/images/santronii.jpeg", description: "Whitewashed buildings & sunsets." },
  { id: 4, name: "Venice", country: "Italy", image: "/images/venice.jpeg", description: "Romantic canals & gondola rides." },
  { id: 5, name: "Banff", country: "Canada", image: "/images/banff.jpeg", description: "Alpine scenery and turquoise lakes." },
  { id: 6, name: "Goa", country: "India", image: "/images/goa.jpeg", description: "Sunny beaches & vibrant nightlife." },
  { id: 7, name: "Manali", country: "India", image: "/images/manali.jpeg", description: "Snowy Himalayan escape." },
  { id: 8, name: "Jaisalmer", country: "India", image: "/images/jaisalmer.jpeg", description: "Golden desert city & forts." },
  { id: 9, name: "Switzerland", country: "Switzerland", image: "/images/switzerland.jpg", description: "Alpine marvels & snowy peaks." },
  { id: 10, name: "Leh Ladakh", country: "India", image: "/images/leh.jpeg", description: "Mountain passes & monasteries." },
  { id: 11, name: "Meghalaya", country: "India", image: "/images/megha.jpeg", description: "Rainforests & living root bridges." },
  { id: 12, name: "Odisha", country: "India", image: "/images/odisa.jpg", description: "Temples, beaches & tribal art." },
  { id: 13, name: "Lakshadweep", country: "India", image: "/images/laksha.jpg", description: "Coral islands & crystal waters." },
  { id: 14, name: "Bali", country: "Indonesia", image: "/images/balii.jpeg", description: "Tropical paradise & temples." },
  { id: 15, name: "Barcelona", country: "Spain", image: "/images/barce.jpg", description: "Art, beaches & Gaudí architecture." },
  { id: 16, name: "Istanbul", country: "Turkey", image: "/images/istanbull.jpg", description: "Historic mosques and bazaars." },
  { id: 17, name: "Havelock Island", country: "India", image: "/images/havlock.jpeg", description: "Scuba diving and pristine beaches." },
  { id: 18, name: "Mykonos", country: "Greece", image: "/images/mykonos.jpg", description: "Parties, windmills & white buildings." },
  { id: 19, name: "Dubai", country: "UAE", image: "/images/dubai.jpg", description: "Skyscrapers and desert adventures." },
  { id: 20, name: "Paris", country: "France", image: "/images/paris.jpg", description: "Eiffel Tower and art museums." },
  { id: 21, name: "New York", country: "USA", image: "/images/newyork.jpg", description: "The city that never sleeps." },
  { id: 22, name: "London", country: "UK", image: "/images/london.jpg", description: "Historic landmarks and modern life." },
  { id: 23, name: "Tokyo", country: "Japan", image: "/images/tokyo.jpg", description: "Tech meets tradition in Tokyo." },
  { id: 24, name: "Rome", country: "Italy", image: "/images/rome.jpg", description: "Ancient ruins and modern streets." },
  { id: 25, name: "Singapore", country: "Singapore", image: "/images/singapore.jpg", description: "Skylines and food paradise." },
  { id: 26, name: "Sydney", country: "Australia", image: "/images/sydney.jpg", description: "Opera House & Harbour Bridge." },
  { id: 27, name: "Cape Town", country: "South Africa", image: "/images/cape.jpg", description: "Mountains and coastline beauty." },
  { id: 28, name: "Amsterdam", country: "Netherlands", image: "/images/amsterdam.jpg", description: "Canals, bikes, and tulips." },
  { id: 29, name: "Petra", country: "Jordan", image: "/images/petra.jpg", description: "Ancient rock-cut architecture." },
  { id: 30, name: "Phuket", country: "Thailand", image: "/images/phuket.jpg", description: "Beaches, nightlife, and diving." },
];


export default function Destination() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDestinations = destinationsData.filter(dest =>
    dest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="destination-page">
      <h1>Explore Destinations</h1>
      <input
        type="text"
        placeholder="Search destinations..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="destinations-grid">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map(dest => (
            <div key={dest.id} className="destination-card">
              <img src={dest.image} alt={dest.name} className="destination-image" />
              <div className="destination-info">
                <h2>{dest.name}</h2>
                <p className="country">{dest.country}</p>
                <p className="description">{dest.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No destinations found.</p>
        )}
      </div>
    </div>
  );
}

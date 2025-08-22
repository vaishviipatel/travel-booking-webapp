import React from 'react';
import SearchBar from '../components/SearchBar';
import DestinationCard from '../components/DestinationCard';
import './Home.css';

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div
          className="video-bg"
          style={{ backgroundImage: "url('/sea.jpg')" }}
        ></div>
        <div className="overlay">
          <div className="text-content">
            <h2>OUR PACKAGES</h2>
            <h1>Search your Holiday</h1>
            <SearchBar />
          </div>
        </div>
      </div>

      
      <DestinationCard />

      
    </>
  );
}

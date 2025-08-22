import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar() {
  const [price, setPrice] = useState(5000);

  return (
     <div className="search-bar-horizontal">
      <div className="input-group">
        <label>Search your destination:</label>
        <input type="text" placeholder="Enter name here..." />
      </div>

      <div className="input-group">
        <label>Select your date:</label>
        <input type="date" />
      </div>

      <div className="input-group">
        <label>Max price:</label>
        <span className="price-display">${price}</span>
        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <button className="filter-btn">MORE FILTERS</button>
    </div>
  );
}

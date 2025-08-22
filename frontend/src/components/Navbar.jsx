import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        
        <Link to="/" className="logo-text">🌍 TravelPoint</Link>

      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destination">Destination</Link></li> 
        <li><Link to="/inspiration">Inspiration</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li> 
        <li><Link to="/travel-guides">Travel Guides</Link></li> 
        
      </ul>
      <div className="btn-book">
        
        
       <Link to="/register"><button>Register</button></Link>

        
      </div>
    </nav>
  );
}

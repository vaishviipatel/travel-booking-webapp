import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TravelGuides from './pages/TravelGuides';
import Inspiration from './pages/Inspiration';
import Destination from './pages/Destination';  
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Packages from "./pages/Packages";
import Bookings from './pages/Bookings'; 
import Guides from './pages/Guides';
import TravelerStories from './pages/TravelerStories';
import Gallery from './pages/Gallery';
import Feedback from './pages/Feedback';




function AppWrapper() {
  const location = useLocation();

  // Routes where Navbar and Footer should be hidden
  const noHeaderFooterRoutes = ['/dashboard', '/packages', '/bookings', '/guides', '/traveler-stories', '/gallery' , '/feedback' ];



  const showHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/travel-guides" element={<TravelGuides />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/traveler-stories" element={<TravelerStories />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/feedback" element={<Feedback />} />



      </Routes>

      {showHeaderFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

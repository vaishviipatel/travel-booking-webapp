import React, { useState } from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import {
  FaCalendarAlt,
  FaSuitcaseRolling,
  FaUsers,
  FaDollarSign,
  FaChartLine,
  FaPlaneDeparture,
  FaUserFriends,
  FaImages,
  FaComments,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import './Dashboard.css';

import ProfileMenu from "../components/ProfileMenu";

const revenueData = [
  { day: "Mon", revenue: 200 },
  { day: "Tue", revenue: 300 },
  { day: "Wed", revenue: 450 },
  { day: "Thu", revenue: 615 },
  { day: "Fri", revenue: 500 },
  { day: "Sat", revenue: 650 },
  { day: "Sun", revenue: 600 },
];

const destinationData = [
  { name: "Tokyo", value: 10 },
  
  { name: "Paris", value: 50 },
  { name: "Venice", value: 40 },
];

const COLORS = ["#007bff", "#00bcd4", "#4caf50", "#ff9800"];

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <Link to="/" className="logo-text">🌍 TravelPoint</Link>
        </div>
        <ul className="sidebar-menu">
          <li><Link to="/dashboard" className="sidebar-link active"><FaChartLine /> Dashboard</Link></li>
          <li><Link to="/packages" className="sidebar-link"><FaSuitcaseRolling /> Packages</Link></li>
          <li><Link to="/bookings" className="sidebar-link"><FaPlaneDeparture /> Bookings</Link></li>
          <li><Link to="/traveler-stories" className="sidebar-link"><FaUserFriends /> Traveler Stories</Link></li>
          <li><Link to="/guides" className="sidebar-link"><FaUsers /> Guides</Link></li>
          <li><Link to="/gallery" className="sidebar-link"><FaImages /> Gallery</Link></li>
          <li><Link to="/feedback" className="sidebar-link"><FaComments /> Feedback</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <input className="search-bar" type="text" placeholder="Search anything..." />
          <ProfileMenu />
        </header>

        {/* Stats Section */}
        <section className="stats">
          <div className="card stat-card">
            <h4>Total Booking</h4>
            <p>1,200</p>
            <span className="green">+2.98%</span>
          </div>
          <div className="card stat-card">
            <h4><FaUsers /> Total Customers</h4>
            <p>2,645</p>
            <span className="red">-4.45%</span>
          </div>
          <div className="card stat-card">
            <h4><FaDollarSign /> Total Earnings</h4>
            <p>$32,590</p>
            <span className="green">+3.75%</span>
          </div>
        </section>

        {/* Charts */}
        <section className="charts">
          <div className="card chart-card">
            <h4>Revenue Overview</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={revenueData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#007bff" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="card chart-card">
            <h4>Top Destinations</h4>
            <PieChart width={250} height={250}>
              <Pie data={destinationData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
                {destinationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
            <ul className="legend">
              {destinationData.map((d, i) => (
                <li key={i}><span style={{ color: COLORS[i] }}>⬤</span> {d.name} - {d.value}%</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Travel Packages */}
        <section className="packages">
          <h4>Travel Packages</h4>
          <div className="package-cards">
            <div className="package-card">
              <img src="/images/seoul.jpg" alt="Seoul" />
              <h5>Seoul, South Korea</h5>
              <p>$2,100</p>
            </div>
            <div className="package-card">
              <img src="/images/venicee.jpg" alt="Venice" />
              <h5>Venice, Italy</h5>
              <p>$1,500</p>
            </div>
            <div className="package-card">
              <img src="/images/serengeti.jpg" alt="Serengeti" />
              <h5>Serengeti, Tanzania</h5>
              <p>$3,200</p>
            </div>
          </div>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="rightbar">
        <div className="calendar">
          <h4><FaCalendarAlt /> July 2025</h4>
          <Calendar onChange={setDate} value={date} />
        </div>

        <div className="upcoming-trips">
          <h4>Upcoming Trips</h4>
          <ul>
            <li><strong>Paris, France</strong><br />12–16 July</li>
            <li><strong>Tokyo, Japan</strong><br />18–21 July</li>
            <li><strong>Sydney, Australia</strong><br />25–30 July</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

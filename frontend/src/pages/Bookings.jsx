import React from "react";
import "./Bookings.css";
import { FaSearch, FaPlus } from "react-icons/fa";

const bookings = [
  {
    id: 1,
    name: "Camille Sloan",
    image: "/images/user1.jpg",
    code: "BK925348",
    destination: "Bali, Indonesia",
    date: "20 June 2025",
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Dylan James",
    image: "/images/user1.jpg",
    code: "BK192830",
    destination: "Goa, India",
    date: "22 June 2025",
    status: "Pending",
  },
  {
    id: 3,
    name: "Sophia Khan",
    image: "/images/user1.jpg",
    code: "BK390182",
    destination: "Paris, France",
    date: "25 June 2025",
    status: "Cancelled",
  },
  {
  id: 4,
  name: "Arjun Mehta",
  image: "/images/user1.jpg",
  code: "BK120394",
  destination: "Manali, India",
  date: "26 June 2025",
  status: "Confirmed",
},
{
  id: 5,
  name: "Emma Wilson",
  image: "/images/user1.jpg",
  code: "BK483920",
  destination: "Rome, Italy",
  date: "28 June 2025",
  status: "Pending",
},
{
  id: 6,
  name: "Ravi Desai",
  image: "/images/user1.jpg",
  code: "BK849301",
  destination: "Dubai, UAE",
  date: "30 June 2025",
  status: "Confirmed",
},
{
  id: 7,
  name: "Ava Martinez",
  image: "/images/user1.jpg",
  code: "BK932847",
  destination: "New York, USA",
  date: "2 July 2025",
  status: "Cancelled",
},
{
  id: 8,
  name: "Kabir Shah",
  image: "/images/user1.jpg",
  code: "BK572310",
  destination: "Jaipur, India",
  date: "5 July 2025",
  status: "Pending",
}

];

export default function Bookings() {
  return (
    <div className="bookings-container">
      <div className="bookings-header">
        <h2>Bookings</h2>
        <div className="header-right">
          <div className="search-box">
            <FaSearch className="icon" />
            <input type="text" placeholder="Search booking..." />
          </div>
          <button className="new-booking-btn">
            <FaPlus /> New Booking
          </button>
        </div>
      </div>

      <div className="bookings-table">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Booking Code</th>
              <th>Destination</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>
                  <div className="user-info">
                    <img src={booking.image} alt={booking.name} />
                    <span>{booking.name}</span>
                  </div>
                </td>
                <td>{booking.code}</td>
                <td>{booking.destination}</td>
                <td>{booking.date}</td>
                <td>
                  <span className={`status ${booking.status.toLowerCase()}`}>
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

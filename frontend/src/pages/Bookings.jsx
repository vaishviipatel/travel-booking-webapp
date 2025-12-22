// src/pages/Bookings.jsx
import React from "react";
import "./Bookings.css";
import { FaSearch, FaTrash, FaCheck } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useBookings } from "../context/BookingContext";

export default function Bookings() {
  const { user } = useAuth();
  const { bookings, deleteBooking, confirmBooking } = useBookings();

  const isAdmin = user?.email === "vishubpatel102@gmail.com"; // Admin by email

  const displayedBookings = isAdmin
    ? bookings
    : bookings.filter(b => b.userId === user?.id);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      deleteBooking(id);
    }
  };

  const handleConfirm = async (id) => {
    if (window.confirm("Confirm this booking and send email to customer?")) {
      const booking = bookings.find(b => b.id === id);

      // Call backend to send email
      try {
        const response = await fetch("http://localhost:5000/api/send-confirmation-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            toEmail: booking.userEmail,
            userName: booking.userName,
            packageTitle: booking.packageTitle,
            date: booking.date,
            code: booking.code,
            destination: booking.destination,
            totalPrice: booking.totalPrice || "Not specified", // fallback for old bookings
            travelersDetails: booking.travelersDetails || [], // array of {name, age, gender}
          }),
        });

        const data = await response.json();
        if (data.success) {
          confirmBooking(id); // Now change status to Confirmed
          alert("Booking confirmed and email sent!");
        } else {
          alert("Booking confirmed but email failed: " + data.message);
          confirmBooking(id); // Still confirm even if email fails
        }
      } catch (err) {
        console.error(err);
        if (window.confirm("Email failed. Confirm booking anyway?")) {
          confirmBooking(id);
        }
      }
    }
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "paid": return "paid";
      case "confirmed": return "confirmed";
      case "pending": return "pending";
      default: return "pending";
    }
  };

  return (
    <div className="bookings-container">
      <div className="bookings-header">
        <h2>{isAdmin ? "All Bookings (Admin Dashboard)" : "My Bookings"}</h2>
        <div className="header-right">
          <div className="search-box">
            <FaSearch className="icon" />
            <input type="text" placeholder="Search booking..." />
          </div>
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
              <th>Package</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedBookings.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", padding: "40px" }}>
                  No bookings yet.
                </td>
              </tr>
            ) : (
              displayedBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>
                    <div className="user-info">
                      <img src="/images/user1.jpg" alt={booking.userName} />
                      <span>{booking.userName}</span>
                    </div>
                  </td>
                  <td>{booking.code}</td>
                  <td>{booking.destination}</td>
                  <td>{booking.date}</td>
                  <td>{booking.packageTitle}</td>
                  <td>
                    <span className={`status ${getStatusClass(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <div className="actions">
                      {/* Admin can confirm only if status is Paid */}
                      {isAdmin && booking.status === "Paid" && (
                        <button
                          className="confirm-btn"
                          onClick={() => handleConfirm(booking.id)}
                          title="Confirm Booking & Send Email"
                        >
                          <FaCheck />
                        </button>
                      )}

                      {/* User can cancel only if not Confirmed */}
                      {/* Admin can delete anytime */}
                      {(isAdmin || (booking.userId === user?.id && booking.status !== "Confirmed")) && (
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(booking.id)}
                          title="Cancel Booking"
                        >
                          <FaTrash />
                        </button>
                      )}

                      {/* Optional: Show message if already confirmed */}
                      {booking.status === "Confirmed" && !isAdmin && (
                        <span style={{ fontSize: "12px", color: "#28a745" }}>✅ Confirmed</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
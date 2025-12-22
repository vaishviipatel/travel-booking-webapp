// src/context/BookingContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext();

export function useBookings() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('travelBookings');
    if (saved) {
      setBookings(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever bookings change
  useEffect(() => {
    if (bookings.length > 0) {
      localStorage.setItem('travelBookings', JSON.stringify(bookings));
    } else {
      localStorage.removeItem('travelBookings');
    }
  }, [bookings]);

  const addBooking = (newBooking) => {
    setBookings(prev => {
      const updated = [...prev, {
        id: Date.now(),
        status: "Pending", // Always start as Pending
        ...newBooking
      }];
      return updated;
    });
  };

  const deleteBooking = (id) => {
    setBookings(prev => prev.filter(b => b.id !== id));
  };

  // New: Admin confirms a booking
  const confirmBooking = (id) => {
    setBookings(prev =>
      prev.map(b => b.id === id ? { ...b, status: "Confirmed" } : b)
    );
  };

  return (
    <BookingContext.Provider value={{
      bookings,
      addBooking,
      deleteBooking,
      confirmBooking
    }}>
      {children}
    </BookingContext.Provider>
  );
}
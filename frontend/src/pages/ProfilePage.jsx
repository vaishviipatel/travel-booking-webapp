import React, { useEffect, useState } from "react";
import "./ProfilePages.css";

export default function ViewProfile() {
  const [user, setUser] = useState({});
  const [role, setRole] = useState("Traveller");

  useEffect(() => {
    // Simulating getting user info (you can replace with actual user data)
    const storedUser = JSON.parse(localStorage.getItem("user")) || {
      name: "Vishuuu Patel",
      email: "vishubpatel102@gmail.com",
      phone: "+91 9876543210",
    };

    setUser(storedUser);

    // Check role based on email
    if (storedUser.email === "vishubpatel102@gmail.com") {
      setRole("Admin");
    } else {
      setRole("Traveller");
    }
  }, []);

  return (
    <div className="profile-page">
      <div className="profile-card">
        <img
          src="/images/user1.jpg"
          alt="User"
          className="profile-avatar"
        />
        <h2>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        
        <p><strong>Role:</strong> <span className={role === "Admin" ? "admin-role" : "traveller-role"}>{role}</span></p>
      </div>
    </div>
  );
}

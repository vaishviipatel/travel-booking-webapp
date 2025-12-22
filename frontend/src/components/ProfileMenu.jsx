import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCog, FaLock, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import "./ProfileMenu.css";

export default function ProfileMenu() {
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="profile-menu-container" ref={menuRef}>
      <div className="profile-trigger" onClick={() => setShowProfile(!showProfile)}>
        {/* 👤 Fixed human avatar image */}
        <img src="/images/user1.jpg" alt="avatar" className="avatar-img" />

        <div className="profile-info-short">
          <span className="name">{user ? user.name : "Guest User"}</span>
          <span className="role">{user ? user.role || "Profile" : "Visitor"}</span>
        </div>
        <span className={`arrow ${showProfile ? "open" : ""}`}>▼</span>
      </div>

      {showProfile && (
        <div className="profile-dropdown">
          <div className="profile-top">
            <img src="/images/user1.jpg" alt="avatar-large" className="avatar-large" />
            <div>
              <h4>{user ? user.name : "Guest User"}</h4>
              <p>{user ? user.email : "guest@example.com"}</p>
            </div>
          </div>

          <ul className="profile-links">
            <li>
              <Link to="/profile"><FaUser /> View Profile</Link>
            </li>
            <li>
              <Link to="/settings"><FaCog /> Settings</Link>
            </li>
            <li>
              <Link to="/change-password"><FaLock /> Change Password</Link>
            </li>
            <li>
              <Link to="/help"><FaQuestionCircle /> Help Center</Link>
            </li>
            <li className="logout">
              <Link to="/logout"><FaSignOutAlt /> Logout</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

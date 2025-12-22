import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePages.css";

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    setTimeout(() => navigate("/login"), 1500);
  }, [navigate]);

  return (
    <div className="page-container">
      <div className="profile-card">
        <h2>🚪 Logging Out...</h2>
        <p>We hope to see you again soon!</p>
      </div>
    </div>
  );
}

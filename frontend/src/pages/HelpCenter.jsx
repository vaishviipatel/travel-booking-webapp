import React from "react";
import "./ProfilePages.css";

export default function HelpCenter() {
  return (
    <div className="page-container">
      <div className="profile-card">
        <h2>❓ Help Center</h2>
        <p>Need assistance? We're here to help.</p>
        <p>
          You can reach us anytime at <strong>support@travelpoint.com</strong> or call
          <strong> +91 98765 43210</strong>.
        </p>
        <button>Contact Support</button>
      </div>
    </div>
  );
}

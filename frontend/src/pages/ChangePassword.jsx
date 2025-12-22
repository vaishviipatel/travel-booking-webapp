import React from "react";
import "./ProfilePages.css";

export default function ChangePassword() {
  return (
    <div className="page-container">
      <div className="profile-card">
        <h2>🔒 Change Password</h2>
        <p>Enter your current and new password below.</p>

        <div className="input-group">
          <label>Current Password</label>
          <input type="password" placeholder="Enter current password" />
        </div>

        <div className="input-group">
          <label>New Password</label>
          <input type="password" placeholder="Enter new password" />
        </div>

        <div className="input-group">
          <label>Confirm New Password</label>
          <input type="password" placeholder="Re-enter new password" />
        </div>

        <button>Update Password</button>
      </div>
    </div>
  );
}

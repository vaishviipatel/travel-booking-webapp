import React from "react";
import "./ProfilePages.css";

export default function SettingsPage() {
  return (
    <div className="page-container">
      <div className="profile-card">
        <h2>⚙️ Account Settings</h2>
        <p>Manage your personal information and app preferences.</p>

        <div className="input-group">
          <label>Notification Preference</label>
          <select style={{ width: "100%", padding: "10px", borderRadius: "8px" }}>
            <option>Email Only</option>
            <option>SMS + Email</option>
            <option>Push Notifications</option>
          </select>
        </div>

        <div className="input-group">
          <label>Language</label>
          <select style={{ width: "100%", padding: "10px", borderRadius: "8px" }}>
            <option>English</option>
            <option>Hindi</option>
            <option>Gujarati</option>
          </select>
        </div>

        <button>Save Settings</button>
      </div>
    </div>
  );
}

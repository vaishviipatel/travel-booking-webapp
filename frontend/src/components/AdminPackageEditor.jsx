import React from "react";
import { FaTimes } from "react-icons/fa";
import "./AdminPackageEditor.css";

export default function AdminPackageEditor({
  isOpen,
  onClose,
  packageData,
  setPackageData,
  onSave,
  isAddMode = false,
}) {
  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setPackageData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTagsChange = (value) => {
    const tags = value.split(",").map((t) => t.trim()).filter(Boolean);
    handleChange("tags", tags);
  };

  return (
    <div className="admin-editor-overlay" onClick={onClose}>
      <div className="admin-editor-modal" onClick={(e) => e.stopPropagation()}>
        <div className="admin-editor-header">
          <h2>{isAddMode ? "Add New Package" : "Edit Package Details"}</h2>
          <button className="admin-close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="admin-editor-form">
          <div className="form-row">
            <label>Title *</label>
            <input
              type="text"
              value={packageData.title || ""}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="e.g. Tropical Goa Getaway"
              required
            />
          </div>

          <div className="form-row">
            <label>Location (optional)</label>
            <input
              type="text"
              value={packageData.location || ""}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="e.g. Goa, India"
            />
          </div>

          <div className="form-row full-width">
            <label>Description *</label>
            <textarea
              rows="5"
              value={packageData.description || ""}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Write an engaging description..."
              required
            />
          </div>

          <div className="form-row">
            <label>Price *</label>
            <input
              type="text"
              value={packageData.price || ""}
              onChange={(e) => handleChange("price", e.target.value)}
              placeholder="e.g. $2100"
            />
          </div>

          <div className="form-row">
            <label>Duration (optional)</label>
            <input
              type="text"
              value={packageData.duration || ""}
              onChange={(e) => handleChange("duration", e.target.value)}
              placeholder="e.g. 6 Nights / 7 Days"
            />
          </div>

          <div className="form-row">
            <label>Image URL *</label>
            <input
              type="text"
              value={packageData.image || ""}
              onChange={(e) => handleChange("image", e.target.value)}
              placeholder="e.g. /images/goa.jpg"
            />
          </div>

          <div className="form-row full-width">
            <label>Tags (comma separated, optional)</label>
            <input
              type="text"
              value={Array.isArray(packageData.tags) ? packageData.tags.join(", ") : ""}
              onChange={(e) => handleTagsChange(e.target.value)}
              placeholder="e.g. All-Inclusive, Luxury Stay, Beach"
            />
          </div>

          {/* You can extend with more fields like bestPlaces, bestSeason later */}
        </div>

        <div className="admin-editor-actions">
          <button className="admin-cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button
            className="admin-save-btn"
            onClick={onSave}
            disabled={!packageData.title || !packageData.price || !packageData.image}
          >
            {isAddMode ? "Add Package" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
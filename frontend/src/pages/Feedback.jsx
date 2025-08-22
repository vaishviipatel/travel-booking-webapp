import React, { useState } from "react";
import "./Feedback.css";

export default function Feedback() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    tourName: "",
    ratings: {},
  });

  const questions = [
    "Ease of navigation",
    "Booking process",
    "Accuracy of information provided",
    "Payment options",
    "Security measures",
    "Customer support",
    "Overall experience on the website",
  ];

  const options = ["Very Good", "Good", "Satisfactory", "Poor", "Very Poor"];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (question, value) => {
    setFormData((prev) => ({
      ...prev,
      ratings: {
        ...prev.ratings,
        [question]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    alert("Thank you for your feedback!");
  };

  return (
    <div className="feedback-container">
     <h1>🧭 Share Your Feedback & Make Us Better</h1>

      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="name-fields">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <input
          type="text"
          name="tourName"
          placeholder="Name of Tour Attended"
          value={formData.tourName}
          onChange={handleInputChange}
          required
        />

        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              {options.map((opt) => (
                <th key={opt}>{opt}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {questions.map((question) => (
              <tr key={question}>
                <td>{question}</td>
                {options.map((opt) => (
                  <td key={opt}>
                    <input
                      type="radio"
                      name={question}
                      value={opt}
                      checked={formData.ratings[question] === opt}
                      onChange={() => handleRatingChange(question, opt)}
                      required
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <button type="submit" className="submit-btn">Submit Feedback</button>
      </form>
    </div>
  );
}

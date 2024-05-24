import React, { useContext } from "react";
import { LayoutContext } from "../../Context/LayoutContext";

export default function Card({ title, description, icon: Icon }) {
  const { isDarkMode } = useContext(LayoutContext);

  const cardStyle = {
    backgroundColor: isDarkMode ? "#333" : "#f8f9fa",
    color: isDarkMode ? "#e0e0e0" : "#333",
    border: isDarkMode ? "0.5px solid #ddd" : "0.5px solid #ccc",
    borderRadius: "3px",
    marginBottom: "15px",
  };

  const iconWrapperStyle = {
    fontSize: "2rem",
    marginRight: "1rem",
    color: isDarkMode ? "#007bff" : "#000",
  };

  const titleStyle = {
    fontFamily: "'Montserrat', sans-serif",
    color: isDarkMode ? "#e0e0e0" : "#333",
    marginBottom: "5px",
    maxWidth: "calc(100% - 3rem)", // Adjust based on padding/margin
    overflowWrap: "break-word",
  };

  const descriptionStyle = {
    fontFamily: "'Helvetica', sans-serif",
    color: isDarkMode ? "#ccc" : "#555",
    maxWidth: "100%", // Allow full width
    overflowWrap: "break-word",
  };

  return (
    <div className="col-md-6 mb-3 mb-md-0">
      <div className="card" style={cardStyle}>
        <div className="card-body d-flex align-items-start">
          <div className="icon-wrapper text-primary" style={iconWrapperStyle}>
            <Icon />
          </div>
          <div>
            <h5
              className="card-title fw-bold text-start mb-3"
              style={titleStyle}
            >
              {title}
            </h5>
            <p className="card-text text-start mb-0" style={descriptionStyle}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

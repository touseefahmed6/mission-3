import React, { useContext } from "react";
import { LayoutContext } from "../../Context/LayoutContext";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const { selectedLayout, isDarkMode } = useContext(LayoutContext);
  const cardStyle = {
    backgroundColor:
      (selectedLayout === 1 || selectedLayout === 3) && isDarkMode
        ? "#333"
        : isDarkMode && selectedLayout === 2
        ? "#333"
        : selectedLayout === 2 && !isDarkMode
        ? "#fff"
        : (selectedLayout === 1 || selectedLayout === 3) && isDarkMode
        ? ""
        : "#f0f0f0",
    color: isDarkMode ? "#e0e0e0" : "#333",
    border: isDarkMode ? "0.5px solid #ddd" : "0.5px solid #ccc",
    marginBottom: "15px",
    padding: "15px",
  };
  const educationHeadingStyle =
    selectedLayout === 1
      ? {
          letterSpacing: "3px",
          color: isDarkMode ? "#e0e0e0" : "#333",
        }
      : {
          fontFamily: "'PT Sans', sans-serif",
          letterSpacing: "2px",
          color: isDarkMode ? "#e0e0e0" : "#333",
        };

  return (
    <div className="">
      <div className="card border-0 p-4" style={cardStyle}>
        {selectedLayout === 1 || selectedLayout === 3 ? (
          <h6
            className={`card-title text-uppercase text-start`}
            style={educationHeadingStyle}
          >
            <FaGraduationCap
              className="text-primary"
              style={{ fontSize: "1.4rem" }}
            />{" "}
            Education
          </h6>
        ) : (
          <h5
            className={`card-title fw-bold text-start`}
            style={educationHeadingStyle}
          >
            Education
          </h5>
        )}
        <div
          className=""
          style={{
            height: "0.5px",
            backgroundColor: isDarkMode ? "#007bff" : "#007bff",
            marginBottom: "10px",
          }}
        ></div>
        {selectedLayout === 1 || selectedLayout === 3 ? (
          <div className="d-flex flex-column">
            <span className="text-muted mb-2 text-start">
              Oct 2021 - June 2025
            </span>
            <div className="mb-2 text-start">
              <strong>MAJU, Karachi</strong>
            </div>
            <span className="text-wrap mb-0 text-start">
              Bachelor of Software Engineering
            </span>
          </div>
        ) : (
          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="text-start mb-0">
                Bachelor of Software Engineering
              </h6>
              <span className="text-muted">Oct 2021 - June 2025</span>
            </div>
            <span className="text-muted">
              Mohammad Ali Jinnah University, Karachi
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

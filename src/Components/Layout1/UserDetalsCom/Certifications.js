import React, { useContext } from "react";
import { LayoutContext } from "../../Context/LayoutContext";
export default function Experiences() {
  const { isDarkMode } = useContext(LayoutContext);
  const educationCard = {
    backgroundColor: isDarkMode ? "#22303C" : "#f0f0f0",
  };
  return (
    <div className="card border-0 p-4 rounded-0" style={educationCard}>
      <h4
        className={`card-title poppins-bold`}
        style={{
          letterSpacing: "1px",
          color: isDarkMode ? "#e0e0e0" : "#374151",
        }}
      >
        CERTIFICATIONS
      </h4>
      <div
        className="bg-primary"
        style={{
          height: "0.5px",
          marginBottom: "10px",
        }}
      ></div>

      <div className="d-flex justify-content-between align-items-center">
        <h6
          className="text-start mb-2 poppins-medium"
          style={{ color: isDarkMode ? "#e0e0e0" : "#374151" }}
        >
          <li>Programming with Javascript | Online course - Meta-Coursera</li>
        </h6>
        <span className=" mb-2 poppins-regular">2023</span>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <h6
          className="text-start mb-2 poppins-medium"
          style={{ color: isDarkMode ? "#e0e0e0" : "#374151" }}
        >
          <li>Javascript Crash Course | Discount-Courses</li>
        </h6>
        <span className=" mb-2 poppins-regular">2023</span>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <h6
          className="text-start mb-2 poppins-medium"
          style={{ color: isDarkMode ? "#e0e0e0" : "#374151" }}
        >
          <li>UI & UX For Beginners | Great Learning Academy</li>
        </h6>
        <span className=" mb-2 poppins-regular">2023</span>
      </div>
    </div>
  );
}

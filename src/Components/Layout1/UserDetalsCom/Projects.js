import React, { useContext } from "react";
import { LayoutContext } from "../../Context/LayoutContext";
export default function Projects() {
  const { isDarkMode } = useContext(LayoutContext);
  const projectCard = {
    backgroundColor: isDarkMode ? "#22303C" : "#f0f0f0",
  };
  return (
    <div className="card border-0 p-4 rounded-0" style={projectCard}>
      <h4
        className="card-title text-start poppins-bold"
        style={{
          letterSpacing: "1px",
          color: isDarkMode ? "#e0e0e0" : "#374151",
        }}
      >
        PROJECTS
      </h4>
      <div
        className="border-top border-primary"
        style={{ height: "0.5px", marginBottom: "10px" }}
      ></div>
      <div className="mb-2">
        <div className="d-flex justify-content-between align-items-center">
          <h6
            className="text-start mb-2 poppins-semibold"
            style={{ color: isDarkMode ? "#e0e0e0" : "#374151" }}
          >
            E-commerce Website
          </h6>
        </div>
        <p
          className="text-start poppins-regular"
          style={{ color: isDarkMode ? "#e0e0e0" : "#374151" }}
        >
          <li>
            Implemented responsive design elements to ensure compatibility
            across various devices.
          </li>
        </p>
        <p
          className="text-start poppins-regular"
          style={{ color: isDarkMode ? "#e0e0e0" : "#374151" }}
        >
          <li>
            Emphasized usability and aesthetics to drive customer engagement and
            satisfaction.
          </li>
        </p>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaDownload,
} from "react-icons/fa";
import { LayoutContext } from "../../Context/LayoutContext";

export default function Skills() {
  const { isDarkMode } = useContext(LayoutContext);

  const skills = {
    react: 70,
    javascript: 80,
    html: 90,
    css: 75,
  };

  const skillContainerStyle = {
    backgroundColor: isDarkMode ? "#333" : "#f0f0f0",
    color: isDarkMode ? "#e0e0e0" : "#333",
  };

  const thinLineStyle = {
    backgroundColor: isDarkMode ? "#007bff" : "var(--bs-primary)",
  };

  return (
    <div className="mt-2" style={skillContainerStyle}>
      <h6
        className="text-start mx-3 d-flex align-items-center"
        style={{ letterSpacing: "2px" }}
      >
        <FaCode
          className="text-primary"
          style={{ fontSize: "1.4rem", marginRight: "0.5rem" }}
        />
        <span>SKILLS</span>
      </h6>
      <div
        className="mx-3"
        style={{
          height: "0.5px",
          backgroundColor: thinLineStyle.backgroundColor,
          marginBottom: "10px",
        }}
      ></div>
      <div className="card border-0 p-4 shadow-sm " style={skillContainerStyle}>
        {Object.entries(skills).map(([skill, value]) => (
          <div className="mb-3" key={skill}>
            <div className="d-flex align-items-center mb-2">
              {skill === "react" && (
                <FaReact className="me-2" style={{ color: "#61DBFB" }} />
              )}
              {skill === "javascript" && (
                <FaJs className="me-2" style={{ color: "#F0DB4F" }} />
              )}
              {skill === "html" && (
                <FaHtml5 className="me-2" style={{ color: "#E34C26" }} />
              )}
              {skill === "css" && (
                <FaCss3Alt className="me-2" style={{ color: "#264de4" }} />
              )}
              <span className="me-auto text-capitalize">{skill}</span>
              <span>{value}%</span>
            </div>
            <div className="progress" style={{ height: "4px" }}>
              <div
                className="progress-bar bg-primary"
                style={{ width: `${value}%`, height: "100%" }}
              ></div>
            </div>
          </div>
        ))}

        <div className="d-flex justify-content-center">
          <a
            href="/"
            className="btn btn-primary rounded border-0 mb-3"
            style={{ maxWidth: "200px" }}
          >
            <FaDownload className="me-2" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

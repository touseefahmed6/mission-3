import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

export default function Skills() {
  const skills = {
    react: 70,
    javascript: 80,
    html: 90,
    css: 75,
  };

  return (
    <div className="mt-2 bg-light">
      <h6
        className="text-start mx-3 tracking-widest"
        style={{ letterSpacing: "3px" }}
      >
        SKILLS
      </h6>
      <div
        className="mx-3"
        style={{
          height: "0.5px",
          backgroundColor: "var(--bs-primary)",
          marginBottom: "10px",
        }}
      ></div>
      <div className="card border-0 p-4 shadow-sm bg-light">
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
            {/* Static thin line */}
            <div className="progress" style={{ height: "4px" }}>
              <div
                className="progress-bar bg-primary"
                style={{ width: `${value}%`, height: "100%" }}
              ></div>
            </div>
          </div>
        ))}

        <a
          href="/"
          className="btn btn-primary rounded border-0 mb-3"
          style={{ maxWidth: "200px", marginLeft: "9%" }}
        >
          <i className="bi bi-download"></i> Download CV
        </a>
      </div>
    </div>
  );
}

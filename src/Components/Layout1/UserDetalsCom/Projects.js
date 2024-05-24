import React from "react";

export default function Projects() {
  return (
    <div>
      <div className="card border-0 p-4">
        <h5
          className="card-title fw-bold text-start"
          style={{ fontFamily: "'PT Sans', sans-serif", letterSpacing: "2px" }}
        >
          Projects
        </h5>
        <div
          className="border-top border-primary"
          style={{ height: "0.5px", marginBottom: "10px" }}
        ></div>
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="text-start mb-2">E-commerce Website</h6>
          </div>
          <p className="text-start">
            <li style={{ fontFamily: "'Arial', sans-serif" }}>
              Implemented responsive design elements to ensure compatibility
              across various devices.
            </li>
          </p>
          <p className="text-start">
            <li style={{ fontFamily: "'Arial', sans-serif" }}>
              Emphasized usability and aesthetics to drive customer engagement
              and satisfaction.
            </li>
          </p>
        </div>
      </div>
    </div>
  );
}

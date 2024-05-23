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
            <h6 className="text-start mb-0">E-commerce Website</h6>
          </div>
          <p className="text-start">
            <li style={{ fontFamily: "'Arial', sans-serif" }}>
              Developed e-commerce website frontend using React.js, CSS, and
              Bootstrap. Crafted an appealing, user-friendly UI for an enhanced
              shopping experience.
            </li>
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Education() {
  return (
    <div className="">
      <div className="card border-0 p-4">
        <h5
          className={`card-title fw-bold text-start `}
          style={{
            fontFamily: "'PT Sans', sans-serif",
            letterSpacing: "2px",
          }}
        >
          Education
        </h5>
        <div
          className=""
          style={{
            height: "0.5px",
            backgroundColor: "var(--bs-primary)",
            marginBottom: "10px",
          }}
        ></div>
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
      </div>
    </div>
  );
}

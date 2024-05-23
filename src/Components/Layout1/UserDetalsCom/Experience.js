import React from "react";

export default function Experiences() {
  return (
    <div className="">
      <div className="card border-0 p-4">
        <h5
          className={`card-title fw-bold text-start  `}
          style={{
            fontFamily: "'PT Sans', sans-serif",
            letterSpacing: "2px",
          }}
        >
          Experiences
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
            <h6 className="text-start mb-2">FullStack Developer | AtomPoint</h6>
            <span className="text-muted mb-2">Jan 2021 - Dec 2021</span>
          </div>
          <p
            className="text-start"
            style={{ fontFamily: "'Arial', sans-serif" }}
          >
            Developed scalable and responsive applications as a FullStack
            Developer at AtomPoint, blending creativity with robust
            functionality.
          </p>
        </div>
      </div>
    </div>
  );
}

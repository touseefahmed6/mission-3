import React from "react";

export default function AboutMe() {
  return (
    <div className="card mb-3 border-0">
      <div className="card-body">
        <h5
          className="card-title fw-bold text-start"
          style={{
            fontFamily: "'PT Sans', sans-serif",
            letterSpacing: "2px",
          }}
        >
          About Me
        </h5>
        <div
          className="mb-3"
          style={{
            height: "0.5px",
            backgroundColor: "var(--bs-primary)",
            marginBottom: "10px",
          }}
        ></div>
        <p
          className="card-text text-start"
          style={{ fontFamily: "'Arial', sans-serif" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

import React from "react";
export default function Card({ title, description, icon: Icon }) {
  return (
    <div className={`col-md-6 mb-3 mb-md-0 border-0 `}>
      <div className={`card   `}>
        <div className={`card-body d-flex align-items-start   bg-light`}>
          <div
            className={`icon-wrapper text-primary`}
            style={{ fontSize: "2rem", marginRight: "1rem" }}
          >
            <Icon />
          </div>
          <div>
            <h5
              className={`card-title fw-bold text-start `}
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {title}
            </h5>
            <p
              className={`card-text text-start `}
              style={{ fontFamily: "'Helvetica', sans-serif" }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

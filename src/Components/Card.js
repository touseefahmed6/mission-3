import React from "react";
import { FaMobileAlt, FaCamera, FaLaptopCode } from "react-icons/fa";

export default function Card({ title, description, icon: Icon }) {
  return (
    <div className="col-md-6 mb-3 mb-md-0 border-0">
      <div className="card border-0">
        <div className="card-body d-flex align-items-start">
          <div
            className="icon-wrapper"
            style={{ fontSize: "2rem", color: "black", marginRight: "1rem" }}
          >
            <Icon />
          </div>
          <div>
            <h5
              className="card-title fw-bold text-start"
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "500",
              }}
            >
              {title}
            </h5>
            <p className="card-text text-start">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

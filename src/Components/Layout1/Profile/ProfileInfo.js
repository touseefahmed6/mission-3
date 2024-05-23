import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaMobileAlt,
  FaCalendarAlt,
  FaSkype,
} from "react-icons/fa";

export default function ProfileInfo() {
  return (
    <div className="container-fluid bg-light">
      <h6 className="text-start mx-3" style={{ letterSpacing: "2px" }}>
        DETAILS
      </h6>
      <div
        className="mx-3 border-top border-primary"
        style={{ height: "0.5px", marginBottom: "10px" }}
      ></div>

      <ul className="list-group list-group-flush mt-3 border-0 mx-3">
        <li className="list-group-item border-0 d-flex align-items-center bg-light">
          <FaCalendarAlt
            className="text-primary me-3"
            style={{ fontSize: "1rem" }}
          />
          <span className="text-wrap text-truncate">April 03, 2004</span>
        </li>
        <li className="list-group-item border-0 d-flex align-items-center bg-light">
          <FaMapMarkerAlt
            className="text-primary me-3"
            style={{ fontSize: "1rem" }}
          />
          <span className="text-wrap text-truncate">Karachi, Pakistan</span>
        </li>
        <li className="list-group-item border-0 d-flex align-items-center bg-light">
          <FaEnvelope
            className="text-primary me-3 text-wrap text-truncate"
            style={{ fontSize: "1rem" }}
          />
          <span className="text-wrap text-truncate">touseef@email.com</span>
        </li>
        <li className="list-group-item border-0 d-flex align-items-center bg-light">
          <FaMobileAlt
            className="text-primary me-3"
            style={{ fontSize: "1rem" }}
          />
          <span className="text-wrap text-truncate">+92-3173098212</span>
        </li>
        <li className="list-group-item border-0 d-flex align-items-center bg-light">
          <FaSkype className="text-primary me-3" style={{ fontSize: "1rem" }} />
          <span className="text-wrap text-truncate">@touseef_ahmed</span>
        </li>
      </ul>
    </div>
  );
}

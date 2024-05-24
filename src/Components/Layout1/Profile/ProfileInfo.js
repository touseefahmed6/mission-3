import React, { useContext } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaMobileAlt,
  FaCalendarAlt,
  FaSkype,
  FaInfoCircle,
} from "react-icons/fa";
import { LayoutContext } from "../../Context/LayoutContext";

export default function ProfileInfo() {
  const { isDarkMode } = useContext(LayoutContext);

  const infoContainerStyle = {
    backgroundColor: isDarkMode ? "#333" : "#f0f0f0",
    color: isDarkMode ? "#e0e0e0" : "#333",
  };

  const infoBorderStyle = {
    height: "0.5px",
    marginBottom: "10px",
    backgroundColor: isDarkMode ? "#007bff" : "#ccc",
  };

  const listItemStyle = {
    backgroundColor: isDarkMode ? "#333" : "#f0f0f0",
    color: isDarkMode ? "#e0e0e0" : "#333",
  };

  return (
    <div className="container-fluid" style={infoContainerStyle}>
      <h6
        className="text-start mx-3 d-flex align-items-center"
        style={{ letterSpacing: "2px" }}
      >
        <FaInfoCircle
          className="text-primary mt-2"
          style={{ fontSize: "1.3rem", marginRight: "0.5rem" }}
        />
        <span className="mt-2">DETAILS</span>
      </h6>
      <div
        className="mx-3 border-top border-primary"
        style={infoBorderStyle}
      ></div>

      <ul className="list-group list-group-flush mt-3 border-0 mx-3">
        <li
          className="list-group-item border-0 d-flex align-items-center"
          style={listItemStyle}
        >
          <FaCalendarAlt
            className="text-primary me-3"
            style={{ fontSize: "1rem" }}
          />
          <span className="text-wrap text-truncate">April 03, 2004</span>
        </li>
        <li
          className="list-group-item border-0 d-flex align-items-center"
          style={listItemStyle}
        >
          <FaMapMarkerAlt
            className="text-primary me-3"
            style={{ fontSize: "1rem" }}
          />
          <span className="text-wrap text-truncate">Karachi, Pakistan</span>
        </li>
        <li
          className="list-group-item border-0 d-flex align-items-center"
          style={listItemStyle}
        >
          <FaEnvelope
            className="text-primary me-3 text-wrap text-truncate"
            style={{ fontSize: "1rem" }}
          />
          <span className="text-wrap text-truncate">touseef@email.com</span>
        </li>
        <li
          className="list-group-item border-0 d-flex align-items-center"
          style={listItemStyle}
        >
          <FaMobileAlt
            className="text-primary me-3"
            style={{ fontSize: "1rem" }}
          />
          <span className="text-wrap text-truncate">+92-3173098212</span>
        </li>
        <li
          className="list-group-item border-0 d-flex align-items-center"
          style={listItemStyle}
        >
          <FaSkype className="text-primary me-3" style={{ fontSize: "1rem" }} />
          <span className="text-wrap text-truncate">@touseef_ahmed</span>
        </li>
      </ul>
    </div>
  );
}

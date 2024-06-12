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
  const { userData, isDarkMode } = useContext(LayoutContext);

  const infoContainerStyle = {
    backgroundColor: isDarkMode ? "#22303C" : "#f0f0f0",
    color: isDarkMode ? "#e0e0e0" : "#333",
  };

  const infoBorderStyle = {
    height: "0.5px",
    marginBottom: "10px",
    backgroundColor: isDarkMode ? "#007bff" : "#ccc",
  };

  const listItemStyle = {
    backgroundColor: isDarkMode ? "#22303C" : "#f0f0f0",
    color: isDarkMode ? "#e0e0e0" : "#333",
  };

  const formatDateString = (dateString) => {
    if (!dateString) return "";

    const parts = dateString.split("-");
    if (parts.length !== 3) return dateString;

    const [year, month, day] = parts;
    return `${month}-${day}-${year}`;
  };

  return (
    <div className="container-fluid mt-3" style={infoContainerStyle}>
      <h6
        className="text-start mx-3 d-flex align-items-center"
        style={{ letterSpacing: "1px" }}
      >
        <FaInfoCircle
          className="text-primary mt-0"
          style={{ fontSize: "1.3rem", marginRight: "0.5rem" }}
        />
        <span className="mt-0 poppins-bold">DETAILS</span>
      </h6>
      <div
        className="mx-3 border-top border-primary"
        style={infoBorderStyle}
      ></div>

      <ul className="list-group list-group-flush mt-3 border-0 mx-1">
        <li
          className="list-group-item border-0 d-flex align-items-center"
          style={listItemStyle}
        >
          <FaCalendarAlt
            className="text-primary me-3"
            style={{ fontSize: "1rem" }}
          />
          <span className="text-wrap text-truncate poppins-medium">
            {userData.personalDetails &&
              formatDateString(userData.personalDetails.dob)}
          </span>
        </li>
        <li
          className="list-group-item border-0 d-flex align-items-center"
          style={listItemStyle}
        >
          <FaMapMarkerAlt
            className="text-primary me-3"
            style={{ fontSize: "1rem" }}
          />
          <span className="text-wrap text-truncate poppins-medium">
            {userData.personalDetails && userData.personalDetails.location}
          </span>
        </li>
        <li
          className="list-group-item border-0 d-flex align-items-center"
          style={listItemStyle}
        >
          <FaEnvelope
            className="text-primary me-3 text-wrap text-truncate"
            style={{ fontSize: "1rem" }}
          />
          <span className="text-wrap text-truncate poppins-medium">
            {userData.personalDetails && userData.personalDetails.email}
          </span>
        </li>
        <li
          className="list-group-item border-0 d-flex align-items-center"
          style={listItemStyle}
        >
          <FaMobileAlt
            className="text-primary me-3"
            style={{ fontSize: "1rem" }}
          />
          <span className="text-wrap text-truncate poppins-medium">
            {userData.personalDetails && userData.personalDetails.contactNumber}
          </span>
        </li>
        <li
          className="list-group-item border-0 d-flex align-items-center"
          style={listItemStyle}
        >
          <FaSkype className="text-primary me-3" style={{ fontSize: "1rem" }} />
          <span className="text-wrap text-truncate poppins-medium">
            {userData.personalDetails && userData.personalDetails.skypeUsername}
          </span>
        </li>
      </ul>
    </div>
  );
}

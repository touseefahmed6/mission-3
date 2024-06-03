import React, { useContext } from "react";
import { LayoutContext } from "../../Context/LayoutContext";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const { selectedLayout, isDarkMode } = useContext(LayoutContext);
  const cardStyle = {
    backgroundColor:
      (selectedLayout === 1 || selectedLayout === 3 || selectedLayout === 2) &&
      isDarkMode
        ? "#22303C"
        : "#f0f0f0",
    color: isDarkMode ? "#e0e0e0" : "#333",
    border: isDarkMode ? "0" : "0",
    marginBottom: "0px",
    padding: "0px",
  };
  const educationHeadingStyle =
    selectedLayout === 1
      ? {
          letterSpacing: "1px",
          color: isDarkMode ? "#e0e0e0" : "#333",
        }
      : {
          letterSpacing: "1px",
          color: isDarkMode ? "#e0e0e0" : "#374151",
        };

  return (
    <div className="border-0">
      <div className="card border-0 p-4" style={cardStyle}>
        {selectedLayout === 1 || selectedLayout === 3 ? (
          <h6
            className={`card-title mx-1 d-flex align-items-center text-start poppins-bold`}
            style={educationHeadingStyle}
          >
            <FaGraduationCap
              className="text-primary "
              style={{ fontSize: "1.4rem", marginRight: "0.5rem" }}
            />
            EDUCATION
          </h6>
        ) : (
          <h4
            className={`card-title   poppins-bold`}
            style={educationHeadingStyle}
          >
            EDUCATION
          </h4>
        )}

        {selectedLayout === 1 || selectedLayout === 3 ? (
          <div
            className="mx-1 bg-primary"
            style={{
              height: "0.5px",
              marginBottom: "10px",
            }}
          ></div>
        ) : (
          <div
            className="bg-primary"
            style={{
              height: "0.5px",
              marginBottom: "10px",
            }}
          ></div>
        )}
        {selectedLayout === 1 || selectedLayout === 3 ? (
          <div className="d-flex flex-column container mt-0">
            <span
              className=" mb-2 text-start"
              style={{ color: isDarkMode ? "#FFF" : "#000" }}
            >
              Oct 2021 - June 2025
            </span>
            <div className="mb-2 text-start">
              <strong>MAJU, Karachi</strong>
            </div>
            <span className="text-wrap mb-0 text-start">
              Bachelor of Software Engineering
            </span>
          </div>
        ) : (
          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="text-start mb-0">
                Bachelor of Software Engineering
              </h6>
              <span className="">Oct 2021 - June 2025</span>
            </div>
            <span className="">Mohammad Ali Jinnah University, Karachi</span>
          </div>
        )}
      </div>
    </div>
  );
}

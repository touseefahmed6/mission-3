import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { LayoutContext } from "../../Context/LayoutContext";

export default function AboutMe() {
  const { selectedLayout, isDarkMode } = useContext(LayoutContext);

  const cardBodyStyle = {
    backgroundColor:
      selectedLayout === 2
        ? isDarkMode
          ? "#333"
          : "#f0f0f0"
        : isDarkMode
        ? "#333"
        : "#fff",
    color:
      selectedLayout === 2
        ? isDarkMode
          ? "#e0e0e0"
          : "#000"
        : isDarkMode
        ? "#e0e0e0"
        : "#333",
    fontFamily: selectedLayout !== 2 && "'PT Sans', sans-serif",
    letterSpacing: selectedLayout !== 2 && "2px",
  };

  const titleElement =
    selectedLayout === 2 ? (
      <h6
        className="card-title text-uppercase text-start"
        style={{
          letterSpacing: "3px",
          marginBottom: "10px",
          textTransform: "uppercase",
          color: isDarkMode ? "#e0e0e0" : "#000",
        }}
      >
        <FaUser
          className="text-primary"
          style={{ fontSize: "1.4rem", marginRight: "0.5rem" }}
        />
        About Me
      </h6>
    ) : (
      <h5
        className="card-title fw-bold text-start"
        style={{
          fontFamily: "'PT Sans', sans-serif",
          letterSpacing: "2px",
          color: isDarkMode ? "#e0e0e0" : "#333",
        }}
      >
        About Me
      </h5>
    );

  return (
    <div className="card mb-3 border-0">
      <div className="card-body" style={cardBodyStyle}>
        {titleElement}
        <div
          className="mb-3"
          style={{
            height: "0.5px",
            backgroundColor: isDarkMode ? "#007bff" : "var(--bs-primary)",
            marginBottom: "10px",
          }}
        ></div>
        <p
          className="card-text text-start"
          style={{
            letterSpacing: "0px",
            color: isDarkMode ? "#e0e0e0" : "#333",
          }}
        >
          Full Stack Developer passionate about creating seamless, scalable
          applications. Skilled in frontend and backend development, I enjoy
          turning ideas into user-friendly solutions. Constantly learning and
          adapting, I thrive in collaborative environments where innovation
          drives success.
        </p>
      </div>
    </div>
  );
}

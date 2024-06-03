import React, { useContext } from "react";
import { LayoutContext } from "../../Context/LayoutContext";

export default function AboutMe() {
  const { selectedLayout, isDarkMode } = useContext(LayoutContext);

  const cardBodyStyle = {
    backgroundColor:
      selectedLayout === 2
        ? isDarkMode
          ? "#192734"
          : "#fff"
        : isDarkMode
        ? "#192734"
        : "#fff",
    color:
      selectedLayout === 2
        ? isDarkMode
          ? "#e0e0e0"
          : "#000"
        : isDarkMode
        ? "#e0e0e0"
        : "#333",

    letterSpacing: selectedLayout !== 2 && "2px",
  };

  const titleElement = (
    <h4
      className="card-title poppins-bold"
      style={{
        color: isDarkMode ? "#e0e0e0" : "#374151",
        letterSpacing: "1px",
      }}
    >
      ABOUT ME
    </h4>
  );

  return (
    <div
      className="card  border-0 p-2"
      style={{ backgroundColor: isDarkMode ? "#192734" : "#fff" }}
    >
      <div className="card-body rounded" style={cardBodyStyle}>
        {titleElement}
        <div
          className="bg-primary"
          style={{
            height: "0.5px",
            marginBottom: "10px",
          }}
        ></div>
        <p
          className="card-text poppins-regular"
          style={{
            letterSpacing: "0px",
            color: isDarkMode ? "#e0e0e0" : "#6b7287",
          }}
        >
          FullStack Developer passionate about creating seamless, scalable
          applications. Skilled in frontend and backend development, I enjoy
          turning ideas into user-friendly solutions. With expertise in a wide
          range of programming languages and frameworks, I excel at building
          robust, high-performance systems. Constantly learning and adapting, I
          thrive in collaborative environments where innovation drives success.
          I am dedicated to writing clean, maintainable code and have a keen eye
          for detail. My strong problem-solving skills enable me to tackle
          complex challenges efficiently.
        </p>
      </div>
    </div>
  );
}

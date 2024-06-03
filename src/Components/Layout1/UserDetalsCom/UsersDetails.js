import React, { useContext } from "react";
import AboutMe from "./AboutMe";
import Certifications from "./Certifications";
import Experiences from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import { LayoutContext } from "../../Context/LayoutContext";

export default function UsersDetails() {
  const { selectedLayout, isDarkMode } = useContext(LayoutContext);
  const userDetailsStyle = {
    backgroundColor: isDarkMode ? "#22303C" : "#f0f0f0",
  };
  return (
    <div
      className={` border-0 shadow-sm  ${
        window.innerWidth >= 768 && window.innerWidth <= 1050 ? "mt-4" : "mt-3"
      }`}
      style={userDetailsStyle}
    >
      <div className={`row`}>
        <div className={`col-12`}>
          <AboutMe />
          {selectedLayout === 2 && <Education />}
          {selectedLayout === 3 && <Projects />}
          {selectedLayout === 3 && <Experiences />}
          {selectedLayout === 4 && <Education />}
          {selectedLayout === 1 && <Experiences />}
          {selectedLayout === 2 && <Experiences />}
          {selectedLayout === 1 && <Projects />}
          {selectedLayout === 2 && <Projects />}
          <Certifications />
        </div>
      </div>
    </div>
  );
}

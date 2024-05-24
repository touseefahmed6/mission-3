import React, { useContext } from "react";
import { LayoutContext } from "./LayoutContext";

const ToggleSwitch = () => {
  const { isDarkMode, toggleTheme } = useContext(LayoutContext);

  return (
    <div
      className={`form-check form-switch position-absolute end-0 m-2 ${
        window.innerWidth <= 576 ? "mt-5" : "mt-2"
      }`}
      style={{ zIndex: 999 }}
    >
      <input
        className="form-check-input"
        type="checkbox"
        id="themeSwitch"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label className="form-check-label" htmlFor="themeSwitch">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </label>
    </div>
  );
};

export default ToggleSwitch;

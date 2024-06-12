import React, { useContext } from "react";
import { LayoutContext } from "../Context/LayoutContext";

const Footer = () => {
  const { isDarkMode } = useContext(LayoutContext);

  const footerStyle = {
    backgroundColor: isDarkMode ? "#1f2937" : "#f3f4f6",
    color: isDarkMode ? "#e0e0e0" : "#333",
    padding: "10px",
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    width: "100%",
  };

  return (
    <div className="shadow-lg" style={footerStyle}>
      &copy; 2024 Atompoint. All rights reserved.
    </div>
  );
};

export default Footer;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutContext } from "../Context/LayoutContext";

const WelcomePage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(LayoutContext);

  const cardStyle = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#e0e0e0" : "#333",
  };

  const buttonPrimaryStyle = {
    backgroundColor: isDarkMode ? "#007bff" : "#0d6efd",
    borderColor: isDarkMode ? "#007bff" : "#0d6efd",
    color: isDarkMode ? "#e0e0e0" : "#fff",
  };

  const buttonSecondaryStyle = {
    backgroundColor: isDarkMode ? "#6c757d" : "#6c757d",
    borderColor: isDarkMode ? "#6c757d" : "#6c757d",
    color: isDarkMode ? "#e0e0e0" : "#fff",
  };

  const handleOnClick = () => {
    navigate("/CompleteCv");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card text-center shadow-lg p-4" style={cardStyle}>
        <div className="card-body">
          <h1 className="card-title mb-4 text-primary">Welcome, Touseef</h1>
          <p className="card-text mb-4">
            We're glad to have you here. Use the buttons below to navigate
            through your profile.
          </p>
          <div className="d-flex justify-content-center">
            <button
              className="btn me-3"
              style={buttonPrimaryStyle}
              onClick={handleOnClick}
            >
              Check Your CV
            </button>
            <button
              className="btn"
              style={buttonSecondaryStyle}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

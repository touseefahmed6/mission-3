import React from "react";
import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/CompleteCv");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card text-center shadow-lg p-4 bg-light">
        <div className="card-body">
          <h1 className="card-title mb-4 text-primary">Welcome, Touseef</h1>
          <p className="card-text mb-4">
            We're glad to have you here. Use the buttons below to navigate
            through your profile.
          </p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary me-3" onClick={handleOnClick}>
              Check Your CV
            </button>
            <button className="btn btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutContext } from "../Context/LayoutContext";
import Card from "../Layout1/UserDetalsCom/Card";

const WelcomePage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(LayoutContext);

  const buttonSecondaryStyle = {
    backgroundColor: isDarkMode ? "#6c757d" : "#6c757d",
    borderColor: isDarkMode ? "#6c757d" : "#6c757d",
    color: isDarkMode ? "#e0e0e0" : "#fff",
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container pt-5">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8 text-center">
          <h1 className="mb-4 text-primary poppins-bold">Welcome, Touseef</h1>
          <button
            className="btn btn-outline-primary poppins-medium"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="row justify-content-center mt-0">
        <div className="col-lg-12">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

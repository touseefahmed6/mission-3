import React, { useContext } from "react";
import Profile from "./Profile/Profile";
import UsersDetails from "./UserDetalsCom/UsersDetails";
import { LayoutContext } from "../Context/LayoutContext";

const styles = `
  .cyberpunk-checkbox {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #007bff;
    border-radius: 5px;
    background-color: transparent;
    display: inline-block;
    position: relative;
    margin-right: 10px;
    cursor: pointer;
  }

  .cyberpunk-checkbox:before {
    content: "";
    background-color: #007bff;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 10px;
    height: 10px;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }

  .cyberpunk-checkbox:checked:before {
    transform: translate(-50%, -50%) scale(1);
  }

  .cyberpunk-checkbox-label {
    font-size: 18px;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    margin-bottom: 10px; 
  }
`;

const CompleteCv = () => {
  const { isDarkMode } = useContext(LayoutContext);

  const contentStyle = {
    padding: "20px",
    borderTop: "none",
    borderRadius: "0 0 5px 5px",
    position: "relative",
    backgroundColor: isDarkMode ? "#1e1e1e" : "#f0f0f0",
    color: isDarkMode ? "#e0e0e0" : "#333",
  };

  const userDetailsContainerStyle = {
    marginTop: "2.8%",
    marginLeft: "-1.5%",
    position: "relative",
    width: "100%",
  };

  const completeCv = {
    backgroundColor: isDarkMode ? "#15202B" : "",
  };

  return (
    <div className="container-fluid rounded">
      <style>{styles}</style>
      <div className="d-flex flex-column"></div>
      <div style={{ ...contentStyle, ...completeCv }} className="border-0 m-3">
        <div className="d-md-flex">
          <div className="me-md-4 mb-3 mb-md-0 me-sm-5">
            <Profile />
          </div>
          <div
            className={` ${
              window.innerWidth >= 768 && window.innerWidth <= 1050
                ? "mx-2"
                : "mx-0"
            }`}
            style={userDetailsContainerStyle}
          >
            <UsersDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteCv;

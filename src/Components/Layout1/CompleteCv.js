import React, { useContext } from "react";
import Profile from "./Profile/Profile";
import UsersDetails from "./UserDetalsCom/UsersDetails";
import { LayoutContext } from "../Context/LayoutContext";

const CompleteCv = () => {
  const { selectedLayout, setSelectedLayout, isDarkMode } =
    useContext(LayoutContext);

  const handleLayoutChange = (layoutNumber) => {
    setSelectedLayout(layoutNumber);
  };

  const tabStyle = {
    padding: "10px 20px",
    backgroundColor: isDarkMode ? "#333" : "#f0f0f0",
    color: isDarkMode ? "#f0f0f0" : "#333",
    border: "1px solid transparent",
    cursor: "pointer",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    flex: 1,
    textAlign: "center",
    transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
  };

  const activeTabStyle = {
    ...tabStyle,
    backgroundColor: isDarkMode ? "#007bff" : "#007bff",
    color: "#ffffff",
    borderColor: "#007bff",
  };

  const contentStyle = {
    padding: "20px",
    borderTop: "none",
    borderRadius: "0 0 5px 5px",
    position: "relative",
    backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
    color: isDarkMode ? "#e0e0e0" : "#333",
  };

  const userDetailsContainerStyle = {
    marginTop: "2.7%",
    marginLeft: "-1.5%",
    position: "relative",
    width: "100%",
  };

  return (
    <div className="container-fluid">
      <div className="">
        <button
          className="btn btn-outline-secondary rounded-0"
          style={selectedLayout === 1 ? activeTabStyle : tabStyle}
          onClick={() => handleLayoutChange(1)}
        >
          Layout 1
        </button>
        <button
          className="btn btn-outline-secondary rounded-0"
          style={selectedLayout === 2 ? activeTabStyle : tabStyle}
          onClick={() => handleLayoutChange(2)}
        >
          Layout 2
        </button>
        <button
          className="btn btn-outline-secondary rounded-0"
          style={selectedLayout === 3 ? activeTabStyle : tabStyle}
          onClick={() => handleLayoutChange(3)}
        >
          Layout 3
        </button>
      </div>
      <div style={contentStyle} className=" border-0 ">
        <div className="d-md-flex">
          <div className="me-md-4 mb-3 mb-md-0  me-sm-5">
            <Profile />
          </div>
          <div style={userDetailsContainerStyle}>
            <UsersDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteCv;

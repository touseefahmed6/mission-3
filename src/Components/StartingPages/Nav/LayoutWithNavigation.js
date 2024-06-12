import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Navigation from "./Navigation";

const LayoutWithNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Navigation") {
      navigate("WelcomePage");
    }
  }, [location.pathname, navigate]);

  return (
    <div>
      <Navigation />
      <div style={{ marginTop: "60px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutWithNavigation;

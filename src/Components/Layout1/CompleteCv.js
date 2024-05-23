import React from "react";
import UsersDetails from "./UserDetalsCom/UsersDetails";
import Profile from "./Profile/Profile";

const responsiveMarginLeft = (width) => {
  if (width <= 768) {
    return "0";
  } else {
    return "-5%";
  }
};

export default function CompleteCv() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const marginLeft = responsiveMarginLeft(windowWidth);

  return (
    <div className="d-md-flex">
      <div className="me-md-3 mb-3 mb-md-0">
        <Profile />
      </div>
      <div className="" style={{ marginTop: "2.7%", marginLeft }}>
        <UsersDetails />
      </div>
    </div>
  );
}

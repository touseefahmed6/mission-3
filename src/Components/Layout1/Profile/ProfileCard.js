import React, { useContext } from "react";
import ProfileImage from "../../Images/Touseef.jpg";
import { LayoutContext } from "../../Context/LayoutContext";

export default function ProfileCard() {
  const { selectedLayout, isDarkMode } = useContext(LayoutContext);

  let imageClass;
  let imageSize;
  let imageContainerClass = "";
  let imageStyle = {
    zIndex: "1",
  };

  if (selectedLayout === 1) {
    imageClass = "rounded";
    imageSize = "140px";
    imageStyle.marginTop = "-35px";
  } else if (selectedLayout === 2) {
    imageClass = "rounded-circle";
    imageSize = "170px";
    imageStyle.marginTop = "-35px";
  } else if (selectedLayout === 3) {
    imageClass = "rounded-circle";
    imageSize = "180px";
    imageContainerClass = "d-flex justify-content-center";
    imageStyle.marginTop = "15%";
  } else if (selectedLayout === 4) {
    imageSize = "170px";
    imageContainerClass = "d-flex justify-content-center";
    imageStyle.marginTop = "15%";
  }

  imageStyle.width = imageSize;
  imageStyle.height = imageSize;

  const cardStyle = {
    width: "100%",
    minWidth: "18rem",
    backgroundColor: isDarkMode ? "#444" : "#fff",
    color: isDarkMode ? "#e0e0e0" : "#333",
    border: isDarkMode ? "2px solid #ddd" : "1px solid #ddd",
  };

  const titleStyle = {
    letterSpacing: "2px",
    color: isDarkMode ? "#ffffff" : "#333",
  };

  const subtitleStyle = {
    backgroundColor: isDarkMode ? "#666" : "#DDE6ED",
    fontSize: "13px",
    letterSpacing: "2px",
    color: isDarkMode ? "#e0e0e0" : "#333",
  };

  return (
    <div className="" style={{ margin: "0", marginLeft: "-1px" }}>
      <div
        className="card text-center border-bottom-0 rounded"
        style={cardStyle}
      >
        {selectedLayout === 3 ? (
          <div className={imageContainerClass} style={{ marginTop: "-35px" }}>
            <img
              src={ProfileImage}
              className={imageClass}
              alt="Profile"
              style={imageStyle}
            />
          </div>
        ) : (
          <img
            src={ProfileImage}
            className={`card-img-top mx-auto ${imageClass}`}
            alt="Profile"
            style={imageStyle}
          />
        )}
        <div className="card-body">
          <h5 className="card-title" style={titleStyle}>
            TOUSEEF <b>AHMED</b>
          </h5>
          <p className="d-inline-block rounded px-2" style={subtitleStyle}>
            FULLSTACK DEVELOPER
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook-f mx-2 text-primary"></i>
            <i className="fab fa-twitter mx-2 text-primary"></i>
            <i className="fab fa-linkedin-in mx-2 text-primary"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { LayoutContext } from "../../Context/LayoutContext";

const Certifications = () => {
  const { isDarkMode, userData } = useContext(LayoutContext);

  // Destructure certifications from userData with default empty array
  const { certifications = [] } = userData;

  const certificationCard = {
    backgroundColor: isDarkMode ? "#22303C" : "#f0f0f0",
  };

  return (
    <div className="card border-0 p-4 rounded-0" style={certificationCard}>
      <h4
        className={`card-title poppins-bold`}
        style={{
          letterSpacing: "1px",
          color: isDarkMode ? "#e0e0e0" : "#374151",
        }}
      >
        CERTIFICATIONS
      </h4>
      <div
        className="bg-primary"
        style={{
          height: "0.5px",
          marginBottom: "10px",
        }}
      ></div>

      {Array.isArray(certifications) &&
        certifications.map((certification, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <h6
              className="text-start mb-2 poppins-medium"
              style={{ color: isDarkMode ? "#e0e0e0" : "#374151" }}
            >
              <li>
                {certification.certificateTitle} | {certification.institute}
              </li>
            </h6>
            <span className=" mb-2 poppins-regular">
              {certification.completedYear}
            </span>
          </div>
        ))}
    </div>
  );
};

export default Certifications;

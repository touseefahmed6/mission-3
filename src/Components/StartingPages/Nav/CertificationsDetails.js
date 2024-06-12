import React, { useContext, useState, useEffect } from "react";
import { LayoutContext } from "../../Context/LayoutContext";

const CertificationsDetails = () => {
  const { isDarkMode, userData, setUserData } = useContext(LayoutContext);
  const [certifications, setCertifications] = useState([
    { certificateTitle: "", institute: "", completedYear: "" },
  ]);
  const [submittedData, setSubmittedData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const inputStyle = {
    backgroundColor: isDarkMode ? "#192734" : "#fff",
    color: isDarkMode ? "#FFFFFF" : "#333",
  };

  useEffect(() => {
    const savedCertifications = localStorage.getItem("certificationsFormData");
    if (savedCertifications) {
      setSubmittedData(JSON.parse(savedCertifications));
    }
  }, []);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedCertifications = [...certifications];
    updatedCertifications[index][name] = value;
    setCertifications(updatedCertifications);
  };

  const handleAddCertification = () => {
    setCertifications([
      ...certifications,
      { certificateTitle: "", institute: "", completedYear: "" },
    ]);
  };

  const handleRemoveCertification = (index) => {
    const updatedCertifications = [...certifications];
    updatedCertifications.splice(index, 1);
    setCertifications(updatedCertifications);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prevUserData) => ({
      ...prevUserData,
      certifications: certifications,
    }));
    localStorage.setItem(
      "certificationsFormData",
      JSON.stringify(certifications)
    );
    setSubmittedData([...certifications]);
    setShowDetails(true);
  };

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
  };

  const handleEditDetails = () => {
    setCertifications([...submittedData]);
    setShowDetails(false);
  };

  const handleReset = () => {
    setCertifications([
      { certificateTitle: "", institute: "", completedYear: "" },
    ]);
    setSubmittedData([]);
    setShowDetails(false);
    localStorage.removeItem("certificationsFormData");
  };

  return (
    <div className="container p-4">
      <h2 className="mt-4 mb-2 poppins-semibold">CERTIFICATION DETAILS</h2>
      <div
        className="bg-primary"
        style={{ height: "0.5px", marginBottom: "15px" }}
      ></div>
      <form onSubmit={handleSubmit}>
        {certifications.map((certification, index) => (
          <div key={index}>
            <div className="row mb-3">
              <div className="col">
                <label
                  htmlFor={`certificateTitle-${index}`}
                  className="form-label poppins-semibold"
                >
                  Certificate Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`certificateTitle-${index}`}
                  name="certificateTitle"
                  value={certification.certificateTitle}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                  placeholder="Enter certificate title"
                  style={inputStyle}
                />
              </div>
              <div className="col">
                <label
                  htmlFor={`institute-${index}`}
                  className="form-label poppins-semibold"
                >
                  Institute
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`institute-${index}`}
                  name="institute"
                  value={certification.institute}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                  placeholder="Enter institute name"
                  style={inputStyle}
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor={`completedYear-${index}`}
                className="form-label poppins-semibold"
              >
                Completed Year
              </label>
              <input
                type="text"
                className="form-control"
                id={`completedYear-${index}`}
                name="completedYear"
                value={certification.completedYear}
                onChange={(e) => handleInputChange(index, e)}
                required
                placeholder="Enter completed year"
                style={inputStyle}
              />
            </div>
            {index > 0 && (
              <button
                type="button"
                className="btn btn-danger mb-3"
                onClick={() => handleRemoveCertification(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className="btn btn-outline-primary mb-3 mt-3 poppins-medium"
          onClick={handleAddCertification}
        >
          Add Certification
        </button>

        <button
          type="submit"
          className="btn btn-success mx-2 mb-3 mt-3 poppins-medium"
        >
          Save Certification Details
        </button>
      </form>

      <div className="d-flex justify-content-between mt-3">
        {!showDetails && (
          <button
            type="button"
            className="btn btn-primary poppins-medium"
            onClick={handleShowDetails}
          >
            Show Saved Details
          </button>
        )}
        {showDetails && (
          <>
            <button
              type="button"
              className="btn btn-secondary poppins-medium"
              onClick={handleHideDetails}
            >
              Hide Details
            </button>
            <button
              type="button"
              className="btn btn-warning mx-2 poppins-medium"
              onClick={handleEditDetails}
            >
              Edit Details
            </button>
          </>
        )}
        <button
          type="button"
          className="btn btn-danger poppins-medium"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      {showDetails && (
        <div className="mt-4">
          <h3>Submitted Certification Details</h3>
          <div
            className="bg-primary"
            style={{ height: "0.5px", marginBottom: "10px" }}
          ></div>
          {submittedData.map((certification, index) => (
            <div key={index} className="mb-3">
              <p>
                <strong>Certificate Title:</strong>{" "}
                {certification.certificateTitle}
              </p>
              <p>
                <strong>Institute:</strong> {certification.institute}
              </p>
              <p>
                <strong>Completed Year:</strong> {certification.completedYear}
              </p>
              <div
                className="bg-primary"
                style={{ height: "0.5px", marginBottom: "10px" }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CertificationsDetails;

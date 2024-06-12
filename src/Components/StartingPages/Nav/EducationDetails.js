import React, { useState, useContext, useEffect } from "react";
import { LayoutContext } from "../../Context/LayoutContext";

const EducationDetails = () => {
  const { userData, setUserData, isDarkMode } = useContext(LayoutContext);
  const [educations, setEducations] = useState([
    {
      instituteName: "",
      location: "",
      degreeTitle: "",
      joiningMonth: "",
      joiningYear: "",
      leavingMonth: "",
      leavingYear: "",
      present: true,
    },
  ]);
  const [submittedData, setSubmittedData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const inputStyle = {
    backgroundColor: isDarkMode ? "#192734" : "#fff",
    color: isDarkMode ? "#FFFFFF" : "#333",
  };
  const formLabelStyle = {
    color: isDarkMode ? "#e0e0e0" : "#374151",
  };

  useEffect(() => {
    const savedEducationDetails = localStorage.getItem(
      "educationDetailsFormData"
    );
    if (savedEducationDetails) {
      setSubmittedData(JSON.parse(savedEducationDetails));
    }
  }, []);

  const handleInputChange = (index, event) => {
    const { name, value, type, checked } = event.target;
    const updatedEducations = [...educations];
    if (type === "checkbox") {
      updatedEducations[index].present = checked;
      if (checked) {
        updatedEducations[index].leavingMonth = "";
        updatedEducations[index].leavingYear = "";
      }
    } else {
      updatedEducations[index][name] = value;
    }
    setEducations(updatedEducations);
  };

  const handleAddEducation = () => {
    setEducations([
      ...educations,
      {
        instituteName: "",
        location: "",
        degreeTitle: "",
        joiningMonth: "",
        joiningYear: "",
        leavingMonth: "",
        leavingYear: "",
        present: true,
      },
    ]);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prevData) => ({
      ...prevData,
      educationDetails: educations,
    }));
    localStorage.setItem(
      "educationDetailsFormData",
      JSON.stringify(educations)
    );
    setSubmittedData([...educations]);
    setShowDetails(true);
  };

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
  };

  const handleEditDetails = () => {
    setEducations([...submittedData]);
    setShowDetails(false);
  };

  const handleReset = () => {
    setEducations([
      {
        instituteName: "",
        location: "",
        degreeTitle: "",
        joiningMonth: "",
        joiningYear: "",
        leavingMonth: "",
        leavingYear: "",
        present: true,
      },
    ]);
    setSubmittedData([]);
    setShowDetails(false);
    localStorage.removeItem("educationDetailsFormData");
  };

  return (
    <div className="container p-4">
      <h2 className="mt-4 mb-2 poppins-semibold">EDUCATION DETAILS</h2>
      <div
        className="bg-primary"
        style={{ height: "0.5px", marginBottom: "15px" }}
      ></div>

      <form onSubmit={handleSubmit}>
        {educations.map((education, index) => (
          <div key={index}>
            <div className="row mb-3">
              <div className="col">
                <label
                  htmlFor={`instituteName-${index}`}
                  className="form-label poppins-semibold"
                  style={formLabelStyle}
                >
                  Institute Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`instituteName-${index}`}
                  name="instituteName"
                  value={education.instituteName}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                  style={inputStyle}
                  placeholder="Enter institute"
                />
              </div>
              <div className="col">
                <label
                  htmlFor={`degreeTitle-${index}`}
                  className="form-label poppins-semibold"
                  style={formLabelStyle}
                >
                  Degree Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`degreeTitle-${index}`}
                  name="degreeTitle"
                  value={education.degreeTitle}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                  style={inputStyle}
                  placeholder="Enter degree title"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor={`location-${index}`}
                className="form-label poppins-semibold"
                style={formLabelStyle}
              >
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id={`location-${index}`}
                name="location"
                value={education.location}
                onChange={(e) => handleInputChange(index, e)}
                required
                style={inputStyle}
                placeholder="Enter location"
              />
            </div>

            <div className="row mb-3">
              <div className="col">
                <label
                  htmlFor={`joiningMonth-${index}`}
                  className="form-label poppins-semibold"
                  style={formLabelStyle}
                >
                  Joining Month
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`joiningMonth-${index}`}
                  name="joiningMonth"
                  value={education.joiningMonth}
                  onChange={(e) => handleInputChange(index, e)}
                  style={inputStyle}
                  placeholder="Enter joining month"
                />
              </div>
              <div className="col">
                <label
                  htmlFor={`joiningYear-${index}`}
                  className="form-label poppins-semibold"
                  style={formLabelStyle}
                >
                  Joining Year
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`joiningYear-${index}`}
                  name="joiningYear"
                  value={education.joiningYear}
                  onChange={(e) => handleInputChange(index, e)}
                  style={inputStyle}
                  placeholder="Enter joining year"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label
                  htmlFor={`leavingMonth-${index}`}
                  className="form-label poppins-semibold"
                  style={formLabelStyle}
                >
                  Leaving Month
                </label>
                <input
                  type="text"
                  className="form-control poppins-semibold"
                  id={`leavingMonth-${index}`}
                  name="leavingMonth"
                  value={education.leavingMonth}
                  onChange={(e) => handleInputChange(index, e)}
                  disabled={education.present}
                  style={inputStyle}
                  placeholder="Enter leaving month"
                />
              </div>
              <div className="col">
                <label
                  htmlFor={`leavingYear-${index}`}
                  className="form-label poppins-semibold"
                  style={formLabelStyle}
                >
                  Leaving Year
                </label>
                <input
                  type="text"
                  className="form-control poppins-semibold"
                  id={`leavingYear-${index}`}
                  name="leavingYear"
                  value={education.leavingYear}
                  onChange={(e) => handleInputChange(index, e)}
                  disabled={education.present}
                  style={inputStyle}
                  placeholder="Enter leaving year"
                />
              </div>
              <div className="col d-flex align-items-end">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`present-${index}`}
                    name="present"
                    checked={education.present}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`present-${index}`}
                  >
                    Present
                  </label>
                </div>
              </div>
            </div>
            {index > 0 && (
              <button
                type="button"
                className="btn btn-danger mb-3"
                onClick={() => handleRemoveEducation(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className="btn btn-outline-primary mb-3 mt-3 poppins-medium"
          onClick={handleAddEducation}
        >
          Add Education
        </button>

        <button
          type="submit"
          className="btn btn-success mx-2 mb-3 mt-3 poppins-medium"
        >
          Save Education Details
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
          <h3>Submitted Education Details</h3>
          <div
            className="bg-primary"
            style={{ height: "0.5px", marginBottom: "10px" }}
          ></div>
          {submittedData.map((education, index) => (
            <div key={index} className="mb-3">
              <p>
                <strong>Institute Name:</strong> {education.instituteName}
              </p>
              <p>
                <strong>Location:</strong> {education.location}
              </p>
              <p>
                <strong>Degree Title:</strong> {education.degreeTitle}
              </p>
              <p>
                <strong>Joining Date:</strong> {education.joiningMonth}{" "}
                {education.joiningYear}
              </p>
              <p>
                <strong>Leaving Date:</strong>{" "}
                {education.present
                  ? "Present"
                  : `${education.leavingMonth} ${education.leavingYear}`}
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

export default EducationDetails;

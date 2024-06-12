import React, { useState, useContext, useEffect } from "react";
import { LayoutContext } from "../../Context/LayoutContext";

const ExperienceDetails = () => {
  const { userData, setUserData, isDarkMode } = useContext(LayoutContext);
  const [experiences, setExperiences] = useState([
    {
      company: "",
      jobTitle: "",
      experienceDescription: "",
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

  useEffect(() => {
    const savedExperienceDetails = localStorage.getItem(
      "experienceDetailsFormData"
    );
    if (savedExperienceDetails) {
      setSubmittedData(JSON.parse(savedExperienceDetails));
    }
  }, []);

  const handleInputChange = (index, event) => {
    const { name, value, type, checked } = event.target;
    const updatedExperiences = [...experiences];
    if (type === "checkbox") {
      updatedExperiences[index].present = checked;
      if (checked) {
        updatedExperiences[index].leavingMonth = "";
        updatedExperiences[index].leavingYear = "";
      }
    } else {
      updatedExperiences[index][name] = value;
    }
    setExperiences(updatedExperiences);
  };

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        company: "",
        jobTitle: "",
        experienceDescription: "",
        joiningMonth: "",
        joiningYear: "",
        leavingMonth: "",
        leavingYear: "",
        present: true,
      },
    ]);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prevData) => ({
      ...prevData,
      experienceDetails: experiences,
    }));
    localStorage.setItem(
      "experienceDetailsFormData",
      JSON.stringify(experiences)
    );
    setSubmittedData([...experiences]);
    setShowDetails(true);
  };

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
  };

  const handleEditDetails = () => {
    setExperiences([...submittedData]);
    setShowDetails(false);
  };

  const handleReset = () => {
    setExperiences([
      {
        company: "",
        jobTitle: "",
        experienceDescription: "",
        joiningMonth: "",
        joiningYear: "",
        leavingMonth: "",
        leavingYear: "",
        present: true,
      },
    ]);
    setSubmittedData([]);
    setShowDetails(false);
    localStorage.removeItem("experienceDetailsFormData");
  };

  return (
    <div className="container  p-4">
      <h2 className="mt-4 mb-2 poppins-semibold">EXPERIENCE DETAILS</h2>
      <div
        className="bg-primary"
        style={{ height: "0.5px", marginBottom: "15px" }}
      ></div>
      <form onSubmit={handleSubmit}>
        {experiences.map((experience, index) => (
          <div key={index}>
            <div className="row mb-3">
              <div className="col">
                <label
                  htmlFor={`company-${index}`}
                  className="form-label poppins-semibold"
                >
                  Company Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`company-${index}`}
                  name="company"
                  value={experience.company}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                  style={inputStyle}
                  placeholder="Enter company name"
                />
              </div>
              <div className="col">
                <label
                  htmlFor={`jobTitle-${index}`}
                  className="form-label poppins-semibold"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`jobTitle-${index}`}
                  name="jobTitle"
                  value={experience.jobTitle}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                  style={inputStyle}
                  placeholder="Enter job title"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor={`experienceDescription-${index}`}
                className="form-label poppins-semibold"
              >
                Job Description
              </label>
              <textarea
                className="form-control"
                id={`experienceDescription-${index}`}
                name="experienceDescription"
                rows="4"
                value={experience.experienceDescription}
                onChange={(e) => handleInputChange(index, e)}
                required
                style={inputStyle}
                placeholder="Job description"
              ></textarea>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label
                  htmlFor={`joiningMonth-${index}`}
                  className="form-label poppins-semibold"
                >
                  Joining Month
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`joiningMonth-${index}`}
                  name="joiningMonth"
                  value={experience.joiningMonth}
                  onChange={(e) => handleInputChange(index, e)}
                  style={inputStyle}
                  placeholder="Enter joining month"
                />
              </div>
              <div className="col">
                <label
                  htmlFor={`joiningYear-${index}`}
                  className="form-label poppins-semibold"
                >
                  Joining Year
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`joiningYear-${index}`}
                  name="joiningYear"
                  value={experience.joiningYear}
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
                >
                  Leaving Month
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`leavingMonth-${index}`}
                  name="leavingMonth"
                  value={experience.leavingMonth}
                  onChange={(e) => handleInputChange(index, e)}
                  disabled={experience.present}
                  style={inputStyle}
                  placeholder="Enter leaving month"
                />
              </div>
              <div className="col">
                <label
                  htmlFor={`leavingYear-${index}`}
                  className="form-label poppins-semibold"
                >
                  Leaving Year
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`leavingYear-${index}`}
                  name="leavingYear"
                  value={experience.leavingYear}
                  onChange={(e) => handleInputChange(index, e)}
                  disabled={experience.present}
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
                    checked={experience.present}
                    onChange={(e) => handleInputChange(index, e)}
                    style={inputStyle}
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
                onClick={() => handleRemoveExperience(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className="btn btn-outline-primary mb-3 mt-3 poppins-medium"
          onClick={handleAddExperience}
        >
          Add Experience
        </button>

        <button
          type="submit"
          className="btn btn-success mx-2 mb-3 mt-3 poppins-medium"
        >
          Save Experience Details
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
          <h3>Submitted Experience Details</h3>
          <div
            className="bg-primary"
            style={{ height: "0.5px", marginBottom: "10px" }}
          ></div>
          {submittedData.map((experience, index) => (
            <div key={index} className="mb-3">
              <p>
                {" "}
                <strong>Company:</strong> {experience.company}
              </p>
              <p>
                <strong>Job Title:</strong> {experience.jobTitle}
              </p>
              <p>
                <strong>Job Description:</strong>{" "}
                {experience.experienceDescription}
              </p>
              <p>
                <strong>Joining Date:</strong> {experience.joiningMonth}{" "}
                {experience.joiningYear}
              </p>
              <p>
                <strong>Leaving Date:</strong>{" "}
                {experience.present
                  ? "Present"
                  : `${experience.leavingMonth} ${experience.leavingYear}`}
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

export default ExperienceDetails;

import React, { useState, useContext, useEffect } from "react";
import { LayoutContext } from "../../Context/LayoutContext";

const ProjectsDetails = () => {
  const { userData, setUserData, isDarkMode } = useContext(LayoutContext);
  const [projects, setProjects] = useState([
    {
      projectTitle: "",
      projectDescription: "",
    },
  ]);
  const [submittedData, setSubmittedData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const inputStyle = {
    backgroundColor: isDarkMode ? "#192734" : "#fff",
    color: isDarkMode ? "#FFFFFF" : "#333",
  };

  useEffect(() => {
    const savedProjectsDetails = localStorage.getItem(
      "projectsDetailsFormData"
    );
    if (savedProjectsDetails) {
      setSubmittedData(JSON.parse(savedProjectsDetails));
    }
  }, []);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProjects = [...projects];
    updatedProjects[index][name] = value;
    setProjects(updatedProjects);
  };

  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        projectTitle: "",
        projectDescription: "",
      },
    ]);
  };

  const handleRemoveProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prevData) => ({
      ...prevData,
      projectsDetails: projects,
    }));
    localStorage.setItem("projectsDetailsFormData", JSON.stringify(projects));
    setSubmittedData([...projects]);
    setShowDetails(true);
  };

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
  };

  const handleEditDetails = () => {
    setProjects([...submittedData]);
    setShowDetails(false);
  };

  const handleReset = () => {
    setProjects([
      {
        projectTitle: "",
        projectDescription: "",
      },
    ]);
    setSubmittedData([]);
    setShowDetails(false);
    localStorage.removeItem("projectsDetailsFormData");
  };

  return (
    <div className="container p-4">
      <h2 className="mt-4 mb-2 poppins-semibold">PROJECT DETAILS</h2>
      <div
        className="bg-primary"
        style={{ height: "0.5px", marginBottom: "15px" }}
      ></div>
      <form onSubmit={handleSubmit}>
        {projects.map((project, index) => (
          <div key={index}>
            <div className="mb-3">
              <label
                htmlFor={`projectTitle-${index}`}
                className="form-label poppins-semibold"
              >
                Project Title
              </label>
              <input
                type="text"
                className="form-control"
                id={`projectTitle-${index}`}
                name="projectTitle"
                value={project.projectTitle}
                onChange={(e) => handleInputChange(index, e)}
                required
                placeholder="Enter project title"
                style={inputStyle}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor={`projectDescription-${index}`}
                className="form-label poppins-semibold"
              >
                Project Description
              </label>
              <textarea
                className="form-control"
                id={`projectDescription-${index}`}
                name="projectDescription"
                rows="4"
                value={project.projectDescription}
                onChange={(e) => handleInputChange(index, e)}
                required
                style={inputStyle}
                placeholder="Enter project description"
              ></textarea>
            </div>
            {index > 0 && (
              <button
                type="button"
                className="btn btn-danger mb-3"
                onClick={() => handleRemoveProject(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className="btn btn-outline-primary mb-3 mt-3 poppins-medium"
          onClick={handleAddProject}
        >
          Add Project
        </button>

        <button
          type="submit"
          className="btn btn-success mx-2 mb-3 mt-3 poppins-medium"
        >
          Save Projects Details
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
          <h3>Submitted Project Details</h3>
          <div
            className="bg-primary"
            style={{ height: "0.5px", marginBottom: "10px" }}
          ></div>
          {submittedData.map((project, index) => (
            <div key={index} className="mb-3">
              <p>
                <strong>Project Title:</strong> {project.projectTitle}
              </p>
              <p>
                <strong>Project Description:</strong>{" "}
                {project.projectDescription}
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

export default ProjectsDetails;

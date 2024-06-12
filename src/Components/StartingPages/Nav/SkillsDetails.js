import React, { useState, useContext, useEffect } from "react";
import { LayoutContext } from "../../Context/LayoutContext";

const SkillsDetails = () => {
  const { userData, setUserData, isDarkMode } = useContext(LayoutContext);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [proficiencies, setProficiencies] = useState({});
  const [skillOptions] = useState([
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Python",
    "SQL",
  ]);
  const [submittedData, setSubmittedData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const inputStyle = {
    backgroundColor: isDarkMode ? "#192734" : "#fff",
    color: isDarkMode ? "#FFFFFF" : "#333",
  };

  useEffect(() => {
    const savedSkillsDetails = localStorage.getItem("skillsDetailsFormData");
    if (savedSkillsDetails) {
      const { selectedSkills, proficiencies } = JSON.parse(savedSkillsDetails);
      setSelectedSkills(selectedSkills);
      setProficiencies(proficiencies);
      setSubmittedData([{ selectedSkills, proficiencies }]);
    }
  }, []);

  const handleSkillSelect = (event) => {
    const selectedSkill = event.target.value;
    if (!selectedSkills.includes(selectedSkill)) {
      setSelectedSkills([...selectedSkills, selectedSkill]);
    }
  };

  const handleProficiencyChange = (event, skill) => {
    const { value } = event.target;
    setProficiencies({ ...proficiencies, [skill]: value });
  };

  const handleRemoveSkill = (skill) => {
    const updatedSkills = selectedSkills.filter((s) => s !== skill);
    const updatedProficiencies = { ...proficiencies };
    delete updatedProficiencies[skill];
    setSelectedSkills(updatedSkills);
    setProficiencies(updatedProficiencies);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prevData) => ({
      ...prevData,
      skillsDetails: {
        selectedSkills,
        proficiencies,
      },
    }));
    localStorage.setItem(
      "skillsDetailsFormData",
      JSON.stringify({ selectedSkills, proficiencies })
    );
    setSubmittedData([{ selectedSkills, proficiencies }]);
    setShowDetails(true);
  };

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
  };

  const handleEditDetails = () => {
    const { selectedSkills, proficiencies } = submittedData[0];
    setSelectedSkills(selectedSkills);
    setProficiencies(proficiencies);
    setShowDetails(false);
  };

  const handleReset = () => {
    setSelectedSkills([]);
    setProficiencies({});
    setSubmittedData([]);
    setShowDetails(false);
    localStorage.removeItem("skillsDetailsFormData");
  };

  return (
    <div className="container p-4">
      <h2 className="mt-4 mb-2 poppins-semibold">SKILLS DETAILS</h2>
      <div
        className="bg-primary"
        style={{ height: "0.5px", marginBottom: "15px" }}
      ></div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="skillSelect" className="form-label poppins-semibold">
            Select Skill:
          </label>
          <select
            className="form-select"
            id="skillSelect"
            onChange={handleSkillSelect}
            value=""
            style={inputStyle}
          >
            <option value="" disabled>
              Select a Skill
            </option>
            {skillOptions.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>

        {selectedSkills.length > 0 && (
          <div className="mb-3">
            <label className="form-label">Selected Skills:</label>
            <ul className="list-group">
              {selectedSkills.map((skill, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={inputStyle}
                >
                  {skill}
                  <div className="input-group" style={{ maxWidth: "150px" }}>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Proficiency (%)"
                      value={proficiencies[skill] || ""}
                      onChange={(e) => handleProficiencyChange(e, skill)}
                      min="0"
                      max="100"
                      required
                      style={inputStyle}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => handleRemoveSkill(skill)}
                    >
                      X
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button type="submit" className="btn btn-success poppins-medium">
          Save Skills Details
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
          <h3>Submitted Skills Details</h3>
          <div
            className="bg-primary"
            style={{ height: "0.5px", marginBottom: "10px" }}
          ></div>
          {submittedData.map((data, index) => (
            <div key={index} className="mb-3">
              <p>
                <strong>Selected Skills:</strong>{" "}
                {data.selectedSkills.join(", ")}
              </p>
              <ul>
                {data.selectedSkills.map((skill, index) => (
                  <li key={index}>
                    <strong>{skill}:</strong> {data.proficiencies[skill]}%
                  </li>
                ))}
              </ul>
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

export default SkillsDetails;

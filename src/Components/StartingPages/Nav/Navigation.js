import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutContext } from "../../Context/LayoutContext";
import ProfileImage from "../../Images/Touseef.jpg";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
  FaCode,
  FaCertificate,
  FaSignOutAlt,
} from "react-icons/fa";

<style>` .navbar-nav:hover{}`</style>;
export default function Navigation() {
  const { isDarkMode } = useContext(LayoutContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  const inputStyle = {
    backgroundColor: isDarkMode ? "#192734" : "#fff",
    color: isDarkMode ? "#FFFFFF" : "#333",
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-dark shadow-sm"
        style={{ backgroundColor: isDarkMode ? "#22303C" : "#fff" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: isDarkMode ? "#e0e0e0" : "#374151" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{ color: isDarkMode ? "#e0e0e0" : "#374151" }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
              <li className="nav-item mx-2">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center poppins-bold"
                  onClick={() => navigate("/navigation/welcomePage")}
                  style={{ color: isDarkMode ? " #e0e0e0" : "#374151" }}
                >
                  <FaHome className="nav-icon me-1" />
                  <span className="align-middle">Home</span>
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center poppins-bold"
                  onClick={() => navigate("/navigation/PersonalDetailsForm")}
                  style={{ color: isDarkMode ? " #e0e0e0" : "#374151" }}
                >
                  <FaUser className="nav-icon me-1" />
                  <span className="align-middle">Personal Details</span>
                </a>
              </li>
              <li className="nav-item mx-1">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center poppins-bold mx-2"
                  onClick={() => navigate("/navigation/EducationDetails")}
                  style={{ color: isDarkMode ? " #e0e0e0" : "#374151" }}
                >
                  <FaGraduationCap className="nav-icon me-1" />
                  <span className="align-middle">Education</span>
                </a>
              </li>
              <li className="nav-item mx-1">
                <a
                  href="#"
                  className="nav-link  d-flex align-items-center poppins-bold mx-2"
                  onClick={() => navigate("/navigation/ExperienceDetails")}
                  style={{ color: isDarkMode ? " #e0e0e0" : "#374151" }}
                >
                  <FaBriefcase className="nav-icon me-1" />
                  <span className="align-middle">Experience</span>
                </a>
              </li>
              <li className="nav-item mx-1">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center poppins-bold mx-2"
                  onClick={() => navigate("/navigation/ProjectsDetails")}
                  style={{ color: isDarkMode ? " #e0e0e0" : "#374151" }}
                >
                  <FaProjectDiagram className="nav-icon me-1" />
                  <span className="align-middle">Projects</span>
                </a>
              </li>
              <li className="nav-item mx-1">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center poppins-bold mx-2"
                  onClick={() => navigate("/navigation/SkillsDetails")}
                  style={{ color: isDarkMode ? " #e0e0e0" : "#374151" }}
                >
                  <FaCode className="nav-icon me-1" />
                  <span className="align-middle">Skills</span>
                </a>
              </li>
              <li className="nav-item mx-1">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center poppins-bold mx-2"
                  onClick={() => navigate("/navigation/CertificationsDetails")}
                  style={{ color: isDarkMode ? " #e0e0e0" : "#374151" }}
                >
                  <FaCertificate className="nav-icon me-1" />
                  <span className="align-middle">Certifications</span>
                </a>
              </li>
            </ul>

            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark d-flex align-items-center poppins-semibold"
                  href="/#"
                  id="navbarDropdownProfile"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={ProfileImage}
                    className="rounded-circle img-fluid"
                    height="25"
                    width="25"
                    alt=""
                    style={{ borderRadius: "50%", marginRight: "8px" }}
                  />
                  <span
                    className="align-middle"
                    style={{ color: isDarkMode ? " #e0e0e0" : "#374151" }}
                  >
                    Touseef Ahmed
                  </span>
                </a>

                <ul
                  className="dropdown-menu dropdown-menu-end shadow-lg"
                  aria-labelledby="navbarDropdownProfile"
                >
                  <li>
                    <button
                      className="dropdown-item d-flex align-items-center  poppins-medium"
                      style={{
                        fontSize: "0.9rem",
                      }}
                      onClick={handleLogout}
                    >
                      <FaSignOutAlt className="me-2" /> Log Out
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

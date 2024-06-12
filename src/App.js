import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LayoutProvider } from "./Components/Context/LayoutContext";
import CompleteCv from "./Components/Layout1/CompleteCv";
import Login from "./Components/StartingPages/Login";
import WelcomePage from "./Components/StartingPages/WelcomePage";
import ToggleSwitch from "./Components/Context/ToggleSwitch";
import SignUp from "./Components/StartingPages/SignUp";
import LayoutWithNavigation from "./Components/StartingPages/Nav/LayoutWithNavigation";
import PersonalDetailsForm from "./Components/StartingPages/Nav/PersonalDetailsForm";
import EducationDetails from "./Components/StartingPages/Nav/EducationDetails";
import ExperienceDetails from "./Components/StartingPages/Nav/ExperienceDetails";
import ProjectsDetails from "./Components/StartingPages/Nav/ProjectsDetails";
import SkillsDetails from "./Components/StartingPages/Nav/SkillsDetails";
import CertificationsDetails from "./Components/StartingPages/Nav/CertificationsDetails";
import Footer from "./Components/StartingPages/Footer";

function RouterComponent() {
  const location = useLocation();
  const showFooter = !["/", "/signup"].includes(location.pathname);

  return (
    <div className="router-container">
      <ToggleSwitch />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/completeCv" element={<CompleteCv />} />

        <Route path="/navigation" element={<LayoutWithNavigation />}>
          <Route path="welcomePage" element={<WelcomePage />} />
          <Route path="PersonalDetailsForm" element={<PersonalDetailsForm />} />
          <Route path="EducationDetails" element={<EducationDetails />} />
          <Route path="ExperienceDetails" element={<ExperienceDetails />} />
          <Route path="ProjectsDetails" element={<ProjectsDetails />} />
          <Route path="SkillsDetails" element={<SkillsDetails />} />
          <Route
            path="CertificationsDetails"
            element={<CertificationsDetails />}
          />
        </Route>
      </Routes>

      <br />
      <br />
      <br />
      {showFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <LayoutProvider>
      <div className="app">
        <BrowserRouter>
          <RouterComponent />
        </BrowserRouter>
      </div>
    </LayoutProvider>
  );
}

export default App;

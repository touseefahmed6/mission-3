import React, { createContext, useState, useEffect } from "react";

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [selectedLayout, setSelectedLayout] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userData, setUserData] = useState({
    personalDetails: {
      fName: "",
      lName: "",
      email: "",
      jobTitle: "",
      dob: "",
      location: "",
      contactNumber: "",
      aboutMe: "",
      skypeUsername: "",
      profileImage: null,
    },
    educationDetails: [],
    experienceDetails: [],
    projects: [],
    skills: [],
    certifications: [],
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const addCertification = (certification) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      certifications: [...prevUserData.certifications, certification],
    }));
  };

  const removeCertification = (index) => {
    setUserData((prevUserData) => {
      const updatedCertifications = [...prevUserData.certifications];
      updatedCertifications.splice(index, 1);
      return {
        ...prevUserData,
        certifications: updatedCertifications,
      };
    });
  };

  return (
    <LayoutContext.Provider
      value={{
        selectedLayout,
        setSelectedLayout,
        isDarkMode,
        toggleTheme,
        userData,
        setUserData,
        addCertification,
        removeCertification,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

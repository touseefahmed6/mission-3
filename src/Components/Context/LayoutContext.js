import React, { createContext, useState, useEffect } from "react";

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [selectedLayout, setSelectedLayout] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <LayoutContext.Provider
      value={{
        selectedLayout,
        setSelectedLayout,
        isDarkMode,
        toggleTheme,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutProvider } from "./Components/Context/LayoutContext";
import CompleteCv from "./Components/Layout1/CompleteCv";
import InputFields from "./Components/StartingPages/InputFields";
import WelcomePage from "./Components/StartingPages/WelcomePage";
import ToggleSwitch from "./Components/Context/ToggleSwitch";

function App() {
  return (
    <LayoutProvider>
      <div className="app">
        <BrowserRouter>
          <ToggleSwitch />
          <Routes>
            <Route path="/" element={<InputFields />} />
            <Route path="/welcomepage" element={<WelcomePage />} />
            <Route path="/completeCv" element={<CompleteCv />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LayoutProvider>
  );
}

export default App;

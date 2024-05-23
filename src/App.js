import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompleteCv from "./Components/Layout1/CompleteCv";
import InputFields from "./Components/StartingPages/InputFields";
import WelcomePage from "./Components/StartingPages/WelcomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputFields />} />
          <Route path="/welcomepage" element={<WelcomePage />} />
          <Route path="/completeCv" element={<CompleteCv />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

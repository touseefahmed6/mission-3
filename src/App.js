import React from "react";
import "./App.css";
import Button from "./Components/Button";
import InputFields from "./Components/InputFields";
import ProfileInfo from "./Components/ProfileInfo";
import ProfileCard from "./Components/ProfileCard";
import AboutMe from "./Components/AboutMe";
import Card from "./Components/Card";
import UsersDetails from "./Components/UsersDetails";
import CompleteCv from "./Components/CompleteCv";

const svgData = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
  <g transform="matrix(1,0,0,1,0,0)">
    <rect width="100" height="100" x="634" y="634" stroke-width="4" stroke="#ff3895" fill="none" opacity="0.1" transform="rotate(100, 400, 400)"></rect>
    <rect width="116.66666666666667" height="116.66666666666667" x="602" y="602" stroke-width="5" stroke="#f645a1" fill="none" opacity="0.175" transform="rotate(91.66666666666667, 400, 400)"></rect>
    <rect width="133.33333333333334" height="133.33333333333334" x="570" y="570" stroke-width="6" stroke="#ed50ab" fill="none" opacity="0.25" transform="rotate(83.33333333333333, 400, 400)"></rect>
    <rect width="150" height="150" x="538" y="538" stroke-width="7" stroke="#e35ab5" fill="none" opacity="0.32499999999999996" transform="rotate(75, 400, 400)"></rect>
    <rect width="166.66666666666669" height="166.66666666666669" x="506" y="506" stroke-width="8" stroke="#d962bf" fill="none" opacity="0.4" transform="rotate(66.66666666666666, 400, 400)"></rect>
    <rect width="183.33333333333334" height="183.33333333333334" x="473.99999999999994" y="473.99999999999994" stroke-width="9" stroke="#cf6ac8" fill="none" opacity="0.475" transform="rotate(58.33333333333333, 400, 400)"></rect>
    <rect width="200" height="200" x="442" y="442" stroke-width="10" stroke="#c472d1" fill="none" opacity="0.5499999999999999" transform="rotate(50, 400, 400)"></rect>
    <rect width="216.66666666666669" height="216.66666666666669" x="409.9999999999999" y="409.9999999999999" stroke-width="11" stroke="#b879d9" fill="none" opacity="0.625" transform="rotate(41.666666666666664, 400, 400)"></rect>
    <rect width="233.33333333333334" height="233.33333333333334" x="377.99999999999994" y="377.99999999999994" stroke-width="12" stroke="#ab7fe1" fill="none" opacity="0.7" transform="rotate(33.33333333333333, 400, 400)"></rect>
    <rect width="250" height="250" x="346" y="346" stroke-width="13" stroke="#9e86e9" fill="none" opacity="0.7749999999999999" transform="rotate(25, 400, 400)"></rect>
    <rect width="266.6666666666667" height="266.6666666666667" x="314" y="314" stroke-width="14" stroke="#8f8cf1" fill="none" opacity="0.85" transform="rotate(16.666666666666657, 400, 400)"></rect>
    <rect width="283.33333333333337" height="283.33333333333337" x="281.99999999999994" y="281.99999999999994" stroke-width="15" stroke="#7e91f8" fill="none" opacity="0.9249999999999999" transform="rotate(8.333333333333329, 400, 400)"></rect>
    <rect width="300" height="300" x="250" y="250" stroke-width="16" stroke="#6b97ff" fill="none" opacity="0.9999999999999999" transform="rotate(0, 400, 400)"></rect>
  </g>
</svg>`;

const encodedSvg = `data:image/svg+xml;base64,${btoa(svgData)}`;

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url()`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* <Button /> */}
      {/* <InputFields /> */}
      {/* <ProfileCard /> */}
      {/* <UsersDetails /> */}
      {/* <ProfileInfo /> */}
      {/* <AboutMe /> */}
      {/* <Card /> */}
      <CompleteCv />
    </div>
  );
}

export default App;

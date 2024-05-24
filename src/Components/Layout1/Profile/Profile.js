import React, { useContext } from "react";
import ProfileCard from "./ProfileCard";
import ProfileInfo from "./ProfileInfo";
import Skills from "../UserDetalsCom/Skills";
import AboutMe from "../UserDetalsCom/AboutMe";
import Education from "../UserDetalsCom/Education";
import { LayoutContext } from "../../Context/LayoutContext";

const Profile = () => {
  const { selectedLayout, isDarkMode } = useContext(LayoutContext);

  const profileStyle = {
    backgroundColor: isDarkMode ? "#333" : "#f0f0f0",
    border: isDarkMode ? "1px solid #ddd" : "1px solid #ccc",
    padding: "0rem",
  };

  return (
    <div className="">
      <style jsx>
        {`
          .responsive-card {
            margin: 2rem auto;
            width: 100%;
            max-width: 18rem;
            border: 1px solid "#fff";
          }

          @media (max-width: 768px) {
            .responsive-card {
              margin: 0 auto;
              width: 100%;
              max-width: 100%;
            }
          }

          .profile-image {
            width: 100%;
            border-radius: 50%;
          }
        `}
      </style>
      <div
        className={`mt-5 container card text-center border-top-0 responsive-card`}
        style={profileStyle}
      >
        <ProfileCard />

        {selectedLayout === 2 && <AboutMe />}
        {selectedLayout === 3 && <Education />}
        {selectedLayout === 1 && <Education />}
        <ProfileInfo />
        <Skills />
      </div>
    </div>
  );
};

export default Profile;

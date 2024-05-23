import React from "react";
import ProfileCard from "./ProfileCard";
import ProfileInfo from "./ProfileInfo";
import Skills from "../UserDetalsCom/Skills";

export default function Profile() {
  return (
    <div className="container-fluid">
      <style jsx>
        {`
          .responsive-card {
            margin: 2rem 0; /* Add margin top and bottom on small screens */
            width: 100%; /* Ensure full width */
            max-width: 18rem; /* Maximum width on larger screens */
          }

          @media (max-width: 768px) {
            .responsive-card {
              margin: 0; /* Remove margin on screens wider than 768px */
            }
          }
        `}
      </style>
      <div className="m-5 card text-center border-top-0 responsive-card bg-light">
        <ProfileCard />
        <ProfileInfo />
        <Skills />
      </div>
    </div>
  );
}

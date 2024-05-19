import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfileImage from "../Images/Touseef.jpg";
export default function ProfileCard() {
  return (
    <div>
      <div
        className="m-0 card text-center  border-bottom-0"
        style={{ width: "18rem" }}
      >
        <img
          src={ProfileImage}
          className="card-img-top mx-auto rounded"
          alt="Profile"
          style={{
            width: "120px",
            height: "120px",
            marginTop: "-35px",
            zIndex: "1",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">
            Touseef <b>Ahmed</b>
          </h5>
          <p className="card-text rounded bg-light">FullStack Developer</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f mx-2"></i>
            <i className="fab fa-twitter mx-2"></i>
            <i className="fab fa-linkedin-in mx-2"></i>
          </div>
        </div>
      </div>
      {/* <div className="mt-2">
        <ProfileInfo />
      </div> */}
    </div>
  );
}

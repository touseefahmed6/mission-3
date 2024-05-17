import React from "react";
import Profile from "./ProfileInfo";

export default function ProfileCard() {
  return (
    <div className="m-5 card text-center" style={{ width: "18rem" }}>
      <img
        src="\Images\Touseef.jpg"
        className="card-img-top mx-auto rounded"
        alt="Profile"
        style={{
          width: "120px",
          height: "120px",
          marginTop: "-27px",
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
      {/* <Profile /> */}
    </div>
  );
}

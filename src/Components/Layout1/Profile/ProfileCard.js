import React from "react";
import ProfileImage from "../../Images/Touseef.jpg";
export default function ProfileCard() {
  return (
    <div>
      <div
        className="card  text-center border-bottom-0"
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
          <h5 className="card-title" style={{ letterSpacing: "2px" }}>
            TOUSEEF <b>AHMED</b>
          </h5>
          <p
            className="d-inline-block rounded px-2"
            style={{
              backgroundColor: "#DDE6ED",
              fontSize: "13px",
              letterSpacing: "2px",
            }}
          >
            FULLSTACK DEVELOPER
          </p>

          <div className="social-icons">
            <i className="fab fa-facebook-f mx-2 text-primary"></i>
            <i className="fab fa-twitter mx-2 text-primary"></i>
            <i className="fab fa-linkedin-in mx-2 text-primary"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function AboutMe() {
  return (
    <div className="card mb-3 border-0">
      <style>
        {`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap');


.roboto-serif-bold {
  font-family: "Roboto Serif", serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  font-size: 25px;
  font-variation-settings:
    "wdth" 100,
    "GRAD" 0;
}
.noto-sans-tc-regular {
  font-family: "Noto Sans TC", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
}
        `}
      </style>
      <div className="card-body">
        <h5 className="card-title fw-bold text-start roboto-serif-bold">
          About Me
        </h5>
        <div
          style={{
            width: "80px",
            height: "4px",
            backgroundColor: "var(--bs-primary)",
            marginBottom: "5px",
            fontWeight: "bold",
          }}
        ></div>
        <p className="card-text text-start noto-sans-tc-regular">
          I'm a Full Stack Web Developer at Atompoint in Karachi. I build
          dynamic, user-friendly web applications that blend creativity with
          functionality. I thrive on tackling complex challenges and leveraging
          cutting-edge technologies to drive Atompoint's success in the
          industry.
        </p>
      </div>
    </div>
  );
}

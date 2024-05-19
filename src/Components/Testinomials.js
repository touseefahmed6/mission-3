import React from "react";
import Person1 from "../Images/Person1.png";
import Person2 from "../Images/Person2.png";

export default function Testimonials() {
  return (
    <div className=" mt-3 bg-white">
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
          
          .testimonial-image {
            border-radius: 50%;
            width: 80px;
            height: 80px;
            object-fit: cover;
            margin-right: 15px;
          }

          .testimonial-card {
            display: flex;
            align-items: center;
            margin-bottom: 20px; /* Adjust spacing between cards */
          }
        `}
      </style>
      <div className="card-body ">
        <h5 className="card-title fw-bold text-start roboto-serif-bold">
          Testimonials
        </h5>
        <div
          style={{
            width: "80px",
            height: "4px",
            backgroundColor: "var(--bs-primary)",
            marginBottom: "15px",
            fontWeight: "bold",
          }}
        ></div>
        <div className="row">
          <div className="col-md-6">
            <div className="testimonial-card mt-3">
              <img
                className="testimonial-image mb-5"
                src={Person1}
                alt="John Doe"
              />
              <div>
                <p className="card-text text-start noto-sans-tc-regular">
                  "I had an amazing experience working with Touseef Ahmed. They
                  delivered a fantastic solution that exceeded our
                  expectations."
                </p>
                <p className="fw-bold text-start noto-sans-tc-regular">
                  - John Doe
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="testimonial-card mt-3">
              <img
                className="testimonial-image mb-5"
                src={Person2}
                alt="Jane Smith"
              />
              <div>
                <p className="card-text text-start noto-sans-tc-regular">
                  "Working with Touseef Ahmed was a pleasure. They are highly
                  skilled and dedicated to delivering quality results."
                </p>
                <p className="fw-bold text-start noto-sans-tc-regular">
                  - Jane Smith
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

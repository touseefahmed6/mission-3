import React from "react";
import Person1 from "../../Images/Person1.png";

import Person2 from "../../Images/Person2.png";
export default function Testimonials() {
  return (
    <div className={`mt-3 `}>
      <style>
        {`
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
            margin-bottom: 20px; 
          }
        `}
      </style>
      <div className={`card-body  `}>
        <h5
          className={`card-title fw-bold text-start `}
          style={{
            fontFamily: "'PT Sans', sans-serif",
            letterSpacing: "2px",
          }}
        >
          Testimonials
        </h5>
        <div
          className=""
          style={{
            height: "0.5px",
            backgroundColor: "var(--bs-primary)",
            marginBottom: "10px",
          }}
        ></div>
        <div className={`row `}>
          <div className={`col-md-6 `}>
            <div className={`testimonial-card mt-3`}>
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
            <div className="testimonial-card mt-4">
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
                <p className="fw-bold text-start noto-sans-tc-regular mt-4">
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

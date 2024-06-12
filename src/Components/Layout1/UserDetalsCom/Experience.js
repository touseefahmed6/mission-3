// import React, { useContext } from "react";
// import { LayoutContext } from "../../Context/LayoutContext";
// export default function Experiences() {
//   const { isDarkMode } = useContext(LayoutContext);
//   const educationCard = {
//     backgroundColor: isDarkMode ? "#22303C" : "#f0f0f0",
//   };
//   return (
//     <div className="card border-0 p-4 rounded-0" style={educationCard}>
//       <h4
//         className={`card-title poppins-bold`}
//         style={{
//           letterSpacing: "1px",
//           color: isDarkMode ? "#e0e0e0" : "#374151",
//         }}
//       >
//         EXPERIENCES
//       </h4>
//       <div
//         className="bg-primary"
//         style={{
//           height: "0.5px",
//           marginBottom: "10px",
//         }}
//       ></div>

//       <div className="d-flex justify-content-between align-items-center">
//         <h6
//           className="text-start mb-2 poppins-medium"
//           style={{ color: isDarkMode ? "#e0e0e0" : "#374151" }}
//         >
//           FullStack Developer | AtomPoint
//         </h6>
//         <span className=" mb-2 poppins-regular">May 2021 - Present</span>
//       </div>
//       <p
//         className=" poppins-regular"
//         style={{ color: isDarkMode ? "#e0e0e0" : "#374151" }}
//       >
//         Developed scalable and responsive applications as a FullStack Developer
//         at AtomPoint, blending creativity with robust functionality.
//       </p>
//     </div>
//   );
// }

import React, { useContext } from "react";
import { LayoutContext } from "../../Context/LayoutContext";

export default function Experiences() {
  const { isDarkMode, userData } = useContext(LayoutContext);
  const { experienceDetails } = userData;

  const educationCard = {
    backgroundColor: isDarkMode ? "#22303C" : "#f0f0f0",
  };

  return (
    <div className="card border-0 p-4 rounded-0" style={educationCard}>
      <h4
        className={`card-title poppins-bold`}
        style={{
          letterSpacing: "1px",
          color: isDarkMode ? "#e0e0e0" : "#374151",
        }}
      >
        EXPERIENCES
      </h4>
      <div
        className="bg-primary"
        style={{
          height: "0.5px",
          marginBottom: "10px",
        }}
      ></div>

      {experienceDetails.map((experience, index) => (
        <div key={index}>
          <div className="d-flex justify-content-between align-items-center">
            <h6
              className="text-start mb-2 poppins-medium"
              style={{ color: isDarkMode ? "#e0e0e0" : "#374151" }}
            >
              {experience.jobTitle} | {experience.company}
            </h6>
            <span className="mb-2 poppins-regular">
              {experience.joiningMonth} {experience.joiningYear} -{" "}
              {experience.present
                ? "Present"
                : `${experience.leavingMonth} ${experience.leavingYear}`}
            </span>
          </div>
          <p
            className="poppins-regular"
            style={{ color: isDarkMode ? "#e0e0e0" : "#374151" }}
          >
            {experience.experienceDescription}
          </p>
        </div>
      ))}
    </div>
  );
}

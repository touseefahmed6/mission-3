// import React, { useContext } from "react";
// import {
//   FaReact,
//   FaJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaCode,
//   FaDownload,
// } from "react-icons/fa";
// import { LayoutContext } from "../../Context/LayoutContext";

// export default function Skills() {
//   const { isDarkMode } = useContext(LayoutContext);

//   const skills = {
//     react: 70,
//     javascript: 80,
//     html: 90,
//     css: 75,
//   };

//   const skillContainerStyle = {
//     backgroundColor: isDarkMode ? "#22303C" : "#f0f0f0",
//     color: isDarkMode ? "#e0e0e0" : " #374151",
//   };
//   return (
//     <div className="container-fluid mt-4" style={skillContainerStyle}>
//       <h6
//         className="text-start mx-3 d-flex align-items-center"
//         style={{ letterSpacing: "1px" }}
//       >
//         <FaCode
//           className="text-primary "
//           style={{ fontSize: "1.4rem", marginRight: "0.5rem" }}
//         />
//         <span className="poppins-bold">SKILLS</span>
//       </h6>
//       <div
//         className="mx-3 bg-primary"
//         style={{
//           height: "0.5px",
//           marginBottom: "10px",
//         }}
//       ></div>
//       <div className="card border-0 p-3 " style={skillContainerStyle}>
//         {Object.entries(skills).map(([skill, value]) => (
//           <div className="mb-3" key={skill}>
//             <div className="d-flex align-items-center mb-2 poppins-medium">
//               {skill === "react" && (
//                 <FaReact className="me-2" style={{ color: "#61DBFB" }} />
//               )}
//               {skill === "javascript" && (
//                 <FaJs className="me-2" style={{ color: "#F0DB4F" }} />
//               )}
//               {skill === "html" && (
//                 <FaHtml5 className="me-2" style={{ color: "#E34C26" }} />
//               )}
//               {skill === "css" && (
//                 <FaCss3Alt className="me-2" style={{ color: "#264de4" }} />
//               )}
//               <span className="me-auto text-capitalize">{skill}</span>
//               <span>{value}%</span>
//             </div>
//             <div className="progress" style={{ height: "4px" }}>
//               <div
//                 className="progress-bar bg-primary"
//                 style={{ width: `${value}%`, height: "100%" }}
//               ></div>
//             </div>
//           </div>
//         ))}

//         <div className="d-flex justify-content-center mt-2">
//           <a
//             href="/"
//             className="btn btn-primary rounded border-0 mb-3 poppins-bold"
//             style={{ maxWidth: "200px" }}
//           >
//             <FaDownload className="me-2 " />
//             Download CV
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useContext } from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaPython,
  FaDatabase,
  FaCode,
  FaDownload,
} from "react-icons/fa";
import { LayoutContext } from "../../Context/LayoutContext";

const skillIcons = {
  React: <FaReact style={{ color: "#61DBFB" }} />,
  JavaScript: <FaJs style={{ color: "#F0DB4F" }} />,
  HTML: <FaHtml5 style={{ color: "#E34C26" }} />,
  CSS: <FaCss3Alt style={{ color: "#264de4" }} />,
  "Node.js": <FaNode style={{ color: "#68A063" }} />,
  Python: <FaPython style={{ color: "#306998" }} />,
  SQL: <FaDatabase style={{ color: "#4B8BBE" }} />,
};

export default function Skills() {
  const { isDarkMode, userData } = useContext(LayoutContext);
  const { skillsDetails } = userData || {};
  const { selectedSkills, proficiencies } = skillsDetails || {};

  const skillContainerStyle = {
    backgroundColor: isDarkMode ? "#22303C" : "#f0f0f0",
    color: isDarkMode ? "#e0e0e0" : "#374151",
  };

  return (
    <div className="container-fluid mt-4" style={skillContainerStyle}>
      <h6
        className="text-start mx-3 d-flex align-items-center"
        style={{ letterSpacing: "1px" }}
      >
        <FaCode
          className="text-primary "
          style={{ fontSize: "1.4rem", marginRight: "0.5rem" }}
        />
        <span className="poppins-bold">SKILLS</span>
      </h6>
      <div
        className="mx-3 bg-primary"
        style={{ height: "0.5px", marginBottom: "10px" }}
      ></div>
      <div className="card border-0 p-3 " style={skillContainerStyle}>
        {selectedSkills && selectedSkills.length > 0 && (
          <>
            {selectedSkills.map((skill, index) => (
              <div className="mb-3" key={index}>
                <div className="d-flex align-items-center mb-2 poppins-medium">
                  {skillIcons[skill]}
                  <span className="me-auto text-capitalize mx-1">{skill}</span>
                  <span>{proficiencies[skill]}%</span>
                </div>
                <div className="progress" style={{ height: "4px" }}>
                  <div
                    className="progress-bar bg-primary"
                    style={{
                      width: `${proficiencies[skill]}%`,
                      height: "100%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </>
        )}

        <div className="d-flex justify-content-center mt-2">
          <a
            href="/"
            className="btn btn-primary rounded border-0 mb-3 poppins-bold"
            style={{ maxWidth: "200px" }}
          >
            <FaDownload className="me-2 " />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

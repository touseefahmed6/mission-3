// import React, { useState, useContext, useEffect } from "react";
// import { LayoutContext } from "../../Context/LayoutContext";

// const PersonalDetailsForm = () => {
//   const { setUserData, isDarkMode } = useContext(LayoutContext);
//   const inputStyle = {
//     backgroundColor: isDarkMode ? "#192734" : "#fff",
//     color: isDarkMode ? "#FFFFFF" : "#333",
//   };
//   const formLabelStyle = {
//     color: isDarkMode ? "#e0e0e0" : "#374151",
//   };

//   const initialFormData = {
//     fName: "",
//     lName: "",
//     email: "",
//     jobTitle: "",
//     dob: "",
//     location: "",
//     contactNumber: "",
//     aboutMe: "",
//     skypeUsername: "",
//     profileImage: null,
//   };

//   const [formData, setFormData] = useState({ ...initialFormData });
//   const [submittedData, setSubmittedData] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);

//   useEffect(() => {
//     const storedData = JSON.parse(
//       localStorage.getItem("personalDetailsFormData")
//     );
//     if (storedData) {
//       setSubmittedData(storedData);
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, profileImage: file });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUserData((prevUserData) => ({
//       ...prevUserData,
//       personalDetails: formData,
//     }));
//     setSubmittedData(formData);
//     localStorage.setItem("personalDetailsFormData", JSON.stringify(formData));
//   };

//   const handleShowDetails = () => {
//     setShowDetails(true);
//   };

//   const handleHideDetails = () => {
//     setShowDetails(false);
//   };

//   const handleEditDetails = () => {
//     setFormData({ ...submittedData });
//     setShowDetails(false);
//   };

//   const handleReset = () => {
//     setFormData({ ...initialFormData });
//     setSubmittedData(null);
//     localStorage.removeItem("personalDetailsFormData");
//   };

//   return (
//     <div className="container p-4">
//       <h2 className="mt-4 mb-2 poppins-semibold">PERSONAL DETAILS</h2>
//       <div
//         className="bg-primary"
//         style={{ height: "0.5px", marginBottom: "15px" }}
//       ></div>
//       <form onSubmit={handleSubmit}>
//         <div className="row mb-3">
//           <div className="col">
//             <label
//               htmlFor="fName"
//               className="form-label poppins-semibold"
//               style={formLabelStyle}
//             >
//               First Name *
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="fName"
//               name="fName"
//               value={formData.fName}
//               onChange={handleInputChange}
//               placeholder="Enter first name"
//               required
//               style={inputStyle}
//             />
//           </div>
//           <div className="col">
//             <label
//               htmlFor="lName"
//               className="form-label poppins-semibold"
//               style={formLabelStyle}
//             >
//               Last Name *
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="lName"
//               name="lName"
//               value={formData.lName}
//               onChange={handleInputChange}
//               placeholder="Enter last name"
//               required
//               style={inputStyle}
//             />
//           </div>
//         </div>
//         <div className="row mb-3">
//           <div className="col">
//             <label
//               htmlFor="jobTitle"
//               className="form-label poppins-semibold"
//               style={formLabelStyle}
//             >
//               Job Title
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="jobTitle"
//               name="jobTitle"
//               value={formData.jobTitle}
//               onChange={handleInputChange}
//               placeholder="Enter job title"
//               style={inputStyle}
//             />
//           </div>
//           <div className="col">
//             <label
//               htmlFor="email"
//               className="form-label poppins-semibold"
//               style={formLabelStyle}
//             >
//               Email *
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Enter email"
//               required
//               style={inputStyle}
//             />
//           </div>
//         </div>
//         <div className="row mb-3">
//           <div className="col">
//             <label
//               htmlFor="dob"
//               className="form-label poppins-semibold"
//               style={formLabelStyle}
//             >
//               Date of Birth *
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               id="dob"
//               name="dob"
//               value={formData.dob}
//               onChange={handleInputChange}
//               required
//               style={inputStyle}
//             />
//           </div>
//           <div className="col">
//             <label
//               htmlFor="location"
//               className="form-label poppins-semibold"
//               style={formLabelStyle}
//             >
//               Location
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="location"
//               name="location"
//               value={formData.location}
//               onChange={handleInputChange}
//               placeholder="Enter location"
//               style={inputStyle}
//             />
//           </div>
//         </div>
//         <div className="row mb-3">
//           <div className="col">
//             <label
//               htmlFor="contactNumber"
//               className="form-label poppins-semibold"
//               style={formLabelStyle}
//             >
//               Contact Number
//             </label>
//             <input
//               type="tel"
//               className="form-control"
//               id="contactNumber"
//               name="contactNumber"
//               value={formData.contactNumber}
//               onChange={handleInputChange}
//               placeholder="Enter contact number"
//               style={inputStyle}
//             />
//           </div>
//           <div className="col">
//             <label
//               htmlFor="skypeUsername"
//               className="form-label poppins-semibold"
//               style={formLabelStyle}
//             >
//               Skype Username
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="skypeUsername"
//               name="skypeUsername"
//               value={formData.skypeUsername}
//               onChange={handleInputChange}
//               placeholder="Enter Skype username"
//               style={inputStyle}
//             />
//           </div>
//         </div>
//         <div className="mb-3">
//           <label
//             htmlFor="aboutMe"
//             className="form-label poppins-semibold"
//             style={formLabelStyle}
//           >
//             About Me
//           </label>
//           <textarea
//             className="form-control"
//             id="aboutMe"
//             name="aboutMe"
//             rows="4"
//             value={formData.aboutMe}
//             onChange={handleInputChange}
//             placeholder="Enter about me"
//             style={inputStyle}
//           ></textarea>
//         </div>
//         <div className="d-flex justify-content-between">
//           <button
//             type="submit"
//             className="btn btn-success mb-3 mt-3 poppins-medium"
//           >
//             Save Personal Details
//           </button>
//           {submittedData && (
//             <>
//               {showDetails ? (
//                 <>
//                   <button
//                     type="button"
//                     className="btn btn-secondary mb-3 mt-3 mx-2 poppins-medium"
//                     onClick={handleHideDetails}
//                   >
//                     Hide Details
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-warning mb-3 mt-3 mx-2 poppins-medium"
//                     onClick={handleEditDetails}
//                   >
//                     Edit Details
//                   </button>
//                 </>
//               ) : (
//                 <button
//                   type="button"
//                   className="btn btn-primary mb-3 mt-3 mx-2 poppins-medium"
//                   onClick={handleShowDetails}
//                 >
//                   Show Saved Details
//                 </button>
//               )}
//               <button
//                 type="button"
//                 className="btn btn-danger mb-3 mt-3 poppins-medium"
//                 onClick={handleReset}
//               >
//                 Reset
//               </button>
//             </>
//           )}
//         </div>
//       </form>

//       {showDetails && submittedData && (
//         <div className=" mt-4 p-3">
//           <h5 className="card-title">Submitted Personal Details</h5>
//           <div
//             className="bg-primary"
//             style={{ height: "0.5px", marginBottom: "10px" }}
//           ></div>
//           <p>
//             <strong>First Name:</strong> {submittedData.fName}
//           </p>
//           <p>
//             <strong>Last Name:</strong> {submittedData.lName}
//           </p>
//           <p>
//             <strong>Email:</strong> {submittedData.email}
//           </p>
//           <p>
//             <strong>Job Title:</strong> {submittedData.jobTitle}
//           </p>
//           <p>
//             <strong>Date of Birth:</strong> {submittedData.dob}
//           </p>
//           <p>
//             <strong>Location:</strong> {submittedData.location}
//           </p>
//           <p>
//             <strong>Contact Number:</strong> {submittedData.contactNumber}
//           </p>
//           <p>
//             <strong>About Me:</strong> {submittedData.aboutMe}
//           </p>
//           <p>
//             <strong>Skype Username:</strong> {submittedData.skypeUsername}
//           </p>
//           <div
//             className="bg-primary"
//             style={{ height: "0.5px", marginTop: "10px" }}
//           ></div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PersonalDetailsForm;

import React, { useState, useContext, useEffect } from "react";
import { LayoutContext } from "../../Context/LayoutContext";

const PersonalDetailsForm = () => {
  const { setUserData, isDarkMode } = useContext(LayoutContext);
  const inputStyle = {
    backgroundColor: isDarkMode ? "#192734" : "#fff",
    color: isDarkMode ? "#FFFFFF" : "#333",
  };
  const formLabelStyle = {
    color: isDarkMode ? "#e0e0e0" : "#374151",
  };

  const initialFormData = {
    fName: "",
    lName: "",
    email: "",
    jobTitle: "",
    dob: "",
    location: "",
    contactNumber: "",
    aboutMe: "",
    skypeUsername: "",
    profileImage: null,
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [submittedData, setSubmittedData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(
      localStorage.getItem("personalDetailsFormData")
    );
    if (storedData) {
      setSubmittedData(storedData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prevUserData) => ({
      ...prevUserData,
      personalDetails: formData,
    }));
    setSubmittedData(formData);
    localStorage.setItem("personalDetailsFormData", JSON.stringify(formData));
  };

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
  };

  const handleEditDetails = () => {
    setFormData({ ...submittedData });
    setShowDetails(false);
  };

  const handleReset = () => {
    setFormData({ ...initialFormData });
    setSubmittedData(null);
    localStorage.removeItem("personalDetailsFormData");
  };

  return (
    <div className="container p-4">
      <h2 className="mt-4 mb-2 poppins-semibold">PERSONAL DETAILS</h2>
      <div
        className="bg-primary"
        style={{ height: "0.5px", marginBottom: "15px" }}
      ></div>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label
              htmlFor="fName"
              className="form-label poppins-semibold"
              style={formLabelStyle}
            >
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fName"
              name="fName"
              value={formData.fName}
              onChange={handleInputChange}
              placeholder="Enter first name"
              required
              style={inputStyle}
            />
          </div>
          <div className="col">
            <label
              htmlFor="lName"
              className="form-label poppins-semibold"
              style={formLabelStyle}
            >
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lName"
              name="lName"
              value={formData.lName}
              onChange={handleInputChange}
              placeholder="Enter last name"
              required
              style={inputStyle}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label
              htmlFor="jobTitle"
              className="form-label poppins-semibold"
              style={formLabelStyle}
            >
              Job Title
            </label>
            <input
              type="text"
              className="form-control"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              placeholder="Enter job title"
              style={inputStyle}
            />
          </div>
          <div className="col">
            <label
              htmlFor="email"
              className="form-label poppins-semibold"
              style={formLabelStyle}
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
              required
              style={inputStyle}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label
              htmlFor="dob"
              className="form-label poppins-semibold"
              style={formLabelStyle}
            >
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
              style={inputStyle}
            />
          </div>
          <div className="col">
            <label
              htmlFor="location"
              className="form-label poppins-semibold"
              style={formLabelStyle}
            >
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter location"
              style={inputStyle}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label
              htmlFor="contactNumber"
              className="form-label poppins-semibold"
              style={formLabelStyle}
            >
              Contact Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              placeholder="Enter contact number"
              style={inputStyle}
            />
          </div>
          <div className="col">
            <label
              htmlFor="skypeUsername"
              className="form-label poppins-semibold"
              style={formLabelStyle}
            >
              Skype Username
            </label>
            <input
              type="text"
              className="form-control"
              id="skypeUsername"
              name="skypeUsername"
              value={formData.skypeUsername}
              onChange={handleInputChange}
              placeholder="Enter Skype username"
              style={inputStyle}
            />
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="profileImage"
            className="form-label poppins-semibold"
            style={formLabelStyle}
          >
            Profile Image
          </label>
          <input
            type="file"
            className="form-control"
            id="profileImage"
            name="profileImage"
            onChange={handleFileChange}
            style={inputStyle}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="aboutMe"
            className="form-label poppins-semibold"
            style={formLabelStyle}
          >
            About Me
          </label>
          <textarea
            className="form-control"
            id="aboutMe"
            name="aboutMe"
            rows="4"
            value={formData.aboutMe}
            onChange={handleInputChange}
            placeholder="Enter about me"
            style={inputStyle}
          ></textarea>
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="submit"
            className="btn btn-success mb-3 mt-3 poppins-medium"
          >
            Save Personal Details
          </button>
          {submittedData && (
            <>
              {showDetails ? (
                <>
                  <button
                    type="button"
                    className="btn btn-secondary mb-3 mt-3 mx-2 poppins-medium"
                    onClick={handleHideDetails}
                  >
                    Hide Details
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning mb-3 mt-3 mx-2 poppins-medium"
                    onClick={handleEditDetails}
                  >
                    Edit Details
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary mb-3 mt-3 mx-2 poppins-medium"
                  onClick={handleShowDetails}
                >
                  Show Saved Details
                </button>
              )}
              <button
                type="button"
                className="btn btn-danger mb-3 mt-3 poppins-medium"
                onClick={handleReset}
              >
                Reset
              </button>
            </>
          )}
        </div>
      </form>

      {showDetails && submittedData && (
        <div className=" mt-4 p-3">
          <h5 className="card-title">Submitted Personal Details</h5>
          <div
            className="bg-primary"
            style={{ height: "0.5px", marginBottom: "10px" }}
          ></div>
          <p>
            <strong>First Name:</strong> {submittedData.fName}
          </p>
          <p>
            <strong>Last Name:</strong> {submittedData.lName}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Job Title:</strong> {submittedData.jobTitle}
          </p>
          <p>
            <strong>Date of Birth:</strong> {submittedData.dob}
          </p>
          <p>
            <strong>Location:</strong> {submittedData.location}
          </p>
          <p>
            <strong>Contact Number:</strong> {submittedData.contactNumber}
          </p>
          <p>
            <strong>About Me:</strong> {submittedData.aboutMe}
          </p>
          <p>
            <strong>Skype Username:</strong> {submittedData.skypeUsername}
          </p>
          <div
            className="bg-primary"
            style={{ height: "0.5px", marginTop: "10px" }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default PersonalDetailsForm;

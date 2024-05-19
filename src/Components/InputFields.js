import React, { useState, useEffect } from "react";

export default function InputFields() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or updated");
    return () => {
      console.log("Component will unmount");
    };
  }, [count]);
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registration Form</h2>
      <div className="col-12 col-md-6 mx-auto bg-light p-4 shadow-sm rounded">
        <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-3 col-form-label text-start">
            Full Name
          </label>
          <div className="col-sm-9">
            <input
              id="name"
              className="form-control"
              type="text"
              value={name}
              placeholder="Enter Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="title" className="col-sm-3 col-form-label text-start">
            Job Title
          </label>
          <div className="col-sm-9">
            <input
              id="title"
              className="form-control"
              type="text"
              value={title}
              placeholder="Enter Job Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="dob" className="col-sm-3 col-form-label text-start">
            Date of Birth
          </label>
          <div className="col-sm-9">
            <input
              id="dob"
              className="form-control"
              type="text"
              value={DOB}
              placeholder="Enter Date of Birth"
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label
            htmlFor="location"
            className="col-sm-3 col-form-label text-start"
          >
            Location
          </label>
          <div className="col-sm-9">
            <input
              id="location"
              className="form-control"
              type="text"
              value={location}
              placeholder="Enter Location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="email" className="col-sm-3 col-form-label text-start">
            Email Address
          </label>
          <div className="col-sm-9">
            <input
              id="email"
              className="form-control"
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="phone" className="col-sm-3 col-form-label text-start">
            Phone Number
          </label>
          <div className="col-sm-9">
            <input
              id="phone"
              className="form-control"
              type="text"
              value={phone}
              placeholder="Enter Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label
            htmlFor="linkedin"
            className="col-sm-3 col-form-label text-start"
          >
            LinkedIn Username
          </label>
          <div className="col-sm-9">
            <input
              id="linkedin"
              className="form-control"
              type="url"
              value={linkedin}
              placeholder="Enter LinkedIn Username"
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

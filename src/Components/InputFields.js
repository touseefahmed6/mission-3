import React, { useState } from "react";

export default function InputFields() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");

  return (
    <div className="container">
      <div className="col-12 col-md-3">
        <input
          className="form-control my-2"
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control my-2"
          type="text"
          value={title}
          placeholder="Enter Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="form-control my-2"
          type="date"
          value={DOB}
          placeholder="Enter Date of Birth"
          onChange={(e) => setDOB(e.target.value)}
        />
        <input
          className="form-control my-2"
          type="text"
          value={location}
          placeholder="Enter Location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="form-control my-2"
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control my-2"
          type="text"
          value={phone}
          placeholder="Enter Phone no"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="form-control my-2"
          type="url"
          value={linkedin}
          placeholder="Enter Linkedin"
          onChange={(e) => setLinkedin(e.target.value)}
        />
      </div>
    </div>
  );
}

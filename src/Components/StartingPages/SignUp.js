import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LayoutContext } from "../Context/LayoutContext";

export default function SignUp() {
  const { isDarkMode } = useContext(LayoutContext);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Component mounted or updated");
    return () => {
      console.log("Component will unmount");
    };
  }, [count]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      fName === "" ||
      lName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please fill all fields.");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match.");
    } else {
      const userData = {
        fName,
        lName,
        email,
        password,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/Navigation");
    }
    setCount(count + 1);
  };

  const cardStyle = {
    backgroundColor: isDarkMode ? "#192734" : "#fff",
    color: isDarkMode ? "#FFFFFF" : "#333",
  };

  const formLabelStyle = {
    color: isDarkMode ? "#e0e0e0" : "#374151",
  };

  const createAccountLinkStyle = {
    color: isDarkMode ? "#007bff" : "#0d6efd",
  };
  const loginBelowText = {
    color: isDarkMode ? "#e0e0e0" : "#374151",
  };

  const socialButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4267B2", // Facebook blue
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    marginBottom: "10px",
    cursor: "pointer",
  };

  const googleButtonStyle = {
    ...socialButtonStyle,
    backgroundColor: "#DB4437", // Google red
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 ">
      <div
        className="col-12 col-md-6 p-5 shadow-lg rounded mt-5 mb-4"
        style={cardStyle}
      >
        <h2 className="mb-4 text-center text-primary poppins-bold">
          Create an account
        </h2>
        <p className="text-center poppins-regular" style={loginBelowText}>
          Hey enter your details to create your account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="fname"
              className="form-label poppins-medium"
              style={formLabelStyle}
            >
              First name
            </label>
            <input
              id="fname"
              className="form-control"
              type="text"
              value={fName}
              placeholder="Enter first name"
              onChange={(e) => setFName(e.target.value)}
              style={cardStyle}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="lname"
              className="form-label poppins-medium"
              style={formLabelStyle}
            >
              Last name
            </label>
            <input
              id="lname"
              className="form-control"
              type="text"
              value={lName}
              placeholder="Enter last name"
              onChange={(e) => setLName(e.target.value)}
              style={cardStyle}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label poppins-medium"
              style={formLabelStyle}
            >
              Email
            </label>
            <input
              id="email"
              className="form-control"
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              style={cardStyle}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label poppins-medium"
              style={formLabelStyle}
            >
              Password
            </label>
            <input
              id="password"
              className="form-control"
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              style={cardStyle}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="confirmPassword"
              className="form-label poppins-medium"
              style={formLabelStyle}
            >
              Confirm password
            </label>
            <input
              id="confirmPassword"
              className="form-control"
              type="password"
              value={confirmPassword}
              placeholder="Enter confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={cardStyle}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mb-3 poppins-semibold"
          >
            Sign up
          </button>

          <p className="text-center" style={loginBelowText}>
            or With
          </p>

          <div
            style={socialButtonStyle}
            onClick={() => alert("Signup with Facebook")}
          >
            Signup with Facebook
          </div>
          <div
            style={googleButtonStyle}
            onClick={() => alert("Signup with Google")}
          >
            Signup with Google
          </div>

          <p className="text-center">
            Already have an account?{" "}
            <Link
              to="/Login"
              className="text-primary"
              style={createAccountLinkStyle}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

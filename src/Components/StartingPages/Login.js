import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LayoutContext } from "../Context/LayoutContext";

export default function Login() {
  const { isDarkMode } = useContext(LayoutContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Component mounted or updated");
    return () => {
      console.log("Component will unmount");
    };
  }, [count]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Password or username is missing.");
    } else {
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

  const formCheckLabelStyle = {
    color: isDarkMode ? "#e0e0e0" : "#374151",
  };

  const forgotPasswordLinkStyle = {
    color: isDarkMode ? "#007bff" : "#0d6efd",
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
    backgroundColor: "#4267B2",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    marginBottom: "10px",
    cursor: "pointer",
  };

  const googleButtonStyle = {
    ...socialButtonStyle,
    backgroundColor: "#DB4437",
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div
        className="col-12 col-md-6 p-5 shadow-lg rounded mt-4 mb-4"
        style={cardStyle}
      >
        <h2 className="mb-4 text-center text-primary poppins-bold">Login</h2>
        <p className="text-center poppins-regular" style={loginBelowText}>
          Please Enter your email and password!
        </p>

        <form onSubmit={handleSubmit}>
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
              placeholder="Enter Email"
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
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              style={cardStyle}
            />
          </div>

          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={cardStyle}
              />
              <label
                className="form-check-label"
                htmlFor="rememberMe"
                style={formCheckLabelStyle}
              >
                Remember Password
              </label>
            </div>
            <a
              href="/"
              className="text-primary"
              style={forgotPasswordLinkStyle}
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mb-3 poppins-semibold"
          >
            Login
          </button>
          <p className="text-center poppins-medium" style={loginBelowText}>
            or With
          </p>

          <div
            style={socialButtonStyle}
            onClick={() => alert("Login with Facebook")}
            className="poppins-semibold"
          >
            Login with Facebook
          </div>
          <div
            style={googleButtonStyle}
            onClick={() => alert("Login with Google")}
            className="poppins-semibold"
          >
            Login with Google
          </div>

          <p className="text-center">
            Don't have an account?{" "}
            <Link
              to="/"
              className="text-primary"
              style={createAccountLinkStyle}
            >
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

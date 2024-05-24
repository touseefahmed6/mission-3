import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutContext } from "../Context/LayoutContext";

export default function InputFields() {
  const { isDarkMode } = useContext(LayoutContext);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
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
    if (username === "" || password === "") {
      alert("Password or username is missing.");
    } else {
      navigate("/WelcomePage");
    }
    setCount(count + 1);
  };

  const cardStyle = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#e0e0e0" : "#333",
  };

  const formLabelStyle = {
    color: isDarkMode ? "#e0e0e0" : "#333",
  };

  const formCheckLabelStyle = {
    color: isDarkMode ? "#e0e0e0" : "#333",
  };

  const forgotPasswordLinkStyle = {
    color: isDarkMode ? "#007bff" : "#0d6efd",
  };

  const createAccountLinkStyle = {
    color: isDarkMode ? "#007bff" : "#0d6efd",
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-12 col-md-6 p-5 shadow-lg rounded" style={cardStyle}>
        <h2 className="mb-4 text-center text-primary">Login</h2>
        <p className="text-center text-muted">
          Please Enter your username and password!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="username"
              className="form-label"
              style={formLabelStyle}
            >
              Username
            </label>
            <input
              id="username"
              className="form-control"
              type="text"
              value={username}
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
              style={cardStyle}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label"
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
              href="/forgot-password"
              className="text-primary"
              style={forgotPasswordLinkStyle}
            >
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>

          <p className="text-center">
            Don't have an account?{" "}
            <a
              href="/create-account"
              className="text-primary"
              style={createAccountLinkStyle}
            >
              Create account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

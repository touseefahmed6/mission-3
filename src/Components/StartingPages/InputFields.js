import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function InputFields() {
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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Password or username is missing.");
    } else {
      navigate("/WelcomePage");
    }
    setCount(count + 1);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-12 col-md-6 p-5 shadow-lg rounded bg-light">
        <h2 className="mb-4 text-center text-primary">Login</h2>
        <p className="text-center text-muted">
          Please Enter your username and password!
        </p>

        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              className="form-control"
              type="text"
              value={username}
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              className="form-control"
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
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
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember Password
              </label>
            </div>
            <a href="/forgot-password" className="text-primary">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>

          <p className="text-center">
            Don't have an account?{" "}
            <a href="/create-account" className="text-primary">
              Create account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

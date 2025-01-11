import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../authContext";
import { Box, Button, PageHeader } from "@primer/react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { setCurrentUser } = useAuth(); // Context to manage user state

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Input Validation
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      // API call to login
      const res = await axios.post("http://localhost:3300/login", {
        email: email,
        password: password,
      });

      // Store the token and userId in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("username", res.data.username);

      // Update the current user in context
      setCurrentUser(res.data.userId);

      setLoading(false);
      window.location.href = "/"; // Redirect to Dashboard
    } catch (err) {
      console.error("Login Error:", err);
      setError("Invalid email or password. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box-wrapper">
        <div className="login-heading">
          <Box sx={{ padding: 1 }}>
            <PageHeader>
              <PageHeader.TitleArea variant="large">
                <PageHeader.Title>Login</PageHeader.Title>
              </PageHeader.TitleArea>
            </PageHeader>
          </Box>
        </div>

        <div className="login-box">
          {error && <p className="error-message">{error}</p>}{" "}
          {/* Display errors */}
          <div>
            <label className="label">Email address</label>
            <input
              autoComplete="off"
              name="Email"
              id="Email"
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="label">Password</label>
            <input
              autoComplete="off"
              name="Password"
              id="Password"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            variant="primary"
            className="login-btn"
            disabled={loading}
            onClick={handleLogin}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </div>

        <div className="pass-box">
          <p>
            <Link>Forgot user ID or password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

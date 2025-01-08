import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../authContext";
import { Box, Button, PageHeader } from "@primer/react";
import { Link } from "react-router-dom";
import "./signup.css";
const SignupPage = () => {
  // State variables for form inputs and loading
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // For error messages

  const { setCurrentUser } = useAuth(); // Context to manage user state

  // Function to validate input fields
  const validateInputs = () => {
    if (!email || !username || !password) {
      setError("All fields are required.");
      return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setError("Invalid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    setError(""); // Clear errors if valid
    return true;
  };

  // Handle Signup Submission
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return; // Check validation

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3300/signup", {
        email,
        password,
        username,
      });

      // Store response data in localStorage and context
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      setCurrentUser(res.data.userId);

      setLoading(false);
      window.location.href = "/"; 
    } catch (err) {
      const errMsg =
        err.response?.data?.message || "Signup failed. Please try again.";
      setError(errMsg);
      console.error("Signup Error:", err);
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
                <PageHeader.Title className="header">Sign Up</PageHeader.Title>
              </PageHeader.TitleArea>
            </PageHeader>
          </Box>
        </div>

        <div className="login-box">
          {error && <p className="error-message">{error}</p>}{" "}
          {/* Error Message */}
          <div>
            <label className="label">Username</label>
            <input
              autoComplete="off"
              name="Username"
              id="Username"
              className="input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
            onClick={handleSignup}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
        </div>
      </div>
      {/* <div className="pass-box">
        <p>
          Already have an account? <Link to={"/auth"}>Login</Link>
        </p>
      </div> */}
    </div>
  );
};

export default SignupPage;

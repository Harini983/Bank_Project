import React, { useState, useEffect } from "react";
import "./Login.css";
import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  // Fetch users from the API when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setUsers(response.data); // Store the users in state
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Default credentials
    const defaultEmail = "user@example.com";
    const defaultPassword = "password123";

    // Check if the provided credentials match any registered user
    const user = users.find((u) => u.mail === email && u.password === password);

    if (user || (email === defaultEmail && password === defaultPassword)) {
      setErrorMessage(""); // Clear error message
      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid email or password. Please try again.\nExample: user@example.com / password123");
    }
  };

  return (
    <div className="background">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUserAlt className="icon" />
          </div>
          <div className="input-box">
            <input
              type={passwordType}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {passwordType === "password" ? (
                <FaEyeSlash className="icon" />
              ) : (
                <FaEye className="icon" />
              )}
            </span>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember
            </label>
            <a href="#1">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <a href="register" onClick={() => navigate("/register")}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

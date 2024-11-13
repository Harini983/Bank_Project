import React, { useState } from "react";
import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordType1, setPasswordType1] = useState("password");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const togglePasswordVisibility1 = () => {
    setPasswordType1(passwordType1 === "password" ? "text" : "password");
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        const existingUsers = response.data;

        const exists = existingUsers.some((u) => u.mail === mail);

        if (exists) {
          alert("User already exists");
          return;
        }

        // Post new user data to the server
        await axios.post("http://localhost:3000/posts", {
          username: name,
          mail: mail,
          password: pwd,
        });

        alert("Registration successful! You can now log in.");
        navigate("/login"); // Redirect to login page after registration
        setName("");
        setMail("");
        setPwd("");
        setCpwd("");
      } catch (error) {
        console.error("Error during registration:", error);
        alert("Registration failed. Please try again later.");
      }
    }
  };

  const validate = () => {
    let result = true;
    if (name === "" || name === null) {
      result = false;
      alert("Please Enter the Username");
    }
    if (mail === "" || mail === null) {
      result = false;
      alert("Please Enter the Email");
    }
    if (pwd === "" || pwd === null) {
      result = false;
      alert("Please Enter the Password");
    }
    if (cpwd === "" || cpwd === null) {
      result = false;
      alert("Please Confirm the Password");
    }
    if (pwd !== cpwd) {
      result = false;
      alert("Passwords do not match.");
    }
    return result;
  };

  return (
    <div className="background">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <FaUserAlt className="icon" />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <MdEmail className="icon" />
          </div>

          <div className="input-box">
            <input
              type={passwordType}
              placeholder="Password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
            />
            <span onClick={togglePasswordVisibility}>
              {passwordType === "password" ? (
                <FaEyeSlash className="icon" />
              ) : (
                <FaEye className="icon" />
              )}
            </span>
          </div>

          <div className="input-box">
            <input
              type={passwordType1}
              placeholder="Confirm Password"
              value={cpwd}
              onChange={(e) => setCpwd(e.target.value)}
              required
            />
            <span onClick={togglePasswordVisibility1}>
              {passwordType1 === "password" ? (
                <FaEyeSlash className="icon" />
              ) : (
                <FaEye className="icon" />
              )}
            </span>
          </div>

          <button type="submit">Register</button>

          <div className="register-link">
            <p>
              Already have an account?{" "}
              <a href="#1" onClick={() => navigate("/login")}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

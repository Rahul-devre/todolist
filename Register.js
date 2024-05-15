import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerInfo, setRegisterInfo] = useState("");

  const handleRegister = () => {
    if (registerPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setRegisterInfo(`Name: ${name}, Email: ${registerEmail}`);
    setName("");
    setRegisterEmail("");
    setRegisterPassword("");
    setConfirmPassword("");
    alert("User registered successfully!");
  };

  return (
    <div>
      <h2 className="header">Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={registerEmail}
        onChange={(e) => setRegisterEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={registerPassword}
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <button className="login-btn" onClick={handleRegister}>
        Register
      </button>
      <div>{registerInfo}</div>
      <br />
      <Link to="/">Back to Login</Link>
    </div>
  );
}

export default Register;

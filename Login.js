import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import "../App.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  //   const history = useNavigate();

  const handleLogin = () => {
    setSubmittedData({ username, password });
    // history.push("/home");
  };
  return (
    <div>
      <b>
        <h2 style={{ color: "whitesmoke" }}>Login Page</h2>
      </b>
      <div>
        <label style={{ color: "whitesmoke" }}>Username:</label>
        <input
          type="text"
          value={username}
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label style={{ color: "whitesmoke" }}>Password: </label>
        <input
          type="password"
          placeholder="Enter Password.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br></br>

      <button className="login-btn " onClick={handleLogin}>
        Login
      </button>
      <p>
        <Link to="/register">Not a user? ..Register!</Link>{" "}
      </p>
      {submittedData && (
        <div>
          <h3 className="header">User Details:</h3>
          <p className="header">
            Username: {submittedData.username}
            {/* &nbsp;&nbsp;&nbsp;<button className="login-btn">Update </button>
            &nbsp;&nbsp;&nbsp;
            <button className="login-btn">Delete </button> */}
          </p>
          <p className="header">
            Password: {submittedData.password}
            {/* &nbsp;&nbsp;&nbsp;<button className="login-btn">Update </button>
            &nbsp;&nbsp;&nbsp;
            <button className="login-btn">Delete </button> */}
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;

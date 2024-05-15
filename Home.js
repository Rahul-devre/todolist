import React from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const { username } = location.state;

  return (
    <div className="App">
      <h2 className="header">Welcome to Home Page</h2>
      <p className="header">Hello, {username}</p>
    </div>
  );
}

export default Home;

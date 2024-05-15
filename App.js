import "./App.css";
import Login from "./componenrts/Login";
// import Home from "./componenrts/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./componenrts/Register";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

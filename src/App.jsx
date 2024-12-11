import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HelloPage from "../pages/HelloPage";
import "./App.css";
import Home from "../pages/Home";
import GetIn from "../pages/GetIn";
import StudentLogin from "../pages/StudentLogin";
import Signup from "../pages/Signup";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/getin" element={<GetIn />} />
        <Route path="/Studentlogin" element={<StudentLogin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

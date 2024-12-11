import React, { useState } from "react";
import "./StudentLogin.css";
import Navbarall from "../components/Navbarall";

const StudentLogin = () => {
  const [rollNo, setRollNo] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rollNo && otp) {
      alert(`Roll No: ${rollNo}, OTP: ${otp}`);
    } else {
      alert("Please fill out both fields!");
    }
  };

  return (
    <>
      <Navbarall />
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h1 className="login-title">Student Login</h1>

          {/* Roll Number Input */}
          <div className="login-field">
            <label htmlFor="rollNo" className="login-label">
              Roll Number:
            </label>
            <input
              type="text"
              id="rollNo"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              placeholder="Enter your Roll No"
              className="login-input"
            />
          </div>
          <button type="submit" className="otp-button">
            Send OTP
          </button>
          <br />
          {/* OTP Input */}
          <div className="login-field">
            <label htmlFor="otp" className="login-label">
              OTP:
            </label>
            <input
              type="password"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="login-input"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-button">
            Login
          </button>
          <br />
          <button
            onClick={() => {
              window.location.href = "/signup";
            }}
            className="new-button"
          >
            New?
          </button>
        </form>
      </div>
    </>
  );
};

export default StudentLogin;

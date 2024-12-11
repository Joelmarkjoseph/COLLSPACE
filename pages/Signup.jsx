import React, { useState } from "react";
import "./Signup.css";
import Navbarall from "../components/Navbarall";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    rollNo: "",
    phone: "",
    year: "",
    email: "",
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendOtp = () => {
    if (formData.phone) {
      alert(`OTP sent to ${formData.phone}`);
    } else {
      alert("Please enter your phone number first!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every((field) => field.trim() !== "")) {
      alert(`Signup Successful! Welcome, ${formData.fullName}`);
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <>
      <Navbarall />
      <div className="signup-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <h1 className="signup-title">Signup</h1>

          {/* Full Name */}
          <div className="signup-field">
            <label htmlFor="fullName" className="signup-label">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="signup-input"
            />
          </div>

          {/* Roll Number */}
          <div className="signup-field">
            <label htmlFor="rollNo" className="signup-label">
              Roll No:
            </label>
            <input
              type="text"
              id="rollNo"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              placeholder="Enter your roll number"
              className="signup-input"
            />
          </div>

          {/* Phone Number */}
          <div className="signup-field">
            <label htmlFor="phone" className="signup-label">
              Phone Number:
            </label>
            <div className="input-with-button">
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="signup-input"
              />
              <button
                type="button"
                className="send-otp-button"
                onClick={handleSendOtp}
              >
                Send OTP
              </button>
            </div>
          </div>

          {/* Year */}
          <div className="signup-field">
            <label htmlFor="year" className="signup-label">
              Year:
            </label>
            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="signup-input"
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

          {/* Email ID */}
          <div className="signup-field">
            <label htmlFor="email" className="signup-label">
              Email ID:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email ID"
              className="signup-input"
            />
          </div>

          {/* OTP */}
          <div className="signup-field">
            <label htmlFor="otp" className="signup-label">
              OTP:
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              placeholder="Enter OTP"
              className="signup-input"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="signup-button">
            Signup
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;

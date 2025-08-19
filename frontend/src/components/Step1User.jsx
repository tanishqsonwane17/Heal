import React from "react";

const Step1User = ({ formData, handleChange, nextStep }) => (
  <div className="step">
    <h2>Step 1: User Info</h2>
    <input
      type="text"
      name="username"
      placeholder="Username"
      value={formData.username}
      onChange={handleChange}
      autoComplete="username"
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      autoComplete="email"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      autoComplete="new-password"
    />
    <button type="button" onClick={nextStep}>
      Next
    </button>
  </div>
);

export default Step1User;

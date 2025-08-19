import React from "react";

// Step2Gender.jsx
const Step2Gender = ({ formData, handleChange, nextStep, prevStep }) => (
  <div>
    <h2>Gender</h2>
    <select name="gender" value={formData.gender} onChange={handleChange}>
      <option value="">Select</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    <button onClick={prevStep}>Back</button>
    <button onClick={nextStep}>Next</button>
  </div>
);

export default Step2Gender;

// Step3Age.jsx
const Step3Age = ({ formData, handleChange, nextStep, prevStep }) => (
  <div>
    <h2>Step 3: Age</h2>
    <input
      type="number"
      name="age"
      placeholder="Age"
      value={formData.age}
      onChange={handleChange}
    />
    <button onClick={prevStep}>Back</button>
    <button onClick={nextStep}>Next</button>
  </div>
);

export default Step3Age;

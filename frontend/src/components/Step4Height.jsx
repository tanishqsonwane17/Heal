// Step4Height.jsx
const Step4Height = ({ formData, handleChange, nextStep, prevStep }) => (
  <div>
    <h2>Step 4: Height</h2>
    <input
      type="text"
      name="height"
      placeholder="Height"
      value={formData.height}
      onChange={handleChange}
    />
    <button onClick={prevStep}>Back</button>
    <button onClick={nextStep}>Next</button>
  </div>
);

export default Step4Height;

// Step5Weight.jsx
const Step5Weight = ({ formData, handleChange, prevStep, handleSubmit }) => (
  <div>
    <h2>Step 5: Weight</h2>
    <input
      type="text"
      name="weight"
      placeholder="Weight"
      value={formData.weight}
      onChange={handleChange}
    />
    <button onClick={prevStep}>Back</button>
    <button onClick={handleSubmit}>Submit</button>
  </div>
);

export default Step5Weight;

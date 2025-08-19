// Step3Age.jsx
import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { UserContext } from "../context/UserContext";

const Step3Age = () => {
  const { step, setStep } = useContext(UserContext);
  const { register, watch } = useFormContext(); // react-hook-form se values lena

  const age = watch("age"); // current value track karna

  const handleNext = () => {
    if (!age || Number(age) < 1) {
      alert("Please enter a valid age (1 or above).");
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="step-container">
      <h2 className="text-xl font-bold mb-4">Step 3: Age</h2>

      <input
        type="number"
        placeholder="Enter your age"
        {...register("age")} // yaha hook form ke register se connect
        className="border p-2 rounded w-full mb-4"
        min="1"
      />

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3Age;

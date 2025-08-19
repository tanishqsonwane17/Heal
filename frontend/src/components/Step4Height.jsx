import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { UserContext } from "../context/UserContext";

const Step4Height = () => {
  const { register, watch } = useFormContext();
  const { nextStep, prevStep } = useContext(UserContext);

  const heightValue = watch("height"); // current value

  return (
    <div className="step-container">
      <h2 className="text-xl font-bold mb-4">Step 4: Height</h2>

      <input
        type="number"
        placeholder="Enter your height (cm)"
        {...register("height", { required: true, min: 50 })}
        value={heightValue || ""}
        className="border p-2 rounded w-full mb-4"
      />

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Back
        </button>

        <button
          type="button"
          onClick={nextStep}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step4Height;

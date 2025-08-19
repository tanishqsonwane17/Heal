import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { UserContext } from "../context/UserContext";

const Step5Weight = () => {
  const { register, watch } = useFormContext();
  const { prevStep } = useContext(UserContext);

  const weightValue = watch("weight");

  return (
    <div className="step-container">
      <h2 className="text-xl font-bold mb-4">Step 5: Weight</h2>

      <input
        type="number"
        placeholder="Enter your weight (kg)"
        {...register("weight", { required: true, min: 1 })}
        value={weightValue || ""}
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

      </div>
    </div>
  );
};

export default Step5Weight;

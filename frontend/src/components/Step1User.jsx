import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { UserContext } from "../context/UserContext";

const Step1User = () => {
  const { register } = useFormContext();
  const { nextStep } = useContext(UserContext);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 1: User Info</h2>

      <input
        type="text"
        placeholder="Username"
        {...register("username", { required: true })}
        className="border p-2 rounded w-full mb-4"
      />

      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
        className="border p-2 rounded w-full mb-4"
      />

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
        className="border p-2 rounded w-full mb-4"
      />

      <button
        type="button"
        onClick={nextStep} // step context ka nextStep
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Step1User;

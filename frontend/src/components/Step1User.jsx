import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router";

const Step1User = () => {
  const { register } = useFormContext();
  const { nextStep } = useContext(UserContext);

  return (
    <div>
     <div className="h-screen px-8 w-full">
      <div className="flex flex-col gap-8 justify-center h-[50%] w-full">
        <h1 className="text-center text-3xl font-semibold capitalize">Enter your valid details</h1>
       <form action="">
       <input
        type="text"
        placeholder="Username"
        {...register("username", { required: true })}
        className="border rounded-3xl px-3 p-2 w-full mb-4"
      />
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
        className="border rounded-3xl px-3 p-2 w-full mb-4"
      />

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
        className="border rounded-3xl px-3 p-2 w-full mb-4"
      />
      <p className="text-xs">Already have an account? <Link to={"/auth/login"} className="text-[#6e7d48] underline">Login</Link> </p>
      </form>
       <button
           type="button"
           onClick={nextStep}
           className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#9DB16B] w-[90%] text-white px-4 py-3 rounded-3xl shadow-lg">
           Next
         </button>
      </div>
     </div>
      
    </div>
  );
};

export default Step1User;

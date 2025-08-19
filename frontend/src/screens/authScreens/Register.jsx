// Register.jsx
import React, { useContext } from "react";
import "../../App.css";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FormProvider, useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";

import Step1User from "../../components/Step1User";
import Step2Gender from "../../components/Step2Gender";
import Step3Age from "../../components/Step3Age";
import Step4Height from "../../components/Step4Height";
import Step5Weight from "../../components/Step5Weight";
import { baseUrl } from "../../config/Axios";

// map steps
const stepComponents = {
  1: Step1User,
  2: Step2Gender,
  3: Step3Age,
  4: Step4Height,
  5: Step5Weight,
};

const Register = () => {
  const { step } = useContext(UserContext);
  const methods = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      gender: "",
      age: "",
      height: "",
      weight: "",
    },
  });

const registerMutation = useMutation({
  mutationFn: async (data) => {
    // ✅ yahan axios call me headers add karo
    const res = await axios.post(`${baseUrl}/user/register`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  },
});
const onSubmit = (data) => {
  const payload = {
    username: data.username || "",
    email: data.email || "",
    password: data.password || "",
    gender: data.gender || "",                
    age: Number(data.age) || 0,               
    height: Number(data.height) || 0,         
    weight: Number(data.weight) || 0          
  };

  console.log("Submitting payload 👉", payload);
  registerMutation.mutate(payload);
};
  const CurrentStep = stepComponents[step];
  return (
    <div className="register-container max-w-md mx-auto">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CurrentStep />
              {step === 5 && (
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                >
                  Register
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </form>
      </FormProvider>
      {registerMutation.isLoading && <p>Loading...</p>}
      {registerMutation.isError && (
        <p className="text-red-500">Error: {registerMutation.error.message}</p>
      )}
      {registerMutation.data && (
        <p className="text-green-600">
          Success! Welcome {registerMutation.data.username}
        </p>
      )}
    </div>
  );
};
export default Register;

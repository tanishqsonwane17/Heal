import React, { useState } from "react";
import '../../App.css'
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Step1User from "../../components/Step1User";
import Step2Gender from "../../components/Step2Gender";
import Step3Age from "../../components/Step3Age";
import Step4Height from "../../components/Step4Height";
import Step5Weight from "../../components/Step5Weight";
const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const registerMutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post("http://localhost:3000/user/register", formData);
      return res.data;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerMutation.mutate();
  };

  return (
    <div className="register-container">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Step1User formData={formData} handleChange={handleChange} nextStep={nextStep} />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Step2Gender formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Step3Age formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Step4Height formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />
          </motion.div>
        )}

        {step === 5 && (
          <motion.div
            key="step5"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Step5Weight formData={formData} handleChange={handleChange} prevStep={prevStep} handleSubmit={handleSubmit} />
          </motion.div>
        )}
      </AnimatePresence>

      {registerMutation.isLoading && <p>Loading...</p>}
      {registerMutation.isError && <p>Error: {registerMutation.error.message}</p>}
      {registerMutation.data && <p>Success! Welcome {registerMutation.data.username}</p>}
    </div>
  );
};

export default Register;

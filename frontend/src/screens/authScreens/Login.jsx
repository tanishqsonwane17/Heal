"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../config/Axios";
import { Link, useNavigate } from "react-router"; 

const Login = () => {
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (data) => {
      const res = await axios.post(`${baseUrl}/user/login`, data, {
        headers: { "Content-Type": "application/json" },
      });
      return res.data;
    },
    onSuccess: (data) => {
      console.log("Login successful: ", data);
      navigate("/home");
    },
  });

  const onSubmit = (data) => {
    loginMutation.mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="login-container h-screen flex flex-col justify-around mt-10 items-center px-6">
      <FormProvider {...methods}>
        <form id="registerForm"
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full max-w-md flex flex-col gap-4"
        >
          <div>
            <h1 className="text-center text-3xl font-semibold mb-4">Login</h1>
          </div>

          <motion.input
            type="email"
            placeholder="Email"
            {...methods.register("email", { required: true })}
            className="border rounded-3xl px-3 p-3 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            autoComplete="username"
          />

          <motion.input
            type="password"
            placeholder="Password"
            {...methods.register("password", { required: true })}
            className="border rounded-3xl px-3 p-3 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            autoComplete="current-password"
          />

          {/* ✅ Fix link nesting */}
          <p className="text-xs">
            Don’t have an account?{" "}
            <Link to="/auth/register" className="text-[#6e7d48] underline">
              Register
            </Link>
          </p>

         
        </form>
         <motion.button
            type="submit"
            form="registerForm" 
            className="py-3 w-full rounded-3xl tracking-wider font-semibold flex bg-[#9DB16B] text-white items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
      </FormProvider>

      {/* States */}
      {loginMutation.isLoading && <p className="mt-4">Loading...</p>}
      {loginMutation.isError && (
        <p className="text-red-500 mt-4">Error: {loginMutation.error.message}</p>
      )}
      {loginMutation.data && (
        <p className="text-green-600 mt-4">
          Success! Welcome {loginMutation.data.username}
        </p>
      )}
    </div>
  );
};

export default Login;

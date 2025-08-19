import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import { IoIosArrowRoundForward } from "react-icons/io";
import Nav from "./Nav";
const Step2Gender = () => {
  const { register, watch, setValue } = useFormContext();
  const { nextStep, prevStep } = useContext(UserContext);

  const selectedGender = watch("gender"); // current selected value

  const options = ["Male", "Female", "Other"];

  return (
    <>
    <Nav/>
    <div className="w-full bg-[linear-gradient(to_right,_##fde1e198_10%,_white_99%)] px-4 mt-2 flex flex-col items-center justify-between  ">
      <div>
      <div className=" w-full flex justify-center ">
        <h1 className="text-[28px] leading-tight text-center font-medium text-[#352414]">
          What's your official gender
        </h1>
      </div>
      <div className="flex flex-col gap-60 h-full">
      <div className=" flex flex-col gap-4 mt-10 items-center w-full">
        {options.map((gender) => (
          <div
          key={gender}
          onClick={() => setValue("gender", gender)}
          className={`border h-12 rounded-3xl w-full flex justify-between px-4 items-center cursor-pointer
            ${selectedGender === gender ? "bg-[#9DB16B] text-white" : "bg-white text-black"}`}
            >
            <span>{gender}</span>
            <span
              className={`h-4 w-4 rounded-full border flex items-center justify-center
                ${selectedGender === gender ? "bg-white" : "bg-transparent"}`}
                >
              {selectedGender === gender && <span className="h-2 w-2 rounded-full bg-[#9DB16B]"></span>}
            </span>
          </div>
        ))}
      
    </div>
      <div className=" w-full  ">
        <button
        className={`mb-10 text-white py-3 w-full rounded-3xl tracking-wider font-semibold ${selectedGender ? "bg-[#4F3422]" : "bg-gray-400 cursor-not-allowed"}`}
        type="button"
        onClick={nextStep}
        disabled={!selectedGender}
      >
        Continue <IoIosArrowRoundForward className="text-4xl inline" />
      </button>
      </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Step2Gender;

// Step3Age.jsx
import React, { useContext, useRef, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import Nav from "./Nav";
import { IoIosArrowRoundForward } from "react-icons/io";

const Step3Age = () => {
  const { step, setStep } = useContext(UserContext);
  const { watch, setValue } = useFormContext();
  const scrollRef = useRef(null);

  const ages = Array.from({ length: 100 }, (_, i) => i + 1); // 1 to 100
  const itemHeight = 50; // each item height

  const [currentAge, setCurrentAge] = useState(watch("age") || 20);

  // Scroll event
  const handleScroll = () => {
    const scrollTop = scrollRef.current.scrollTop;
    const index = Math.round(scrollTop / itemHeight);
    setCurrentAge(ages[index]);
  };

  // Snap effect on scroll end
  const handleScrollEnd = () => {
    scrollRef.current.scrollTo({
      top: (currentAge - 1) * itemHeight,
      behavior: "smooth",
    });
    setValue("age", currentAge);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = (currentAge - 1) * itemHeight;
    }
  }, [scrollRef]);

  const handleNext = () => {
    setValue("age", currentAge);
    setStep(step + 1);
  };

  return (
    <>
      <Nav />
      <div className="w-full flex justify-center mt-8 px-4">
        <h1 className="text-[28px] leading-tight text-center font-medium text-[#352414]">
          What's your age?
        </h1>
      </div>

      <div className="flex flex-col items-center mt-6 px-4 relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onTouchEnd={handleScrollEnd}
          onMouseUp={handleScrollEnd}
          className="h-60 w-32 overflow-y-scroll scroll-smooth snap-y snap-mandatory"
        >
          <div className="py-24 flex flex-col items-center">
            {ages.map((ageNum) => (
              <div
                key={ageNum}
                className={`h-12 w-full flex items-center justify-center text-xl snap-center ${
                  ageNum === currentAge ? "font-bold text-[#4F3422]" : "text-gray-500"
                }`}
              >
                {ageNum}
              </div>
            ))}
          </div>
        </div>

        {/* Center circle */}
        <div className="absolute top-[50%] -translate-y-1/2 h-30 w-40 bg-[#9DB16B] rounded-4xl flex items-center justify-center text-white text-5xl font-bold pointer-events-none">
          {currentAge}
        </div>
        <button
          className={`mt-36 py-3 w-full rounded-3xl tracking-wider font-semibold flex items-center justify-center
            ${currentAge ? "bg-[#4F3422] text-white" : "bg-gray-400 cursor-not-allowed"}`}
          type="button"
          onClick={handleNext}
          disabled={!currentAge}
        >
          Continue <IoIosArrowRoundForward className="ml-2 text-xl" />
        </button>
      </div>
    </>
  );
};

export default Step3Age;

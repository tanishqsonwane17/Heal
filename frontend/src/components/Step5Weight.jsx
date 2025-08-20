import React, { useContext, useRef, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import Nav from "./Nav";
import { IoIosArrowRoundForward } from "react-icons/io";

const Step5Weight = () => {
  const { step, setStep } = useContext(UserContext);
  const { watch, setValue } = useFormContext();
  const scrollRef = useRef(null);

  const itemWidth = 60;
  const defaultWeight = 70; // default weight kg

  // Weight range from 30kg to 200kg
  const weights = Array.from({ length: 171 }, (_, i) => 30 + i);

const [currentWeight, setCurrentWeight] = useState(watch("weight") || defaultWeight);

useEffect(() => {
  if (!watch("weight")) {
    setValue("weight", defaultWeight);
  }
}, [setValue, watch]);


  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const index = Math.round(scrollLeft / itemWidth);
    const safeIndex = Math.max(0, Math.min(index, weights.length - 1));
    setCurrentWeight(weights[safeIndex]);
  };

  const handleScrollEnd = () => {
    scrollRef.current.scrollTo({
      left: weights.indexOf(currentWeight) * itemWidth,
      behavior: "smooth",
    });
    setValue("weight", currentWeight);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = weights.indexOf(currentWeight) * itemWidth;
    }
  }, [scrollRef]);

  const handleNext = () => {
    setValue("weight", currentWeight);
    setStep(step + 1);
  };

  return (
    <>
      <Nav />

      {/* Title */}
      <div className="w-full flex justify-center mt-8 px-4">
        <h1 className="text-[28px] leading-tight text-center font-medium text-[#352414]">
          What's your weight?
        </h1>
      </div>

      {/* KG label */}
      <div className="flex justify-center mt-6">
        <div className="flex bg-[#f5f5f5] rounded-full p-1">
          <div className="px-5 py-1 rounded-full bg-[#FF7F32] text-white font-semibold">
            KG
          </div>
        </div>
      </div>

      {/* Weight Display */}
      <div className="mt-20 leading-none flex justify-center items-center w-full">
        <div className="text-[#4F3422] text-[70px] font-extrabold tracking-tighter relative">
          {currentWeight}{" "}
          <span className="text-sm font-semibold absolute px-4 tracking-wider right-[-40px] top-4">
            KG
          </span>
        </div>
      </div>

      {/* Weight Picker */}
      <div className="flex flex-col gap-30 items-center mt-10 px-4">
        <div className="w-full px-14">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onTouchEnd={handleScrollEnd}
            onMouseUp={handleScrollEnd}
            className="h-24 w-full overflow-x-scroll scroll-smooth tracking-wider flex items-center snap-x snap-mandatory no-scrollbar"
          >
            <div className="flex px-4 gap-4">
              {weights.map((w) => (
                <div
                  key={w}
                  className={`w-16 text-center text-xl snap-center ${
                    w === currentWeight ? "text-transparent" : "text-gray-400"
                  }`}
                >
                  {w}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step5Weight;

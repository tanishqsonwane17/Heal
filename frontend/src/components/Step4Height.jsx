import React, { useContext, useRef, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import Nav from "./Nav";
import { IoIosArrowRoundForward } from "react-icons/io";

const Step4Height = () => {
  const { step, setStep } = useContext(UserContext);
  const { watch, setValue } = useFormContext();
  const scrollRef = useRef(null);

  const itemWidth = 60;
  const defaultInches = 62;

  // Only FT unit supported
  const ftHeights = Array.from({ length: 37 }, (_, i) => 48 + i); // 4'0" to 7'0"
  const heights = ftHeights;

  const [currentHeight, setCurrentHeight] = useState(
    watch("height") || defaultInches
  );

const handleScroll = () => {
  const scrollLeft = scrollRef.current.scrollLeft;
  const index = Math.round(scrollLeft / itemWidth);
  const safeIndex = Math.max(0, Math.min(index, heights.length - 1));
  setCurrentHeight(heights[safeIndex]);
};
  const handleScrollEnd = () => {
    scrollRef.current.scrollTo({
      left: heights.indexOf(currentHeight) * itemWidth,
      behavior: "smooth",
    });
    setValue("height", currentHeight);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = heights.indexOf(currentHeight) * itemWidth;
    }
  }, [scrollRef]);

  const handleNext = () => {
    setValue("height", currentHeight);
    setStep(step + 1);
  };

  const formatHeight = (value) => {
    const ft = Math.floor(value / 12);
    const inch = value % 12;
    return `${ft}-${inch}"`;
  };

  return (
    <>
      <Nav />

      {/* Title */}
      <div className="w-full flex justify-center mt-8 px-4">
        <h1 className="text-[28px] leading-tight text-center font-medium text-[#352414]">
          What's your height?
        </h1>
      </div>

      {/* FT label only */}
      <div className="flex justify-center mt-6">
        <div className="flex bg-[#f5f5f5] rounded-full p-1">
          <div className="px-5 py-1 rounded-full bg-[#FF7F32] text-white font-semibold">
            FT
          </div>
        </div>
      </div>
       <div className="mt-20 leading-none flex justify-center items-center w-full">
          <div className="text-[#4F3422] text-[70px] font-extrabold tracking-tighter">
            {formatHeight(currentHeight)}{" "}
            <span className="text-sm font-semibold absolute px-4 tracking-wider">FT</span>
          </div>
        </div>
      {/* Height Picker */}
      <div className="flex flex-col gap-30 items-center mt-10 px-4">
        <div className="w-full px-14">
          <div
          ref={scrollRef}
          onScroll={handleScroll}
          onTouchEnd={handleScrollEnd}
          onMouseUp={handleScrollEnd}
          className="h-24 w-full overflow-x-scroll scroll-smooth tracking-wider flex items-center snap-x snap-mandatory no-scrollbar">
          <div className="flex px-4 gap-4">
            {heights.map((h) => (
              <div
                key={h}
                className={`w-16 text-center text-xl snap-center ${
                  h === currentHeight ? "text-transparent" : "text-gray-400"
                }`}
              >
                {formatHeight(h)}
              </div>
            ))}
          </div>
        </div>
        </div>       

        {/* Continue Button */}
        <button
          className={` py-3 w-full rounded-3xl tracking-wider font-semibold flex items-center justify-center
            ${currentHeight ? "bg-[#4F3422] text-white" : "bg-gray-400 cursor-not-allowed"}`}
          type="button"
          onClick={handleNext}
          disabled={!currentHeight}>
          Continue <IoIosArrowRoundForward className="ml-2 text-xl" />
        </button>
      </div>
    </>
  );
};

export default Step4Height;

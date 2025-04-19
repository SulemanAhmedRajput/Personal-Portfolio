import React from "react";

const CustomSticker = ({ text }) => {
  return (
    <div className=" h-full absolute top-0 right-0">
      <span
        style={{
          writingMode: "vertical-rl" /* Top to bottom */,
          textOrientation: "mixed",
        }}
        className=" sticky top-24  text-6xl text-primary/20 max-md:text-5xl"
      >
        <div className="relative">
          <div className="w-1/2 -z-10 max-md:w-full h-full relative">
            <div className="w-[300px]  h-[300px] shrink-0 rounded-full backdrop-blur-xl absolute -right-[115px] -top-[20px] bg-primary opacity-[1%]"></div>

          </div>
          {text}
        </div>
      </span>
    </div>
  );
};

export default CustomSticker;

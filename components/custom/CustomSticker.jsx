import React from "react";

const CustomSticker = ({ text }) => {
  return (
    <div className=" h-full absolute top-0 right-0">
      <span
        style={{
          writingMode: "vertical-rl" /* Top to bottom */,
          textOrientation: "mixed",
        }}
        className=" sticky top-24 text-6xl text-primary/20 max-md:text-5xl"
      >
        {text}
      </span>
    </div>
  );
};

export default CustomSticker;

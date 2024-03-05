import React from "react";

const CustomSticker = ({ text }) => {
  return (
    <div className=" h-screen absolute top-0 right-0">
      <span
        style={{
          writingMode: "vertical-rl" /* Top to bottom */,
          textOrientation: "mixed",
        }}
        className=" sticky top-24 text-8xl text-foreground/50"
      >
        {text}
      </span>
    </div>
  );
};

export default CustomSticker;

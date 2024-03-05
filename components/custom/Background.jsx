import React from "react";

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

const Background = () => {
  return (
    <div className="fixed w-full h-screen overflow-hidden -z-20">
      {Array(Math.floor(Math.random() * 5 + 2))
        .fill()
        .map((_, index) => {
          let a = Math.floor(Math.random() * 20 + 5);
          const random = getRandomColor();
          return (
            <div
              key={index}
              className={`absolute -z-10    drop-shadow-lg shadow-[${getRandomColor()}] rounded-full drop-shadow-lg`}
              style={{
                background: random,
                width: `${a}vw`,
                height: `${a}vw`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `r otate(${Math.random() * 360}deg)`,
              }}
            ></div>
          );
        })}
      <div className="w-full h-full bg-background/80 backdrop-blur-sm"></div>
    </div>
  );
};

export default Background;

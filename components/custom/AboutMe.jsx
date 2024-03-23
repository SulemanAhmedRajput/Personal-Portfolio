import React from "react";
import Image from "next/image";
// import PersonalImage from "@/public/pi.png";
import Template from "./Template";
const AboutMe = () => {
  return (
    <Template heading={<div>About Me</div>} id={"aboutme"}>
      <div className="flex gap-3 max-md:flex-col  justify-center">
        <div className="w-2/6 -mt-36 max-md:w-full">
          <div className="relative w-[200px] mx-auto">
            <div className="w-[200px]  h-[225px] rounded-lg  bg-foreground/10 bottom-0 -z-10 left-0 backdrop-blur-lg"></div>

            {/* <Image
              alt="Personal Image"
              src={PersonalImage}
              className="overflow-hidden z-30"
              width={200}
              height={200}
            /> */}
          </div>
        </div>
        <div className="w-4/5 text-foreground/80 text-sm leading-7 max-md:w-full px-8 max-md:px-4">
          Greetings, I am Suleman Ahmed, a computer science graduate with solid
          experience as a full-stack web developer and more than two years of
          practical experience. My domain covers the entire MERN stack,
          including NodeJS, React, Redux, HTML5, CSS3, Bootstrap, and
          JavaScript. In backend development, I leverage the power of MongoDB to
          create dynamic web applications. As an expert in working with RESTful
          APIs, I guarantee seamless integration and extend the functionality of
          projects to provide a sophisticated user experience.
        </div>
      </div>
    </Template>
  );
};

export default AboutMe;

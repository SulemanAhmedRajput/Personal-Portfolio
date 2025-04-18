import React from "react";
import Template from "./Template";
import { TimelineLayout } from "./TimelineLayout";
import { experienceData } from "@/public/data";

const Experience = () => {
  return (
    <Template
      heading="Experience"
      id="experience"
      headingDescription="A professional journey filled with challenges, learning, and impactful contributions."
    >
      <div className="h-fit mx-auto w-full">
        <TimelineLayout items={experienceData} />
      </div>
    </Template>
  );
};

export default Experience;

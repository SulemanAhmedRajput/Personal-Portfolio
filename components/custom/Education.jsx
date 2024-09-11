import React from "react";
import Template from "./Template";
import { TimelineLayout } from "./TimelineLayout";
import { timelineData } from "@/public/data";

const Education = () => {
  return (
    <Template
      heading={`Education`}
      id={"education"}
      headingDescription={`A lifelong journey of acquiring knowledge, skills, and values to empower individuals and communities for personal and societal advancement.`}
    >
      <div className="h-fit mx-auto w-max">
        <TimelineLayout items={timelineData} />
      </div>
    </Template>
  );
};

export default Education;

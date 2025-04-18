import React from "react";
import Template from "./Template";
import { TimelineLayout } from "./TimelineLayout";
import { educationData } from "@/public/data";

const Education = () => {
  return (
    <Template
      heading="Education"
      id="education"
      headingDescription="A lifelong journey of acquiring knowledge, skills, and values to empower individuals and communities for personal and societal advancement."
    >
      <div className="h-fit mx-auto w-full">
        <TimelineLayout items={educationData} />
      </div>
    </Template>
  );
};

export default Education;

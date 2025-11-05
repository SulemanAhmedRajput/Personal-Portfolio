import React from "react";
import Template from "./Template";
import { TimelineLayout } from "./TimelineLayout";
import { educationData } from "@/public/data";
import { BlurFade } from "@/components/ui/blur-fade";

const Education = () => {
  return (
    <Template
      heading="Education"
      id="education"
      headingDescription="A lifelong journey of acquiring knowledge, skills, and values to empower individuals and communities for personal and societal advancement."
    >
      <BlurFade delay={0.25} inView>
        <div className="h-fit mx-auto w-full">
          <TimelineLayout items={educationData} />
        </div>
      </BlurFade>
    </Template>
  );
};

export default Education;

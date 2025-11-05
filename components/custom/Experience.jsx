import React from "react";
import Template from "./Template";
import { TimelineLayout } from "./TimelineLayout";
import { experienceData } from "@/public/data";
import { BlurFade } from "@/components/ui/blur-fade";

const Experience = () => {
  return (
    <Template
      heading="Experience"
      id="experience"
      headingDescription="A professional journey filled with challenges, learning, and impactful contributions."
    >
      <BlurFade delay={0.25} inView>
        <div className="h-fit mx-auto w-full">
          <TimelineLayout items={experienceData} />
        </div>
      </BlurFade>
    </Template>
  );
};

export default Experience;

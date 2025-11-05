import React from "react";
import Template from "./Template";
import { TimelineLayout } from "./TimelineLayout";
import { certificationData } from "@/public/data";
import { BlurFade } from "@/components/ui/blur-fade";

const Certifications = () => {
  return (
    <Template
      heading="Certifications"
      id="certifications"
      headingDescription="Credentials that validate my skills and knowledge in various technologies."
    >
      <BlurFade delay={0.25} inView>
        <div className="h-fit mx-auto w-full">
          <TimelineLayout items={certificationData} />
        </div>
      </BlurFade>
    </Template>
  );
};

export default Certifications;

import React from "react";
import Template from "./Template";
import { TimelineLayout } from "./TimelineLayout";
import { certificationData } from "@/public/data";

const Certifications = () => {
  return (
    <Template
      heading="Certifications"
      id="certifications"
      headingDescription="Credentials that validate my skills and knowledge in various technologies."
    >
      <div className="h-fit mx-auto w-full">
        <TimelineLayout items={certificationData} />
      </div>
    </Template>
  );
};

export default Certifications;

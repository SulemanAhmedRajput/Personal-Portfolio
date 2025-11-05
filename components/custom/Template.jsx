import { Card } from "@/components/ui/card";
import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";

const Template = ({ children, heading, headingDescription, id }) => {
  return (
    <div className="p-3 " id={id ? id : ""}>
      <BlurFade delay={0.25} inView>
        <div className="text-center  text-foreground text-5xl max-md:text-3xl  mt-24 mb-10">
          <h1>{heading}</h1>
          {headingDescription && (
            <p className="text-sm my-2 text-foreground/60 max-sm:text-xs">
              {headingDescription}
            </p>
          )}
        </div>
      </BlurFade>

      <div>{children}</div>
    </div>
  );
};

export default Template;

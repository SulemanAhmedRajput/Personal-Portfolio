import { Card } from "@/components/ui/card";
import React from "react";

const Template = ({ children, heading, headingDescription, id }) => {
  return (
    <div className="p-3 " id={id ? id : ""}>
      <div className="text-center  text-foreground text-5xl  mt-24 mb-10">
        <h1>{heading}</h1>
        <p className="text-sm my-2 text-foreground/60">{headingDescription}</p>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Template;

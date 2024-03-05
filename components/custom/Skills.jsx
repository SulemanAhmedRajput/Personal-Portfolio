import { Card } from "@/components/ui/card";
import React from "react";
import { FaBootstrap, FaJava, FaReact } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import {
  SiJquery,
  SiSanity,
  SiRedux,
  SiMongoose,
  SiSocketdotio,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import Template from "./Template";

const Skill = ({ obj: { icon, title, batch } }) => {
  const level = {
    beginner: `#98FB98`,
    intermediate: `#FF7F50`,
    expert: `#00BFFF`,
  };
  return (
    <Card
      className={`hover:bg-primary hover:text-background hover:dark:bg-primary duration-75 cursor-pointer transition-colors  flex items-center`}
    >
      <span className="flex gap-2 items-center">
        <div
          className={` bg w-2 h-2 rounded-lg`}
          style={{ background: level[batch] }}
        ></div>
        <span className={`text-xl `}>{icon}</span>
      </span>
      {title}
    </Card>
  );
};

const Skills = () => {
  const level = {
    Beginner: `#98FB98`,
    Intermediate: `#FF7F50`,
    Expert: `#00BFFF`,
  };
  const skillSet = {
    "Programming Languages": [
      {
        icon: <SiJavascript />,
        title: "Javascript",
        batch: "expert",
      },
      {
        icon: <SiTypescript />,
        title: "Typescript",
        batch: "expert",
      },

      {
        icon: <FaPython />,
        title: "Python",
        batch: "expert",
      },
    ],
    "Frontend Development": [
      {
        icon: <FaReact />,
        title: "ReactJS",
        batch: "expert",
      },
      {
        icon: <TbBrandNextjs />,
        title: "NextJS",
        batch: "expert",
      },
      {
        icon: <BiLogoTailwindCss />,
        title: "TailwindCSS",
        batch: "expert",
      },
      {
        icon: <FaBootstrap />,
        title: "Bootstrap",
        batch: "expert",
      },

      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="h-6 w-6"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
          </svg>
        ),
        title: "Shadcn/ui",
        batch: "expert",
      },
      {
        icon: <SiJquery />,
        title: "JQuary",
        batch: "expert",
      },

      {
        icon: <SiRedux />,
        title: "Redux",
        batch: "expert",
      },
      {
        icon: <SiSocketdotio />,
        title: "Socket.io",
        batch: "expert",
      },
    ],
    "Backend Development": [
      {
        icon: <DiMongodb />,
        title: "MongoDB",
        batch: "expert",
      },
      {
        icon: <SiMongoose />,
        title: "Mongoose",
        batch: "expert",
      },
      {
        icon: <IoLogoFirebase />,
        title: "Firebase ",
        batch: "expert",
      },
      {
        icon: <SiSanity />,
        title: "Sanity ",
        batch: "expert",
      },
    ],
  };

  return (
    <Template
      heading={`Skills`}
      id={"skills"}
      headingDescription={
        <span>
          Data Structures and Algorithms, Frontend Development, Backend <br />
          Development, Database Management, System Design and Cloud.
        </span>
      }
    >
      <div className="max-md:text-xs">
        <div className="flex gap-3 justify-center flex-wrap max-md:text-xs">
          <Card
            className={`flex gap-3 px-4 py-2 font-bold items-center bg-background/10`}
          >
            <div
              className={`w-2 h-2 rounded-lg`}
              style={{ background: level.Beginner }}
            ></div>
            Beginner
          </Card>

          <Card
            className={`flex gap-3 px-4 py-2 font-bold items-center bg-background/10`}
          >
            <div
              className={`w-2 h-2 rounded-lg`}
              style={{ background: level.Intermediate }}
            ></div>
            Intermediate
          </Card>
          <Card
            className={`flex gap-3 px-4 py-2 font-bold items-center bg-background/10`}
          >
            <div
              className={`w-2 h-2 rounded-lg`}
              style={{ background: level.Expert }}
            ></div>
            Expert
          </Card>
        </div>
        {Object.keys(skillSet).map((category, i) => (
          <div className="mt-5" key={i}>
            <span className="text-primary/90 inline-block mb-3 mt-8 text-xl ">
              {category}
            </span>
            <div className="flex flex-wrap gap-3 *:px-4 *:py-2 *:pr-4  *:bg-background/20  *:flex *:items-center *:gap-3 ">
              {skillSet[category].map((skill, index) => (
                <Skill key={index} obj={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Template>
  );
};

export default Skills;

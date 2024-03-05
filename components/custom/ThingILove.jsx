import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaCode } from "react-icons/fa6";
import Template from "./Template";
import CustomSticker from "./CustomSticker";

const ThingILove = () => {
  const cardList = [
    {
      icon: <FaCode />,
      header: `Programming`,
      content: ` I have an unending passion for programming. From solving complex
      problems to building elegant solutions, programming allows me to
      express my creativity and logical thinking. Whether it's crafting
      clean code or diving into new technologies, I find joy in every
      aspect of the development process.`,
    },
    {
      icon: <FaCode />,
      header: `Learning`,
      content: `Learning is my constant companion. I am endlessly curious about the world around me and am always seeking to expand my knowledge. Whether it's exploring new programming languages, diving into the depths of machine learning, or discovering the intricacies of a new culture, I thrive on the journey of discovery.`,
    },
    {
      icon: <FaCode />,
      header: `Creativity`,
      content: `Creativity fuels my soul. Whether it's through coding, writing, design, or any other form of expression, I find joy in bringing ideas to life. I believe that creativity is the spark that ignites innovation and drives progress, and I am committed to nurturing and cultivating it in everything I do.`,
    },
    {
      icon: <FaCode />,
      header: `Problem Solving`,
      content: `I am a problem solver at heart. I love tackling challenges head-on and finding innovative solutions to complex problems. Whether it's debugging code, optimizing processes, or overcoming obstacles in life, I approach every challenge with a positive attitude and a determination to succeed.`,
    },
    {
      icon: <FaCode />,
      header: `Collaboration`,
      content: `Collaboration is key to my success. I thrive in environments where I can work alongside talented individuals who share a common vision and goal. I believe that teamwork makes the dream work, and I am committed to fostering strong relationships and building meaningful connections with those around me.`,
    },
    {
      icon: <FaCode />,
      header: `Innovative Thinking`,
      content:
        "I am driven by a relentless pursuit of innovation, constantly challenging conventional wisdom and pushing the boundaries of what is possible.",
    },
  ];
  return (
    <Template heading={`Thing I Love`} id={'thingilove'}>
      <div className="relative px-5">
        <div className="grid max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-3 my-10">
          {cardList.map((card, index) => {
            return (
              <Card
                key={index}
                className={`z-20 bg-background/70 max-md:mx-5 `}
              >
                <CardHeader>
                  <CardTitle>
                    <span className="rounded-full w-24 flex justify-center items-center text-5xl mb-5 h-24 border mx-auto">
                      {card.icon}
                    </span>
                    <div className="leading-6 tracking-wide">{card.header}</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className={`text-sm text-foreground/70`}>
                  {card.content}
                </CardContent>
              </Card>
            );
          })}
        </div>
        <CustomSticker text={"Things"} />
      </div>
    </Template>
  );
};

export default ThingILove;

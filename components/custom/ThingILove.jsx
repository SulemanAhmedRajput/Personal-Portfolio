import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code2,
  BookOpen,
  Palette,
  Puzzle,
  Users,
  Lightbulb,
} from "lucide-react";
import Template from "./Template";
import CustomSticker from "./CustomSticker";
import { BlurFade } from "@/components/ui/blur-fade";

const ThingILove = () => {
  const cardList = [
    {
      icon: <Code2 size={40} />,
      header: "Programming",
      content: `I have an unending passion for programming. From solving complex
      problems to building elegant solutions, programming allows me to
      express my creativity and logical thinking.`,
    },
    {
      icon: <BookOpen size={40} />,
      header: "Learning",
      content: `Learning is my constant companion. I'm endlessly curious and always
      seeking to expand my knowledge — from exploring new technologies to
      understanding the world around me.`,
    },
    {
      icon: <Palette size={40} />,
      header: "Creativity",
      content: `Creativity fuels my soul. Whether it's coding, design, or writing,
      I love bringing ideas to life and turning imagination into reality.`,
    },
    {
      icon: <Puzzle size={40} />,
      header: "Problem Solving",
      content: `I love tackling challenges and finding innovative solutions. Each
      obstacle is an opportunity to learn and grow.`,
    },
    {
      icon: <Users size={40} />,
      header: "Collaboration",
      content: `Collaboration is key to growth. Working with like-minded people
      helps me learn, share, and build something meaningful together.`,
    },
    {
      icon: <Lightbulb size={40} />,
      header: "Innovative Thinking",
      content: `I'm driven by innovation — challenging conventional ideas and
      pushing boundaries to create something new and impactful.`,
    },
  ];

  return (
    <Template heading="Things I Love" id="thingilove">
      <div className="relative px-5 max-md:px-0">
        <div className="grid max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-3 my-10">
          {cardList.map((card, index) => (
            <BlurFade key={index} delay={0.25 * (index + 1)} inView>
              <Card className="z-20 bg-background/70 max-md:mx-5 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>
                    <span className="rounded-full w-24 h-24 border flex justify-center items-center text-primary mb-5 mx-auto bg-muted/20 hover:bg-muted transition-colors">
                      {card.icon}
                    </span>
                    <div className="leading-6 tracking-wide text-center font-semibold">
                      {card.header}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-foreground/70 text-center">
                  {card.content}
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
        <CustomSticker text="Things" />
      </div>
    </Template>
  );
};

export default ThingILove;

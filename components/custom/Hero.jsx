"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Github,
  Linkedin,
  Twitter
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import CustomSticker from "./CustomSticker";
import { FlickeringGridDemo } from "./FlickingGrid";
import { Highlighter } from "../ui/highlighter";

const Hero = () => {
  const portfolio = [
    { title: "Project 1", description: "A full-stack e-commerce platform" },
    { title: "Project 2", description: "Real-time chat application" },
    { title: "Project 3", description: "Personal blog with Next.js" },
  ];

  const testimonials = [
    { name: "Client A", feedback: "Great experience working together!" },
    { name: "Client B", feedback: "Highly skilled and efficient developer." },
  ];

  return (
    <div
      id="home"
      className="relative"
    >
      {/* <div className={"w-full !h-56 bg-[red]"}>
        <FlickeringGridDemo
          className="absolute inset-0 z-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={800}
          width={800}
        />
      </div> */}
      <div className="w-full   px-4 sm:px-8 md:h-auto flex flex-col md:flex-row items-center justify-center max-md:pt-32 max-md:mt-10 gap-10">
        {/* LEFT SIDE */}
        <div className="w-full flex flex-col py-10 mt-36">
          <BlurFade delay={0.25} inView>
            <span className="text-muted-foreground">Hi, I'm</span>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <span className="text-7xl max-md:text-4xl font-bold">
              <span className="relative before:content-[''] before:block before:absolute before:bottom-[-2px] before:rounded-full before:bg-gradient-to-r before:from-primary/50 before:to-primary/30 before:w-full before:h-2 before:blur-md">
                Suleman
              </span>{" "}
              Ahmed
            </span>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView>
            <span className="mt-2  text-lg text-muted-foreground">
              <Highlighter action="highlight" color="#87CEFA">
                Full Stack Developer
              </Highlighter> · UI/UX Designer · Open Source Enthusiast
            </span>
          </BlurFade>
          <BlurFade delay={0.25 * 4} inView>
            <div className="flex mt-5 flex-wrap gap-3">
              <Link href="https://github.com/SulemanAhmedRajput">
                <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" /> Github
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/suleman-ahmed-6641442a4/">
                <Button variant="outline" size="sm">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
              </Link>
              {/* <Link href="https://twitter.com/your-twitter">
                <Button variant="outline" size="sm">
                  <Twitter className="mr-2 h-4 w-4" /> Twitter
                </Button>
              </Link> */}
            </div>
          </BlurFade>
          <BlurFade delay={0.25 * 5} inView>
            <div className="mt-5">
              <Button>Download CV</Button>
            </div>
          </BlurFade>
        </div>
     

      </div>
      <CustomSticker text="Developer" />
    </div>
  );
};

export default Hero;

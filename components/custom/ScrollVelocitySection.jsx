"use client";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { BlurFade } from "../ui/blur-fade";

export function ScrollVelocitySection() {
  return (
    <BlurFade  delay={0.25} inView>
      <div className="relative flex w-full flex-col items-center justify-center  py-8">
        <ScrollVelocityContainer className="text-sm -rotate-2 font-bold tracking-[-0.02em] md:text-4xl md:leading-[5rem] ">
        <ScrollVelocityRow baseVelocity={3} direction={1}>
          React · Next.js · MongoDB · Node.js · TypeScript · Python · Full Stack Developer · MERN Stack · UI/UX Designer
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={3} direction={-1}>
          Open Source Enthusiast · RESTful APIs · Web Development · Problem Solving · Innovation · Creative Solutions
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
    </BlurFade>
  );
}


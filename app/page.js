import AboutMe from "@/components/custom/AboutMe";
import Certifications from "@/components/custom/Certifications";
import Contact from "@/components/custom/Contact";
import Education from "@/components/custom/Education";
import Experience from "@/components/custom/Experience";
import Hero from "@/components/custom/Hero";
import Project from "@/components/custom/Project";
import Skills from "@/components/custom/Skills";
import Testimonial from "@/components/custom/Testimonial";
import ThingILove from "@/components/custom/ThingILove";
import { ScrollVelocitySection } from "@/components/custom/ScrollVelocitySection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <ThingILove />
      <ScrollVelocitySection />
      <Skills />
      {/* <Testimonial /> */}
      <Education />
      <Experience />
      <Certifications />
      <Project />
      <Contact />
    </main>
  );
}

import AboutMe from "@/components/custom/AboutMe";
import Contact from "@/components/custom/Contact";
import Education from "@/components/custom/Education";
import Hero from "@/components/custom/Hero";
import Project from "@/components/custom/Project";
import Skills from "@/components/custom/Skills";
import Testimonial from "@/components/custom/Testimonial";
import ThingILove from "@/components/custom/ThingILove";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <ThingILove />
      <Skills />
      <Testimonial />
      <Education />
      {/* <Project /> */}
      <Contact />
    </main>
  );
}

"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Code2,
  Layers,
  Rocket,
  BadgeCheck,
  Laptop,
  MessageCircle,
} from "lucide-react";
import { Button } from "../ui/button";
import CustomSticker from "./CustomSticker";

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
    <motion.div
      id="home"
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full  px-4 sm:px-8 md:h-screen flex flex-col md:flex-row items-center justify-center max-md:pt-32 max-md:mt-10 gap-10">
        {/* LEFT SIDE */}
        <motion.div
          className="w-full  flex flex-col py-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="text-muted-foreground">Hi, I'm</span>
          <span className="text-7xl max-md:text-4xl font-bold"> 
            <span className="relative before:content-[''] before:block before:absolute before:bottom-[-2px] before:rounded-full before:bg-gradient-to-r before:from-primary/50 before:to-primary/30 before:w-full before:h-2 before:blur-md">
              Suleman
            </span>{" "}
            Ahmed
          </span>
          <span className="mt-2 text-lg text-muted-foreground">
            Full Stack Developer · UI/UX Designer · Open Source Enthusiast
          </span>
          <div className="flex mt-5 flex-wrap gap-3">
            <Link href="https://github.com/your-github">
              <Button variant="outline" size="sm">
                <Github className="mr-2 h-4 w-4" /> Github
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/suleman-ahmed-6641442a4/">
              <Button variant="outline" size="sm">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </Link>
            <Link href="https://twitter.com/your-twitter">
              <Button variant="outline" size="sm">
                <Twitter className="mr-2 h-4 w-4" /> Twitter
              </Button>
            </Link>
          </div>
          <div className="mt-5">
            <Button>Download CV</Button>
          </div>
        </motion.div>

       
      </div>
      <CustomSticker text="Developer" />
    </motion.div>
  );
};

export default Hero;

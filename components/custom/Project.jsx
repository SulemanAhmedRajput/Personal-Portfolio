
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Layers,
  Laptop2,
  Database,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "NightCoder Portfolio",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    image: "https://via.placeholder.com/600x400?text=NightCoder+Portfolio",
    description:
      "A sleek developer portfolio with animations, modern UI, and responsive design showcasing skills and projects effectively.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    liveDemo: "https://nightcoder-portfolio.vercel.app",
    github: "https://github.com/SulemanAhmedRajput/nightcoder-portfolio",
  },
  {
    id: 2,
    title: "StackForge Labs Innovative",
    icon: <Laptop2 className="w-6 h-6 text-primary" />,
    image: "https://via.placeholder.com/600x400?text=StackForge+Labs",
    description:
      "An ongoing series of experimental and innovative full-stack projects focused on real-world problem solving and modern web development.",
    tech: ["MERN Stack", "Next.js", "Tailwind", "MongoDB"],
    liveDemo: "#",
    github: "https://github.com/StackForge-Labs-Inovative",
  },
  {
    id: 3,
    title: "Blog NextJS Project",
    icon: <Layers className="w-6 h-6 text-primary" />,
    image: "https://via.placeholder.com/600x400?text=NextJS+Blog",
    description:
      "A personal blog site with markdown support, dynamic routing, and responsive UI using Next.js.",
    tech: ["Next.js", "Tailwind CSS", "Markdown"],
    liveDemo: "#",
    github: "https://github.com/SulemanAhmedRajput/Blog-NextJS-Project",
  },
  {
    id: 4,
    title: "Dropshipping Home Website",
    icon: <Globe className="w-6 h-6 text-primary" />,
    image: "https://via.placeholder.com/600x400?text=Dropshipping+Site",
    description:
      "A marketing website for a dropshipping business showcasing home products with a clean UI and static content.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveDemo: "#",
    github: "https://github.com/SulemanAhmedRajput/Dropshipping-Home-Website",
  },];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ProjectPage = () => {
  return (
    <div className="container mx-auto py-14 px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        🚀 My Projects
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="bg-background/80 backdrop-blur-xl rounded-2xl shadow-md overflow-hidden border border-primary/20 hover:border-primary"
            custom={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2 text-primary">
                {project.icon}
                <h2 className="text-xl font-bold">{project.title}</h2>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary to-primary/60 text-white rounded-full shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-sm text-primary font-medium">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  Live Demo <ArrowRight className="inline-block h-4 w-4" />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub <ArrowRight className="inline-block h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;

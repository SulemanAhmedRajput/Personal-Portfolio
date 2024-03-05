"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  ArrowLeftCircle,
  ArrowRightCircle,
  Mail,
} from "lucide-react";
import { useToast } from "../ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import CustomSticker from "./CustomSticker";

const Hero = () => {
  const navLink = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Profile",
      href: "/profile",
    },
  ];
  const [activeCodeIndex, setActiveCodeIndex] = useState(0);

  const { toast } = useToast();

  // Create a ref to the text content
  const textRef = useRef(null);

  // Function to copy text to clipboard
  const copyToClipboard = () => {
    if (textRef.current) {
      const text = textRef.current.innerText;
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <motion.div
      id="home"
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full px-5 max-md:flex-col  max-md:mt-10 md:h-screen flex items-center max-md:pt-32 justify-center ">
        <motion.div
          className="w-full flex flex-col max-md:py-20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span>Hi I&quot;m </span>
          <span className="  text-5xl font-bold">
            <span
              before="Suleman"
              className="relative before:content-[''] before:block before:absolute before:bottom-[-2px] before:rounded-full before:bg-gradient-to-r before:from-primary/50 before:to-primary/30 before:w-full before:h-2 before:blur-md"
            >
              Suleman
            </span>{" "}
            Ahmed
          </span>
          <span className="mt-5">
            Full Stack Developer,UI/UX Designer and Engineer
          </span>
          <span className="flex mt-5 gap-2">
            <Link href="/">
              <Button variant="outline" className={``}>
                <Github className="mr-2 h-4 w-4" /> Github
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className={``}>
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </Link>

            <Link href="/">
              <Button variant="outline" className={``}>
                <Twitter className="mr-2 h-4 w-4" /> Twitter
              </Button>
            </Link>
          </span>
          <span>
            <Button className={`mt-5`}>Download CV</Button>
          </span>
        </motion.div>
        <motion.div
          className="w-full z-10"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Card className={`bg-background/50 backdrop-blur-sm`}>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <div className="flex gap-2 justify-center items-center">
              <ArrowLeftCircle
                className="text-primary/50 hover:text-primary cursor-pointer"
                onClick={() =>
                  activeCodeIndex <= 0
                    ? setActiveCodeIndex(navLink.length - 1)
                    : setActiveCodeIndex(activeCodeIndex - 1)
                }
              />
              <div className="gap-2 flex ">
                {Array(navLink.length)
                  .fill()
                  .map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full cursor-pointer ${
                        activeCodeIndex == index
                          ? `bg-primary `
                          : `bg-primary/20 `
                      }`}
                      onClick={() => setActiveCodeIndex(index)}
                    ></div>
                  ))}
              </div>
              <ArrowRightCircle
                onClick={() =>
                  navLink.length - 1 > activeCodeIndex
                    ? setActiveCodeIndex(activeCodeIndex + 1)
                    : setActiveCodeIndex(0)
                }
                className="text-primary/50 hover:text-primary cursor-pointer"
              />
            </div>{" "}
            <CardContent className={`flex gap-3 justify-center items-center`}>
              <pre ref={textRef} className="w-full">
                {JSON.stringify(navLink[activeCodeIndex], null, 2)}
              </pre>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => {
                  copyToClipboard();
                  toast({
                    title: "Copied to Clipboard",
                    description: (
                      <pre ref={textRef} className="line-clamp-3">
                        {JSON.stringify(navLink[activeCodeIndex], null, 2)}
                      </pre>
                    ),
                  });
                }}
              >
                Copy to Clipboard
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
      <CustomSticker text={"Developer"} />
    </motion.div>
  );
};

export default Hero;

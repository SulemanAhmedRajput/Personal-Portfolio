"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const navLink = [
    { label: "Home", href: "/#home" },
    { label: "About Me", href: "/#aboutme" },
    { label: "Thing I Love", href: "/#thingilove" },
    { label: "skill", href: "/#skills" },
    { label: "Testimonial", href: "/#testimonial" },
    { label: "Education", href: "/#education" },
    { label: "Project", href: "/#project" },
    { label: "contact", href: "/#contact" },
    { label: "blog", href: "/blog" },
  ];

  // State to track the active section
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Extract the section ID (e.g., "#home")
            const id = `#${entry.target.id}`;
            setActiveSection(id);
          }
        });
      },
      {
        threshold: 0.6, // Trigger when 60% of the section is in view
      }
    );

    // Observe all sections with IDs
    navLink.forEach(({ href }) => {
      const sectionId = href.startsWith("/") ? href.slice(1) : href; // Remove leading "/"
      const section = document.querySelector(sectionId);
      if (section) observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full backdrop-blur-sm p-3 flex justify-between items-center bg-background/50 shadow-foreground/20 z-50 shadow-sm">
      <div className="max-w-5xl w-full mx-auto flex items-center justify-between">
        <Link href={"/"} className="font-bold text-3xl flex items-end">
          <div className="mr-1 text-foreground px-2 bg-primary">Night</div>
          Cod3r
        </Link>
        <div className="flex gap-3">
          <nav className="flex gap-3 max-lg:text-xs lg:text-sm max-md:hidden">
            {navLink.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`before:content-[''] before:bottom-0 before:bg-foreground before:w-0 before:duration-75 before:transition-[width] before:h-[2px] flex justify-center items-center before:left-0 hover:before:w-full relative before:absolute capitalize ${
                  activeSection === link.href ? "animate-fade-in" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="hidden max-md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mr-2">
                <DropdownMenuLabel>Navbar Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {navLink.map((link, index) => (
                    <Link key={index} href={link.href}>
                      <DropdownMenuItem
                        className={`capitalize ${
                          activeSection === link.href ? "animate-fade-in" : ""
                        }`}
                      >
                        {link.label}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
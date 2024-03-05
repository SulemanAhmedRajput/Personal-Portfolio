import { Button } from "@/components/ui/button";
import React from "react";
import { ModeToggle } from "./ThemeToggle";
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

const Navbar = () => {
  const navLink = [
    {
      label: "Home",
      href: "/#home",
    },
    {
      label: "About Me",
      href: "/#aboutme",
    },
    {
      label: "Thing I Love",
      href: "/#thingilove",
    },
    {
      label: "skill",
      href: "/#skills",
    },
    {
      label: "Testimonial",
      href: "/#testimonial",
    },
    {
      label: "Project",
      href: "/#project",
    },
    {
      label: "contact",
      href: "/#contact",
    },
    {
      label: "blog",
      href: "/blog",
    },
  ];
  return (
    <div className=" fixed top-0 left-0 w-full backdrop-blur-sm p-3 flex justify-between items-center bg-background/50 shadow-foreground/20 z-50 shadow-sm">
      <div className="  max-w-5xl w-full mx-auto flex items-center justify-between">
        <Link href={"/"} className="font-bold  text-3xl flex  items-end">
          <div className="mr-1 text-secondary px-2 bg-foreground">Night</div>
          Cod3r
        </Link>
        <div className="flex gap-5">
          <nav className="flex gap-3 max-md:hidden">
            {navLink.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className=" text-sm  before:content-[''] before:bottom-0 before:bg-foreground before:w-0 before:duration-75 before:transition-[width] before:h-[2px] flex justify-center items-center before:left-0  hover:before:w-full relative before:absolute capitalize"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="hidden max-md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mr-2">
                <DropdownMenuLabel>Navbar Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {navLink.map((link, index) => (
                    <Link key={index} href={link.href}>
                      <DropdownMenuItem className={`capitalize`}>
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

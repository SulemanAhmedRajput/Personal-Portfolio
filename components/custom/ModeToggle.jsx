"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/custom/ThemeProvider";
import { Moon, Sun, Box } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const getThemeIcon = (theme) => {
    switch (theme) {
      case "dark":
      case "rose-dark":
      case "green-dark":
      case "orange-dark":
      case "violet-dark":
      case "red-dark":
        return <Moon className="h-4 w-4" />;
      case "light":
      case "rose-light":
      case "green-light":
      case "orange-light":
      case "violet-light":
      case "red-light":
        return <Sun className="h-4 w-4" />;
      default:
        return <Box className="h-4 w-4" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="flex items-center gap-2">
          {getThemeIcon(theme)}
          {/* <span className="capitalize">{theme.split("-").join(" ")}</span> */}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="p-2 rounded-lg shadow-lg bg-background">
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="px-4 py-2 text-sm hover:bg-muted/20 rounded-md"
        >
          System
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="px-4 py-2 text-sm hover:bg-muted/20 rounded-md"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="px-4 py-2 text-sm hover:bg-muted/20 rounded-md"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("rose-light")}
          className="px-4 py-2 text-sm hover:bg-muted/20 rounded-md"
        >
          Rose Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("rose-dark")}
          className="px-4 py-2 text-sm hover:bg-muted/20 rounded-md"
        >
          Rose Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("green-light")}
          className="px-4 py-2 text-sm hover:bg-muted/20 rounded-md"
        >
          Green Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("green-dark")}
          className="px-4 py-2 text-sm hover:bg-muted/20 rounded-md"
        >
          Green Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("orange-light")}
          className="px-4 py-2 text-sm hover:bg-muted/20 rounded-md"
        >
          Orange Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("orange-dark")}
          className="px-4 py-2 text-sm hover:bg-muted/20 rounded-md"
        >
          Orange Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("violet-light")}
          className="px-4 py-2 text-sm hover:bg-muted/20 rounded-md"
        >
          Violet Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("violet-dark")}
          className="px-4 py-2 text-sm hover:bg-muted/20 rounded-md"
        >
          Violet Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("red-light")}
          className="px-4 py-2 text-sm hover:bg-muted/20 rounded-md"
        >
          Red Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("red-dark")}
          className="px-4 py-2 text-sm hover:bg-muted/20 rounded-md"
        >
          Red Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

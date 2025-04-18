"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Initial context state
const initialState = {
  theme: "system",
  setTheme: () => null,
};

// Create context
const ThemeProviderContext = createContext(initialState);

// ThemeProvider component
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(storageKey) || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all theme-related classes
    root.classList.remove(
      "light",
      "dark",
      "rose-light",
      "rose-dark",
      "green-light",
      "green-dark",
      "orange-light",
      "orange-dark",
      "violet-light",
      "violet-dark",
      "red-light",
      "red-dark"
    );

    // Add the correct class based on theme
    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(isDark ? "dark" : "light");
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  // Save to localStorage and update state
  const setTheme = (newTheme) => {
    localStorage.setItem(storageKey, newTheme);
    setThemeState(newTheme);
  };

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

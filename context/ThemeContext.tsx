"use client";
import React, { useState, useEffect, createContext } from "react";

interface ThemeContextType {
  theme: string;
  changeTheme: (theme: string) => void;
}

interface ThemeProviderType {
  children: any;
}

const defaultValue: ThemeContextType = {
  theme: "light",
  changeTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultValue);

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  // state for defining light and dark theme
  const [theme, setTheme] = useState<string>("light");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []);

  if (!mounted) {
    return <span>loading...</span>;
  }

  const changeTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

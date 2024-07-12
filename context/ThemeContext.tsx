"use client";
import React, { useState, createContext, useEffect } from "react";

interface ThemeContextType {
  theme: string;
  changeTheme: (theme: string) => void;
}

interface ThemeProviderType {
  children: React.ReactNode;
}

const defaultValue: ThemeContextType = {
  theme: "light",
  changeTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultValue);

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const changeTheme = (theme: string) => {
    setTheme(theme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

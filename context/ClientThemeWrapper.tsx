"use client";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

interface ClientThemeWrapper {
  children: any;
}

export default function ClientThemeWrapper({ children }: ClientThemeWrapper) {
  const { theme } = useContext(ThemeContext);
  return <div data-theme={theme}>{children}</div>;
}

"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const theme = useSelector((state: RootState) => state.global.theme);
  return <div data-theme={theme}>{children}</div>;
};

export default ThemeWrapper;

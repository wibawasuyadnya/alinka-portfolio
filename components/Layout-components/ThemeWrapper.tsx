"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
interface ThemeWrapperProps {
  children: React.ReactNode;
}
const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const theme = useSelector((state: RootState) => state.global.theme);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return <div data-theme={theme}>{children}</div>;
};

export default ThemeWrapper;

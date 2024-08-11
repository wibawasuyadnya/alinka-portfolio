// unused component script
"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "@/redux/slices/globalSlice";

const ThemeInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    dispatch(setTheme(storedTheme));
  }, [dispatch]);

  return null;
};

export default ThemeInitializer;

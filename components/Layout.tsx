"use client";

import React, { Fragment, ReactNode } from "react";
import Header from "./Layout-components/Header";
import { useAppSelector } from "@/redux/hook";
import PreloadAnimation from "@/components/Layout-components/Preload/Preload";

interface LayoutType {
  children: ReactNode;
}

// define component hook for preloading
const LayoutLoader = ({ loading }: { loading: boolean }) => {
  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center align-middle">
        <PreloadAnimation extraLarge={true} />
      </div>
    );
  } else {
    return null;
  }
};

export default function Layout({ children }: LayoutType) {
  const isLoading = useAppSelector((state) => state.global.loading);
  return (
    <div className="m-0">
      <Header />
      <LayoutLoader loading={isLoading} />
      {children}
    </div>
  );
}

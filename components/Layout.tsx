"use client";

import React, { Fragment, ReactNode, useEffect } from "react";
import Header from "./Layout-components/Header";
import { useAppSelector } from "@/redux/hook";
import PreloadAnimation from "@/components/Layout-components/Preload/Preload";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { LoadingType } from "@/types/type";

interface LayoutType {
  children?: ReactNode;
}

// define component hook for preloading
const LayoutLoader = ({ loading }: LoadingType) => {
  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-base-100 w-full h-screen">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <PreloadAnimation extraLarge={true} />
        </div>
      </div>
    );
  }

  return null;
};

export default function Layout({ children }: LayoutType) {
  const isLoading = useAppSelector((state) => state.global.loading);

  isLoading ? disableBodyScroll(document) : enableBodyScroll(document);

  console.log(isLoading);

  return (
    <div className={`m-0`}>
      <Header />
      <LayoutLoader loading={isLoading} />
      <main>
      {children}
      </main>
    </div>
  );
}

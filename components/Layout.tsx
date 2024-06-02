"use client";

import React, { Fragment, ReactNode, useEffect } from "react";
import Header from "./Layout-components/Header";
import { useAppSelector } from "@/redux/hook";
import PreloadAnimation from "@/components/Layout-components/Preload/Preload";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface LayoutType {
  children?: ReactNode;
}

type Loading = {
  loading: boolean;
};

// define component hook for preloading
const LayoutLoader = ({ loading }: Loading) => {
  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-base-100 w-full h-screen">
        <div className="flex flex-col w-full h-full items-center justify-center">
        <PreloadAnimation extraLarge={true} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default function Layout({ children }: LayoutType) {
  const isLoading = useAppSelector((state) => state.global.loading);

  isLoading ? disableBodyScroll(document) : enableBodyScroll(document)

  return (
    <div
      className={`m-0`}
    >
      <Header />
      <LayoutLoader loading={isLoading} />
      {children}
    </div>
  );
}

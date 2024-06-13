"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import Header from "./Layout-components/Header";
import { useAppSelector } from "@/redux/hook";
import PreloadAnimation from "@/components/Layout-components/Preload/Preload";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { LoadingType } from "@/types/type";
import Footer from "./Layout-components/Footer";

interface LayoutType {
  children?: ReactNode;
  withLoader?: boolean;
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

export default function Layout({ children, withLoader = false }: LayoutType) {
  const isLoading = useAppSelector((state) => state.global.loading);

  isLoading ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <div className={`m-0`}>
      <Header />
      {withLoader ? <LayoutLoader loading={isLoading} /> : null}
      <main>{children}</main>
      <Footer />
    </div>
  );
}

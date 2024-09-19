"use client";
import React, {
  ReactNode,
  useEffect,
  MouseEvent,
  Fragment,
  useState,
} from "react";
import Header from "./Layout-components/Header";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import PreloadAnimation from "@/components/Layout-components/Preload/Preload";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { LoadingType } from "@/types/type";
import Footer from "./Layout-components/Footer";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { NavigationHeader } from "@/types/type";
import { setTheme } from "@/redux/slices/globalSlice";

interface LayoutType {
  children?: ReactNode;
  withLoader?: boolean;
  page?: string;
}

const ENVIRONMENT = process.env.NODE_ENV;

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

export default function Layout({
  children,
  withLoader = false,
  page,
}: LayoutType) {
  const isLoading = useAppSelector((state) => state.global.loading);

  // lenis scroll
  const lenis = useLenis();
  const toggleScrollLock = () => {
    const targetElement = document.body;
    if (lenis) {
      if (isLoading) {
        lenis.stop();
        disableBodyScroll(targetElement);
      } else {
        lenis.start();
        enableBodyScroll(targetElement);
      }
    }
  };

  useEffect(() => {
    toggleScrollLock();
    return () => {
      if (lenis) {
        lenis.start();
      }
    };
  }, [isLoading, lenis]);

  const handleContextMenu = (event: MouseEvent) => {
    if (ENVIRONMENT === "production") {
      event.preventDefault();
    }
  };

  function typeNavbar({ type }: { type?: string }) {
    let navbar: NavigationHeader[] = [];
    if (type === "home") {
      navbar = [
        {
          heading: "About",
          href: "#about",
        },
        {
          heading: "Gallery",
          href: "#gallery",
        },
        {
          heading: "Contact",
          href: "#contact",
        },
        {
          heading: "Blog",
          href: "#latest-post",
        },
      ];
    }
    if (type === "art") {
      navbar = [];
    }
    if (type === "blog") {
      navbar = [
        {
          heading: "Home",
          href: "",
        },
        {
          heading: "blog",
          href: "/blog",
        },
      ];
    }
    return navbar;
  }

  const homeNavbar = typeNavbar({ type: page });

  return (
    <ReactLenis root>
      <div className={`m-0`} onContextMenu={handleContextMenu}>
        <Header navbar={homeNavbar} />
        {withLoader ? <LayoutLoader loading={isLoading} /> : null}
        <main>{children}</main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

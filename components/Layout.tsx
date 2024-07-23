"use client";
import React, { ReactNode, useEffect, MouseEvent, Fragment } from "react";
import Header from "./Layout-components/Header";
import { useAppSelector } from "@/redux/hook";
import PreloadAnimation from "@/components/Layout-components/Preload/Preload";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { LoadingType } from "@/types/type";
import Footer from "./Layout-components/Footer";
import { ReactLenis } from "@studio-freight/react-lenis";
import { NavigationHeader } from "@/types/type";

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

  useEffect(() => {
    if (isLoading) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [isLoading]);

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

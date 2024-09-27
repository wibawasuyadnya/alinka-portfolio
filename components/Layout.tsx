"use client";
import React, {
  ReactNode,
  useEffect,
  MouseEvent,
} from "react";
import { LoadingType } from "@/types/type";
import { useAppSelector } from "@/redux/hook";
import Footer from "./Layout-components/Footer";
import { NavigationHeader } from "@/types/type";
import Header from "./Layout-components/Header";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import PreloadAnimation from "@/components/Layout-components/Preload/Preload";

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
        <div className="flex flex-col w-full h-screen desktop:h-full items-center justify-center">
          <div className="hidden desktop:block">
            <PreloadAnimation extraLarge={true} />
          </div>
          <div className="block desktop:hidden">
            <PreloadAnimation large={true} />
          </div>
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
    if (lenis) {
      if (isLoading) {
        lenis.stop();
        document.body.style.overflow = "hidden";
      } else {
        lenis.start();
        document.body.style.overflow = "";
      }
    }
  };

  useEffect(() => {
    toggleScrollLock();
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
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
      navbar = [
        {
          heading: "Home",
          href: "/",
        },
      ];
    }
    if (type === "blog") {
      navbar = [
        {
          heading: "Home",
          href: "/",
        },
        {
          heading: "Blog",
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
        <Header navbar={homeNavbar} page={page} />
        {withLoader ? <LayoutLoader loading={isLoading} /> : null}
        <main>{children}</main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

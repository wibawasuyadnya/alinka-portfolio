"use client";
import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DynamicHeader from "./Header-components/DynamicHeader";

interface HeaderType {
  title?: string;
  description?: string;
  navbar?: {
    href: string;
    heading: string;
  }[];
}

export default function Header({ title, description, navbar }: HeaderType) {
  const [showStickyHeader, setShowStickyHeader] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const router = useRouter();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 500) {
      setShowStickyHeader(currentScrollY > lastScrollY);
    } else {
      setShowStickyHeader(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Fragment>
      <Head>
        <title>{title ? title : "Alinka Painter Portfolio"}</title>
        <meta
          name="description"
          content={
            description ? description : "Hai this is my personal portfolio"
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Alinka Portfolio Website" />
        <meta
          property="og:url"
          content="https://alinka-portfolio.vercel.app/"
        />
        <link rel="icon" href="/app/favicon.ico" />
        <link rel="shortcut icon" href="/app/favicon.ico" type="image/x-icon" />
      </Head>
      {/* sticky header hide & show */}
      <DynamicHeader
        show={showStickyHeader}
        onClick={() => router.push("/")}
        navbar={navbar}
      />
    </Fragment>
  );
}

"use client";

import Head from "next/head";
import React, { Fragment, useContext, useEffect, useState } from "react";
import ThemeToggleIcon from "./Header-components/ThemeToggleIcon";
import { motion } from "framer-motion";

interface HeaderType {
  title?: string;
  description?: string;
}

const StickyHeader = ({ show }: { show?: boolean }) => {
  return (
    <motion.div
      className={`top-0 navbar sticky z-50 text-white h-fit mt-[-100px]`}
      initial={{ y: "-200px" }}
      animate={{ y: show ? `0` : "-200px" }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div
        className={
          " mx-auto mt-1 rounded-2xl bg-primary w-5/6 grid grid-cols-5 gap-4 place-items-center p-5 shadow-xl shadow-[rgba(0,0,0,0.18)]"
        }
      >
        <h3 className="font-semibold text-xl'">Alinka&apos;s Art Gallery</h3>
        <nav className="col-span-3 flex flex-row gap-5 font-medium">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <div>
          <ThemeToggleIcon />
        </div>
      </div>
    </motion.div>
  );
};

const StaticHeader = () => {
  return (
    <div className="absolute backdrop-filter backdrop-blur-sm w-full z-10 text-base-200">
      <div className={"w-full grid grid-cols-5 gap-5 place-items-center p-5"}>
        <div className="text-base-200">
          <h3 className="font-semibold font-playfair text-4xl tracking-wide">
            Alinka
          </h3>
        </div>
        <nav className={"col-span-3 flex flex-row gap-10 font-medium text-lg"}>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <div>
          <ThemeToggleIcon />
        </div>
      </div>
    </div>
  );
};

export default function Header({ title, description }: HeaderType) {
  const [showStickyHeader, setShowStickyHeader] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

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
        <link rel="icon" href="/app/favicon.ico" />
        <link rel="shortcut icon" href="/app/favicon.ico" type="image/x-icon" />
      </Head>
      {/* sticky header hide & show */}
      <StickyHeader show={showStickyHeader} />
      <StaticHeader />
    </Fragment>
  );
}

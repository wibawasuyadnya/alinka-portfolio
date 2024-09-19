"use client";
import React, { Fragment, MouseEvent } from "react";
import Link from "next/link";
import ThemeToggleIcon from "../ThemeToggleIcon";
import LanguageToggleIcon from "../LanguageToggleIcon";
import { DynamicHeaderType } from "@/types/type";
import { motion } from "framer-motion";
import { handleClickSmoothScrollToView } from "@/utils/handleClickSmoothScrollToView";

const StickyHeader = ({ type, show, navbar, onClick }: DynamicHeaderType) => {
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
        <h3 onClick={onClick} className="cursor-pointer font-semibold text-xl'">
          Alinka&apos;s Art Gallery
        </h3>
        <nav className="col-span-3 flex flex-row gap-5 font-medium ">
          {navbar &&
            navbar.map((item, idx) => {
              return (
                <Fragment key={idx}>
                  {type == "home" ? (
                    <Link
                      href={item.href}
                      onClick={(e) =>
                        handleClickSmoothScrollToView(e, item.href)
                      }
                    >
                      {item.heading}
                    </Link>
                  ) : (
                    <Link href={item.href}>{item.heading}</Link>
                  )}
                </Fragment>
              );
            })}
        </nav>
        <div className="flex flex-row gap-3">
          <ThemeToggleIcon />
          <div className="divider lg:divider-horizontal" />
          <LanguageToggleIcon />
        </div>
      </div>
    </motion.div>
  );
};

export default StickyHeader;

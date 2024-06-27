import React from "react";
import Link from "next/link";
import ThemeToggleIcon from "../ThemeToggleIcon";
import { DynamicHeaderType } from "@/types/type";
import { handleClickSmoothScrollToView } from "@/utils/handleClickSmoothScrollToView";

const StaticHeader = ({ onClick, navbar }: DynamicHeaderType) => {
  return (
    <div className="absolute backdrop-filter backdrop-blur-sm w-full z-10 text-base-200">
      <div className={"w-full grid grid-cols-5 gap-5 place-items-center p-5"}>
        <div className="text-base-200">
          <h3
            onClick={onClick}
            className="cursor-pointer font-semibold font-playfair text-4xl tracking-wide"
          >
            Alinka
          </h3>
        </div>
        <nav className={"col-span-3 flex flex-row gap-10 font-medium text-lg"}>
          {navbar &&
            navbar.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={(e) => handleClickSmoothScrollToView(e, item.href)}
                >
                  {item.heading}
                </Link>
              );
            })}
        </nav>
        <div>
          <ThemeToggleIcon />
        </div>
      </div>
    </div>
  );
};

export default StaticHeader;

import Link from "next/link";
import React, { Fragment } from "react";
import ThemeToggleIcon from "../ThemeToggleIcon";
import { DynamicHeaderType } from "@/types/type";
import LanguageToggleIcon from "../LanguageToggleIcon";
import { handleClickSmoothScrollToView } from "@/utils/handleClickSmoothScrollToView";
import DrawerHeader from "../DrawerHeader";

const StaticHeader = ({ type, onClick, navbar }: DynamicHeaderType) => {
  return (
    <div className="absolute backdrop-filter backdrop-blur-sm w-full z-10 text-base-200">
      <div className={"w-full flex justify-between desktop:grid desktop:grid-cols-5 gap-5 desktop:place-items-center p-5"}>
        <DrawerHeader type={type} navbar={navbar} />
        <div className="text-base-200">
          <h3
            onClick={onClick}
            className="cursor-pointer font-semibold font-playfair text-4xl tracking-wide"
          >
            Alinka
          </h3>
        </div>
        <nav className={"col-span-3 hidden desktop:flex flex-row gap-10 font-medium text-lg z-20"}>
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
        <div className="flex flex-row gap-2 desktop:gap-3">
          <ThemeToggleIcon />
          <div className="divider hidden desktop:flex desktop:divider-horizontal" />
          <div className="hidden desktop:block"><LanguageToggleIcon /></div>
        </div>
      </div>
    </div>
  );
};

export default StaticHeader;

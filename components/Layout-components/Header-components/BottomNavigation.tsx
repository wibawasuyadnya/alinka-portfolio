"use client";
import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import ThemeToggleIcon from "./ThemeToggleIcon";
import LanguageToggleIcon from "./LanguageToggleIcon";
import { DynamicHeaderType } from "@/types/type";
import { motion } from "framer-motion";
import { handleClickSmoothScrollToView } from "@/utils/handleClickSmoothScrollToView";
import { Pointer } from "lucide-react";

const BottomNavigationBar = ({ type, navbar }: DynamicHeaderType) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Fragment>
            <motion.div
                className={`fixed bottom-0 w-full h-[60px] z-50 bg-primary text-white rounded-tl-xl rounded-tr-xl`}
                initial={{ y: "65px" }}
                animate={{ y: isVisible ? "65px" : "0%" }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <div
                    className={
                        "w-3/4 mx-auto rounded-t-2xl bg-primary desktop:w-5/6 desktop:grid flex flex-row justify-between items-start desktop:grid-cols-5 gap-4 desktop:place-items-center px-5 pt-[18px]"
                    }
                >
                    {/* Theme and Language Toggles */}
                    <div>
                        <ThemeToggleIcon />
                    </div>

                    {/* Navigation Links */}
                    <div className="mt-[-30px] rounded-full bg-primary p-1">
                        <LanguageToggleIcon />
                    </div>

                    {/* Up scroll toggles */}
                    <div onClick={scrollToTop}>
                        <Pointer />
                    </div>
                </div>
            </motion.div>
        </Fragment>
    );
};

export default BottomNavigationBar;

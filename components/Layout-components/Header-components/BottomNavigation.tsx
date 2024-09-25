"use client";
import React, { useState, useEffect, Fragment } from "react";
import ThemeToggleIcon from "./ThemeToggleIcon";
import { motion } from "framer-motion";
import { BookText, Home, Pointer } from "lucide-react";
import { usePathname } from 'next/navigation'

const BottomNavigationBar = () => {
    const pathName = usePathname();
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
                className={`fixed bottom-0 w-full h-[100px] z-50 bg-[#202237] text-white rounded-tl-xl rounded-tr-xl border-2 border-solid border-[#262840]`}
                initial={{ y: "90px" }}
                animate={{ y: isVisible ? "90px" : "0%" }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <div
                    className={
                        "w-3/4 mx-auto rounded-t-2xl desktop:w-5/6 desktop:grid flex flex-row justify-between items-start desktop:grid-cols-5 gap-4 desktop:place-items-center p-4"
                    }
                >
                    {/* Navigation Links */}
                    <a href="/" className={`${pathName === "/" && 'border-solid border-b-4 border-primary'} pb-4`}>
                        <Home className="w-7 h-7" />
                    </a>

                    {/* Navigation Links */}
                    <a href="/blog" className={`${pathName === "blog" && 'border-solid border-b-4 border-primary'} pb-4`}>
                        <BookText className="w-7 h-7" />
                    </a>

                    {/* Theme and Language Toggles */}
                    <div>
                        <ThemeToggleIcon />
                    </div>

                    {/* Up scroll toggles */}
                    <div onClick={scrollToTop}>
                        <Pointer className="w-7 h-7" />
                    </div>
                </div>
                <div className="h-1 w-1/4 bg-[#FBFBFB] opacity-30 rounded-full mx-auto" />
            </motion.div>
        </Fragment>
    );
};

export default BottomNavigationBar;

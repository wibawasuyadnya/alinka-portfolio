import { useState, useEffect, Fragment } from "react";
import { DynamicHeaderType } from "@/types/type";
import Link from "next/link";
import { handleClickSmoothScrollToView } from "@/utils/handleClickSmoothScrollToView";
import { Menu, X } from "lucide-react";
import { useLenis } from "@studio-freight/react-lenis";
import { motion, AnimatePresence } from "framer-motion";

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
    exit: { opacity: 0 },
};

const drawerVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
};


export default function DrawerHeader({ type, navbar }: DynamicHeaderType) {
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
    const lenis = useLenis();

    const toggleDrawer = (open: boolean) => {
        setDrawerOpen(open);
        if (open) {
            lenis?.stop();
            document.body.style.overflow = "hidden";
        } else {
            lenis?.start();
            document.body.style.overflow = "";
        }
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        handleClickSmoothScrollToView(e, href);
        toggleDrawer(false);
    };

    useEffect(() => {
        return () => {
            lenis?.start();
            document.body.style.overflow = "";
        };
    }, [lenis]);

    return (
        <div className="desktop:hidden">
            <button className="btn btn-primary px-3 py-2" onClick={() => toggleDrawer(true)}>
                <Menu className="stroke-white w-6 h-6" />
            </button>

            {/* Drawer */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <Fragment>
                        <motion.div
                            className="fixed inset-0 z-40 bg-black h-[101vh]"
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            onClick={() => toggleDrawer(false)}
                        />
                        <motion.div
                            className="fixed left-0 top-0 z-50 w-[85%] bg-base-100 h-[101vh] shadow-lg"
                            variants={drawerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            {/* Close button */}
                            <button
                                className="absolute top-4 right-4 btn btn-error rounded-full w-fit p-3"
                                onClick={() => toggleDrawer(false)}
                            >
                                <X />
                            </button>

                            {/* Navigation items */}
                            <nav className="flex flex-col gap-6 p-6 justify-center items-center h-screen">
                                {navbar &&
                                    navbar.map((item, idx) => (
                                        <div key={idx}>
                                            {type == "home" ? (
                                                <Link
                                                    href={item.href}
                                                    onClick={(e) => handleNavClick(e, item.href)}
                                                    className="text-4xl font-playfair text-left font-semibold"
                                                >
                                                    {item.heading}
                                                </Link>
                                            ) : (
                                                <Link href={item.href}>{item.heading}</Link>
                                            )}
                                        </div>
                                    ))}
                            </nav>
                        </motion.div>

                        {/* Clickable overlay to close drawer */}
                        <div className="flex-1" onClick={() => toggleDrawer(false)}></div>
                    </Fragment>
                )}
            </AnimatePresence>
        </div>
    );
}

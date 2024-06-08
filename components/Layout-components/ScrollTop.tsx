"use client";
import { useEffect } from "react";
import {
  motion,
  useAnimationControls,
  Variants,
  useScroll,
} from "framer-motion";
import { Pointer } from "lucide-react";

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ScrollTopButton = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      className="fixed bottom-10 right-10 p-4 rounded-full bg-primary text-white z-50"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <Pointer />
    </motion.button>
  );
};

export default ScrollTopButton;

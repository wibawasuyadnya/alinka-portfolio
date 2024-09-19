import { useEffect, useState } from "react";

const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / scrollHeight;
      setScrollProgress(Math.min(scrolled, 1) * 100);
    };

    window.addEventListener("scroll", updateScrollProgress);
    // Initial call to set progress when component mounts
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return scrollProgress;
};

export default useScrollProgress;

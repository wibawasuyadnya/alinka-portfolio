// utils/scrollUtils.ts
import { MouseEvent } from "react";

export const handleClickSmoothScrollToView = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href) as HTMLElement;
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start", 
            inline: "nearest",
        });
    }
};

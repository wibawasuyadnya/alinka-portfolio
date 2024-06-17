// unused code
import { MutableRefObject, useLayoutEffect, useState } from "react";

type FullscreenHook = [boolean, () => void];

export default function useFullscreenStatus(elRef: MutableRefObject<HTMLElement | null>): FullscreenHook {
    const [isFullscreen, setIsFullscreen] = useState<boolean>(
        document[getBrowserFullscreenElementProp() as keyof Document] != null
    );

    const setFullscreen = () => {
        if (elRef.current == null) return;

        elRef.current
            .requestFullscreen()
            .then(() => {
                setIsFullscreen(document[getBrowserFullscreenElementProp() as keyof Document] != null);
            })
            .catch(() => {
                setIsFullscreen(false);
            });
    };

    useLayoutEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(document[getBrowserFullscreenElementProp() as keyof Document] != null);
        };

        document.onfullscreenchange = handleFullscreenChange;

        return () => {
            document.onfullscreenchange = null;
        };
    }, []);

    return [isFullscreen, setFullscreen];
}

function getBrowserFullscreenElementProp(): string {
    if (typeof document.fullscreenElement !== "undefined") {
        return "fullscreenElement";
    } else {
        throw new Error("fullscreenElement is not supported by this browser");
    }
}

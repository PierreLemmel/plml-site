import { useEffect, useState } from "react";

export const useScrollYPos = () => {

    const [scrollPos, setScrollPos] = useState<number>(0);

    const handleScrollChange = () => {
        setScrollPos(window.scrollY);
    }

    useEffect(() => {

        window.addEventListener("scroll", handleScrollChange, { passive: true });

        return () => window.removeEventListener("scroll", handleScrollChange);
    }, []);

    return scrollPos;
}
"use client";

import { useState, useEffect } from "react";

export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<"visible" | "hidden">("visible");
    const [isAtTop, setIsAtTop] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const updateScrollDirection = () => {
            const currentScrollY = window.scrollY;

            setIsAtTop(currentScrollY < 50);

            if (currentScrollY < 50) {
                setScrollDirection("visible");
            } else if (currentScrollY > lastScrollY) {
                setScrollDirection("hidden");
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection("visible");
            }

            setLastScrollY(currentScrollY);
        };

        const onScroll = () => {
            window.requestAnimationFrame(updateScrollDirection);
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [lastScrollY]);

    return { scrollDirection, isAtTop };
}

"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealVariant = "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "fadeDown";

interface ScrollRevealProps {
    children: ReactNode;
    variant?: RevealVariant;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

const variantConfig: Record<RevealVariant, gsap.TweenVars> = {
    fadeUp:    { y: 50,  opacity: 0 },
    fadeDown:  { y: -50, opacity: 0 },
    fadeLeft:  { x: -50, opacity: 0 },
    fadeRight: { x: 50,  opacity: 0 },
    scale:    { scale: 0.85, opacity: 0 },
};

export default function ScrollReveal({
    children,
    variant = "fadeUp",
    delay = 0,
    duration = 0.7,
    className = "",
    once = true,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const fromVars = variantConfig[variant];

        gsap.set(el, fromVars);

        const tween = gsap.to(el, {
            ...Object.fromEntries(
                Object.keys(fromVars).map((key) => [
                    key,
                    key === "opacity" ? 1 : key === "scale" ? 1 : 0,
                ])
            ),
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration,
            delay,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: once
                    ? "play none none none"
                    : "play none none reverse",
            },
        });

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, [variant, delay, duration, once]);

    return (
        <div ref={ref} className={className} style={{ willChange: "transform, opacity" }}>
            {children}
        </div>
    );
}

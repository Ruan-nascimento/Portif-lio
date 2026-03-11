"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

/**
 * Revela texto com efeito clip-path da esquerda → direita
 * acionado pelo scroll (GSAP ScrollTrigger).
 */
export default function TextReveal({
    children,
    className = "",
    delay = 0,
    duration = 0.8,
}: TextRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        gsap.set(el, {
            clipPath: "inset(0 100% 0 0)",
            opacity: 0,
        });

        const tween = gsap.to(el, {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, [delay, duration]);

    return (
        <div ref={ref} className={className} style={{ willChange: "clip-path, opacity" }}>
            {children}
        </div>
    );
}

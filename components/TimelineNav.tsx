"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useLanguage } from "@/providers/LanguageProvider";

const NAV_KEYS = [
    { id: "inicio", labelKey: "nav.inicio" },
    { id: "sobre", labelKey: "nav.sobre" },
    { id: "formacoes", labelKey: "nav.formacoes" },
    { id: "projetos", labelKey: "nav.projetos" },
    { id: "github", labelKey: "nav.github" },
    { id: "contato", labelKey: "nav.contato" },
];

export default function TimelineNav() {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const [fillHeight, setFillHeight] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const dotsRef = useRef<(HTMLButtonElement | null)[]>([]);

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(scrollY / docHeight, 1);

        if (trackRef.current && dotsRef.current.length > 0) {
            const trackRect = trackRef.current.getBoundingClientRect();
            const maxHeight = trackRect.height;
            setFillHeight(progress * maxHeight);
        }

        const sections = NAV_KEYS.map(item => document.getElementById(item.id));
        let currentIndex = 0;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.4) {
                    currentIndex = i;
                    break;
                }
            }
        }
        setActiveIndex(currentIndex);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            {/* Desktop: vertical sidebar */}
            <nav className="timeline-nav" aria-label="Section navigation">
                <div ref={trackRef} className="relative flex flex-col items-center gap-8" style={{ height: "auto" }}>
                    {/* Track line */}
                    <div
                        className="timeline-nav__line-track"
                        style={{
                            top: dotsRef.current[0] ? "6px" : "0",
                            bottom: dotsRef.current[dotsRef.current.length - 1] ? "6px" : "0",
                        }}
                    />
                    {/* Fill line */}
                    <div
                        className="timeline-nav__line-fill"
                        style={{
                            top: "6px",
                            height: `${fillHeight}px`,
                        }}
                    />

                    {NAV_KEYS.map((item, index) => {
                        const label = t(item.labelKey);
                        return (
                            <button
                                key={item.id}
                                ref={(el) => { dotsRef.current[index] = el; }}
                                onClick={() => scrollTo(item.id)}
                                className={`timeline-nav__dot ${index <= activeIndex ? "timeline-nav__dot--active" : ""}`}
                                aria-label={`${t("nav.inicio") === "Início" ? "Ir para" : "Go to"} ${label}`}
                                title={label}
                            >
                                <span className="timeline-nav__label">{label}</span>
                            </button>
                        );
                    })}
                </div>
            </nav>

            {/* Mobile: bottom nav bar */}
            <nav className="mobile-nav" aria-label="Section navigation (mobile)">
                {NAV_KEYS.map((item, index) => {
                    const label = t(item.labelKey);
                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={`mobile-nav__dot ${index === activeIndex ? "mobile-nav__dot--active" : ""}`}
                            aria-label={`${t("nav.inicio") === "Início" ? "Ir para" : "Go to"} ${label}`}
                            title={label}
                        />
                    );
                })}
            </nav>
        </>
    );
}

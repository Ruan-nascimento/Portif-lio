"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_KEYS = [
    { id: "inicio", labelKey: "nav.inicio" },
    { id: "sobre", labelKey: "nav.sobre" },
    { id: "formacoes", labelKey: "nav.formacoes" },
    { id: "projetos", labelKey: "nav.projetos" },

    { id: "contato", labelKey: "nav.contato" },
];

export default function TimelineNav() {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const fillRef = useRef<HTMLDivElement>(null);
    const dotsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const triggersRef = useRef<ScrollTrigger[]>([]);

    /* Scroll suave ao clicar */
    const scrollTo = useCallback((id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: document.documentElement,
                start: "top top",
                end: "bottom bottom",
                onUpdate: (self) => {
                    /* Atualiza linha de progresso */
                    if (fillRef.current && trackRef.current) {
                        const trackHeight = trackRef.current.offsetHeight;
                        gsap.to(fillRef.current, {
                            height: self.progress * trackHeight,
                            duration: 0.3,
                            ease: "power2.out",
                            overwrite: true,
                        });
                    }

                    /* Detecta seção ativa: qual ocupa mais espaço na viewport */
                    const vh = window.innerHeight;
                    const scrollY = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight;

                    /* Se estiver no fundo, ativa o último item de forma confiável (útil para mobile chrome) */
                    if (self.progress >= 0.98) {
                        setActiveIndex(NAV_KEYS.length - 1);
                        return;
                    }

                    let bestIndex = 0;
                    let bestVisibility = -1;

                    NAV_KEYS.forEach((item, index) => {
                        const section = document.getElementById(item.id);
                        if (!section) return;

                        const rect = section.getBoundingClientRect();
                        const visibleTop = Math.max(0, rect.top);
                        const visibleBottom = Math.min(vh, rect.bottom);
                        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

                        /* Peso extra para seções que estão no topo da viewport */
                        const topBias = rect.top <= vh * 0.4 && rect.top >= -rect.height * 0.5 ? 1.2 : 1;
                        const weighted = visibleHeight * topBias;

                        if (weighted > bestVisibility) {
                            bestVisibility = weighted;
                            bestIndex = index;
                        }
                    });

                    setActiveIndex(bestIndex);
                },
            });
        });

        return () => {
            ctx.revert();
            triggersRef.current = [];
        };
    }, []);

    /* Anima os dots quando activeIndex muda */
    useEffect(() => {
        dotsRef.current.forEach((dot, i) => {
            if (!dot) return;
            const icon = dot.querySelector(".timeline-nav__icon") as HTMLElement;

            if (i <= activeIndex) {
                gsap.to(dot, {
                    scale: i === activeIndex ? 1.35 : 1.15,
                    duration: 0.4,
                    ease: "back.out(1.7)",
                    overwrite: true,
                });
                if (icon) {
                    gsap.to(icon, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.3,
                        delay: 0.1,
                        ease: "power2.out",
                    });
                }
            } else {
                gsap.to(dot, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out",
                    overwrite: true,
                });
                if (icon) {
                    gsap.to(icon, {
                        opacity: 0,
                        scale: 0.5,
                        duration: 0.2,
                        ease: "power2.in",
                    });
                }
            }
        });
    }, [activeIndex]);

    return (
        <>
            {/* Desktop: barra lateral vertical */}
            <nav className="timeline-nav" aria-label="Section navigation">
                <div
                    ref={trackRef}
                    className="timeline-nav__track"
                >
                    {/* Linha de fundo (track) */}
                    <div className="timeline-nav__line-track" />
                    {/* Linha de progresso (fill) */}
                    <div ref={fillRef} className="timeline-nav__line-fill" />

                    {NAV_KEYS.map((item, index) => {
                        const label = t(item.labelKey);
                        const isActive = index <= activeIndex;
                        const isCurrent = index === activeIndex;

                        return (
                            <button
                                key={item.id}
                                ref={(el) => { dotsRef.current[index] = el; }}
                                onClick={() => scrollTo(item.id)}
                                className={`timeline-nav__dot ${isActive ? "timeline-nav__dot--active" : ""} ${isCurrent ? "timeline-nav__dot--current" : ""}`}
                                aria-label={`${t("nav.inicio") === "Início" ? "Ir para" : "Go to"} ${label}`}
                                title={label}
                            >
                                {/* Ícone de check dentro do dot */}
                                <span className="timeline-nav__icon">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path
                                            d="M2.5 5L4.5 7L7.5 3"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                {/* Label tooltip */}
                                <span className="timeline-nav__label">{label}</span>
                            </button>
                        );
                    })}
                </div>
            </nav>

            {/* Mobile: bottom nav */}
            <nav className="mobile-nav" aria-label="Section navigation (mobile)">
                <div className="mobile-nav__inner">
                    {NAV_KEYS.map((item, index) => {
                        const label = t(item.labelKey);
                        const isCurrent = index === activeIndex;

                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className={`mobile-nav__dot ${isCurrent ? "mobile-nav__dot--active" : ""}`}
                                aria-label={`${t("nav.inicio") === "Início" ? "Ir para" : "Go to"} ${label}`}
                                title={label}
                            >
                                {isCurrent && (
                                    <span className="mobile-nav__label">{label}</span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}

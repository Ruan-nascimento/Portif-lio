"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { FiArrowLeft, FiHome, FiArrowRight } from "react-icons/fi";
import { useLanguage } from "@/providers/LanguageProvider";

/* Lâmpada quebrada em SVG inline — leve e sem dependência de imagem */
function BrokenBulbSVG({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 200 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            {/* Círculo de fundo */}
            <circle cx="100" cy="110" r="90" fill="rgba(56,189,248,0.06)" />

            {/* Corpo do bulbo — vidro quebrado */}
            <path
                d="M70 120 C70 70, 130 70, 130 120 L130 140 L70 140 Z"
                stroke="var(--sky-300)"
                strokeWidth="2.5"
                fill="rgba(56,189,248,0.05)"
                strokeLinejoin="round"
            />

            {/* Rachadura 1 */}
            <path
                d="M90 75 L95 95 L85 105 L95 120"
                stroke="var(--sky-400)"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                className="notfound-crack"
            />

            {/* Rachadura 2 */}
            <path
                d="M115 80 L110 98 L118 110"
                stroke="var(--sky-400)"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                className="notfound-crack"
            />

            {/* Pedaço quebrado flutuando */}
            <path
                d="M125 85 L140 75 L138 90 Z"
                stroke="var(--sky-300)"
                strokeWidth="1.5"
                fill="rgba(56,189,248,0.08)"
                className="notfound-shard"
            />

            {/* Pedaço quebrado 2 */}
            <path
                d="M65 95 L55 82 L50 98 Z"
                stroke="var(--sky-300)"
                strokeWidth="1.5"
                fill="rgba(56,189,248,0.08)"
                className="notfound-shard-2"
            />

            {/* Base da lâmpada */}
            <rect
                x="78"
                y="140"
                width="44"
                height="8"
                rx="2"
                fill="var(--sky-500)"
                opacity="0.6"
            />
            <rect
                x="82"
                y="148"
                width="36"
                height="6"
                rx="2"
                fill="var(--sky-400)"
                opacity="0.5"
            />
            <rect
                x="86"
                y="154"
                width="28"
                height="6"
                rx="2"
                fill="var(--sky-400)"
                opacity="0.4"
            />
            <rect
                x="90"
                y="160"
                width="20"
                height="5"
                rx="2.5"
                fill="var(--sky-300)"
                opacity="0.35"
            />

            {/* Filamento partido */}
            <path
                d="M92 130 L96 115 L100 125 L104 112 L108 130"
                stroke="var(--sky-400)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                opacity="0.6"
                className="notfound-filament"
            />

            {/* Faíscas */}
            <circle cx="98" cy="115" r="2" fill="var(--sky-300)" className="notfound-spark-1" />
            <circle cx="105" cy="108" r="1.5" fill="var(--sky-400)" className="notfound-spark-2" />
            <circle cx="90" cy="120" r="1.5" fill="var(--sky-200)" className="notfound-spark-3" />
        </svg>
    );
}

const REDIRECT_SECONDS = 20;

export default function NotFound() {
    const router = useRouter();
    const { t } = useLanguage();

    /* Refs para animações GSAP */
    const containerRef = useRef<HTMLDivElement>(null);
    const bulbRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const actionsRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    /* Contagem regressiva */
    const [countdown, setCountdown] = useState(REDIRECT_SECONDS);

    /* Navegação */
    const goBack = useCallback(() => {
        if (typeof window !== "undefined" && window.history.length > 1) {
            router.back();
        } else {
            router.push("/");
        }
    }, [router]);

    const goHome = useCallback(() => {
        router.push("/");
    }, [router]);

    /* Esconde a navegação enquanto estiver na 404 */
    useEffect(() => {
        document.body.classList.add("is-not-found");
        return () => document.body.classList.remove("is-not-found");
    }, []);

    /* ── Animações GSAP de entrada ── */
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            /* Fade in do container inteiro */
            tl.fromTo(
                containerRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.4 }
            );

            /* Lâmpada — entra da esquerda com rotação */
            tl.fromTo(
                bulbRef.current,
                { x: -80, opacity: 0, rotate: -15 },
                { x: 0, opacity: 1, rotate: 0, duration: 0.8 },
                "-=0.2"
            );

            /* 404 — "punch in" com escala */
            tl.fromTo(
                titleRef.current,
                { scale: 0.5, opacity: 0, y: 30 },
                { scale: 1, opacity: 1, y: 0, duration: 0.6 },
                "-=0.4"
            );

            /* Subtítulo */
            tl.fromTo(
                subtitleRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5 },
                "-=0.2"
            );

            /* Descrição */
            tl.fromTo(
                descRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5 },
                "-=0.3"
            );

            /* Botões */
            tl.fromTo(
                actionsRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5 },
                "-=0.2"
            );

            /* Timer/redirect */
            tl.fromTo(
                timerRef.current,
                { y: 10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4 },
                "-=0.2"
            );

            /* Faíscas piscando */
            gsap.to(".notfound-spark-1", {
                opacity: 0,
                duration: 0.4,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
            gsap.to(".notfound-spark-2", {
                opacity: 0,
                duration: 0.6,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                delay: 0.2,
            });
            gsap.to(".notfound-spark-3", {
                opacity: 0,
                duration: 0.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                delay: 0.4,
            });

            /* Shards flutuando */
            gsap.to(".notfound-shard", {
                y: -6,
                x: 4,
                rotate: 8,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            gsap.to(".notfound-shard-2", {
                y: -5,
                x: -3,
                rotate: -6,
                duration: 2.4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 0.3,
            });

            /* Filamento flickering */
            gsap.to(".notfound-filament", {
                opacity: 0.2,
                duration: 0.3,
                repeat: -1,
                yoyo: true,
                ease: "steps(1)",
                delay: 1,
            });

            /* Barra de progresso animada (20s) */
            gsap.fromTo(
                progressRef.current,
                { width: "100%" },
                {
                    width: "0%",
                    duration: REDIRECT_SECONDS,
                    ease: "linear",
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    /* ── Countdown + redirect ── */
    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        const timeout = setTimeout(() => {
            goBack();
        }, REDIRECT_SECONDS * 1000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [goBack]);

    return (
        <div
            ref={containerRef}
            className="min-h-screen flex items-center justify-center px-6 py-12"
            style={{ opacity: 0 }}
        >
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 max-w-4xl w-full">
                {/* ── Lâmpada ── */}
                <div ref={bulbRef} className="flex-shrink-0">
                    <BrokenBulbSVG className="w-44 h-auto sm:w-52 lg:w-64" />
                </div>

                {/* ── Conteúdo ── */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                    {/* 404 */}
                    <h1
                        ref={titleRef}
                        className="text-[6rem] sm:text-[8rem] lg:text-[10rem] font-extrabold leading-none tracking-tighter gradient-text select-none"
                    >
                        404
                    </h1>

                    {/* Subtítulo */}
                    <p
                        ref={subtitleRef}
                        className="text-lg sm:text-xl font-bold uppercase tracking-wider text-zinc-100"
                    >
                        {t("notFound.title")}
                    </p>

                    {/* Descrição */}
                    <p
                        ref={descRef}
                        className="text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed"
                    >
                        {t("notFound.description")}
                    </p>

                    {/* Botões */}
                    <div
                        ref={actionsRef}
                        className="flex flex-col sm:flex-row gap-3 mt-4"
                    >
                        <button
                            onClick={goHome}
                            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 hover:scale-[1.03]"
                        >
                            <FiHome size={16} />
                            {t("notFound.goHome")}
                        </button>

                        <button
                            onClick={goBack}
                            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 font-semibold text-sm hover:border-sky-500/50 hover:text-sky-300 transition-all duration-300 hover:scale-[1.03]"
                        >
                            <FiArrowLeft
                                size={16}
                                className="transition-transform group-hover:-translate-x-1"
                            />
                            {t("notFound.goBack")}
                        </button>
                    </div>

                    {/* Timer de redirecionamento */}
                    <div ref={timerRef} className="mt-6 w-full max-w-sm">
                        <p className="text-xs text-zinc-500 mb-2 flex items-center gap-1">
                            {t("notFound.redirect")}{" "}
                            <span className="text-sky-400 font-bold tabular-nums">
                                {countdown}
                            </span>{" "}
                            {t("notFound.seconds")}
                            <FiArrowRight size={12} className="ml-1 text-zinc-600" />
                        </p>

                        {/* Barra de progresso */}
                        <div className="w-full h-1 rounded-full bg-zinc-800 overflow-hidden">
                            <div
                                ref={progressRef}
                                className="h-full rounded-full"
                                style={{
                                    background:
                                        "linear-gradient(90deg, var(--sky-400), var(--sky-600))",
                                    boxShadow: "0 0 8px rgba(56,189,248,0.4)",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
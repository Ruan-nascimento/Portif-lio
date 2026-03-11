"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Background animado com gradiente sky-200→sky-600,
 * blob de luz que segue o cursor e ondas translúcidas.
 * Partículas removidas — agora ficam no ParticleField (Three.js).
 */
export default function AnimatedBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const blobRef = useRef<HTMLDivElement>(null);
    const rafId = useRef<number>(0);
    const mouse = useRef({ x: 0.5, y: 0.5 });

    const handleMouseMove = useCallback((e: MouseEvent) => {
        mouse.current = {
            x: e.clientX / window.innerWidth,
            y: e.clientY / window.innerHeight,
        };
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    useEffect(() => {
        const animate = () => {
            if (blobRef.current) {
                const bx = mouse.current.x * 100;
                const by = mouse.current.y * 100;
                blobRef.current.style.background = `radial-gradient(circle 250px at ${bx}% ${by}%, rgba(186,230,253,0.30) 0%, transparent 70%)`;
            }
            rafId.current = requestAnimationFrame(animate);
        };
        rafId.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId.current);
    }, []);

    return (
        <div
            ref={containerRef}
            aria-hidden="true"
            className="animated-bg"
        >
            {/* Gradiente base animado */}
            <div className="animated-bg__gradient" />

            {/* Blob de luz que segue o cursor */}
            <div ref={blobRef} className="animated-bg__blob" />

            {/* Ondas */}
            <div className="animated-bg__wave animated-bg__wave--1" />
            <div className="animated-bg__wave animated-bg__wave--2" />
            <div className="animated-bg__wave animated-bg__wave--3" />
        </div>
    );
}

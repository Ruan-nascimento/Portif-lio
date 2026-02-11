"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [visible, setVisible] = useState(false);
    const [clicking, setClicking] = useState(false);
    const rafRef = useRef<number>(0);
    const posRef = useRef({ x: -100, y: -100 });

    useEffect(() => {
        // Só ativa em dispositivos com ponteiro (ignora touch)
        const hasPointer = window.matchMedia("(pointer: fine)").matches;
        if (!hasPointer) return;

        const onMove = (e: MouseEvent) => {
            posRef.current = { x: e.clientX, y: e.clientY };

            if (!rafRef.current) {
                rafRef.current = requestAnimationFrame(() => {
                    setPosition(posRef.current);
                    rafRef.current = 0;
                });
            }
        };

        const onEnter = () => setVisible(true);
        const onLeave = () => setVisible(false);
        const onDown = () => setClicking(true);
        const onUp = () => setClicking(false);

        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseenter", onEnter);
        document.addEventListener("mouseleave", onLeave);
        document.addEventListener("mousedown", onDown);
        document.addEventListener("mouseup", onUp);

        // Injeta style global para esconder cursor nativo em TUDO (via CSS global é melhor)
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            className="custom-cursor"
            style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${clicking ? 0.85 : 1})`,
            }}
        >
            <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="cursor-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0284c7" /> {/* sky-600 */}
                        <stop offset="100%" stopColor="#38bdf8" /> {/* sky-400 */}
                    </linearGradient>
                </defs>
                {/* Sombra sutil */}
                <path
                    d="M3 2L3 23L9 17L16 26L20 24L13 15L22 15L3 2Z"
                    fill="rgba(0,0,0,0.3)"
                    transform="translate(1.5, 1.5)"
                />
                {/* Corpo com degradê sky-600 → sky-400 */}
                <path
                    d="M3 2L3 23L9 17L16 26L20 24L13 15L22 15L3 2Z"
                    fill="url(#cursor-grad)"
                />
                {/* Borda levemente destacada */}
                <path
                    d="M3 2L3 23L9 17L16 26L20 24L13 15L22 15L3 2Z"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}

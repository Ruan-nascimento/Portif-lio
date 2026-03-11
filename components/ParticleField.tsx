"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Campo de partículas Three.js — pontos de luz leves
 * que flutuam e reagem ao cursor com efeito magnético.
 */
export default function ParticleField() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        /* ── Config ─────────────────────────────────── */
        const PARTICLE_COUNT = 100;
        const MOUSE_RADIUS = 120;        // raio de influência do cursor (px)
        const MOUSE_STRENGTH = 0.035;    // força de repulsão
        const DRIFT_SPEED = 0.15;        // velocidade do drift ambiente

        /* ── Renderer ───────────────────────────────── */
        const dpr = Math.min(window.devicePixelRatio, 2);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
        renderer.setPixelRatio(dpr);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        /* ── Scene & Camera ─────────────────────────── */
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(
            -window.innerWidth / 2, window.innerWidth / 2,
            window.innerHeight / 2, -window.innerHeight / 2,
            0.1, 1000
        );
        camera.position.z = 1;

        /* ── Partículas ─────────────────────────────── */
        const positions = new Float32Array(PARTICLE_COUNT * 3);
        const velocities = new Float32Array(PARTICLE_COUNT * 3);
        const sizes = new Float32Array(PARTICLE_COUNT);
        const alphas = new Float32Array(PARTICLE_COUNT);

        const halfW = window.innerWidth / 2;
        const halfH = window.innerHeight / 2;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            positions[i * 3]     = (Math.random() - 0.5) * window.innerWidth;
            positions[i * 3 + 1] = (Math.random() - 0.5) * window.innerHeight;
            positions[i * 3 + 2] = 0;

            velocities[i * 3]     = (Math.random() - 0.5) * DRIFT_SPEED;
            velocities[i * 3 + 1] = (Math.random() - 0.5) * DRIFT_SPEED;
            velocities[i * 3 + 2] = 0;

            sizes[i] = 1.5 + Math.random() * 3;
            alphas[i] = 0.2 + Math.random() * 0.5;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
        geometry.setAttribute("aAlpha", new THREE.BufferAttribute(alphas, 1));

        /* ── Shader leve para pontos circulares ───── */
        const material = new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            uniforms: {
                uPixelRatio: { value: dpr },
            },
            vertexShader: `
                attribute float aSize;
                attribute float aAlpha;
                varying float vAlpha;
                uniform float uPixelRatio;
                void main() {
                    vAlpha = aAlpha;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = aSize * uPixelRatio;
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying float vAlpha;
                void main() {
                    float dist = length(gl_PointCoord - vec2(0.5));
                    if (dist > 0.5) discard;
                    float fade = 1.0 - smoothstep(0.2, 0.5, dist);
                    gl_FragColor = vec4(0.44, 0.86, 0.97, vAlpha * fade);
                }
            `,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        /* ── Mouse tracking ─────────────────────────── */
        const mouse = { x: 9999, y: 9999 };

        const onMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX - halfW;
            mouse.y = -(e.clientY - halfH);
        };
        window.addEventListener("mousemove", onMouseMove);

        /* ── Animation loop ─────────────────────────── */
        let animFrameId = 0;

        const animate = () => {
            const pos = geometry.attributes.position as THREE.BufferAttribute;
            const arr = pos.array as Float32Array;

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const ix = i * 3;
                const iy = i * 3 + 1;

                // drift suave
                arr[ix]  += velocities[ix];
                arr[iy]  += velocities[iy];

                // wrap-around: partículas reaparecem no lado oposto
                if (arr[ix] > halfW)  arr[ix] = -halfW;
                if (arr[ix] < -halfW) arr[ix] = halfW;
                if (arr[iy] > halfH)  arr[iy] = -halfH;
                if (arr[iy] < -halfH) arr[iy] = halfH;

                // repulsão do mouse
                const dx = arr[ix] - mouse.x;
                const dy = arr[iy] - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < MOUSE_RADIUS && dist > 0) {
                    const force = (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH;
                    arr[ix] += (dx / dist) * force * 15;
                    arr[iy] += (dy / dist) * force * 15;
                }
            }

            pos.needsUpdate = true;
            renderer.render(scene, camera);
            animFrameId = requestAnimationFrame(animate);
        };

        animFrameId = requestAnimationFrame(animate);

        /* ── Resize ─────────────────────────────────── */
        const onResize = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            renderer.setSize(w, h);
            camera.left = -w / 2;
            camera.right = w / 2;
            camera.top = h / 2;
            camera.bottom = -h / 2;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", onResize);

        /* ── Cleanup ────────────────────────────────── */
        return () => {
            cancelAnimationFrame(animFrameId);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onResize);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            aria-hidden="true"
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 1,
                pointerEvents: "none",
            }}
        />
    );
}

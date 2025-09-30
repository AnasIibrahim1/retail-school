"use client"
import { useEffect, useRef, useState } from "react";

type CursorVariant = "default" | "text";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement | null>(null);
    const ringRef = useRef<HTMLDivElement | null>(null);

    const targetXRef = useRef(0);
    const targetYRef = useRef(0);
    const currentXRef = useRef(0);
    const currentYRef = useRef(0);

    const [variant, setVariant] = useState<CursorVariant>("default");
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const isFinePointer = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
        if (!isFinePointer) return;

        const handleMove = (e: MouseEvent) => {
            targetXRef.current = e.clientX;
            targetYRef.current = e.clientY;
            if (!visible) setVisible(true);
        };

        const handleEnter = () => setVisible(true);
        const handleLeave = () => setVisible(false);

        const handleOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            const textContainer = target?.closest?.('[data-cursor="text"]');
            setVariant(textContainer ? "text" : "default");
        };

        window.addEventListener("mousemove", handleMove, { passive: true });
        window.addEventListener("mouseover", handleOver, { passive: true });
        window.addEventListener("mouseenter", handleEnter, { passive: true });
        window.addEventListener("mouseleave", handleLeave, { passive: true });

        let rafId = 0;
        const stiffness = 0.18; // follow speed
        const friction = 0;  // damping
        let vx = 0, vy = 0;

        const loop = () => {
            const dx = targetXRef.current - currentXRef.current;
            const dy = targetYRef.current - currentYRef.current;
            vx = vx * friction + dx * stiffness;
            vy = vy * friction + dy * stiffness;
            currentXRef.current += vx;
            currentYRef.current += vy;

            const dot = dotRef.current;
            const ring = ringRef.current;
            if (dot) {
                dot.style.transform = `translate3d(${currentXRef.current}px, ${currentYRef.current}px, 0)`;
                dot.style.opacity = visible ? "1" : "0";
            }
            if (ring) {
                // Offset by half size using CSS translate with negative margin via translate
                ring.style.transform = `translate3d(${currentXRef.current}px, ${currentYRef.current}px, 0)`;
                ring.style.opacity = visible ? "1" : "0";
            }

            rafId = requestAnimationFrame(loop);
        };
        rafId = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseover", handleOver);
            window.removeEventListener("mouseenter", handleEnter);
            window.removeEventListener("mouseleave", handleLeave);
        };
    }, [visible]);

    const ringSize = variant === "text" ? 56 : 28;
    const ringBorder = variant === "text" ? 2 : 2;
    const dotSize = variant === "text" ? 6 : 8;

    const baseColor = "#FF2574";

    return (
        <>
            <div
                ref={ringRef}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: ringSize,
                    height: ringSize,
                    borderRadius: "50%",
                    border: `${ringBorder}px solid ${baseColor}`,
                    transform: "translate3d(-100px, -100px, 0)",
                    marginLeft: -ringSize / 2,
                    marginTop: -ringSize / 2,
                    pointerEvents: "none",
                    zIndex: 9999,
                    transition: "width 120ms ease, height 120ms ease, border-color 120ms ease, opacity 120ms ease",
                    mixBlendMode: "normal",
                    opacity: 0,
                }}
            />
            <div
                ref={dotRef}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: dotSize,
                    height: dotSize,
                    borderRadius: "50%",
                    backgroundColor: baseColor,
                    transform: "translate3d(-100px, -100px, 0)",
                    marginLeft: -dotSize / 2,
                    marginTop: -dotSize / 2,
                    pointerEvents: "none",
                    zIndex: 10000,
                    transition: "width 120ms ease, height 120ms ease, background-color 120ms ease, opacity 120ms ease",
                    opacity: 0,
                }}
            />
        </>
    );
}



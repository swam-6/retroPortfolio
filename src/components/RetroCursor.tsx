"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type CursorMode = "default" | "interactive" | "clicking";

export default function RetroCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Slightly lagging dot for the "ghost" trail feel
  const trailX = useSpring(mouseX, { stiffness: 160, damping: 22, mass: 0.5 });
  const trailY = useSpring(mouseY, { stiffness: 160, damping: 22, mass: 0.5 });

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const canUseCursor = finePointer.matches && !reducedMotion.matches;

    setIsEnabled(canUseCursor);
    if (!canUseCursor) return;

    const isInteractiveTarget = (target: EventTarget | null) =>
      target instanceof Element &&
      Boolean(
        target.closest(
          "a, button, input, textarea, select, [role='button'], [tabindex]:not([tabindex='-1'])"
        )
      );

    const handlePointerMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
      setMode((cur) =>
        cur === "clicking" ? cur : isInteractiveTarget(e.target) ? "interactive" : "default"
      );
    };

    const handlePointerDown = () => setMode("clicking");
    const handlePointerUp = (e: PointerEvent) =>
      setMode(isInteractiveTarget(e.target) ? "interactive" : "default");
    const handlePointerLeave = () => setIsVisible(false);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [mouseX, mouseY]);

  if (!isEnabled) return null;

  const isInteractive = mode === "interactive";
  const isClicking = mode === "clicking";

  return (
    <>
      {/* ── Ghost trail dot (lags behind) ─────────────────────────────── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ opacity: isVisible ? 0.35 : 0 }}
        transition={{ duration: 0.15 }}
      >
        {/* 4px square ghost dot */}
        <div className="h-1 w-1 bg-retro-border" />
      </motion.div>

      {/* ── Main cursor: pixel crosshair ──────────────────────────────── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.6 : 1,
        }}
        transition={{ duration: 0.08 }}
      >
        {/*
          40×40 viewBox — center at (19, 19)
          Arms: 3px wide, 10px long, 2px gap from center square
          Center: 3×3 square at (18, 18)

          Layout (axis-aligned):
            Top arm:    x=18  y=5   w=3  h=10   → ends at y=15, gap=15..18
            Center:     x=18  y=18  w=3  h=3
            Bottom arm: x=18  y=22  w=3  h=10   → starts at y=22, gap=21..22
            Left arm:   x=5   y=18  w=10 h=3    → ends at x=15, gap=15..18
            Right arm:  x=22  y=18  w=10 h=3    → starts at x=22, gap=21..22
        */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
          style={{
            imageRendering: "pixelated",
            color: isInteractive
              ? "var(--retro-green, #4ade80)"
              : "var(--retro-border, #333333)",
          }}
        >
          {/* Center 3×3 square */}
          <rect x="18" y="18" width="3" height="3" fill="currentColor" />

          {/* Top arm */}
          <rect x="18" y="5" width="3" height="10" fill="currentColor" />
          {/* Bottom arm */}
          <rect x="18" y="24" width="3" height="10" fill="currentColor" />
          {/* Left arm */}
          <rect x="5" y="18" width="10" height="3" fill="currentColor" />
          {/* Right arm */}
          <rect x="24" y="18" width="10" height="3" fill="currentColor" />
        </svg>
      </motion.div>
    </>
  );
}

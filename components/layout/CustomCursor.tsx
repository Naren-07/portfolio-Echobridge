"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "video">("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth physics-based spring follow
  const springX = useSpring(mouseX, { damping: 28, stiffness: 350 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 350 });

  useEffect(() => {
    // Only enable on non-touch desktop devices with fine pointer
    if (window.matchMedia("(pointer: fine)").matches) {
      setMounted(true);
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element or parents for interactive targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorEl = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorEl) {
        const type = cursorEl.getAttribute("data-cursor");
        if (type === "play") {
          setCursorVariant("video");
          setCursorText("PLAY");
        } else if (type === "view") {
          setCursorVariant("video");
          setCursorText("VIEW");
        } else {
          setCursorVariant("hover");
          setCursorText("");
        }
      } else if (target.closest("button, a, input, select, textarea")) {
        setCursorVariant("hover");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#ff2d2d] rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: cursorVariant === "default" ? 1 : 0,
          opacity: cursorVariant === "default" ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Trailing spring interactive ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-bold tracking-widest text-[9px] uppercase select-none"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          width: cursorVariant === "video" ? 64 : cursorVariant === "hover" ? 44 : 26,
          height: cursorVariant === "video" ? 64 : cursorVariant === "hover" ? 44 : 26,
          backgroundColor:
            cursorVariant === "video"
              ? "rgba(255, 45, 45, 0.9)"
              : cursorVariant === "hover"
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(255, 255, 255, 0)",
          borderColor:
            cursorVariant === "video"
              ? "rgba(255, 45, 45, 1)"
              : cursorVariant === "hover"
              ? "rgba(255, 255, 255, 0.4)"
              : "rgba(255, 255, 255, 0.25)",
          borderWidth: cursorVariant === "video" ? "0px" : "1.5px",
          color: cursorVariant === "video" ? "#050505" : "#ffffff",
          backdropFilter: cursorVariant === "hover" ? "blur(2px)" : "none",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
      >
        {cursorText}
      </motion.div>
    </>
  );
}

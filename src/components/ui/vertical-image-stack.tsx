"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageItem {
  src: string;
  alt: string;
}

interface VerticalImageStackProps {
  images: ImageItem[];
}

export default function VerticalImageStack({ images }: VerticalImageStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const isAnimating = useRef(false);

  const navigate = useCallback(
    (dir: number) => {
      if (isAnimating.current) return;
      const nextIndex = currentIndex + dir;
      if (nextIndex < 0 || nextIndex >= images.length) return;
      isAnimating.current = true;
      setDirection(dir);
      setCurrentIndex(nextIndex);
      setTimeout(() => {
        isAnimating.current = false;
      }, 400);
    },
    [currentIndex, images.length]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) > 20) {
        navigate(e.deltaY > 0 ? 1 : -1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) > 30) {
        navigate(deltaY > 0 ? 1 : -1);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  if (images.length === 0) return null;

  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 200 : -200,
      scale: 0.9,
      opacity: 0,
    }),
    center: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -100 : 100,
      scale: 0.85,
      opacity: 0,
    }),
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none"
    >
      <div className="flex items-center gap-4">
        {/* Active card */}
        <div className="flex-1 min-w-0">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="rounded-xl overflow-hidden border border-zinc-700/50 shadow-2xl shadow-black/50"
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-auto block"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Vertical nav dots */}
        <div className="flex flex-col items-center gap-1.5 shrink-0">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i !== currentIndex) {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-white scale-125"
                  : "bg-zinc-600 hover:bg-zinc-400"
              }`}
            />
          ))}
          <span className="text-[10px] font-mono text-zinc-500 mt-1">
            {currentIndex + 1}/{images.length}
          </span>
        </div>
      </div>
    </div>
  );
}

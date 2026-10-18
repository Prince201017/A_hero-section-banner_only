"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion, TargetAndTransition } from "motion/react";
import { heroScenes } from "@/lib/heroScenes";

const EDITORIAL_EASE: [number, number, number, number] = [0.4, 0.0, 0.2, 1.0];

const EDITORIAL_DISSOLVE_VARIANTS: {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  exit: TargetAndTransition;
} = {
  initial: {
    opacity: 0,
    scale: 1.028,
    zIndex: 2,
  },
  animate: {
    opacity: 1,
    scale: 1.0,
    zIndex: 2,
    transition: {
      opacity: { duration: 2.2, ease: EDITORIAL_EASE },
      scale: { duration: 2.5, ease: EDITORIAL_EASE },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.992,
    zIndex: 1,
    transition: {
      opacity: { duration: 2.0, ease: EDITORIAL_EASE },
      scale: { duration: 2.0, ease: EDITORIAL_EASE },
    },
  },
};

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextScene = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % heroScenes.length);
  }, []);

  // Autoplay management (deliberately timed for luxurious pacing)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextScene();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextScene]);

  // Preload next image in browser cache
  useEffect(() => {
    const nextIdx = (activeIndex + 1) % heroScenes.length;
    const img = new window.Image();
    img.src = heroScenes[nextIdx].src;
  }, [activeIndex]);

  const currentScene = heroScenes[activeIndex];

  return (
    <div className="relative h-full w-full select-none pointer-events-none overflow-hidden bg-black">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={currentScene.id}
          initial={EDITORIAL_DISSOLVE_VARIANTS.initial}
          animate={EDITORIAL_DISSOLVE_VARIANTS.animate}
          exit={EDITORIAL_DISSOLVE_VARIANTS.exit}
          className="absolute inset-0 h-full w-full overflow-hidden will-change-transform"
        >
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={currentScene.src}
              alt={currentScene.title}
              fill
              priority
              sizes="100vw"
              referrerPolicy="no-referrer"
              className="object-cover object-center select-none"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

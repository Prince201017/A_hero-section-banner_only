"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion, TargetAndTransition } from "motion/react";
import { heroScenes, HeroScene as HeroSceneType } from "@/lib/heroScenes";

export type TransitionType =
  | "editorial-dissolve"
  | "pure-crossfade"
  | "slide-left"
  | "slide-up"
  | "blur-dissolve"
  | "wipe-right"
  | "wipe-down"
  | "center-iris"
  | "diagonal-wipe"
  | "film-exposure";

export interface TransitionConfig {
  key: TransitionType;
  label: string;
  description: string;
}

export const TRANSITION_EFFECTS: TransitionConfig[] = [
  {
    key: "editorial-dissolve",
    label: "1. Crossfade / Dissolve (Specified)",
    description: "Slow opacity interpolation + subtle scale + analog grain continuity",
  },
  {
    key: "pure-crossfade",
    label: "2. Static Crossfade",
    description: "Completely static linear opacity fade without any scale",
  },
  {
    key: "slide-left",
    label: "3. Horizontal Slide",
    description: "Smooth horizontal film push from right",
  },
  {
    key: "slide-up",
    label: "4. Vertical Slide",
    description: "Upward magazine scroll transition",
  },
  {
    key: "blur-dissolve",
    label: "5. Lens Blur Dissolve",
    description: "Soft focus out to sharp focus in",
  },
  {
    key: "wipe-right",
    label: "6. Horizontal Wipe",
    description: "Clean horizontal curtain reveal",
  },
  {
    key: "wipe-down",
    label: "7. Vertical Wipe",
    description: "Top-to-bottom editorial curtain reveal",
  },
  {
    key: "center-iris",
    label: "8. Center Iris",
    description: "Expanding circular spotlight reveal",
  },
  {
    key: "diagonal-wipe",
    label: "9. Diagonal Sweep",
    description: "Dynamic angled editorial wipe",
  },
  {
    key: "film-exposure",
    label: "10. Studio Flash Exposure",
    description: "High-key studio flash exposure dissolve",
  },
];

const EDITORIAL_EASE: [number, number, number, number] = [0.4, 0.0, 0.2, 1.0];
const CUBIC_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const SLIDE_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const WIPE_EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];

interface HeroSlideshowProps {
  transitionType?: TransitionType;
  onSceneChange?: (scene: HeroSceneType, index: number) => void;
  triggerNext?: number;
}

interface VariantSet {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  exit: TargetAndTransition;
}

export function HeroSlideshow({
  transitionType = "editorial-dissolve",
  onSceneChange,
  triggerNext = 0,
}: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextScene = useCallback(() => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % heroScenes.length;
      if (onSceneChange) {
        onSceneChange(heroScenes[next], next);
      }
      return next;
    });
  }, [onSceneChange]);

  // Autoplay management (deliberately timed for luxurious pacing)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextScene();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextScene]);

  // Trigger from switcher button if user wants to test immediately
  const prevTriggerRef = useRef(triggerNext);
  useEffect(() => {
    if (triggerNext !== prevTriggerRef.current) {
      prevTriggerRef.current = triggerNext;
      nextScene();
    }
  }, [triggerNext, nextScene]);

  // Preload next image in browser cache
  useEffect(() => {
    const nextIdx = (activeIndex + 1) % heroScenes.length;
    const img = new window.Image();
    img.src = heroScenes[nextIdx].src;
  }, [activeIndex]);

  const currentScene = heroScenes[activeIndex];

  // Transition Variants generator based on selected type
  const getVariants = (): VariantSet => {
    switch (transitionType) {
      // 1. SPECIFIED: Crossfade / Dissolve with slow opacity interpolation & subtle cinematic zoom
      case "editorial-dissolve":
        return {
          initial: {
            opacity: 0,
            scale: 1.028,
            zIndex: 10,
          },
          animate: {
            opacity: 1,
            scale: 1.0,
            zIndex: 10,
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

      // 2. Pure Static Crossfade
      case "pure-crossfade":
        return {
          initial: { opacity: 0, zIndex: 10 },
          animate: {
            opacity: 1,
            zIndex: 10,
            transition: { duration: 1.8, ease: CUBIC_EASE },
          },
          exit: {
            opacity: 0,
            zIndex: 1,
            transition: { duration: 1.8, ease: CUBIC_EASE },
          },
        };

      case "slide-left":
        return {
          initial: { x: "100%", opacity: 1, zIndex: 10 },
          animate: {
            x: "0%",
            opacity: 1,
            zIndex: 10,
            transition: { duration: 1.0, ease: SLIDE_EASE },
          },
          exit: {
            x: "-30%",
            opacity: 0.6,
            zIndex: 1,
            transition: { duration: 1.0, ease: SLIDE_EASE },
          },
        };

      case "slide-up":
        return {
          initial: { y: "100%", opacity: 1, zIndex: 10 },
          animate: {
            y: "0%",
            opacity: 1,
            zIndex: 10,
            transition: { duration: 1.0, ease: SLIDE_EASE },
          },
          exit: {
            y: "-30%",
            opacity: 0.6,
            zIndex: 1,
            transition: { duration: 1.0, ease: SLIDE_EASE },
          },
        };

      case "blur-dissolve":
        return {
          initial: { opacity: 0, filter: "blur(20px)", zIndex: 10 },
          animate: {
            opacity: 1,
            filter: "blur(0px)",
            zIndex: 10,
            transition: { duration: 1.4, ease: CUBIC_EASE },
          },
          exit: {
            opacity: 0,
            filter: "blur(14px)",
            zIndex: 1,
            transition: { duration: 1.2, ease: CUBIC_EASE },
          },
        };

      case "wipe-right":
        return {
          initial: {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
            opacity: 1,
            zIndex: 10,
          },
          animate: {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            opacity: 1,
            zIndex: 10,
            transition: { duration: 1.2, ease: WIPE_EASE },
          },
          exit: {
            opacity: 1,
            zIndex: 1,
            transition: { duration: 1.2 },
          },
        };

      case "wipe-down":
        return {
          initial: {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            opacity: 1,
            zIndex: 10,
          },
          animate: {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            opacity: 1,
            zIndex: 10,
            transition: { duration: 1.2, ease: WIPE_EASE },
          },
          exit: {
            opacity: 1,
            zIndex: 1,
            transition: { duration: 1.2 },
          },
        };

      case "center-iris":
        return {
          initial: {
            clipPath: "circle(0% at 50% 50%)",
            opacity: 1,
            zIndex: 10,
          },
          animate: {
            clipPath: "circle(150% at 50% 50%)",
            opacity: 1,
            zIndex: 10,
            transition: { duration: 1.3, ease: CUBIC_EASE },
          },
          exit: {
            opacity: 1,
            zIndex: 1,
            transition: { duration: 1.3 },
          },
        };

      case "diagonal-wipe":
        return {
          initial: {
            clipPath: "polygon(0 0, 0 0, -25% 100%, -25% 100%)",
            opacity: 1,
            zIndex: 10,
          },
          animate: {
            clipPath: "polygon(0 0, 150% 0, 125% 100%, -25% 100%)",
            opacity: 1,
            zIndex: 10,
            transition: { duration: 1.2, ease: CUBIC_EASE },
          },
          exit: {
            opacity: 1,
            zIndex: 1,
            transition: { duration: 1.2 },
          },
        };

      case "film-exposure":
      default:
        return {
          initial: {
            opacity: 0,
            filter: "brightness(2.2)",
            zIndex: 10,
          },
          animate: {
            opacity: 1,
            filter: "brightness(1)",
            zIndex: 10,
            transition: { duration: 1.3, ease: CUBIC_EASE },
          },
          exit: {
            opacity: 0,
            filter: "brightness(1.6)",
            zIndex: 1,
            transition: { duration: 1.0, ease: "easeOut" },
          },
        };
    }
  };

  const variants = getVariants();

  return (
    <div
      className="relative h-full w-full select-none pointer-events-none overflow-hidden bg-black"
      /* Pointer events none ensures changing img by touch or accidental click is removed */
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={currentScene.id}
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          className="absolute inset-0 h-full w-full overflow-hidden will-change-transform"
        >
          {/* Fixed viewport 100vw x 100vh with object-fit: cover */}
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

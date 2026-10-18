"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import { AnimatePresence, motion, TargetAndTransition } from "motion/react";
import { heroScenes, HeroScene } from "@/lib/heroScenes";

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
  const [videoUrls, setVideoUrls] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Discover any video placed inside public/video/ so it plays first
  useEffect(() => {
    let active = true;
    fetch("/api/banner-video")
      .then((res) => res.json())
      .then((data: { videos?: string[] }) => {
        if (active && Array.isArray(data.videos) && data.videos.length > 0) {
          setVideoUrls(data.videos);
          setActiveIndex(0);
        }
      })
      .catch(() => {
        // Ignore if no video found
      });
    return () => {
      active = false;
    };
  }, []);

  // Build playlist: Video(s) in first view -> followed by the 6 Banner Images
  const scenes: HeroScene[] = useMemo(() => {
    const videoScenes: HeroScene[] = videoUrls.map((src, idx) => ({
      id: `banner-video-${idx + 1}`,
      src,
      type: "video",
      title: `AURELIA FILM ${idx + 1}`,
      artist: "Aurelia Creative",
      category: "MOTION & PRODUCTION",
    }));
    return [...videoScenes, ...heroScenes];
  }, [videoUrls]);

  const nextScene = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % scenes.length);
  }, [scenes.length]);

  const currentScene = scenes[activeIndex] || scenes[0];
  const isVideoScene = currentScene?.type === "video";

  // Autoplay timer for image slides (videos advance naturally via onEnded)
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    if (!isVideoScene) {
      timerRef.current = setInterval(() => {
        nextScene();
      }, 6000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isVideoScene, nextScene, activeIndex]);

  // Preload next image in browser cache
  useEffect(() => {
    const nextIdx = (activeIndex + 1) % scenes.length;
    const upcoming = scenes[nextIdx];
    if (upcoming && upcoming.type !== "video") {
      const img = new window.Image();
      img.src = upcoming.src;
    }
  }, [activeIndex, scenes]);

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
            {currentScene.type === "video" ? (
              <video
                src={currentScene.src}
                autoPlay
                muted
                playsInline
                preload="auto"
                onEnded={nextScene}
                onError={nextScene}
                className="h-full w-full object-cover object-center select-none"
              />
            ) : (
              <Image
                src={currentScene.src}
                alt={currentScene.title}
                fill
                priority
                sizes="100vw"
                referrerPolicy="no-referrer"
                className="object-cover object-center select-none"
              />
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

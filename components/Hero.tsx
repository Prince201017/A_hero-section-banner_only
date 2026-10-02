"use client";

import React, { useState } from "react";
import { HeroSlideshow } from "./HeroSlideshow";
import { GrainOverlay } from "./GrainOverlay";
import { ArtistsView } from "./ArtistsView";
import { AgencyView } from "./AgencyView";

export function Hero() {
  const [currentView, setCurrentView] = useState<"banner" | "artists" | "agency">("banner");

  return (
    <div className="relative h-screen w-screen h-[100dvh] w-[100dvw] overflow-hidden bg-[#0d0d0d] select-none">
      {/* 1. Full-Bleed Image Transition Slideshow (Permanent Specified Crossfade / Dissolve) */}
      <div className="absolute inset-0 h-full w-full pointer-events-none">
        <HeroSlideshow />
        <GrainOverlay />
      </div>

      {/* 2. Top Minimal Navigation (Fine-Art Atelier Serif) */}
      <header className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 pt-3 sm:pt-4">
        <div className="w-full grid grid-cols-[1fr_auto_1fr] items-baseline">
          {/* LEFT: ARTISTS */}
          <div className="flex justify-start">
            <button
              onClick={() => setCurrentView("artists")}
              className="text-[12px] sm:text-[13px] md:text-[14px] font-serif font-medium tracking-[0.14em] uppercase text-white hover:opacity-70 transition-opacity py-1 cursor-pointer"
              style={{
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                textShadow: "0 1px 4px rgba(0,0,0,0.6)",
              }}
            >
              ARTISTS
            </button>
          </div>

          {/* CENTER: AURELIA CREATIVE */}
          <div className="flex flex-col items-center text-center">
            <button
              onClick={() => setCurrentView("banner")}
              className="text-[12px] sm:text-[13px] md:text-[14px] font-serif font-semibold tracking-[0.15em] uppercase text-white hover:opacity-85 transition-opacity py-1 cursor-pointer"
              style={{
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                textShadow: "0 1px 4px rgba(0,0,0,0.6)",
              }}
            >
              AURELIA CREATIVE
            </button>
          </div>

          {/* RIGHT: AGENCY */}
          <div className="flex justify-end">
            <button
              onClick={() => setCurrentView("agency")}
              className="text-[12px] sm:text-[13px] md:text-[14px] font-serif font-medium tracking-[0.14em] uppercase text-white hover:opacity-70 transition-opacity py-1 cursor-pointer"
              style={{
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                textShadow: "0 1px 4px rgba(0,0,0,0.6)",
              }}
            >
              AGENCY
            </button>
          </div>
        </div>
      </header>

      {/* 3. Centered Editorial Description */}
      <div className="absolute top-10 sm:top-12 md:top-14 left-0 right-0 z-20 flex justify-center px-4 sm:px-6 pointer-events-none">
        <p
          className="max-w-[320px] sm:max-w-[460px] md:max-w-[620px] text-center text-white text-[13.5px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-serif font-light leading-[1.12] sm:leading-[1.16] tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
            textShadow:
              "0 1px 3px rgba(0, 0, 0, 0.6), 0 2px 8px rgba(0, 0, 0, 0.4)",
          }}
        >
          Aurelia Creative is an artist management and production company
          representing Australia’s leading photographers, stylists, hair stylists,
          and makeup artists.
        </p>
      </div>

      {/* 4. Giant Brand Typography at Bottom Edge (Permanent Fine-Art Atelier) */}
      <div className="absolute bottom-[1px] left-0 right-0 z-20 pointer-events-none px-2 sm:px-4 flex justify-center text-center">
        <h1
          className="text-white uppercase w-full text-center select-none"
          style={{
            fontSize: "clamp(52px, 16.5vw, 290px)",
            fontWeight: 600,
            letterSpacing: "0.04em",
            lineHeight: 0.82,
            fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
            textShadow:
              "0 2px 10px rgba(0, 0, 0, 0.45), 0 8px 32px rgba(0, 0, 0, 0.35)",
          }}
        >
          AURELIA
        </h1>
      </div>

      {/* 5. ARTISTS View: Clean White Full-Screen Page (No modal, no overlay) */}
      {currentView === "artists" && (
        <ArtistsView onNavigate={(view) => setCurrentView(view)} />
      )}

      {/* 6. AGENCY View: Clean White Full-Screen Page (No modal, no overlay) */}
      {currentView === "agency" && (
        <AgencyView onNavigate={(view) => setCurrentView(view)} />
      )}
    </div>
  );
}

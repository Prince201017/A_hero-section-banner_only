"use client";

import React, { useState } from "react";
import { sydneyRoster, perthRoster, RosterCategory } from "@/lib/artistsRoster";

interface ArtistsViewProps {
  onNavigate: (view: "banner" | "artists" | "agency") => void;
}

export function ArtistsView({ onNavigate }: ArtistsViewProps) {
  const [selectedLocation, setSelectedLocation] = useState<"Sydney" | "Perth">("Sydney");

  const roster: RosterCategory[] = selectedLocation === "Sydney" ? sydneyRoster : perthRoster;

  // Split into left and right columns matching screenshot
  const leftCategories = roster.filter((c) =>
    ["PHOTOGRAPHERS", "DIRECTORS", "STYLISTS"].includes(c.category)
  );
  const rightCategories = roster.filter((c) =>
    ["MAKEUP ARTISTS", "HAIR STYLISTS"].includes(c.category)
  );

  return (
    <div className="absolute inset-0 z-30 h-full w-full overflow-y-auto bg-white text-black select-none scroll-smooth">
      {/* Sticky White Top Navigation */}
      <header className="sticky top-0 z-40 w-full bg-white px-4 sm:px-6 pt-3 pb-3 sm:pt-4 sm:pb-4 border-b border-black/[0.04]">
        <div className="w-full grid grid-cols-[1fr_auto_1fr] items-baseline">
          {/* LEFT: ARTISTS (Active with solid underline) */}
          <div className="flex justify-start">
            <button
              onClick={() => onNavigate("banner")}
              className="text-[12px] sm:text-[13px] md:text-[14px] font-serif font-medium tracking-[0.14em] uppercase text-black underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity"
              style={{
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
              }}
            >
              ARTISTS
            </button>
          </div>

          {/* CENTER: AURELIA CREATIVE (Clickable to go home) */}
          <div className="flex flex-col items-center text-center">
            <button
              onClick={() => onNavigate("banner")}
              className="text-[12px] sm:text-[13px] md:text-[14px] font-serif font-semibold tracking-[0.15em] uppercase text-black hover:opacity-60 transition-opacity"
              style={{
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
              }}
            >
              AURELIA CREATIVE
            </button>
          </div>

          {/* RIGHT: AGENCY */}
          <div className="flex justify-end">
            <button
              onClick={() => onNavigate("agency")}
              className="text-[12px] sm:text-[13px] md:text-[14px] font-serif font-medium tracking-[0.14em] uppercase text-black hover:opacity-60 transition-opacity"
              style={{
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
              }}
            >
              AGENCY
            </button>
          </div>
        </div>
      </header>

      {/* Main Roster Body */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-16">
        {/* LOCATION SELECTOR (as seen in screenshot) */}
        <div className="mb-8">
          <span className="text-[10px] font-sans tracking-[0.14em] text-black/60 uppercase block mb-1">
            LOCATION
          </span>
          <div className="space-y-0.5">
            <button
              onClick={() => setSelectedLocation("Sydney")}
              className={`block text-[14px] sm:text-[15px] font-sans transition-colors ${
                selectedLocation === "Sydney"
                  ? "text-black font-semibold"
                  : "text-black/35 hover:text-black"
              }`}
            >
              Sydney
            </button>
            <button
              onClick={() => setSelectedLocation("Perth")}
              className={`block text-[14px] sm:text-[15px] font-sans transition-colors ${
                selectedLocation === "Perth"
                  ? "text-black font-semibold"
                  : "text-black/35 hover:text-black"
              }`}
            >
              Perth
            </button>
          </div>
        </div>

        {/* 2-Column Talent Directory Grid (matching screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 sm:gap-x-20 gap-y-8 max-w-3xl">
          {/* Left Column (PHOTOGRAPHERS, DIRECTORS, STYLISTS) */}
          <div className="space-y-7 sm:space-y-9">
            {leftCategories.map((group) => (
              <div key={group.category}>
                <span className="text-[10px] font-sans tracking-[0.14em] text-black/60 uppercase block mb-1.5">
                  {group.category}
                </span>
                <ul className="space-y-0.5 sm:space-y-1">
                  {group.artists.map((artist) => (
                    <li
                      key={artist}
                      className="text-[14px] sm:text-[15px] font-sans font-medium text-black hover:opacity-60 transition-opacity cursor-pointer"
                    >
                      {artist}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column (MAKEUP ARTISTS, HAIR STYLISTS) */}
          <div className="space-y-7 sm:space-y-9">
            {rightCategories.map((group) => (
              <div key={group.category}>
                <span className="text-[10px] font-sans tracking-[0.14em] text-black/60 uppercase block mb-1.5">
                  {group.category}
                </span>
                <ul className="space-y-0.5 sm:space-y-1">
                  {group.artists.map((artist) => (
                    <li
                      key={artist}
                      className="text-[14px] sm:text-[15px] font-sans font-medium text-black hover:opacity-60 transition-opacity cursor-pointer"
                    >
                      {artist}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

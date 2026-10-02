"use client";

import React from "react";

export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden select-none"
    >
      {/* SVG noise texture */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.038] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="aurelia-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#aurelia-grain)" />
      </svg>

      {/* Subtle analog printed scanline texture */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-soft-light"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 3px)",
        }}
      />
    </div>
  );
}

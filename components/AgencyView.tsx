"use client";

import React, { useState } from "react";

interface AgencyViewProps {
  onNavigate: (view: "banner" | "artists" | "agency") => void;
}

export function AgencyView({ onNavigate }: AgencyViewProps) {
  const [sydneyOpen, setSydneyOpen] = useState(true);
  const [perthOpen, setPerthOpen] = useState(false);

  return (
    <div className="absolute inset-0 z-30 h-full w-full overflow-y-auto bg-white text-black select-none scroll-smooth">
      {/* Sticky White Top Navigation */}
      <header className="sticky top-0 z-40 w-full bg-white px-4 sm:px-6 pt-3 pb-3 sm:pt-4 sm:pb-4 border-b border-black/[0.04]">
        <div className="w-full grid grid-cols-[1fr_auto_1fr] items-baseline">
          {/* LEFT: ARTISTS */}
          <div className="flex justify-start">
            <button
              onClick={() => onNavigate("artists")}
              className="text-[12px] sm:text-[13px] md:text-[14px] font-serif font-medium tracking-[0.14em] uppercase text-black hover:opacity-60 transition-opacity"
              style={{
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
              }}
            >
              ARTISTS
            </button>
          </div>

          {/* CENTER: AURELIA CREATIVE / VIVIEN'S CREATIVE (Clickable to go home) */}
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

          {/* RIGHT: AGENCY (Active with solid underline) */}
          <div className="flex justify-end">
            <button
              onClick={() => onNavigate("banner")}
              className="text-[12px] sm:text-[13px] md:text-[14px] font-serif font-medium tracking-[0.14em] uppercase text-black underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity"
              style={{
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
              }}
            >
              AGENCY
            </button>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-8 sm:pt-10">
        {/* Editorial Description */}
        <p
          className="text-black text-[14px] sm:text-[17px] md:text-[19px] font-serif font-light leading-[1.25] sm:leading-[1.22] tracking-[-0.01em] max-w-4xl"
          style={{
            fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
          }}
        >
          Aurelia Creative is an artist management and production company
          representing Australia’s leading photographers, stylists, hair stylists,
          and makeup artists.
        </p>

        {/* Agency Contacts */}
        <div className="mt-10 sm:mt-14 space-y-8 max-w-3xl text-[12px] sm:text-[13px] font-sans">
          {/* SYDNEY */}
          <div>
            <button
              onClick={() => setSydneyOpen(!sydneyOpen)}
              className="text-[11px] font-mono tracking-widest uppercase font-semibold text-black hover:opacity-70 transition-opacity block mb-3"
            >
              SYDNEY {sydneyOpen ? "–" : "+"}
            </button>

            {sydneyOpen && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-black/90 font-light leading-relaxed">
                <div>
                  <p>Level 1, 43 Bay Street</p>
                  <p>Double Bay NSW 2028</p>
                </div>
                <div>
                  <p>+61 2 9363 3966</p>
                  <a
                    href="mailto:info@aureliacreative.com.au"
                    className="hover:underline text-black"
                  >
                    info@aureliacreative.com.au
                  </a>
                </div>

                <div className="sm:col-span-2 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
                  <div>
                    <p>Amanda Odgers</p>
                    <p>Liz Roberts</p>
                    <p>Samantha Nunney</p>
                  </div>
                  <div>
                    <p>
                      <a
                        href="mailto:amanda@aureliacreative.com.au"
                        className="hover:underline"
                      >
                        amanda@aureliacreative.com.au
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:liz@aureliacreative.com.au"
                        className="hover:underline"
                      >
                        liz@aureliacreative.com.au
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:samantha@aureliacreative.com.au"
                        className="hover:underline"
                      >
                        samantha@aureliacreative.com.au
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PERTH */}
          <div className="pt-2">
            <button
              onClick={() => setPerthOpen(!perthOpen)}
              className="text-[11px] font-mono tracking-widest uppercase font-semibold text-black hover:opacity-70 transition-opacity block mb-3"
            >
              PERTH {perthOpen ? "–" : "+"}
            </button>

            {perthOpen && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-black/90 font-light leading-relaxed">
                <div>
                  <p>Suite 3, 14 King Street</p>
                  <p>Perth WA 6000</p>
                </div>
                <div>
                  <p>+61 8 9226 1400</p>
                  <a
                    href="mailto:perth@aureliacreative.com.au"
                    className="hover:underline text-black"
                  >
                    perth@aureliacreative.com.au
                  </a>
                </div>
                <div className="sm:col-span-2 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
                  <div>
                    <p>Claire Miller</p>
                    <p>Jordan Hayes</p>
                  </div>
                  <div>
                    <p>
                      <a
                        href="mailto:claire@aureliacreative.com.au"
                        className="hover:underline"
                      >
                        claire@aureliacreative.com.au
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:jordan@aureliacreative.com.au"
                        className="hover:underline"
                      >
                        jordan@aureliacreative.com.au
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

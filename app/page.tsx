"use client";

import React from "react";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative h-screen w-screen h-[100dvh] w-[100dvw] overflow-hidden bg-[#0d0d0d] select-none">
      <Hero />
    </main>
  );
}

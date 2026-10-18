"use client";

import React from "react";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="fixed inset-0 h-full w-full overflow-hidden bg-[#0d0d0d] select-none">
      <Hero />
    </main>
  );
}

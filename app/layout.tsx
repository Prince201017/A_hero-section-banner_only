import type { Metadata } from "next";
import { Cormorant_Garamond, Inter_Tight } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AURELIA CREATIVE — Artist Management & Production",
  description:
    "Aurelia Creative is an artist management and production company representing Australia’s leading photographers, stylists, hair stylists, and makeup artists.",
  openGraph: {
    title: "AURELIA CREATIVE — Artist Management & Production",
    description:
      "Aurelia Creative is an artist management and production company representing Australia’s leading photographers, stylists, hair stylists, and makeup artists.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AURELIA CREATIVE — Artist Management & Production",
    description:
      "Aurelia Creative is an artist management and production company representing Australia’s leading photographers, stylists, hair stylists, and makeup artists.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${interTight.variable} dark`}
    >
      <body
        className="bg-[#0e0e0e] text-[#F5F5F2] antialiased selection:bg-white selection:text-black overflow-x-hidden min-h-screen"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

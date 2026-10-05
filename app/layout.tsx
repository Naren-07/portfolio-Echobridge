import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/layout/CustomCursor";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Echo Bridge | Cinematic Portfolio & Creative Agency",
  description:
    "A visionary creative agency and production house crafting scroll-stopping brand films, commercials, music videos, and high-impact visual stories.",
  keywords: [
    "Echo Bridge",
    "Production House",
    "Creative Agency",
    "Cinematic Portfolio",
    "Commercial Films",
    "Brand Films",
    "Music Videos",
    "Color Grading",
    "VFX",
  ],
  authors: [{ name: "Echo Bridge Studios" }],
  openGraph: {
    title: "Echo Bridge | Cinematic Portfolio & Creative Agency",
    description:
      "Crafting scroll-stopping brand films, commercials, and high-impact visual stories.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Echo Bridge | Cinematic Portfolio",
    description: "Crafting scroll-stopping brand films and high-impact visual stories.",
  },
  icons: {
    icon: "/favicon.ico",
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
      className={`${syne.variable} ${inter.variable} dark antialiased bg-[#050505] text-[#f5f5f5]`}
    >
      <body className="min-h-screen flex flex-col bg-[#050505] text-[#f5f5f5] font-sans selection:bg-[#ff2d2d] selection:text-[#050505]">
        <div className="film-grain" aria-hidden="true" />
        <CustomCursor />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

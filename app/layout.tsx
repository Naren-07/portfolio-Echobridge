import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Great_Vibes, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import CanvasParticles from "@/components/CanvasParticles";
import Loader from "@/components/Loader";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: ["400"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://echobridge.studio"),
  title: "EchoBridge Studio | Cinematic AI Content, Localization & Voice Production",
  description:
    "EchoBridge Studio bridges stories across worlds. Premium voice-over, dubbing, subtitling, audio post, web services, and AI-powered micro drama production for OTT platforms, YouTube creators, and global brands.",
  icons: {
    icon: "/assets/echobridge-emblem.jpg",
    apple: "/assets/echobridge-emblem.jpg",
  },
  openGraph: {
    title: "EchoBridge Studio | Cinematic AI Content, Localization & Voice Production",
    description:
      "Transforming global stories into culturally resonant experiences across 20+ languages.",
    url: "https://echobridge.studio",
    siteName: "EchoBridge Studio",
    images: [
      {
        url: "/assets/echobridge-banner.png",
        width: 1200,
        height: 630,
        alt: "EchoBridge Studio Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${greatVibes.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#0C0A07] text-[#FBF6EE] antialiased selection:bg-[#D4AF6A] selection:text-[#0C0A07]">
        <div className="golden-ambient-aura" aria-hidden="true" />
        <div className="film-grain" aria-hidden="true" />
        <CanvasParticles />
        <Loader />
        <Navbar />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}

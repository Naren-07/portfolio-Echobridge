import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-5 py-24">
      <div className="relative w-20 h-20 mb-8 rounded-full overflow-hidden border border-[#D4AF6A] shadow-glow">
        <Image
          src="/assets/echobridge-emblem.jpg"
          alt="EchoBridge Studio"
          fill
          className="object-cover"
        />
      </div>

      <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#D9967F] block mb-2">
        Error 404 · Sequence Not Found
      </span>
      <h1 className="font-display text-5xl sm:text-7xl text-[#FBF3EE] font-normal mb-6">
        Scene Missing From Reel.
      </h1>
      <p className="text-[#CDBBB3] max-w-md mx-auto text-sm leading-relaxed mb-10 font-sans">
        The story or page you are searching for has moved, expired, or exists under another dialect route.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold tracking-wider text-[#0B0809] bg-gradient-to-r from-[#F1CDBE] via-[#D9967F] to-[#B76E79] shadow-glow hover:scale-105 transition-all"
      >
        <Home className="w-4 h-4" />
        <span>Return to Studio Home</span>
      </Link>
    </div>
  );
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          0: "var(--bg-0)",
          1: "var(--bg-1)",
          2: "var(--bg-2)",
        },
        rose: {
          100: "var(--rose-100)",
          300: "var(--rose-300)",
          500: "var(--rose-500)",
          600: "var(--rose-600)",
        },
        gold: {
          400: "var(--gold-400)",
          600: "var(--gold-600)",
        },
        text: {
          hi: "var(--text-hi)",
          mid: "var(--text-mid)",
          low: "var(--text-low)",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        script: ["var(--font-great-vibes)", "cursive"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(217, 150, 127, 0.25)",
        goldglow: "0 0 35px rgba(212, 175, 106, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;

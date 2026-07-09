import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        retro: {
          bg: "#f4f0eb",
          border: "#333333",
          green: "#4ade80",
          blue: "#60a5fa",
          yellow: "#fef08a",
          red: "#f87171",
          light: "#faf9f6",
          dark: "#1a1a1a"
        }
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px #333333',
        'pixel-sm': '2px 2px 0px 0px #333333',
        'pixel-hover': '6px 6px 0px 0px #333333',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        retro: ['var(--font-vt323)'],
        heading: ['var(--font-press-start)'],
      }
    },
  },
  plugins: [],
};
export default config;

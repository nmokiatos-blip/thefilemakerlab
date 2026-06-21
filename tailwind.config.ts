import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#050608",
          900: "#090b10",
          850: "#0d1118",
          800: "#111722",
          700: "#1a2433"
        },
        lab: {
          cyan: "#38e8ff",
          blue: "#4da3ff",
          violet: "#9a6cff",
          green: "#59f0a5",
          amber: "#f2be5c"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 232, 255, 0.16)",
        violet: "0 0 36px rgba(154, 108, 255, 0.14)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SFMono-Regular", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;

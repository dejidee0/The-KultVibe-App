import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "kv-base": "#08080D",
        "kv-surface": "#0D0D14",
        "kv-card": "#111118",
        "kv-border": "rgba(255,255,255,0.07)",
        "kv-emerald": "#10B981",
        "kv-emerald-dim": "rgba(16,185,129,0.2)",
        "kv-emerald-border": "rgba(16,185,129,0.4)",
        "kv-pink": "#DB2777",
        "kv-gold": "#F0B429",
        "kv-red": "#FF4D6D",
        "kv-text": "#FFFFFF",
        "kv-muted": "rgba(255,255,255,0.4)",
        "kv-dim": "rgba(255,255,255,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ['"Space Grotesk"', "sans-serif"],
      },
      colors: {
        bg: "#0B0E14",
        surface: "#141824",
        raised: "#1A2030",
        border: "#232B3C",
        muted: "#9AA3B2",
        ink: "#EEF1F8",
        accent: "#7C8CFF",
        "accent-dim": "#A9B6FF",
        "accent-cyan": "#22D3EE",
        "accent-violet": "#A78BFA",
      },
      backgroundImage: {
        "grad-primary":
          "linear-gradient(120deg, #A9B6FF 0%, #7C8CFF 45%, #22D3EE 100%)",
        "grad-soft":
          "linear-gradient(135deg, rgba(124,140,255,0.16) 0%, rgba(34,211,238,0.08) 100%)",
        "grad-pill":
          "linear-gradient(120deg, rgba(169,182,255,0.14), rgba(34,211,238,0.10))",
      },
      boxShadow: {
        island:
          "0 1px 2px rgba(0,0,0,0.40), 0 8px 24px rgba(0,0,0,0.22)",
        "island-lg":
          "0 2px 4px rgba(0,0,0,0.50), 0 20px 48px rgba(0,0,0,0.38)",
        glow: "0 0 0 1px rgba(124,140,255,0.35), 0 8px 28px rgba(124,140,255,0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.5, 0, 0, 1) both",
      },
    },
  },
  plugins: [],
};

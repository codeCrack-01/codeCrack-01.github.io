/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Pixelify Sans"', "monospace"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        bg: "#F8FAFC",
        surface: "#FFFFFF",
        raised: "#F1F5F9",
        border: "#E2E8F0",
        muted: "#64748B",
        ink: "#0F172A",
        accent: "#0D9488",
        "accent-dim": "#0F766E",
        sidebar: "#0F172A",
      },
      boxShadow: {
        card: "0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)",
        "card-hover": "0 8px 24px rgba(15,23,42,0.10)",
      },
    },
  },
  plugins: [],
};
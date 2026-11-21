/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#0a0d14",
        surface: "#10141e",
        raised: "#121722",
        border: "#1f2635",
        muted: "#6b7280",
        ink: "#eef0f5",
        accent: "#55ff5c",
        "accent-dim": "#23c14f",
        sidebar: "#0b0f1a",
        card: "#121722",
        "card-border": "#1f2635",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)",
        "card-hover": "0 8px 24px rgba(0,0,0,0.5)",
        glow: "0 0 20px rgba(85,255,92,0.15)",
      },
    },
  },
  plugins: [],
};
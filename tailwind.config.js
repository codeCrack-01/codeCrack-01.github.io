/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        bg: "#F4EFE6",
        surface: "#FBF7F0",
        raised: "#EDE6DA",
        border: "#D9CFBF",
        muted: "#6B5F52",
        ink: "#1F1A14",
        accent: "#B85C38",
        "accent-dim": "#8F4428",
        "accent-soft": "#E8D4C4",
        "accent-green": "#5A7A5A",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(31,26,20,0.06), 0 8px 24px rgba(31,26,20,0.06)",
        card: "0 2px 8px rgba(31,26,20,0.05)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease both",
      },
    },
  },
  plugins: [],
};
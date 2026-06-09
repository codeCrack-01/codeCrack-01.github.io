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
        bg: "#22223b",
        surface: "#4a4e69",
        border: "#9a8c98",
        muted: "#c9ada7",
        cream: "#f2e9e4",
        orange: "#9a8c98",
      },
    },
  },
  plugins: [],
};

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
        bg: "#252422",
        surface: "#403d39",
        border: "#403d39",
        muted: "#ccc5b9",
        cream: "#fffcf2",
        orange: "#eb5e28",
      },
    },
  },
  plugins: [],
};

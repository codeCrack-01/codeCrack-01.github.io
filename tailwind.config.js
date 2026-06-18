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
        bg: "#F5F5F7",
        surface: "#FFFFFF",
        border: "#E4E4E7",
        muted: "#71717A",
        ink: "#18181B",
        accent: "#3D3D6B",
      },
      boxShadow: {
        island: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "island-lg":
          "0 4px 16px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};

import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import Sitemap from "vite-plugin-sitemap";
import { staticPrerender } from "./plugins/static-prerender.js";

export default defineConfig({
  plugins: [
    solidPlugin(),
    Sitemap({
      hostname: "https://codecrack-01.github.io",
      dynamicRoutes: ["/"],
    }),
    staticPrerender(),
  ],
  build: { target: "esnext" },
  base: "./",
});

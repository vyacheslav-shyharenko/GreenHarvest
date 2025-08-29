// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  root: "src",
  base: "./",
  publicDir: "../public",

  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/scss/abstracts" as *;`,
      },
    },
  },

  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },

  plugins: [react()],
});

import path from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,jpg,avif,webp,ttf,otf,woff2}",
        ],
      },
      manifest: {
        name: "Тхеквондо Київ [HWA-RANG]",
        short_name: "Тхеквондо",
        description: "My Awesome App description",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/icons/favicon-package/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/favicon-package/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      theme: path.resolve(__dirname, "./src/theme"),
      data: path.resolve(__dirname, "./src/data"),
      shared: path.resolve(__dirname, "./src/shared"),
      utils: path.resolve(__dirname, "./src/shared/utils"),
      assets: path.resolve(__dirname, "./src/assets"),
      components: path.resolve(__dirname, "./src/components"),
    },
  },
});

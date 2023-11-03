import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      theme: path.resolve(__dirname, "./src/theme"),
      data: path.resolve(__dirname, "./src/data"),
      shared: path.resolve(__dirname, "./src/shared"),
      utils: path.resolve(__dirname, "./src/shared/utils"),
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
const BASE_URL = "http://localhost:5000/api";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 2703,
    proxy: {
      "/api": {
        target: BASE_URL, // Your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

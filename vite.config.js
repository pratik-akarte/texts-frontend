import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
const BASE_URL = "https://texts-backend-476w.onrender.com/api";

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
    esbuild: {
      drop: ['console', 'debugger'],
    },
  },
});

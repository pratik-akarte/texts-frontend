import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; 
import removeConsole from "vite-plugin-remove-console";
const BASE_URL = "https://texts-backend-476w.onrender.com/api";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), removeConsole()],
  server: {
    port: 2703,
    minify: "esbuild",
    proxy: {
      "/api": {
        target: BASE_URL, // Your backend server
        changeOrigin: true,
        secure: false,
      },
    },
    esbuild: {
      drop: ["console"],
    },
  },
});

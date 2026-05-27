import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              /node_modules\/(react|react-dom|react-router|react-router-dom|scheduler)\//.test(
                id,
              )
            ) {
              return "vendor-react";
            }
          }
        },
      },
    },
  },
});

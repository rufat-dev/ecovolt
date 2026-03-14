import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@/components/ui", replacement: path.resolve(__dirname, "./ui") },
      { find: "@/components", replacement: path.resolve(__dirname, "./ui") },
      { find: "@/hooks", replacement: path.resolve(__dirname, "./hooks") },
      { find: "@/lib", replacement: path.resolve(__dirname, "./lib") },
      { find: "@/assets", replacement: path.resolve(__dirname, "./assets") },
      { find: "@", replacement: path.resolve(__dirname, ".") },
    ],
  },
});

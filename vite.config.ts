import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// Removed missing Vite plugins
import path from "path";
import { fileURLToPath } from "url";

// ESM-compatible __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    // Removed missing Vite plugins
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "public/assets"),
    },
  },
  root: path.resolve(__dirname),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    target: ["es2022", "chrome119", "safari17"],
    minify: "esbuild",
    sourcemap: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 150,
    assetsInlineLimit: 4096,
    rollupOptions: {
      external: ["@vercel/analytics"],
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          motion: ["@motionone/react"],
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-toast",
          ],
          utils: ["lucide-react", "clsx", "tailwind-merge"],
          query: ["@tanstack/react-query"],
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
  server: {
    port: 5173,
    host: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    hmr: {
      overlay: true,
    },
    headers: {
      "Link": "</lottie/*.json>; rel=preload; as=fetch, </hero.avifs>; rel=preload; as=image"
    },
    // RTL support for Arabic layout
    middlewareMode: false,
    // Custom: inject dir="rtl" for Arabic routes
    // configureServer removed for Vite 7 compatibility
  },
  // Vite 7 optimizations
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@motionone/react",
      "lucide-react",
      "@radix-ui/react-dialog",
    ],
    exclude: ["@vite/client", "@vite/env"],
    force: true,
  },
  esbuild: {
    target: "esnext",
    format: "esm",
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      // Use SWC for faster builds in Vite 7
      jsxRuntime: 'automatic',
      babel: false, // Use SWC instead of Babel for better performance
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(import.meta.dirname, 'public/assets'),
    },
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
    // Vite 7 optimizations for production
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      external: ['@vercel/analytics'],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-toast'],
          utils: ['lucide-react', 'clsx', 'tailwind-merge'],
          query: ['@tanstack/react-query']
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Optimize for production
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096
  },
  server: {
    port: 5173,
    host: true,
    fs: {
      strict: true,
      deny: ['**/.*'],
    },
    // Vite 7 HMR optimizations
    hmr: {
      overlay: true,
    },
  },
  // Vite 7 optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react', '@radix-ui/react-dialog'],
    exclude: ['@vite/client', '@vite/env'],
    force: true,
  },
  esbuild: {
    target: 'esnext',
    format: 'esm',
  },
});

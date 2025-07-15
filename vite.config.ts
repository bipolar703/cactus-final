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
    // Vite 7 optimizations
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
      },
    },
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

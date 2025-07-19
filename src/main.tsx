import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeVercelOptimizations } from './utils/vercel-optimizations';
import { initializeMobileOptimizations } from './utils/mobile-optimizations';

// Initialize optimizations immediately
initializeVercelOptimizations();
initializeMobileOptimizations();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

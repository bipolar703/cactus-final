import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ReducedMotionProvider } from "./providers/ReducedMotionProvider";

// Lazy load SpeedInsights to prevent blocking
const SpeedInsightsLazy = () => {
  try {
    // Use dynamic import for better error handling
    import("@vercel/speed-insights/react").then(({ SpeedInsights }) => {
      // Create and mount SpeedInsights component
      const container = document.createElement('div');
      container.id = 'speed-insights';
      document.body.appendChild(container);
      const root = createRoot(container);
      root.render(<SpeedInsights />);
    }).catch(() => {
      // Silently fail if SpeedInsights can't load
      console.warn('SpeedInsights failed to load');
    });
  } catch {
    // Fallback for any other errors
  }
  return null;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReducedMotionProvider>
      <App />
      <SpeedInsightsLazy />
    </ReducedMotionProvider>
  </StrictMode>,
);

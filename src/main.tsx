import { StrictMode, Suspense, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ReducedMotionProvider } from "./providers/ReducedMotionProvider";

// SpeedInsights component with proper error handling
const SpeedInsightsComponent = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  try {
    const { SpeedInsights } = require("@vercel/speed-insights/react");
    return <SpeedInsights />;
  } catch (error) {
    // Silently fail if SpeedInsights can't load
    console.warn('SpeedInsights failed to load:', error);
    return null;
  }
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReducedMotionProvider>
      <App />
      <SpeedInsightsComponent />
    </ReducedMotionProvider>
  </StrictMode>,
);

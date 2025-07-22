import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SpeedInsights } from "@vercel/speed-insights/react";
import App from "./App";
import "./index.css";
import { ReducedMotionProvider } from "./providers/ReducedMotionProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReducedMotionProvider>
      <App />
      <SpeedInsights />
    </ReducedMotionProvider>
  </StrictMode>,
);

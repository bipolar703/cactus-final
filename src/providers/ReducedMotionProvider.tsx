import { createContext, useContext, useEffect, useState } from "react";

interface ReducedMotionContextType {
  prefersReducedMotion: boolean;
  shouldAnimate: boolean;
}

const ReducedMotionContext = createContext<ReducedMotionContextType>({
  prefersReducedMotion: false,
  shouldAnimate: true,
});

export const useReducedMotion = () => useContext(ReducedMotionContext);

interface ReducedMotionProviderProps {
  children: React.ReactNode;
}

export function ReducedMotionProvider({ children }: ReducedMotionProviderProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const shouldAnimate = !prefersReducedMotion;

  return (
    <ReducedMotionContext.Provider value={{ prefersReducedMotion, shouldAnimate }}>
      {children}
    </ReducedMotionContext.Provider>
  );
}
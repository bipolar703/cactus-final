import { createContext, useContext } from "react";
import { useReducedMotion as useMotionReducedMotion } from "@motionone/react";

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
  const prefersReducedMotion = useMotionReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  return (
    <ReducedMotionContext.Provider value={{ prefersReducedMotion, shouldAnimate }}>
      {children}
    </ReducedMotionContext.Provider>
  );
}
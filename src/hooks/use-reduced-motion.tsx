import { useReducedMotion as useMotionReducedMotion } from "motion/react";

export const useReducedMotion = () => {
  const prefersReducedMotion = useMotionReducedMotion();
  
  return {
    prefersReducedMotion,
    shouldAnimate: !prefersReducedMotion,
  };
};
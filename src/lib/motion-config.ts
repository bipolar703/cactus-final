// Motion configuration for optimized animations
export const motionConfig = {
  // Reduced motion variants
  reducedMotion: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    // 'exit' is not supported in @motionone/react; removed for compatibility
    transition: { duration: 0.1 }
  },
  
  // Standard motion variants
  standardMotion: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    // 'exit' is not supported in @motionone/react; removed for compatibility
    transition: { duration: 0.3, easing: [0.16, 1, 0.3, 1] } // cubic-bezier for smoothness
  },
  
  // Stagger animations
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

// Optimized spring configuration
export const springConfig = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1
};

import { motion } from "@motionone/react";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  isVisible?: boolean;
  onComplete?: () => void;
}

export function LoadingScreen({
  isVisible = true,
  onComplete,
}: LoadingScreenProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    // Preload critical resources
    const preloadResources = [
      "/assets/Icon.png",
      "/assets/Logo.png",
      "/assets/animated/services/laptop.gif",
      "/assets/animated/services/branding.gif",
      "/assets/animated/services/marketing.gif",
      "/assets/animated/services/content.gif",
      "/assets/animated/services/photography.gif",
    ];

    const loadPromises = preloadResources.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    });

    // Minimum loading time of 2 seconds for smooth experience and proper resource loading
    const minLoadTime = new Promise((resolve) => setTimeout(resolve, 2000));

    Promise.all([...loadPromises, minLoadTime])
      .then(() => {
        setIsLoaded(true);
        setTimeout(() => onComplete?.(), 300);
      })
      .catch(() => {
        // Even if some resources fail, continue after minimum time
        setTimeout(() => {
          setIsLoaded(true);
          onComplete?.();
        }, 2000);
      });
  }, [isVisible, onComplete]);

  return (
    {/* AnimatePresence removed for @motionone/react migration */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
        >
          {/* Full Opacity Background - Completely Opaque */}
          <div className="absolute inset-0 bg-slate-900" />

          {/* Subtle ambient glow */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3f7c6a]/6 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Static PNG Icon with Glowing Edges */}
              <div className="relative mb-8">
                {/* Subtle animated glow layers around static icon */}
                <motion.div
                  className="absolute inset-0 w-24 h-24 mx-auto"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Subtle outer glow */}
                  <div className="absolute inset-0 bg-[#3f7c6a]/12 rounded-full blur-xl scale-[1.8]" />
                  {/* Gentle inner glow */}
                  <div className="absolute inset-0 bg-[#3f7c6a]/15 rounded-full blur-lg scale-[1.4]" />
                  {/* Core glow */}
                  <div className="absolute inset-0 bg-[#3f7c6a]/10 rounded-full blur-md scale-110" />
                </motion.div>

                <img
                  src="/assets/Icon.png"
                  alt="Cactus Media Group"
                  className="relative w-24 h-24 mx-auto object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 0 8px rgba(63, 124, 106, 0.4)) drop-shadow(0 0 16px rgba(63, 124, 106, 0.2))",
                  }}
                />
              </div>

              <motion.h1
                className="text-2xl font-bold text-white mb-2 font-barlow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Cactus Media Group
              </motion.h1>

              <motion.p
                className="text-gray-300 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {isLoaded ? "Ready!" : "Optimizing your experience..."}
              </motion.p>
            </motion.div>

            {/* Pulsing dots */}
            <motion.div
              className="flex justify-center space-x-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-[#3f7c6a] rounded-full"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 0.9, 0.4],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    {/* AnimatePresence removed for @motionone/react migration */}
  );
}

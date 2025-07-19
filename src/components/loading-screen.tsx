import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  isVisible?: boolean;
  onComplete?: () => void;
}

export function LoadingScreen({ isVisible = true, onComplete }: LoadingScreenProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    // Preload critical resources
    const preloadResources = [
      '/assets/Icon.png',
      '/assets/Logo.png',
      '/assets/animated/services/laptop.gif',
      '/assets/animated/services/branding.gif',
      '/assets/animated/services/marketing.gif',
      '/assets/animated/services/content.gif',
      '/assets/animated/services/photography.gif'
    ];

    const loadPromises = preloadResources.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    });

    // Minimum loading time of 1.5 seconds for smooth experience
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 1500));

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
    <AnimatePresence>
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-jaded-green-500/8 rounded-full blur-3xl" />
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
                {/* Animated glow layers around static icon */}
                <motion.div
                  className="absolute inset-0 w-24 h-24 mx-auto"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Outer glow */}
                  <div className="absolute inset-0 bg-jaded-green-400/25 rounded-full blur-2xl scale-[2]" />
                  {/* Middle glow */}
                  <div className="absolute inset-0 bg-jaded-green-500/35 rounded-full blur-xl scale-[1.6]" />
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-jaded-green-600/45 rounded-full blur-lg scale-[1.3]" />
                  {/* Core glow */}
                  <div className="absolute inset-0 bg-jaded-green-700/25 rounded-full blur-md scale-110" />
                </motion.div>
                
                <img 
                  src="/assets/Icon.png" 
                  alt="Cactus Media Group" 
                  className="relative w-24 h-24 mx-auto object-contain"
                  style={{
                    filter: 'drop-shadow(0 0 15px rgba(0, 150, 125, 0.8)) drop-shadow(0 0 30px rgba(0, 150, 125, 0.5)) drop-shadow(0 0 45px rgba(0, 150, 125, 0.3))'
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
                {isLoaded ? 'Ready!' : 'Optimizing your experience...'}
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
                  className="w-2 h-2 bg-jaded-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
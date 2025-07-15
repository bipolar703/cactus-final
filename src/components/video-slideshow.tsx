import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Image as ImageIcon } from 'lucide-react';

const cactusVideos = [
  {
    src: '/hero.mp4', // Using local hero.mp4 file from public directory
    title: 'Desert Resilience',
    fallbackImage: '/placeholder.svg'
  },
  {
    src: '/hero.mp4', // Using local hero.mp4 file from public directory
    title: 'Natural Strength',
    fallbackImage: '/placeholder.svg'
  },
  {
    src: '/hero.mp4', // Using local hero.mp4 file from public directory
    title: 'Growth Focus',
    fallbackImage: '/placeholder.svg'
  },
  {
    src: '/hero.mp4', // Using local hero.mp4 file from public directory
    title: 'Creative Services',
    fallbackImage: '/placeholder.svg'
  },
];

export function VideoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isAutoPlay && isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cactusVideos.length);
      }, 12000); // Slower transition - 12 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlay, isPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cactusVideos.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cactusVideos.length) % cactusVideos.length);
    setIsAutoPlay(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(console.warn);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed inset-0 z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          {videoError ? (
            <img 
              src={cactusVideos[currentIndex].fallbackImage} 
              alt={cactusVideos[currentIndex].title}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover gpu-accelerated"
              style={{ filter: 'brightness(0.8) contrast(1.1)' }}
              onLoadedData={() => {
                console.log(`Video ${currentIndex + 1} loaded`);
                setVideoError(false);
              }}
              onError={(e) => {
                console.warn(`Video ${currentIndex + 1} failed to load`);
                setVideoError(true);
              }}
            >
              <source src={cactusVideos[currentIndex].src} type="video/mp4" />
            </video>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

      {/* Film Grain Effect */}
      <div className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none film-grain"></div>

      {/* Minimal Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {cactusVideos.map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{
                scale: index === currentIndex ? 1.2 : 0.8,
                opacity: index === currentIndex ? 1 : 0.5,
              }}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? 'bg-[#3f7c6a] shadow-lg shadow-[#3f7c6a]/50'
                  : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Video Title with Creative Services Link */}
      <motion.div
        key={`title-${currentIndex}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute top-4 sm:top-8 left-4 sm:left-8 z-20"
      >
        {cactusVideos[currentIndex].title === 'Creative Services' ? (
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              // Scroll to services section
              const servicesSection = document.querySelector('section:nth-child(3)');
              servicesSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="glass-strong rounded-lg sm:rounded-xl px-3 sm:px-4 py-1 sm:py-2 backdrop-blur-xl hover:bg-[#3f7c6a]/20 transition-all duration-300 border border-[#3f7c6a]/30"
          >
            <p className="text-white text-xs sm:text-sm font-medium hover:text-[#5a9b83]">
              {cactusVideos[currentIndex].title}
            </p>
          </motion.button>
        ) : (
          <div className="glass-strong rounded-lg sm:rounded-xl px-3 sm:px-4 py-1 sm:py-2 backdrop-blur-xl">
            <p className="text-white/80 text-xs sm:text-sm font-medium">
              {cactusVideos[currentIndex].title}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

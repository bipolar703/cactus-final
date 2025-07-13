import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoBackgroundProps {
  src: string;
  className?: string;
}

export function VideoBackground({ src, className = '' }: VideoBackgroundProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(console.warn);
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  useEffect(() => {
    const timer = setTimeout(() => setShowControls(false), 3000);
    return () => clearTimeout(timer);
  }, [showControls]);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover gpu-accelerated"
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
        onLoadedData={() => console.log('Video loaded successfully')}
        onError={(e) => {
          console.error('Video playback error:', e);
        }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Enhanced Video Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute bottom-8 right-8 flex space-x-3 glass-strong rounded-2xl p-4 backdrop-blur-xl"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="text-white hover:text-[#3f7c6a] transition-colors p-3 rounded-xl hover:bg-white/20 gpu-accelerated"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isPlaying ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </motion.div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMute}
              className="text-white hover:text-[#3f7c6a] transition-colors p-3 rounded-xl hover:bg-white/20 gpu-accelerated"
            >
              <motion.div
                initial={false}
                animate={{ scale: isMuted ? 0.8 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/90 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#3f7c6a]/15 via-transparent to-[#3f7c6a]/10 pointer-events-none"></div>

      {/* Brand pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url('/assets/Webpage-Banner_1751779171234.png')`,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
}

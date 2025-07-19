import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { OptimizedImage } from './performance-wrapper';

interface CinematicHeroProps {
  onModalOpen: (modal: string) => void;
}

export function CinematicHero({ onModalOpen }: CinematicHeroProps) {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Prevent overscroll to top
  useEffect(() => {
    const preventOverscroll = (e: WheelEvent) => {
      if (window.scrollY <= 0 && e.deltaY < 0) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', preventOverscroll, { passive: false });
    return () => window.removeEventListener('wheel', preventOverscroll);
  }, []);

  // Enhanced parallax transforms with cinematic motion
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.95, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, 8]);
  
  // Ultra-smooth spring animations
  const smoothY = useSpring(y, { stiffness: 60, damping: 40, restDelta: 0.001 });
  const smoothOpacity = useSpring(opacity, { stiffness: 80, damping: 35 });
  const smoothScale = useSpring(scale, { stiffness: 50, damping: 45 });
  const smoothBlur = useSpring(blur, { stiffness: 70, damping: 30 });

  // Mouse parallax for subtle interactivity
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(event.clientX - rect.left - rect.width / 2);
      mouseY.set(event.clientY - rect.top - rect.height / 2);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
        // Slow down video for cinematic effect
        video.playbackRate = 0.75;
      };
      const handleError = () => console.warn('Hero video failed to load');
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Cinematic Video Background */}
      <motion.div
        style={{ 
          y: smoothY, 
          scale: smoothScale,
          filter: `blur(${smoothBlur}px) contrast(1.1) saturate(1.2)`,
        }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover cinematic-video"
          style={{
            filter: 'contrast(1.15) saturate(0.9) brightness(0.85) sepia(0.1)',
          }}
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => console.warn('Hero video failed to load')}
          poster="/assets/Webpage-Banner_1751779171234.png"
        >
          <source src="/hero.mp4" type="video/mp4" />
          <source src="/hero.webm" type="video/webm" />
        </video>
        
        {/* Enhanced Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-jaded-green-950/40 via-transparent to-jaded-green-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60" />
        
        {/* Color Grading Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-blue-900/10 mix-blend-overlay" />
        
        {/* Enhanced Film Grain */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <div className="absolute inset-0 bg-noise animate-grain" />
        </div>
        
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/50" />
      </motion.div>


      {/* Hero Content */}
      <motion.div
        style={{ 
          opacity: smoothOpacity,
          rotateX,
          rotateY,
        }}
        className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 perspective-1000"
      >
        {/* Logo with Advanced Animation */}
        <motion.div
          initial={{ 
            scale: 0.3, 
            opacity: 0, 
            y: -100, 
            rotateX: -45,
            filter: 'blur(20px)'
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: 'blur(0px)',
          }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
            scale: {
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: 0.8,
            },
          }}
          whileHover={{
            scale: 1.05,
            rotateY: 5,
            transition: { duration: 0.6, ease: 'easeOut' },
          }}
          className="mb-16 perspective-1000"
        >
          <OptimizedImage
            src="/assets/Logo-Whirte-Png_1751779171310.png"
            alt="Cactus Media Group"
            className="w-80 sm:w-96 lg:w-[32rem] h-auto mx-auto drop-shadow-2xl"
            priority={true}
          />
        </motion.div>

        {/* Tagline with Cinematic Typography */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 space-y-6"
        >
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 ${
              language === 'ar' ? 'font-arabic' : 'font-barlow'
            } text-shadow-strong leading-tight tracking-wide`}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="block"
            >
              {language === 'ar' ? 'حلول رقمية متميزة' : 'Premium Digital Solutions'}
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto ${
              language === 'ar' ? 'font-arabic leading-relaxed' : 'leading-relaxed'
            } text-shadow-soft`}
          >
            {language === 'ar'
              ? 'في عالم مليء بالورود، كن صبارة!'
              : 'In a world full of flowers, be a cactus!'}
          </motion.p>
        </motion.div>

        {/* CTA Buttons with Advanced Interactions */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.08, 
              y: -4,
              boxShadow: '0 20px 40px rgba(90, 155, 131, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onModalOpen('services')}
            className="group relative bg-gradient-to-r from-jaded-green-600 to-jaded-green-400 text-white font-semibold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-jaded-green-500/40 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-jaded-green-400 to-jaded-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className={`relative z-10 ${language === 'ar' ? 'font-arabic' : ''} text-lg`}>
              {language === 'ar' ? 'اكتشف خدماتنا' : 'Discover Our Services'}
            </span>
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.08, 
              y: -4,
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onModalOpen('contact')}
            className="group glass-strong text-white font-semibold px-10 py-5 rounded-2xl backdrop-blur-xl border border-white/30 hover:border-white/50 transition-all duration-500"
          >
            <span className={`${language === 'ar' ? 'font-arabic' : ''} text-lg`}>
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

    </section>
  );
}
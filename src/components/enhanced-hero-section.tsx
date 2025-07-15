import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { Play, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EnhancedHeroSectionProps {
  onModalOpen: (modal: string) => void;
}

export function EnhancedHeroSection({ onModalOpen }: EnhancedHeroSectionProps) {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => setIsVideoLoaded(true));
      video.play().catch(console.error);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden mb-0">
      {/* Enhanced Video Background */}
      <motion.div
        style={{ y: smoothY, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.7) contrast(1.1)' }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-jaded-green-900/20 via-transparent to-jaded-green-900/20" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-center justify-center px-6"
      >
        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Logo */}
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="mb-8 md:mb-12 lg:mb-16 float-animation"
          >
            <div className="inline-flex items-center justify-center mb-8">
              <motion.img
                src="/assets/wLogo.png"
                alt="Cactus Media Group"
                className="h-40 md:h-52 lg:h-64 xl:h-72 w-auto drop-shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </div>
          </motion.div>


          {/* Enhanced Tagline & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mb-10 md:mb-12 lg:mb-16"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mb-8"
            >
              <span className={`inline-block text-jaded-green-400 font-medium tracking-[0.2em] uppercase text-sm md:text-base lg:text-lg px-6 py-2 border border-jaded-green-400/30 rounded-full backdrop-blur-sm bg-jaded-green-400/5 ${
                language === 'ar' ? 'font-arabic' : 'font-barlow'
              }`}>
                {language === 'ar' ? 'في عالم مليء بالورود، كن صبارة!' : 'In a world full of flowers, be a cactus!'}
              </span>
            </motion.div>
            
            {/* Main Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/95 leading-relaxed font-light max-w-5xl mx-auto ${
                language === 'ar' ? 'font-arabic text-right' : 'font-barlow'
              }`}
            >
              {language === 'ar'
                ? 'حلول رقمية متميزة مصممة للصمود والنمو. نحول الأفكار الجريئة إلى تجارب رقمية استثنائية تحقق النجاح المستدام'
                : 'Premium digital solutions engineered for resilience and growth. Transforming bold ideas into exceptional digital experiences that drive sustainable success'}
            </motion.p>
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={() => onModalOpen('portfolio')}
                className={`btn-premium text-white px-10 py-5 text-lg md:text-xl font-semibold rounded-full group shadow-2xl hover:shadow-jaded-green-500/25 transition-all duration-300 ${
                  language === 'ar' ? 'font-arabic' : 'font-barlow'
                }`}
                style={{
                  background: 'linear-gradient(135deg, #00967d 0%, #007361 50%, #00856f 100%)',
                  minWidth: '200px',
                  height: '64px'
                }}
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" />
                {language === 'ar' ? 'استكشف أعمالنا' : 'Explore Our Work'}
              </Button>
            </motion.div>
            
            {/* Secondary CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={() => onModalOpen('contact')}
                variant="outline"
                className={`glass-premium text-white border-2 border-white/40 hover:border-white/80 hover:bg-white/10 px-10 py-5 text-lg md:text-xl font-semibold rounded-full backdrop-blur-xl transition-all duration-300 group ${
                  language === 'ar' ? 'font-arabic' : 'font-barlow'
                }`}
                style={{
                  minWidth: '200px',
                  height: '64px'
                }}
              >
                <ArrowDown className="w-6 h-6 mr-3 group-hover:translate-y-1 transition-transform duration-300" />
                {language === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
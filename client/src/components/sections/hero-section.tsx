import { motion } from 'framer-motion';
import { OptimizedImage } from '../performance-wrapper';
import { useLanguage } from '@/hooks/use-language';
import { Users, Zap, FolderOpen, Mail } from 'lucide-react';
import { VideoBackground } from '../video-background';

const HERO_VIDEO_PATH = '/hero.mp4';

interface HeroSectionProps {
  onModalOpen: (modal: string) => void;
}

export function HeroSection({ onModalOpen }: HeroSectionProps) {
  const { t, language } = useLanguage();

  const navItems = [
    { id: 'about', icon: Users, titleKey: 'about', descKey: 'Our Story' },
    { id: 'services', icon: Zap, titleKey: 'services', descKey: 'What We Do' },
    { id: 'portfolio', icon: FolderOpen, titleKey: 'portfolio', descKey: 'Our Work' },
    { id: 'contact', icon: Mail, titleKey: 'contact', descKey: 'Get In Touch' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 mobile-hero overflow-hidden">
      <VideoBackground src={HERO_VIDEO_PATH} className="absolute inset-0" />
      {/* Main Content overlays the background video, no box or extra overlays */}
      <div className="relative z-10 text-center max-w-7xl mx-auto w-full flex flex-col items-center justify-center">
        {/* Company Logo/Title */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: -50, rotateX: -30 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
              duration: 1.2,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
              scale: {
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 0.5,
              },
            },
          }}
          whileHover={{
            scale: 1.02,
            rotateY: 5,
            transition: { duration: 0.4, ease: 'easeOut' },
          }}
          className="mb-16"
        >
          <OptimizedImage
            src="/assets/Logo-Whirte-Png_1751779171310.png"
            alt="Cactus Media Group"
            className="w-72 sm:w-96 lg:w-[28rem] h-auto mx-auto animate-float complex-animation"
            priority={true}
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mb-12"
        >
          <h1
            className={`text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-4 ${
              language === 'ar' ? 'font-arabic' : 'font-poppins'
            } text-shadow-strong animate-fade-in`}
          >
            {language === 'ar' ? 'حلول رقمية متميزة' : 'Premium Digital Solutions'}
          </h1>
          <p
            className={`text-lg md:text-xl text-white/70 max-w-2xl mx-auto ${
              language === 'ar' ? 'font-arabic' : ''
            } animate-slide-up`}
          >
            {language === 'ar'
              ? 'في عالم مليء بالورود، كن صبارة!'
              : 'In a world full of flowers, be a cactus!'}
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onModalOpen('services')}
            className="group bg-gradient-to-r from-jaded-green-600 to-jaded-green-400 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-jaded-green-600/25 transition-all duration-300"
            aria-label="Discover Our Services"
          >
            <span className={`${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'اكتشف خدماتنا' : 'Discover Our Services'}
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onModalOpen('contact')}
            className="group glass-strong text-white font-semibold px-8 py-4 rounded-2xl backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-all duration-300"
            aria-label="Contact Us"
          >
            <span className={`${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

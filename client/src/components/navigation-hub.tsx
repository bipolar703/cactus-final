import { motion, useInView } from 'framer-motion';
import { Users, Zap, FolderOpen, Mail, Palmtree } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useRef } from 'react';
import { OptimizedImage, PerformanceWrapper } from './performance-wrapper';

interface NavigationHubProps {
  onModalOpen: (modal: string) => void;
}

export function NavigationHub({ onModalOpen }: NavigationHubProps) {
  const { t, language } = useLanguage();
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: '-100px' });

  const navItems = [
    { id: 'about', icon: Users, titleKey: 'about', descKey: 'Our Story' },
    { id: 'services', icon: Zap, titleKey: 'services', descKey: 'What We Do' },
    { id: 'portfolio', icon: FolderOpen, titleKey: 'portfolio', descKey: 'Our Work' },
    { id: 'contact', icon: Mail, titleKey: 'contact', descKey: 'Get In Touch' },
  ];

  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center max-w-7xl mx-auto"
      >
        {/* Company Logo/Title */}
        <div className="mb-16">
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
            className="mb-8"
          >
            <OptimizedImage
              src="/assets/Logo-Whirte-Png_1751779171310.png"
              alt="Cactus Media Group"
              className="w-72 sm:w-96 lg:w-[28rem] h-auto mx-auto animate-float complex-animation"
              priority={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-8"
          >
            <p
              className={`text-lg sm:text-xl lg:text-2xl font-light text-white/90 mb-3 text-shadow-soft ${
                language === 'ar' ? 'font-arabic' : 'font-poppins'
              }`}
            >
              {t('slogan')}
            </p>
            <p
              className={`text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed px-4 ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {t('tagline')}
            </p>
          </motion.div>
        </div>

        {/* Navigation Grid */}
        <motion.div
          ref={gridRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto gpu-accelerated"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{
                opacity: 0,
                y: 80,
                rotateX: -25,
                scale: 0.7,
                filter: 'blur(10px)',
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      scale: 1,
                      filter: 'blur(0px)',
                    }
                  : {
                      opacity: 0,
                      y: 80,
                      rotateX: -25,
                      scale: 0.7,
                      filter: 'blur(10px)',
                    }
              }
              transition={{
                delay: 1.5 + index * 0.3,
                duration: 1.0,
                ease: [0.16, 1, 0.3, 1],
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              whileHover={{
                scale: 1.06,
                rotateY: 8,
                rotateX: 2,
                z: 50,
                transition: {
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              whileTap={{
                scale: 0.94,
                rotateY: 2,
                transition: { duration: 0.1 },
              }}
              onClick={() => onModalOpen(item.id)}
              className="group relative glass-strong rounded-3xl p-6 sm:p-8 hover-lift hover-glow transition-all duration-500 min-h-[160px] sm:min-h-[180px] flex flex-col justify-center backdrop-blur-xl"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3f7c6a]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3f7c6a] to-[#5a9b83] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon className="text-white w-7 h-7" />
                </div>

                <h3
                  className={`text-white font-semibold text-lg mb-2 text-shadow-soft ${
                    language === 'ar' ? 'font-arabic' : 'font-poppins'
                  }`}
                >
                  {t(item.titleKey)}
                </h3>

                <p className={`text-white/70 text-sm ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar'
                    ? item.id === 'about'
                      ? 'قصتنا'
                      : item.id === 'services'
                        ? 'ما نقدمه'
                        : item.id === 'portfolio'
                          ? 'مشاريعنا'
                          : 'راسلنا'
                    : item.descKey}
                </p>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
            </motion.button>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16"
        >
          <p className={`text-white/60 text-sm mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar'
              ? 'مرحباً بك في عالم الإبداع الرقمي'
              : 'Welcome to the world of digital creativity'}
          </p>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#3f7c6a] to-transparent rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

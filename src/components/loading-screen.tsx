import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { OptimizedImage } from './performance-wrapper';

interface LoadingScreenProps {
  isVisible: boolean;
  onComplete: () => void;
}

export function LoadingScreen({ isVisible, onComplete }: LoadingScreenProps) {
  const { language } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('');

  const loadingSteps = language === 'ar' 
    ? ['تحميل الموارد...', 'إعداد التجربة...', 'تحسين الأداء...', 'جاهز للانطلاق!']
    : ['Loading assets...', 'Preparing experience...', 'Optimizing performance...', 'Ready to launch!'];

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 1.2;
          
          if (newProgress < 25) setLoadingText(loadingSteps[0]);
          else if (newProgress < 50) setLoadingText(loadingSteps[1]);
          else if (newProgress < 75) setLoadingText(loadingSteps[2]);
          else if (newProgress < 100) setLoadingText(loadingSteps[3]);
          
          if (newProgress >= 100) {
            clearInterval(timer);
            setTimeout(onComplete, 600);
            return 100;
          }
          return newProgress;
        });
      }, 35);

      return () => clearInterval(timer);
    }
  }, [isVisible, onComplete, loadingSteps]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.05,
        filter: 'blur(8px)'
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] overflow-hidden"
    >
      {/* Oblique animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-jaded-green-950/40 to-slate-800">
        <div className="absolute inset-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-full w-2 bg-gradient-to-b from-jaded-green-400/20 to-transparent"
              style={{
                left: `${i * 15}%`,
                transform: 'skewX(-15deg)',
              }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ 
                x: [null, window.innerWidth + 100],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-jaded-green-400/30 rounded-lg"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: 'rotate(45deg)',
              }}
              animate={{
                rotate: [45, 405],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-jaded-green-400/40 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              scale: 0
            }}
            animate={{
              y: [null, -120],
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeOut'
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        <motion.div
          initial={{ scale: 0.2, opacity: 0, rotateY: -180, filter: 'blur(20px)' }}
          animate={{ 
            scale: 1, 
            opacity: 1, 
            rotateY: 0,
            filter: 'blur(0px)'
          }}
          transition={{ 
            duration: 1.5, 
            ease: [0.16, 1, 0.3, 1],
            scale: { type: 'spring', stiffness: 200, damping: 18 }
          }}
          className="mb-12"
        >
          <OptimizedImage
            src="/assets/Logo-Whirte-Png_1751779171310.png"
            alt="Cactus Media Group"
            className="w-48 md:w-56 h-auto mx-auto drop-shadow-2xl"
            priority={true}
          />
        </motion.div>

        {/* Enhanced progress bar */}
        <div className="relative mb-8">
          <div className="w-80 h-2 bg-slate-700/40 rounded-full mx-auto overflow-hidden backdrop-blur-sm">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-jaded-green-600 via-jaded-green-400 to-jaded-green-300 rounded-full relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </motion.div>
          </div>
          
          <motion.div
            animate={{ 
              boxShadow: `0 0 ${15 + progress/8}px rgba(90, 155, 131, ${0.2 + progress/300})` 
            }}
            className="absolute inset-0 rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="space-y-3"
        >
          <motion.p
            key={loadingText}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-white/90 text-lg font-medium ${
              language === 'ar' ? 'font-arabic' : 'font-poppins'
            }`}
          >
            {loadingText}
          </motion.p>
          
          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-jaded-green-400 text-sm font-light"
          >
            {Math.round(progress)}%
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className={`text-white/50 text-sm mt-8 ${
            language === 'ar' ? 'font-arabic' : ''
          }`}
        >
          {language === 'ar' 
            ? 'في عالم مليء بالورود، كن صبارة'
            : 'In a world full of flowers, be a cactus'}
        </motion.p>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { OptimizedImage } from './performance-wrapper';

interface LoadingScreenProps {
  isVisible: boolean;
  onComplete: () => void;
}

export function LoadingScreen({ isVisible, onComplete }: LoadingScreenProps) {
  const { language } = useLanguage();

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-[#3f7c6a] via-[#5a9b83] to-[#6bb29a] flex items-center justify-center"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-300"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-md animate-pulse delay-700"></div>
      </div>
      
      <div className="text-center relative z-10">
        {/* Enhanced Logo Animation */}
        <motion.div
          initial={{ 
            scale: 0.3, 
            opacity: 0, 
            rotateY: -180,
            filter: "blur(20px)"
          }}
          animate={{ 
            scale: 1, 
            opacity: 1, 
            rotateY: 0,
            filter: "blur(0px)"
          }}
          transition={{ 
            duration: 1.5, 
            ease: [0.16, 1, 0.3, 1],
            scale: {
              type: "spring",
              stiffness: 200,
              damping: 15
            }
          }}
          className="mb-8"
        >
          <OptimizedImage
            src="/assets/Logo-Whirte-Png_1751779171310.png" 
            alt="Cactus Media Group" 
            className="w-64 h-auto mx-auto"
            priority={true}
          />
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-white rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          <motion.p 
            className={`text-white/80 text-lg ${language === 'ar' ? 'font-arabic' : ''}`}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {language === 'ar' ? 'جاري التحميل...' : 'Loading...'}
          </motion.p>
        </motion.div>
      </div>

      {/* Auto-complete after 2.5 seconds */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2.5 }}
        onAnimationComplete={onComplete}
      />
    </motion.div>
  );
}
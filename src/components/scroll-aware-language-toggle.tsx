import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollAwareLanguageToggle() {
  const { language, toggleLanguage, isLoading } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 100); // Show solid background after 100px scroll
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-6 right-6 z-50"
    >
      <motion.button
        onClick={toggleLanguage}
        disabled={isLoading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          relative flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm
          transition-all duration-300 border
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-md text-gray-800 border-gray-200 shadow-lg hover:bg-white hover:shadow-xl' 
            : 'bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20'
          }
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <Globe className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
        <span className={`font-medium ${language === 'ar' ? 'font-arabic' : 'font-barlow'}`}>
          {language === 'ar' ? 'English' : 'العربية'}
        </span>
        
        {/* Loading indicator */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
      </motion.button>
    </motion.div>
  );
}
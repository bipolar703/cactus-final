import { Globe, Loader2 } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';

export function EnhancedLanguageToggle() {
  const { language, toggleLanguage, isLoading } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.button
        onClick={toggleLanguage}
        disabled={isLoading}
        className={`language-toggle glass-strong text-white px-4 py-2 rounded-xl font-medium text-sm group relative overflow-hidden ${
          isLoading ? 'loading' : ''
        } ${language === 'ar' ? 'dubai-arabic' : ''}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-scroll-container
      >
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          )}
          <span className="font-semibold">
            {language === 'ar' ? 'AR' : 'EN'}
          </span>
        </div>
        
        {/* Shimmer effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-full group-hover:translate-x-full transform transition-transform duration-700" />
        
        {/* Loading overlay */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-jaded-green-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
          >
            <div className="text-xs text-white/80">
              {language === 'ar' ? 'Loading...' : 'Loading...'}
            </div>
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}
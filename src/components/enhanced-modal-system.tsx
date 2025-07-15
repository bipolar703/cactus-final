import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useEffect, useState } from 'react';
import { AboutModal } from './modals/about-modal';
import { ServicesModal } from './modals/services-modal';
import { PortfolioModal } from './modals/portfolio-modal';
import { ContactModal } from './modals/contact-modal';

interface EnhancedModalSystemProps {
  isOpen: boolean;
  onClose: () => void;
  activeModal: string | null;
  onModalChange: (modal: string) => void;
}

export function EnhancedModalSystem({ 
  isOpen, 
  onClose, 
  activeModal, 
  onModalChange 
}: EnhancedModalSystemProps) {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const modals = [
    { id: 'about', component: AboutModal, title: language === 'ar' ? 'من نحن' : 'About Us' },
    { id: 'services', component: ServicesModal, title: language === 'ar' ? 'خدماتنا' : 'Our Services' },
    { id: 'portfolio', component: PortfolioModal, title: language === 'ar' ? 'أعمالنا' : 'Our Portfolio' },
    { id: 'contact', component: ContactModal, title: language === 'ar' ? 'تواصل معنا' : 'Contact Us' },
  ];

  useEffect(() => {
    if (activeModal) {
      const index = modals.findIndex(modal => modal.id === activeModal);
      if (index !== -1) setCurrentIndex(index);
    }
  }, [activeModal]);

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : modals.length - 1;
    setCurrentIndex(newIndex);
    onModalChange(modals[newIndex].id);
  };

  const handleNext = () => {
    const newIndex = currentIndex < modals.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    onModalChange(modals[newIndex].id);
  };

  const currentModal = modals[currentIndex];
  const CurrentModalComponent = currentModal?.component;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Enhanced Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
          
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.4 
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[90vh] glass-premium rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Enhanced Header */}
            <div className="relative bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 p-6">
              <div className="flex items-center justify-between">
                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevious}
                  className="p-2 rounded-full glass-premium hover:bg-white/20 transition-all duration-300 group"
                >
                  <ArrowLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </button>

                {/* Modal Title */}
                <div className="text-center flex-1">
                  <h2 className={`text-2xl md:text-3xl font-bold text-white ${
                    language === 'ar' ? 'font-arabic' : 'font-poppins'
                  }`}>
                    {currentModal?.title}
                  </h2>
                  
                  {/* Progress Indicators */}
                  <div className="flex justify-center gap-2 mt-3">
                    {modals.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentIndex(index);
                          onModalChange(modals[index].id);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex 
                            ? 'bg-white scale-125' 
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Next Arrow */}
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full glass-premium hover:bg-white/20 transition-all duration-300 group"
                  >
                    <ArrowRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full glass-premium hover:bg-red-500/20 transition-all duration-300 group"
                  >
                    <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModal}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/95 backdrop-blur-sm"
                >
                  {CurrentModalComponent && <CurrentModalComponent />}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Enhanced Footer */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 border-t">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {modals.map((modal, index) => (
                    <button
                      key={modal.id}
                      onClick={() => {
                        setCurrentIndex(index);
                        onModalChange(modal.id);
                      }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-jaded-green-500 text-white shadow-lg'
                          : 'bg-white/50 text-gray-600 hover:bg-white hover:text-jaded-green-600'
                      }`}
                    >
                      {modal.title}
                    </button>
                  ))}
                </div>

                <div className="text-sm text-gray-500">
                  {currentIndex + 1} / {modals.length}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* Custom Scrollbar Styles */
const scrollbarStyles = `
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0, 150, 125, 0.6);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 150, 125, 0.8);
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = scrollbarStyles;
  document.head.appendChild(style);
}
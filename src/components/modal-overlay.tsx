import { ReactNode, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function ModalOverlay({ isOpen, onClose, children }: ModalOverlayProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40 modal-backdrop"
            onClick={onClose}
          />

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClose}
            className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50 glass-strong text-white w-12 h-12 rounded-2xl hover:bg-white/20 transition-all duration-300 hover-lift group"
          >
            <X className="w-5 h-5 mx-auto group-hover:rotate-90 transition-transform duration-300" />
          </motion.button>

          <div className="fixed inset-0 z-40 flex items-center justify-center p-6 sm:p-8">
            <motion.div
              initial={{
                scale: 0.85,
                opacity: 0,
                y: 80,
                rotateX: -15,
                filter: 'blur(10px)',
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                rotateX: 0,
                filter: 'blur(0px)',
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
                y: 50,
                rotateX: -10,
                filter: 'blur(5px)',
              }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 25,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white rounded-3xl max-w-6xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-white/20 gpu-accelerated"
            >
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

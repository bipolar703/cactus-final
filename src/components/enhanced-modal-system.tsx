import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const { language } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className={`text-2xl font-semibold text-gray-900 dark:text-white ${
                language === 'ar' ? 'font-arabic' : 'font-barlow'
              }`}>
                {title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function EnhancedModalSystem() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const { language } = useLanguage();

  const closeModal = () => setActiveModal(null);

  const modalContent = {
    portfolio: {
      title: language === 'ar' ? 'معرض أعمالنا' : 'Our Portfolio',
      content: (
        <div className="space-y-6">
          <p className={`text-gray-600 dark:text-gray-300 ${
            language === 'ar' ? 'font-arabic text-center' : ''
          }`}>
            {language === 'ar' 
              ? 'استكشف مجموعة من أعمالنا المتميزة التي نفخر بتقديمها لعملائنا'
              : 'Explore our collection of outstanding work that we proudly deliver to our clients'
            }
          </p>
          {/* Portfolio content would go here */}
        </div>
      )
    },
    services: {
      title: language === 'ar' ? 'خدماتنا المتخصصة' : 'Our Specialized Services',
      content: (
        <div className="space-y-6">
          <p className={`text-gray-600 dark:text-gray-300 ${
            language === 'ar' ? 'font-arabic text-center' : ''
          }`}>
            {language === 'ar'
              ? 'نقدم مجموعة شاملة من الخدمات الرقمية المصممة لتحقيق أهدافك التجارية'
              : 'We offer a comprehensive suite of digital services designed to achieve your business goals'
            }
          </p>
          {/* Services content would go here */}
        </div>
      )
    },
    contact: {
      title: language === 'ar' ? 'تواصل معنا' : 'Contact Us',
      content: (
        <div className="space-y-6">
          <p className={`text-gray-600 dark:text-gray-300 ${
            language === 'ar' ? 'font-arabic text-center' : ''
          }`}>
            {language === 'ar'
              ? 'نحن هنا لمساعدتك في تحقيق أهدافك الرقمية'
              : 'We are here to help you achieve your digital goals'
            }
          </p>
          {/* Contact form would go here */}
        </div>
      )
    }
  };

  return (
    <>
      {Object.entries(modalContent).map(([key, modal]) => (
        <Modal
          key={key}
          isOpen={activeModal === key}
          onClose={closeModal}
          title={modal.title}
        >
          {modal.content}
        </Modal>
      ))}
    </>
  );
}
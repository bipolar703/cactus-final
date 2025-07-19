import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';

interface ServiceDetailProps {
  service: {
    id: string;
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    process: string[];
    cta: string;
  };
  onBack: () => void;
  onContact: () => void;
}

export function ServiceDetail({ service, onBack, onContact }: ServiceDetailProps) {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className={`p-6 sm:p-8 lg:p-12 ${language === 'ar' ? 'text-center font-arabic' : ''}`}
    >
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={onBack}
          className="flex items-center text-[#3f7c6a] hover:text-[#2d5a4a] transition-colors mr-4"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {language === 'ar' ? 'العودة' : 'Back'}
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 ${
            language === 'ar' ? 'font-arabic' : 'font-barlow'
          }`}
        >
          {service.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 mb-8 leading-relaxed"
        >
          {service.description}
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {language === 'ar' ? 'الميزات' : 'Features'}
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#3f7c6a] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {language === 'ar' ? 'الفوائد' : 'Benefits'}
              </h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#3f7c6a] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-[#3f7c6a]/5 to-[#5a9b83]/5 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {language === 'ar' ? 'الميزات الرئيسية' : 'Key Features'}
              </h3>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm border border-[#3f7c6a]/10 flex items-center"
                  >
                    <div className="w-3 h-3 bg-[#3f7c6a] rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {language === 'ar' ? 'العملية' : 'Our Process'}
              </h3>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-[#3f7c6a] text-white rounded-full text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-[#3f7c6a] to-[#5a9b83] rounded-2xl p-8 text-white text-center mt-12"
        >
          <h3
            className={`text-2xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : 'font-barlow'}`}
          >
            {service.cta}
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            {language === 'ar'
              ? 'مستعد للبدء؟ دعنا نناقش مشروعك ونحوله إلى واقع.'
              : "Ready to get started? Let's discuss your project and bring it to life."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onContact}
              className="bg-white text-[#3f7c6a] hover:bg-gray-50 font-semibold px-8 py-3"
            >
              {language === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3"
            >
              {language === 'ar' ? 'احصل على عرض سعر' : 'Get Quote'}
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

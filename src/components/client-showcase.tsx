import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { useOptimizedIntersection } from '@/utils/cache-manager';
import { clientLogos } from '@/data/clients';
import { Star, Quote } from 'lucide-react';

export function ClientShowcase() {
  const { language } = useLanguage();
  const { ref, isIntersecting } = useOptimizedIntersection();

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 sm:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-jaded-green-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isIntersecting ? { width: 100 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-0.5 bg-jaded-green-600 mx-auto mb-8"
          />

          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 ${
              language === 'ar' ? 'font-arabic leading-tight arabic-heading' : 'font-barlow leading-tight'
            }`}
          >
            {language === 'ar' ? 'عملاؤنا المميزون' : 'Our Distinguished Clients'}
          </h2>

          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${
              language === 'ar' ? 'font-arabic text-right arabic-body' : 'font-barlow'
            }`}
          >
            {language === 'ar'
              ? 'نفخر بثقة العلامات التجارية الرائدة في المنطقة وشراكتنا الناجحة معها'
              : 'We are proud of the trust from leading regional brands and our successful partnerships with them'}
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-16"
        >
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-jaded-green-200 h-24 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
              <p className={`text-xs text-gray-500 text-center mt-2 ${
                language === 'ar' ? 'font-arabic' : 'font-barlow'
              }`}>
                {client.category}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            {
              number: '150+',
              label: language === 'ar' ? 'مشروع مكتمل' : 'Projects Completed',
              icon: Star
            },
            {
              number: '50+',
              label: language === 'ar' ? 'عميل راضٍ' : 'Happy Clients',
              icon: Quote
            },
            {
              number: '98%',
              label: language === 'ar' ? 'معدل الرضا' : 'Satisfaction Rate',
              icon: Star
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{
                delay: 0.8 + index * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-jaded-green-100 rounded-full mb-4">
                <stat.icon className="w-6 h-6 text-jaded-green-600" />
              </div>
              <div className="text-3xl font-bold text-jaded-green-600 mb-2 font-barlow">
                {stat.number}
              </div>
              <div className={`text-gray-600 font-medium ${
                language === 'ar' ? 'font-arabic' : 'font-barlow'
              }`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p
            className={`text-lg text-gray-600 mb-6 ${
              language === 'ar' ? 'font-arabic' : 'font-barlow'
            }`}
          >
            {language === 'ar'
              ? 'انضم إلى قائمة عملائنا المميزين واكتشف الفرق'
              : 'Join our distinguished client list and discover the difference'}
          </p>
          
          <button className="bg-jaded-green-600 hover:bg-jaded-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-barlow">
            {language === 'ar' ? 'ابدأ مشروعك معنا' : 'Start Your Project With Us'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
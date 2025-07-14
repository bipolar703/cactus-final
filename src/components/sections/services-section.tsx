import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { useOptimizedIntersection } from '@/utils/cache-manager';
import { Code, Palette, Megaphone, Camera, Smartphone, Globe } from 'lucide-react';

export function ServicesSection() {
  const { language } = useLanguage();
  const { ref, isIntersecting } = useOptimizedIntersection();

  const services = [
    {
      icon: Code,
      title: language === 'ar' ? 'تطوير المواقع' : 'Web Development',
      desc:
        language === 'ar'
          ? 'مواقع احترافية سريعة ومتجاوبة مع جميع الأجهزة'
          : 'Professional, fast, and responsive websites for all devices',
    },
    {
      icon: Palette,
      title: language === 'ar' ? 'تصميم الهوية' : 'Brand Design',
      desc:
        language === 'ar'
          ? 'هويات بصرية مميزة تعكس شخصية علامتك التجارية'
          : 'Distinctive visual identities reflecting your brand personality',
    },
    {
      icon: Megaphone,
      title: language === 'ar' ? 'التسويق الرقمي' : 'Digital Marketing',
      desc:
        language === 'ar'
          ? 'استراتيجيات تسويقية فعالة لزيادة الوصول والمبيعات'
          : 'Effective marketing strategies to increase reach and sales',
    },
    {
      icon: Camera,
      title: language === 'ar' ? 'التصوير والإنتاج' : 'Photography & Production',
      desc:
        language === 'ar'
          ? 'إنتاج مرئي احترافي للصور والفيديوهات التسويقية'
          : 'Professional visual production for marketing photos and videos',
    },
    {
      icon: Smartphone,
      title: language === 'ar' ? 'تطبيقات الموبايل' : 'Mobile Apps',
      desc:
        language === 'ar'
          ? 'تطبيقات ذكية سهلة الاستخدام لنظامي iOS و Android'
          : 'Smart, user-friendly apps for iOS and Android systems',
    },
    {
      icon: Globe,
      title: language === 'ar' ? 'إدارة وسائل التواصل' : 'Social Media Management',
      desc:
        language === 'ar'
          ? 'إدارة شاملة لحساباتك على منصات التواصل الاجتماعي'
          : 'Comprehensive management of your social media accounts',
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-24 px-6 sm:px-8 mobile-section relative">
      <div className="max-w-7xl mx-auto">
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
            className="h-1 bg-gradient-to-r from-jaded-green-600 to-jaded-green-400 rounded-full mx-auto mb-8 shadow-lg shadow-jaded-green-500/30"
          />

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
              language === 'ar' ? 'font-arabic leading-tight' : 'font-poppins leading-tight'
            }`}
          >
            {language === 'ar' ? 'حلول متكاملة' : 'Comprehensive Solutions'}
          </h2>

          <div className="max-w-5xl mx-auto">
            <p
              className={`text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-light ${
                language === 'ar' ? 'font-arabic text-right' : ''
              }`}
            >
              {language === 'ar'
                ? 'نحول الأفكار الجريئة إلى تجارب رقمية استثنائية تدفع نمو الأعمال وتحقق التميز التنافسي في السوق الرقمي'
                : 'Transforming bold ideas into exceptional digital experiences that drive business growth and achieve competitive excellence in the digital marketplace'}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              animate={
                isIntersecting
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                    }
                  : {
                      opacity: 0,
                      y: 40,
                      rotateX: -10,
                    }
              }
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                rotateY: 3,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              }}
              className="group cursor-pointer"
            >
              <div className="glass-strong rounded-2xl p-6 h-full backdrop-blur-xl hover-glow transition-all duration-500 border border-white/10 hover:border-jaded-green-500/40 relative overflow-hidden">
                {/* Service Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-jaded-green-600 to-jaded-green-400 rounded-xl mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400 shadow-lg group-hover:shadow-jaded-green-500/30">
                  <service.icon className="text-white w-7 h-7" />
                </div>

                {/* Service Title */}
                <h3
                  className={`text-lg font-semibold text-white mb-3 group-hover:text-jaded-green-400 transition-colors duration-300 ${
                    language === 'ar' ? 'font-arabic text-right' : 'font-poppins'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Service Description */}
                <p
                  className={`text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300 ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}
                >
                  {service.desc}
                </p>

                {/* Enhanced Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-jaded-green-600/5 via-jaded-green-500/3 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-jaded-green-600 to-jaded-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  );
}

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
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 border-b border-jaded-green-600/20 mobile-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isIntersecting ? { width: 100 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-[#3f7c6a] to-[#5a9b83] rounded-full mx-auto mb-8"
          />

          <h2
            className={`text-5xl md:text-6xl font-bold text-white mb-8 ${
              language === 'ar' ? 'font-arabic' : 'font-poppins'
            }`}
          >
            {language === 'ar' ? 'خدمات متطورة' : 'Advanced Solutions'}
          </h2>

          <div className="max-w-4xl mx-auto">
            <p
              className={`text-2xl text-white/90 leading-relaxed font-light ${
                language === 'ar' ? 'font-arabic text-right' : ''
              }`}
            >
              {language === 'ar'
                ? 'نحول الأفكار إلى تجارب رقمية استثنائية'
                : 'Transforming ideas into exceptional digital experiences'}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              animate={
                isIntersecting
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                    }
                  : {
                      opacity: 0,
                      y: 60,
                      rotateX: -15,
                    }
              }
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="group cursor-pointer"
            >
              <div className="glass-strong rounded-3xl p-8 h-full backdrop-blur-xl hover-glow transition-all duration-500 border border-white/10">
                {/* Service Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3f7c6a] to-[#5a9b83] rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <service.icon className="text-white w-8 h-8" />
                </div>

                {/* Service Title */}
                <h3
                  className={`text-xl font-semibold text-white mb-4 group-hover:text-[#5a9b83] transition-colors duration-300 ${
                    language === 'ar' ? 'font-arabic' : 'font-poppins'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Service Description */}
                <p
                  className={`text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300 ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}
                >
                  {service.desc}
                </p>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3f7c6a]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

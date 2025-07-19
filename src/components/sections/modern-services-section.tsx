import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { useOptimizedIntersection } from '@/utils/cache-manager';
import { Code, Palette, Megaphone, Camera, Smartphone, Globe, Brain, Zap, Database, Settings, Cpu, BarChart3 } from 'lucide-react';
import { premiumServices, services } from '@/data/services';

export function ModernServicesSection() {
  const { language } = useLanguage();
  const { ref, isIntersecting } = useOptimizedIntersection();

  // Premium services with modern icons
  const premiumServicesWithIcons = [
    {
      icon: Brain,
      title: language === 'ar' ? 'الذكاء الاصطناعي والأتمتة' : 'AI Integration & Automation',
      desc: language === 'ar'
        ? 'وكلاء ذكاء اصطناعي مخصصون وحلول تعلم آلة متقدمة'
        : 'Custom AI agents and advanced machine learning solutions',
      features: language === 'ar' 
        ? ['وكلاء ذكاء اصطناعي', 'أتمتة سير العمل', 'تحليلات تنبؤية']
        : ['Custom AI Agents', 'Workflow Automation', 'Predictive Analytics'],
      slug: 'ai-integration-automation',
      category: 'premium'
    },
    {
      icon: Database,
      title: language === 'ar' ? 'استراتيجية رقمية مدفوعة بالبيانات' : 'Data-Driven Digital Strategy',
      desc: language === 'ar'
        ? 'تحليلات شاملة ورؤى بيانات لضمان عائد استثمار قابل للقياس'
        : 'Comprehensive analytics and data insights for measurable ROI',
      features: language === 'ar' 
        ? ['تحليلات متقدمة', 'تحسين العائد', 'تقارير ذكاء السوق']
        : ['Advanced Analytics', 'ROI Optimization', 'Market Intelligence'],
      slug: 'data-driven-digital-strategy',
      category: 'premium'
    },
    {
      icon: Cpu,
      title: language === 'ar' ? 'حلول مؤسسية مخصصة' : 'Bespoke Enterprise Solutions',
      desc: language === 'ar'
        ? 'حلول رقمية مهندسة خصيصًا لمتطلبات أعمالك المحددة'
        : 'Custom-engineered digital solutions for your specific business needs',
      features: language === 'ar' 
        ? ['هندسة مخصصة', 'تكامل مؤسسي', 'حلول سحابية']
        : ['Custom Architecture', 'Enterprise Integration', 'Cloud Solutions'],
      slug: 'bespoke-enterprise-solutions',
      category: 'premium'
    }
  ];

  const coreServices = [
    {
      icon: Code,
      title: language === 'ar' ? 'تطوير المواقع' : 'Web Development',
      desc: language === 'ar'
        ? 'مواقع احترافية سريعة ومتجاوبة مع جميع الأجهزة'
        : 'Professional, fast, and responsive websites for all devices',
      features: language === 'ar' 
        ? ['تصميم متجاوب', 'أداء محسن', 'أمان عالي']
        : ['Responsive Design', 'Optimized Performance', 'High Security']
    },
    {
      icon: Palette,
      title: language === 'ar' ? 'تصميم الهوية' : 'Brand Design',
      desc: language === 'ar'
        ? 'هويات بصرية مميزة تعكس شخصية علامتك التجارية'
        : 'Distinctive visual identities reflecting your brand personality',
      features: language === 'ar'
        ? ['تصميم شعار', 'دليل العلامة', 'مواد تسويقية']
        : ['Logo Design', 'Brand Guidelines', 'Marketing Materials']
    },
    {
      icon: Megaphone,
      title: language === 'ar' ? 'التسويق الرقمي' : 'Digital Marketing',
      desc: language === 'ar'
        ? 'استراتيجيات تسويقية فعالة لزيادة الوصول والمبيعات'
        : 'Effective marketing strategies to increase reach and sales',
      features: language === 'ar'
        ? ['إدارة وسائل التواصل', 'إعلانات مدفوعة', 'تحليل البيانات']
        : ['Social Media Management', 'Paid Advertising', 'Analytics']
    },
    {
      icon: Camera,
      title: language === 'ar' ? 'التصوير والإنتاج' : 'Photography & Production',
      desc: language === 'ar'
        ? 'إنتاج مرئي احترافي للصور والفيديوهات التسويقية'
        : 'Professional visual production for marketing photos and videos',
      features: language === 'ar'
        ? ['تصوير المنتجات', 'فيديو تسويقي', 'تصوير الأحداث']
        : ['Product Photography', 'Marketing Videos', 'Event Coverage']
    },
    {
      icon: Smartphone,
      title: language === 'ar' ? 'تطبيقات الموبايل' : 'Mobile Apps',
      desc: language === 'ar'
        ? 'تطبيقات ذكية سهلة الاستخدام لنظامي iOS و Android'
        : 'Smart, user-friendly apps for iOS and Android systems',
      features: language === 'ar'
        ? ['تطبيقات أصلية', 'تطبيقات هجينة', 'تطبيقات ويب']
        : ['Native Apps', 'Hybrid Apps', 'Web Apps']
    },
    {
      icon: Globe,
      title: language === 'ar' ? 'إدارة وسائل التواصل' : 'Social Media Management',
      desc: language === 'ar'
        ? 'إدارة شاملة لحساباتك على منصات التواصل الاجتماعي'
        : 'Comprehensive management of your social media accounts',
      features: language === 'ar'
        ? ['إنشاء المحتوى', 'جدولة المنشورات', 'تفاعل مع الجمهور']
        : ['Content Creation', 'Post Scheduling', 'Audience Engagement']
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-6 sm:px-8 bg-gray-900 relative overflow-hidden"
    >
      {/* Dark sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isIntersecting ? { width: 100 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-0.5 bg-jaded-green-500 mx-auto mb-8"
          />

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 ${
              language === 'ar' ? 'font-arabic leading-tight' : 'font-barlow leading-tight'
            }`}
          >
            {language === 'ar' ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}
          </h2>

          <p
            className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {language === 'ar'
              ? 'نقدم مجموعة شاملة من الخدمات الرقمية المصممة لتحقيق أهدافك التجارية'
              : 'We offer a comprehensive suite of digital services designed to achieve your business goals'}
          </p>
        </motion.div>

        {/* Premium Services Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 text-white px-6 py-3 rounded-full font-semibold mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              {language === 'ar' ? 'الحلول المتقدمة والذكاء الاصطناعي' : 'Premium AI & Advanced Solutions'}
            </div>
            <h3 className={`text-2xl md:text-3xl font-bold text-white mb-4 ${
              language === 'ar' ? 'font-arabic' : 'font-barlow'
            }`}>
              {language === 'ar' ? 'تقنيات المستقبل' : 'Future Technologies'}
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {premiumServicesWithIcons.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={
                  isIntersecting
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 60 }
                }
                transition={{
                  delay: index * 0.1,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                }}
                className="group cursor-pointer"
                onClick={() => {
                  window.location.href = `/services/${service.slug}`;
                }}
              >
                <div className="bg-gradient-to-br from-jaded-green-900/60 via-jaded-green-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 h-full border border-jaded-green-500/30 hover:border-jaded-green-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-jaded-green-500/20 relative overflow-hidden">
                  {/* Premium Badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-gold-500 to-gold-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                    {language === 'ar' ? 'متميز' : 'PREMIUM'}
                  </div>
                  
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-jaded-green-400/10 via-transparent to-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  {/* Service Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-jaded-green-500 to-jaded-green-400 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-400 shadow-lg group-hover:shadow-jaded-green-400/40">
                      <service.icon className="text-white w-8 h-8" />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="relative z-10 space-y-4">
                    <h4 className={`text-xl font-semibold text-white group-hover:text-jaded-green-300 transition-colors duration-300 ${
                      language === 'ar' ? 'font-arabic text-center' : 'font-barlow'
                    }`}>
                      {service.title}
                    </h4>

                    <p className={`text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 ${
                      language === 'ar' ? 'font-arabic text-center' : 'text-left'
                    }`}>
                      {service.desc}
                    </p>

                    {/* Service Features */}
                    <div className="space-y-2 pt-4">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 ${
                            language === 'ar' ? 'flex-row-reverse' : ''
                          }`}
                        >
                          <div className="w-1.5 h-1.5 bg-jaded-green-400 rounded-full mr-3" />
                          <span className={language === 'ar' ? 'font-arabic' : ''}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-jaded-green-500 to-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Services Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 py-3 rounded-full font-semibold mb-6">
              <span className="w-2 h-2 bg-white rounded-full" />
              {language === 'ar' ? 'الخدمات الأساسية' : 'Core Services'}
            </div>
            <h3 className={`text-2xl md:text-3xl font-bold text-white mb-4 ${
              language === 'ar' ? 'font-arabic' : 'font-barlow'
            }`}>
              {language === 'ar' ? 'خدماتنا الأساسية' : 'Foundation Services'}
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={
                isIntersecting
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 60 }
              }
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              }}
              className="group cursor-pointer"
              onClick={() => {
                const serviceSlug = service.title.toLowerCase()
                  .replace(/\s+/g, '-')
                  .replace(/&/g, 'and')
                  .replace(/[^a-z0-9-]/g, '');
                window.location.href = `/services/${serviceSlug}`;
              }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-700/50 hover:border-jaded-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-jaded-green-500/10 relative overflow-hidden">
                {/* Glowing border effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-jaded-green-500/5 via-transparent to-jaded-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Service Icon */}
                <div className="relative z-10 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-jaded-green-600 to-jaded-green-400 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-400 shadow-lg group-hover:shadow-jaded-green-500/30">
                    <service.icon className="text-white w-8 h-8" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="relative z-10 space-y-4">
                  <h3
                    className={`text-xl font-semibold text-white group-hover:text-jaded-green-400 transition-colors duration-300 ${
                      language === 'ar' ? 'font-arabic text-center' : 'font-barlow'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 ${
                      language === 'ar' ? 'font-arabic text-center' : 'text-left'
                    }`}
                  >
                    {service.desc}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-2 pt-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 ${
                          language === 'ar' ? 'flex-row-reverse' : ''
                        }`}
                      >
                        <div className="w-1.5 h-1.5 bg-jaded-green-500 rounded-full mr-3" />
                        <span className={language === 'ar' ? 'font-arabic' : ''}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-jaded-green-600 to-jaded-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 rounded-3xl p-12 shadow-2xl">
            <h3 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${
              language === 'ar' ? 'font-arabic' : 'font-barlow'
            }`}>
              {language === 'ar' ? 'جاهز لتحويل أعمالك؟' : 'Ready to Transform Your Business?'}
            </h3>
            <p className={`text-xl text-white/90 mb-8 max-w-3xl mx-auto ${
              language === 'ar' ? 'font-arabic' : ''
            }`}>
              {language === 'ar'
                ? 'اتصل بنا اليوم لمناقشة كيف يمكن لحلولنا الرقمية المتقدمة أن تسرع نمو أعمالك وميزتك التنافسية في السوق الرقمي'
                : 'Contact us today to discuss how our premium digital solutions can accelerate your business growth and competitive advantage in the digital marketplace'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-jaded-green-600 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {language === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/services'}
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                {language === 'ar' ? 'استكشف جميع الخدمات' : 'Explore All Services'}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
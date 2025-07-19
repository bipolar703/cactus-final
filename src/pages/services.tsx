import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Sparkles } from 'lucide-react';
import { services, premiumServices, allServices } from '@/data/services';

export default function Services() {
  const { language } = useLanguage();
  
  // SEO and meta data
  const pageTitle = language === 'ar' ? 'خدماتنا المتخصصة | مجموعة كاكتوس الإعلامية' : 'Our Specialized Services | Cactus Media Group';
  const pageDescription = language === 'ar' 
    ? 'خدمات رقمية متكاملة من تطوير المواقع إلى التسويق الرقمي والتصميم. حلول مبتكرة مصممة خصيصاً لنمو أعمالك وتحقيق أهدافك الرقمية.'
    : 'Comprehensive digital services from web development to digital marketing and design. Innovative solutions crafted specifically for your business growth and digital goals.';

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={language === 'ar' ? 'تطوير مواقع, تصميم, تسويق رقمي, هوية بصرية, محتوى رقمي, تصوير احترافي' : 'web development, design, digital marketing, branding, content creation, professional photography'} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/services" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />

      <main className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-jaded-green-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-jaded-green-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-jaded-green-50/20 to-gold-50/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 pt-32 pb-20 px-6 sm:px-8">
          {/* Header Section */}
          <div className="max-w-7xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <div className="p-3 rounded-2xl bg-jaded-green-100/50 backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-jaded-green-600" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-jaded-green-800 to-gray-900 bg-clip-text text-transparent ${
                language === 'ar' ? 'font-arabic' : 'font-barlow'
              }`}
            >
              {language === 'ar' ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {language === 'ar'
                ? 'نقدم مجموعة شاملة من الخدمات الرقمية المبتكرة المصممة خصيصاً لتحقيق أهدافك التجارية وتعزيز حضورك الرقمي'
                : 'We offer a comprehensive suite of innovative digital services crafted specifically to achieve your business goals and enhance your digital presence'}
            </motion.p>
          </div>

          {/* Premium Services Section */}
          <div className=\"max-w-7xl mx-auto mb-20\">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className=\"text-center mb-16\"
            >
              <div className=\"inline-flex items-center gap-3 bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 text-white px-6 py-3 rounded-full font-semibold mb-6\">
                <span className=\"w-2 h-2 bg-white rounded-full animate-pulse\" />
                {language === 'ar' ? 'الحلول المتقدمة والذكاء الاصطناعي' : 'Premium Digital Solutions & AI Services'}
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${
                language === 'ar' ? 'font-arabic' : 'font-barlow'
              }`}>
                {language === 'ar' ? 'حلول متطورة للمؤسسات' : 'Advanced Enterprise Solutions'}
              </h2>
              <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${
                language === 'ar' ? 'font-arabic' : ''
              }`}>
                {language === 'ar'
                  ? 'حلول رقمية متقدمة مدعومة بالذكاء الاصطناعي وتحليل البيانات لتحويل أعمالك وتحقيق نمو استثنائي'
                  : 'Advanced digital solutions powered by AI and data analytics to transform your business and achieve exceptional growth'}
              </p>
            </motion.div>

            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20\">
              {premiumServices.map((service, idx) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className=\"group\"
                >
                  <div className=\"relative bg-gradient-to-br from-gray-900 via-gray-800 to-black backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-jaded-green-500/20 hover:shadow-2xl hover:border-jaded-green-400/40 transition-all duration-500 h-full flex flex-col\">
                    {/* Premium Badge */}
                    <div className=\"absolute -top-3 -right-3 bg-gradient-to-r from-gold-500 to-gold-400 text-black text-xs font-bold px-3 py-1 rounded-full\">
                      {language === 'ar' ? 'متميز' : 'PREMIUM'}
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className=\"absolute inset-0 bg-gradient-to-br from-jaded-green-500/10 via-transparent to-gold-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500\" />
                    
                    {/* Service Icon */}
                    <div className=\"relative z-10 mb-6\">
                      <div className=\"w-20 h-20 mx-auto bg-gradient-to-br from-jaded-green-600 to-jaded-green-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg\">
                        <img src={service.icon} alt={service.title[language]} className=\"w-12 h-12\" loading=\"lazy\" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className=\"relative z-10 flex-1 flex flex-col\">
                      <h3 className={`text-2xl font-bold mb-4 text-white group-hover:text-jaded-green-400 transition-colors duration-300 ${
                        language === 'ar' ? 'font-arabic text-center' : 'font-barlow text-center'
                      }`}>
                        {service.title[language]}
                      </h3>

                      <p className={`text-gray-300 mb-6 leading-relaxed flex-1 ${
                        language === 'ar' ? 'font-arabic text-center' : 'text-center'
                      }`}>
                        {service.desc[language]}
                      </p>

                      {/* Features */}
                      <div className=\"space-y-3 mb-8\">
                        {service.features[language].map((feature, i) => (
                          <div key={i} className={`flex items-center gap-3 text-sm text-gray-400 ${
                            language === 'ar' ? 'flex-row-reverse' : ''
                          }`}>
                            <div className=\"w-2 h-2 bg-jaded-green-400 rounded-full flex-shrink-0\" />
                            <span className={language === 'ar' ? 'font-arabic' : ''}>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link 
                        href={`/services/${service.slug}`}
                        className=\"mt-auto group/btn\"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className=\"w-full bg-gradient-to-r from-jaded-green-600 to-jaded-green-400 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group-hover/btn:from-jaded-green-700 group-hover/btn:to-jaded-green-500\"
                        >
                          <span className={language === 'ar' ? 'font-arabic' : 'font-barlow'}>
                            {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                          </span>
                          <ArrowRight className=\"w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300\" />
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Services Section */}
          <div className=\"max-w-7xl mx-auto\">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className=\"text-center mb-16\"
            >
              <div className=\"inline-flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 py-3 rounded-full font-semibold mb-6\">
                <span className=\"w-2 h-2 bg-white rounded-full\" />
                {language === 'ar' ? 'الخدمات الأساسية' : 'Core Services'}
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${
                language === 'ar' ? 'font-arabic' : 'font-barlow'
              }`}>
                {language === 'ar' ? 'خدماتنا الأساسية' : 'Our Foundation Services'}
              </h2>
            </motion.div>

            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
              {services.map((service, idx) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl hover:border-jaded-green-200/50 transition-all duration-500 h-full flex flex-col">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-jaded-green-500/5 via-transparent to-gold-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Service Icon */}
                    <div className="relative z-10 mb-6">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-jaded-green-100 to-jaded-green-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src={service.icon} alt={service.title[language]} className="w-12 h-12" loading="lazy" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1 flex flex-col">
                      <h2 className={`text-2xl font-bold mb-4 text-gray-900 group-hover:text-jaded-green-800 transition-colors duration-300 ${
                        language === 'ar' ? 'font-arabic text-center' : 'font-barlow text-center'
                      }`}>
                        {service.title[language]}
                      </h2>

                      <p className={`text-gray-600 mb-6 leading-relaxed flex-1 ${
                        language === 'ar' ? 'font-arabic text-center' : 'text-center'
                      }`}>
                        {service.desc[language]}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {service.features[language].map((feature, i) => (
                          <div key={i} className={`flex items-center gap-3 text-sm text-gray-700 ${
                            language === 'ar' ? 'flex-row-reverse' : ''
                          }`}>
                            <div className="w-2 h-2 bg-jaded-green-500 rounded-full flex-shrink-0" />
                            <span className={language === 'ar' ? 'font-arabic' : ''}>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link 
                        href={`/services/${service.slug}`}
                        className="mt-auto group/btn"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group-hover/btn:from-jaded-green-700 group-hover/btn:to-jaded-green-600"
                        >
                          <span className={language === 'ar' ? 'font-arabic' : 'font-barlow'}>
                            {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                          </span>
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mt-20"
          >
            <div className="bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${
                language === 'ar' ? 'font-arabic' : 'font-barlow'
              }`}>
                {language === 'ar' ? 'جاهز لبدء مشروعك؟' : 'Ready to Start Your Project?'}
              </h3>
              <p className={`text-xl mb-8 opacity-90 ${
                language === 'ar' ? 'font-arabic' : ''
              }`}>
                {language === 'ar'
                  ? 'دعنا نساعدك في تحويل أفكارك إلى واقع رقمي مذهل'
                  : 'Let us help you transform your ideas into stunning digital reality'}
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-jaded-green-600 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {language === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}

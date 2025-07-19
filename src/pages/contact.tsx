import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const { language } = useLanguage();
  
  // SEO and meta data
  const pageTitle = language === 'ar' ? 'تواصل معنا | مجموعة كاكتوس الإعلامية' : 'Contact Us | Cactus Media Group';
  const pageDescription = language === 'ar' 
    ? 'تواصل مع فريق الخبراء لدينا لمناقشة مشروعك القادم. نحن هنا لمساعدتك في تحويل أفكارك إلى واقع رقمي مذهل.'
    : 'Get in touch with our expert team to discuss your next project. We\'re here to help transform your ideas into stunning digital reality.';

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={language === 'ar' ? 'تواصل, استشارة, مشروع رقمي, خدمات تقنية, تطوير مواقع' : 'contact, consultation, digital project, tech services, web development'} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/contact" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />

      <main className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-jaded-green-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-jaded-green-100/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold-100/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-jaded-green-50/10 to-gold-50/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 pt-32 pb-20 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-jaded-green-800 to-gray-900 bg-clip-text text-transparent ${
                  language === 'ar' ? 'font-arabic' : 'font-barlow'
                }`}
              >
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {language === 'ar'
                  ? 'دعنا نناقش مشروعك القادم ونحوله إلى واقع رقمي استثنائي'
                  : 'Let\'s discuss your next project and turn it into exceptional digital reality'}
              </motion.p>
            </div>

            {/* Contact Form and Info Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100/50">
                  <h2 className={`text-3xl font-bold mb-8 text-gray-900 ${
                    language === 'ar' ? 'font-arabic text-center' : 'font-barlow'
                  }`}>
                    {language === 'ar' ? 'ابدأ مشروعك معنا' : 'Start Your Project With Us'}
                  </h2>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                          {language === 'ar' ? 'الاسم الأول' : 'First Name'}
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-jaded-green-500 focus:ring-2 focus:ring-jaded-green-200 transition-colors duration-200"
                          placeholder={language === 'ar' ? 'أدخل اسمك الأول' : 'Enter your first name'}
                          required
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                          {language === 'ar' ? 'الاسم الأخير' : 'Last Name'}
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-jaded-green-500 focus:ring-2 focus:ring-jaded-green-200 transition-colors duration-200"
                          placeholder={language === 'ar' ? 'أدخل اسمك الأخير' : 'Enter your last name'}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-jaded-green-500 focus:ring-2 focus:ring-jaded-green-200 transition-colors duration-200"
                        placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                        required
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                        {language === 'ar' ? 'نوع المشروع' : 'Project Type'}
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-jaded-green-500 focus:ring-2 focus:ring-jaded-green-200 transition-colors duration-200">
                        <option value="">{language === 'ar' ? 'اختر نوع المشروع' : 'Select project type'}</option>
                        <option value="web-development">{language === 'ar' ? 'تطوير موقع' : 'Web Development'}</option>
                        <option value="branding">{language === 'ar' ? 'هوية بصرية' : 'Branding'}</option>
                        <option value="digital-marketing">{language === 'ar' ? 'تسويق رقمي' : 'Digital Marketing'}</option>
                        <option value="content-creation">{language === 'ar' ? 'إنشاء محتوى' : 'Content Creation'}</option>
                        <option value="photography">{language === 'ar' ? 'تصوير احترافي' : 'Photography'}</option>
                      </select>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                        {language === 'ar' ? 'تفاصيل المشروع' : 'Project Details'}
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-jaded-green-500 focus:ring-2 focus:ring-jaded-green-200 transition-colors duration-200 resize-none"
                        placeholder={language === 'ar' ? 'أخبرنا عن مشروعك وأهدافك' : 'Tell us about your project and goals'}
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-8"
              >
                {/* Contact Info Card */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100/50">
                  <h3 className={`text-2xl font-bold mb-6 text-gray-900 ${
                    language === 'ar' ? 'font-arabic text-center' : 'font-barlow'
                  }`}>
                    {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
                  </h3>

                  <div className="space-y-6">
                    <div className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 bg-jaded-green-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-jaded-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className={`font-semibold text-gray-900 ${language === 'ar' ? 'font-arabic' : ''}`}>
                          {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                        </p>
                        <a href="mailto:info@cactusmediajo.com" className="text-jaded-green-600 hover:text-jaded-green-700 transition-colors">
                          info@cactusmediajo.com
                        </a>
                      </div>
                    </div>

                    <div className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 bg-jaded-green-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-jaded-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className={`font-semibold text-gray-900 ${language === 'ar' ? 'font-arabic' : ''}`}>
                          {language === 'ar' ? 'الموقع' : 'Location'}
                        </p>
                        <p className="text-gray-600">
                          {language === 'ar' ? 'عمان، الأردن' : 'Amman, Jordan'}
                        </p>
                      </div>
                    </div>

                    <div className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 bg-jaded-green-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-jaded-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className={`font-semibold text-gray-900 ${language === 'ar' ? 'font-arabic' : ''}`}>
                          {language === 'ar' ? 'ساعات العمل' : 'Business Hours'}
                        </p>
                        <p className="text-gray-600">
                          {language === 'ar' ? 'الأحد - الخميس: 9:00 - 18:00' : 'Sun - Thu: 9:00 AM - 6:00 PM'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response Promise */}
                <div className="bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 rounded-3xl p-8 text-white">
                  <h4 className={`text-xl font-bold mb-4 ${language === 'ar' ? 'font-arabic text-center' : 'font-barlow'}`}>
                    {language === 'ar' ? 'استجابة سريعة مضمونة' : 'Quick Response Guaranteed'}
                  </h4>
                  <p className={`opacity-90 ${language === 'ar' ? 'font-arabic text-center' : ''}`}>
                    {language === 'ar'
                      ? 'نلتزم بالرد على جميع الاستفسارات خلال 24 ساعة أو أقل'
                      : 'We commit to responding to all inquiries within 24 hours or less'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

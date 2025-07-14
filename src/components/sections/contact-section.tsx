import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { useOptimizedIntersection } from '@/utils/cache-manager';
import { Mail, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const { language } = useLanguage();
  const { ref, isIntersecting } = useOptimizedIntersection();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Mail,
      title: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      value: 'info@cactusmediajo.com',
      href: 'mailto:info@cactusmediajo.com',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            initial={{ scale: 0 }}
            animate={isIntersecting ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
            className="w-20 h-20 bg-gradient-to-br from-[#3f7c6a] to-[#5a9b83] rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <MessageCircle className="w-10 h-10 text-white" />
          </motion.div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
              language === 'ar' ? 'font-arabic leading-tight' : 'font-poppins leading-tight'
            }`}
          >
            {language === 'ar' ? 'ابدأ رحلتك الرقمية' : 'Start Your Digital Journey'}
          </h2>

          <p
            className={`text-lg md:text-xl lg:text-2xl text-white/90 max-w-5xl mx-auto font-light leading-relaxed ${
              language === 'ar' ? 'font-arabic text-right' : ''
            }`}
          >
            {language === 'ar' 
              ? 'نحن هنا لتحويل رؤيتك إلى واقع رقمي متميز. دعنا نناقش مشروعك القادم ونبني معاً حلولاً استثنائية تحقق أهدافك وتتجاوز توقعاتك'
              : 'We\'re here to transform your vision into exceptional digital reality. Let\'s discuss your next project and build together outstanding solutions that achieve your goals and exceed your expectations'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-strong rounded-3xl p-8 backdrop-blur-xl border border-white/10">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3f7c6a] to-[#5a9b83] rounded-2xl mb-6">
                  <MessageCircle className="text-white w-8 h-8" />
                </div>
                <h3
                  className={`text-2xl font-semibold text-white mb-4 ${
                    language === 'ar' ? 'font-arabic' : 'font-poppins'
                  }`}
                >
                  {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
                </h3>
                <p className={`text-white/70 leading-relaxed ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {language === 'ar'
                    ? 'نتطلع للتواصل معك ومناقشة مشروعك القادم. فريقنا المتخصص جاهز لتقديم استشارة مجانية وتطوير حلول مخصصة تناسب احتياجاتك'
                    : 'We look forward to connecting with you and discussing your next project. Our specialized team is ready to provide free consultation and develop customized solutions that meet your needs'}
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#3f7c6a]/20 rounded-xl flex items-center justify-center group-hover:bg-[#3f7c6a]/40 transition-colors duration-300">
                      <info.icon className="w-5 h-5 text-[#5a9b83]" />
                    </div>
                    <div>
                      <p
                        className={`text-white/60 text-sm ${
                          language === 'ar' ? 'font-arabic' : ''
                        }`}
                      >
                        {info.title}
                      </p>
                      <p className="text-white group-hover:text-[#5a9b83] transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-strong rounded-3xl p-8 backdrop-blur-xl border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block text-white/80 text-sm font-medium mb-2 ${
                        language === 'ar' ? 'font-arabic text-right' : ''
                      }`}
                    >
                      {language === 'ar' ? 'الاسم' : 'Name'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#3f7c6a] transition-colors duration-300"
                      placeholder={language === 'ar' ? 'اسمك الكامل' : 'Your full name'}
                      required
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-white/80 text-sm font-medium mb-2 ${
                        language === 'ar' ? 'font-arabic text-right' : ''
                      }`}
                    >
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#3f7c6a] transition-colors duration-300"
                      placeholder={language === 'ar' ? 'بريدك الإلكتروني' : 'Your email address'}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-white/80 text-sm font-medium mb-2 ${
                      language === 'ar' ? 'font-arabic text-right' : ''
                    }`}
                  >
                    {language === 'ar' ? 'الموضوع' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#3f7c6a] transition-colors duration-300"
                    placeholder={language === 'ar' ? 'موضوع الرسالة' : 'Message subject'}
                    required
                  />
                </div>

                <div>
                  <label
                    className={`block text-white/80 text-sm font-medium mb-2 ${
                      language === 'ar' ? 'font-arabic text-right' : ''
                    }`}
                  >
                    {language === 'ar' ? 'الرسالة' : 'Message'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#3f7c6a] transition-colors duration-300 resize-none"
                    placeholder={
                      language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'
                    }
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#3f7c6a] to-[#5a9b83] text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-[#3f7c6a]/25 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span className={language === 'ar' ? 'font-arabic' : ''}>
                    {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Heart } from 'lucide-react';
import { useState } from 'react';

export function EnhancedFooter() {
  const { language } = useLanguage();
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/cactusmediajo', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/cactusmediajo', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/cactusmediajo', label: 'LinkedIn' },
  ];

  const quickLinks = language === 'ar' 
    ? [
        { label: 'من نحن', href: '#about' },
        { label: 'خدماتنا', href: '#services' },
        { label: 'أعمالنا', href: '#portfolio' },
        { label: 'تواصل معنا', href: '#contact' },
      ]
    : [
        { label: 'About Us', href: '#about' },
        { label: 'Our Services', href: '#services' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Contact', href: '#contact' },
      ];

  const services = language === 'ar'
    ? [
        'تطوير المواقع',
        'تصميم الهوية',
        'التسويق الرقمي',
        'التصوير والإنتاج',
      ]
    : [
        'Web Development',
        'Brand Design',
        'Digital Marketing',
        'Photography & Production',
      ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Enhanced Background with Noise and Subtle Movement */}
      <div className="absolute inset-0">
        {/* Noise Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Subtle Moving Glows - Restored Original Positions */}
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            rotate: [0, 0.5, 0],
            x: [0, 2, 0],
            y: [0, -1, 0],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-jaded-green-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.02, 1, 1.02],
            rotate: [0, -0.5, 0],
            x: [0, -2, 0],
            y: [0, 1, 0],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-gold-500/10 to-transparent rounded-full blur-3xl"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-jaded-green-900/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/assets/Logo.png"
                alt="Cactus Media Group"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className={`text-xl font-bold ${language === 'ar' ? 'font-arabic' : 'font-barlow'}`}>
                  {language === 'ar' ? 'مجموعة كاكتوس الإعلامية' : 'Cactus Media Group'}
                </h3>
                <p className="text-jaded-green-400 text-sm font-medium">
                  {language === 'ar' ? 'في عالم مليء بالورود، كن صبارة!' : 'In a world full of flowers, be a cactus!'}
                </p>
              </div>
            </div>
            
            <p className={`text-white/70 leading-relaxed mb-6 max-w-md ${language === 'ar' ? 'font-arabic text-center' : ''}`}>
              {language === 'ar'
                ? 'نحن نقدم حلولاً رقمية متميزة مصممة للصمود والنمو. نحول الأفكار الجريئة إلى تجارب رقمية استثنائية تدفع نمو الأعمال.'
                : 'We provide premium digital solutions engineered for resilience and growth. Transforming bold ideas into exceptional digital experiences that drive business success.'}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-jaded-green-400" />
                <a 
                  href="mailto:info@cactusmediajo.com" 
                  className="text-white/80 hover:text-jaded-green-400 transition-colors duration-300"
                >
                  info@cactusmediajo.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className={`text-lg font-semibold mb-6 ${language === 'ar' ? 'font-arabic text-center' : ''}`}>
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-white/70 hover:text-jaded-green-400 transition-colors duration-300 ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className={`text-lg font-semibold mb-6 ${language === 'ar' ? 'font-arabic text-center' : ''}`}>
              {language === 'ar' ? 'خدماتنا' : 'Our Services'}
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className={`text-white/70 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Quick Call */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links - Left Side */}
            <div className="flex items-center gap-4">
              <span className={`text-white/70 mr-2 ${language === 'ar' ? 'font-arabic' : 'font-barlow'}`}>
                {language === 'ar' ? 'تابعنا:' : 'Follow us:'}
              </span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass-premium rounded-lg flex items-center justify-center hover:border-jaded-green-500/40 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-jaded-green-400 transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Quick Call - Right Side */}
            <div className="flex items-center gap-3">
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder={language === 'ar' ? 'اترك رقمك للاتصال السريع' : 'Leave Number For Quick Call'}
                className={`glass-premium px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:border-jaded-green-500/40 focus:outline-none transition-all duration-300 w-64 ${
                  language === 'ar' ? 'text-center font-arabic' : ''
                }`}
              />
              <button
                className="btn-premium px-6 py-2 rounded-lg font-medium whitespace-nowrap"
                disabled={loading || !phone}
                onClick={async () => {
                  setLoading(true);
                  try {
                    const res = await fetch('/api/quick-call', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ phone }),
                    });
                    if (res.ok) {
                      alert(language === 'ar' ? 'تم إرسال رقمك بنجاح!' : 'Your number has been sent!');
                      setPhone('');
                    } else {
                      const data = await res.json();
                      alert((language === 'ar' ? 'حدث خطأ أثناء الإرسال: ' : 'Error sending number: ') + (data.error || ''));
                    }
                  } catch {
                    alert(language === 'ar' ? 'تعذر الاتصال بالخادم.' : 'Could not connect to server.');
                  }
                  setLoading(false);
                }}
              >
                {loading
                  ? (language === 'ar' ? 'جاري الإرسال...' : 'Sending...')
                  : (language === 'ar' ? 'إرسال' : 'Submit')}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 mt-8 pt-6 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-white/60 text-sm text-center ${language === 'ar' ? 'font-arabic' : 'font-barlow'}`}>
              {language === 'ar'
                ? `© ${new Date().getFullYear()} مجموعة كاكتوس الإعلامية. جميع الحقوق محفوظة.`
                : `© ${new Date().getFullYear()} Cactus Media Group. All rights reserved.`}
            </p>
            
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

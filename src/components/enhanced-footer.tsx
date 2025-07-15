import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Heart } from 'lucide-react';

export function EnhancedFooter() {
  const { language } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
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
              <div className="w-12 h-12 glass-premium rounded-xl flex items-center justify-center">
                <img
                  src="/assets/Logo.png"
                  alt="Cactus Media Group"
                  className="h-8 w-auto"
                />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${language === 'ar' ? 'font-arabic' : 'font-poppins'}`}>
                  {language === 'ar' ? 'مجموعة كاكتوس الإعلامية' : 'Cactus Media Group'}
                </h3>
                <p className="text-gold-400 text-sm font-medium">
                  {language === 'ar' ? 'في عالم مليء بالورود، كن صبارة!' : 'In a world full of flowers, be a cactus!'}
                </p>
              </div>
            </div>
            
            <p className={`text-white/70 leading-relaxed mb-6 max-w-md ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
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
            <h4 className={`text-lg font-semibold mb-6 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
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
            <h4 className={`text-lg font-semibold mb-6 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
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

        {/* Social Links & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className={`text-white/70 mr-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
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

            {/* Newsletter */}
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder={language === 'ar' ? 'اشترك في النشرة الإخبارية' : 'Subscribe to newsletter'}
                className={`glass-premium px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:border-jaded-green-500/40 focus:outline-none transition-all duration-300 ${
                  language === 'ar' ? 'text-right font-arabic' : ''
                }`}
              />
              <button className="btn-premium px-6 py-2 rounded-lg font-medium">
                {language === 'ar' ? 'اشتراك' : 'Subscribe'}
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
            <p className={`text-white/60 text-sm ${language === 'ar' ? 'font-arabic' : ''}`}>
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
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { Award, Users, Target, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

export function ModernAboutSection() {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const stats = [
    { number: '500+', label: language === 'ar' ? 'مشروع مكتمل' : 'Projects Completed' },
    { number: '98%', label: language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction' },
    { number: '50+', label: language === 'ar' ? 'عميل سعيد' : 'Happy Clients' },
    { number: '5+', label: language === 'ar' ? 'سنوات خبرة' : 'Years Experience' }
  ];

  const values = [
    {
      icon: Target,
      title: language === 'ar' ? 'الدقة والتميز' : 'Precision & Excellence',
      desc: language === 'ar' ? 'نسعى للكمال في كل تفصيل' : 'We strive for perfection in every detail'
    },
    {
      icon: Lightbulb,
      title: language === 'ar' ? 'الإبداع والابتكار' : 'Creativity & Innovation',
      desc: language === 'ar' ? 'حلول مبتكرة تتجاوز التوقعات' : 'Innovative solutions that exceed expectations'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'التعاون والشراكة' : 'Collaboration & Partnership',
      desc: language === 'ar' ? 'نبني علاقات طويلة الأمد' : 'Building long-term relationships'
    }
  ];

  return (
    <section ref={containerRef} className="relative py-24 px-6 sm:px-8 bg-white overflow-hidden -mt-1">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-gold-500/10 to-gold-600/10 rounded-lg backdrop-blur-sm"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 120 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-jaded-green-500 to-gold-500 rounded-full mx-auto mb-8"
          />
          
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-6 ${
            language === 'ar' ? 'font-arabic' : 'font-poppins'
          }`}>
            {language === 'ar' ? 'من نحن' : 'About Us'}
          </h2>
          
          <p className={`text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed ${
            language === 'ar' ? 'font-arabic' : ''
          }`}>
            {language === 'ar'
              ? 'نحن فريق من المبدعين والمطورين المتخصصين في تقديم حلول رقمية متطورة تجمع بين الجمال والوظائف العملية'
              : 'We are a team of creators and developers specialized in delivering cutting-edge digital solutions that combine beauty with functionality'}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center modern-card p-8 subtle-glow"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1, type: "spring" }}
                className="text-4xl md:text-5xl font-bold gradient-text mb-2"
              >
                {stat.number}
              </motion.div>
              <p className={`text-white/70 font-medium ${language === 'ar' ? 'font-arabic' : ''}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={language === 'ar' ? 'order-2 lg:order-1' : ''}
          >
            <div className="space-y-8">
              <div>
                <h3 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${
                  language === 'ar' ? 'font-arabic text-right' : 'font-poppins'
                }`}>
                  {language === 'ar' ? 'رؤيتنا للمستقبل الرقمي' : 'Our Vision for Digital Future'}
                </h3>
                
                <p className={`text-lg text-white/80 leading-relaxed mb-8 ${
                  language === 'ar' ? 'font-arabic text-right' : ''
                }`}>
                  {language === 'ar'
                    ? 'نؤمن بأن التكنولوجيا يجب أن تكون جسراً يربط بين الأحلام والواقع. نحن نصمم تجارب رقمية تتجاوز التوقعات وتترك أثراً إيجابياً في حياة المستخدمين.'
                    : 'We believe technology should be a bridge connecting dreams to reality. We design digital experiences that exceed expectations and leave a positive impact on users\' lives.'}
                </p>

                {/* Key Points */}
                <div className="space-y-4">
                  {[
                    language === 'ar' ? 'تصميم يركز على المستخدم' : 'User-centered design approach',
                    language === 'ar' ? 'تقنيات حديثة ومتطورة' : 'Cutting-edge technologies',
                    language === 'ar' ? 'دعم مستمر وصيانة' : 'Continuous support & maintenance'
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-jaded-green-400 flex-shrink-0" />
                      <span className={`text-white/90 ${language === 'ar' ? 'font-arabic' : ''}`}>
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="modern-btn group"
              >
                {language === 'ar' ? 'اكتشف المزيد' : 'Discover More'}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={language === 'ar' ? 'order-1 lg:order-2' : ''}
          >
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="modern-card p-8 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-jaded-green-500 to-jaded-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className={`text-xl font-bold text-white mb-3 group-hover:text-jaded-green-400 transition-colors ${
                        language === 'ar' ? 'font-arabic text-right' : 'font-poppins'
                      }`}>
                        {value.title}
                      </h4>
                      <p className={`text-white/70 leading-relaxed ${
                        language === 'ar' ? 'font-arabic text-right' : ''
                      }`}>
                        {value.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { Search, Rocket, TrendingUp, Zap } from 'lucide-react';

export function ProcessSection() {
  const { language } = useLanguage();

  const processSteps = [
    {
      number: '01',
      icon: Search,
      title: {
        en: 'Consult & Strategize',
        ar: 'استشارة واستراتيجية'
      },
      description: {
        en: 'We dive deep into your business goals and create a strategic roadmap tailored to your vision.',
        ar: 'نتعمق في أهداف عملك ونضع خارطة طريق استراتيجية مصممة خصيصاً لرؤيتك.'
      },
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      number: '02',
      icon: Rocket,
      title: {
        en: 'Build & Deploy',
        ar: 'بناء ونشر'
      },
      description: {
        en: 'Our expert team brings your project to life with cutting-edge technology and premium design.',
        ar: 'يحيي فريقنا الخبير مشروعك بأحدث التقنيات والتصميم المتميز.'
      },
      color: 'from-jaded-green-500 to-jaded-green-600',
      bgColor: 'bg-jaded-green-50',
      iconColor: 'text-jaded-green-600'
    },
    {
      number: '03',
      icon: TrendingUp,
      title: {
        en: 'Support & Grow',
        ar: 'دعم ونمو'
      },
      description: {
        en: 'We provide ongoing support and optimization to ensure your digital presence continues to thrive.',
        ar: 'نقدم الدعم المستمر والتحسين لضمان استمرار ازدهار حضورك الرقمي.'
      },
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section className="relative py-20 px-6 sm:px-8 bg-gradient-to-br from-white via-gray-50 to-jaded-green-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-jaded-green-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-50/20 to-jaded-green-50/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-jaded-green-100/50 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
          >
            <Zap className="w-5 h-5 text-jaded-green-600" />
            <span className={`text-jaded-green-700 font-semibold ${language === 'ar' ? 'font-arabic' : 'font-barlow'}`}>
              {language === 'ar' ? 'عمليتنا' : 'Our Process'}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-jaded-green-800 to-gray-900 bg-clip-text text-transparent ${
              language === 'ar' ? 'font-arabic' : 'font-barlow'
            }`}
          >
            {language === 'ar' ? 'كيف نحقق النجاح معاً' : 'How We Achieve Success Together'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {language === 'ar'
              ? 'عملية مدروسة من ثلاث مراحل تضمن تحقيق أهدافك الرقمية بأعلى معايير الجودة والكفاءة'
              : 'A thoughtful three-stage process that ensures your digital goals are achieved with the highest standards of quality and efficiency'}
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              {/* Connection Line (Desktop) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0" />
              )}

              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 h-full">
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                  </div>
                  <div className={`text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300`}>
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-4 text-gray-900 group-hover:${step.iconColor.replace('text-', 'text-')} transition-colors duration-300 ${
                    language === 'ar' ? 'font-arabic text-center' : 'font-barlow'
                  }`}>
                    {step.title[language]}
                  </h3>

                  <p className={`text-gray-600 leading-relaxed ${
                    language === 'ar' ? 'font-arabic text-center' : ''
                  }`}>
                    {step.description[language]}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fast Delivery CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 rounded-2xl p-6 text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className={`text-left ${language === 'ar' ? 'text-right' : ''}`}>
                <p className={`font-bold text-lg ${language === 'ar' ? 'font-arabic' : 'font-barlow'}`}>
                  {language === 'ar' ? 'تحتاج سرعة؟' : 'Need it fast?'}
                </p>
                <p className={`text-white/90 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' 
                    ? 'اسأل عن خدمة التسليم السريع من 1-3 أيام للمشاريع المختارة'
                    : 'Ask about our 1-3 day expedited delivery for select projects'}
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-jaded-green-600 font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
            >
              <a href="/contact">
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </a>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
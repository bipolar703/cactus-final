import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { useOptimizedIntersection } from '@/utils/cache-manager';
import { Target, Award, Lightbulb, Heart } from 'lucide-react';

export function AboutSection() {
  const { language } = useLanguage();
  const { ref, isIntersecting } = useOptimizedIntersection();

  const features = [
    {
      icon: Target,
      title: language === 'ar' ? 'رؤيتنا' : 'Our Vision',
      desc:
        language === 'ar'
          ? 'نسعى لتحويل الأفكار إلى واقع رقمي متميز'
          : 'Transforming ideas into exceptional digital reality',
    },
    {
      icon: Award,
      title: language === 'ar' ? 'خبرتنا' : 'Our Expertise',
      desc:
        language === 'ar'
          ? 'فريق متخصص في التكنولوجيا والإبداع'
          : 'Specialized team in technology and creativity',
    },
    {
      icon: Lightbulb,
      title: language === 'ar' ? 'ابتكارنا' : 'Our Innovation',
      desc:
        language === 'ar'
          ? 'حلول مبتكرة تواكب أحدث التطورات'
          : 'Innovative solutions keeping pace with latest developments',
    },
    {
      icon: Heart,
      title: language === 'ar' ? 'شغفنا' : 'Our Passion',
      desc:
        language === 'ar'
          ? 'شغف حقيقي لإنجاز مشاريع استثنائية'
          : 'Real passion for delivering exceptional projects',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 sm:py-24 px-6 sm:px-8 mobile-section relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isIntersecting ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-jaded-green-600 to-jaded-green-400 rounded-full mx-auto mb-4 shadow-lg shadow-jaded-green-500/30"></div>
          </motion.div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
              language === 'ar' ? 'font-arabic leading-tight' : 'font-barlow leading-tight'
            }`}
          >
            {language === 'ar' ? 'قوة الإبداع' : 'Creative Excellence'}
          </h2>

          <p
            className={`text-lg md:text-xl lg:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed font-light ${
              language === 'ar' ? 'font-arabic text-center' : ''
            }`}
          >
            {language === 'ar'
              ? 'نحن نؤمن بالقوة والصلابة والإبداع. في عالم مليء بالزهور، نختار أن نكون صباراً - نزدهر في التحديات ونقدم حلولاً رقمية استثنائية تتجاوز التوقعات وتحقق النجاح المستدام.'
              : 'We believe in strength, resilience, and creative innovation. In a world full of flowers, we choose to be a cactus - thriving in challenging environments while delivering exceptional digital solutions that exceed expectations and drive sustainable success.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 20 }}
              animate={
                isIntersecting
                  ? {
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      x: index % 2 === 0 ? -40 : 40,
                      y: 20,
                    }
              }
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
              }}
              className="group cursor-pointer"
            >
              <div className="glass-strong rounded-2xl p-8 backdrop-blur-xl border border-white/10 hover:border-jaded-green-500/40 transition-all duration-500 hover-glow h-full">
                <div className={`flex items-start ${language === 'ar' ? 'space-x-reverse space-x-5' : 'space-x-5'}`}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-jaded-green-600 to-jaded-green-400 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-400 shadow-lg group-hover:shadow-jaded-green-500/30">
                      <feature.icon className="text-white w-8 h-8" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-xl font-bold text-white mb-3 group-hover:text-jaded-green-400 transition-colors duration-300 ${
                        language === 'ar' ? 'font-arabic text-center' : 'font-barlow'
                      }`}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className={`text-white/80 text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300 ${
                        language === 'ar' ? 'font-arabic text-center' : ''
                      }`}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>

                {/* Enhanced hover line effect */}
                <div className="h-0.5 bg-gradient-to-r from-jaded-green-600 to-jaded-green-400 rounded-full mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left shadow-sm"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  );
}

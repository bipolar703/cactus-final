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
      desc: language === 'ar' 
        ? 'نسعى لتحويل الأفكار إلى واقع رقمي متميز'
        : 'Transforming ideas into exceptional digital reality'
    },
    {
      icon: Award,
      title: language === 'ar' ? 'خبرتنا' : 'Our Expertise', 
      desc: language === 'ar'
        ? 'فريق متخصص في التكنولوجيا والإبداع'
        : 'Specialized team in technology and creativity'
    },
    {
      icon: Lightbulb,
      title: language === 'ar' ? 'ابتكارنا' : 'Our Innovation',
      desc: language === 'ar'
        ? 'حلول مبتكرة تواكب أحدث التطورات'
        : 'Innovative solutions keeping pace with latest developments'
    },
    {
      icon: Heart,
      title: language === 'ar' ? 'شغفنا' : 'Our Passion',
      desc: language === 'ar'
        ? 'شغف حقيقي لإنجاز مشاريع استثنائية'
        : 'Real passion for delivering exceptional projects'
    }
  ];

  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 bg-black/20 backdrop-blur-sm mobile-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isIntersecting ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-[#3f7c6a] to-[#5a9b83] rounded-full mx-auto mb-4"></div>
          </motion.div>
          
          <h2 className={`text-5xl md:text-6xl font-bold text-white mb-8 ${
            language === 'ar' ? 'font-arabic' : 'font-poppins'
          }`}>
            {language === 'ar' ? 'قوة الصبار' : 'Cactus Strength'}
          </h2>
          
          <p className={`text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light ${
            language === 'ar' ? 'font-arabic text-right' : ''
          }`}>
            {language === 'ar' 
              ? 'نحن نؤمن بالقوة والصلابة. في عالم مليء بالزهور، نختار أن نكون صباراً - نزدهر في البيئات الصعبة ونقدم حلولاً استثنائية.'
              : 'We believe in strength and resilience. In a world full of flowers, we choose to be a cactus - thriving in challenging environments and delivering exceptional solutions.'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
              animate={isIntersecting ? { 
                opacity: 1, 
                x: 0, 
                y: 0 
              } : { 
                opacity: 0, 
                x: index % 2 === 0 ? -50 : 50, 
                y: 30 
              }}
              transition={{ 
                delay: index * 0.3, 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glass-strong rounded-3xl p-10 backdrop-blur-xl border border-white/10 hover:border-[#3f7c6a]/30 transition-all duration-500 hover-glow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#3f7c6a] to-[#5a9b83] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                      <feature.icon className="text-white w-10 h-10" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold text-white mb-4 group-hover:text-[#5a9b83] transition-colors duration-300 ${
                      language === 'ar' ? 'font-arabic' : 'font-poppins'
                    }`}>
                      {feature.title}
                    </h3>
                    
                    <p className={`text-white/80 text-lg leading-relaxed ${
                      language === 'ar' ? 'font-arabic text-right' : ''
                    }`}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
                
                {/* Hover line effect */}
                <div className="h-1 bg-gradient-to-r from-[#3f7c6a] to-[#5a9b83] rounded-full mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
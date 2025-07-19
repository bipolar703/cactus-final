import { motion, useInView } from 'framer-motion';
import { Users, Zap, FolderOpen, Mail, Palmtree, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useRef } from 'react';

interface EnhancedNavigationProps {
  onModalOpen: (modal: string) => void;
}

export function EnhancedNavigation({ onModalOpen }: EnhancedNavigationProps) {
  const { t, language } = useLanguage();
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: '-100px' });

  const navItems = [
    { 
      id: 'about', 
      icon: Users, 
      titleKey: 'about', 
      descKey: 'Our Story',
      gradient: 'from-blue-500 to-purple-600',
      hoverColor: 'hover:border-blue-500/40'
    },
    { 
      id: 'services', 
      icon: Zap, 
      titleKey: 'services', 
      descKey: 'What We Do',
      gradient: 'from-jaded-green-500 to-emerald-600',
      hoverColor: 'hover:border-jaded-green-500/40'
    },
    { 
      id: 'portfolio', 
      icon: FolderOpen, 
      titleKey: 'portfolio', 
      descKey: 'Our Work',
      gradient: 'from-orange-500 to-red-600',
      hoverColor: 'hover:border-orange-500/40'
    },
    { 
      id: 'contact', 
      icon: Mail, 
      titleKey: 'contact', 
      descKey: 'Get In Touch',
      gradient: 'from-pink-500 to-rose-600',
      hoverColor: 'hover:border-pink-500/40'
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gold-400 font-semibold tracking-wider uppercase text-sm">
              {language === 'ar' ? 'اكتشف عالمنا' : 'Discover Our World'}
            </span>
          </div>
          
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold cinematic-text mb-6 ${
              language === 'ar' ? 'font-arabic leading-tight' : 'font-barlow leading-tight'
            }`}
          >
            {language === 'ar' ? 'رحلة الإبداع' : 'Journey of Innovation'}
          </h2>
          
          <p
            className={`text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {language === 'ar'
              ? 'انطلق معنا في رحلة استكشافية عبر عوالم الإبداع والتميز الرقمي'
              : 'Embark with us on an exploratory journey through worlds of creativity and digital excellence'}
          </p>
        </motion.div>

        {/* Enhanced Navigation Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateX: 0 }
                  : { opacity: 0, y: 60, rotateX: -15 }
              }
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.4 },
              }}
              onClick={() => onModalOpen(item.id)}
              className="group cursor-pointer"
            >
              <div className={`glass-premium rounded-2xl p-8 h-full backdrop-blur-xl transition-all duration-500 border border-white/10 ${item.hoverColor} relative overflow-hidden`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon Container */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-400 shadow-lg`}>
                    <item.icon className="text-white w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className={`text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300 ${
                      language === 'ar' ? 'font-arabic text-center' : 'font-barlow'
                    }`}
                  >
                    {t(item.titleKey)}
                  </h3>
                  
                  <p
                    className={`text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300 mb-4 ${
                      language === 'ar' ? 'font-arabic text-center' : ''
                    }`}
                  >
                    {language === 'ar' 
                      ? item.id === 'about' ? 'قصتنا' 
                        : item.id === 'services' ? 'ما نقدمه'
                        : item.id === 'portfolio' ? 'أعمالنا'
                        : 'تواصل معنا'
                      : item.descKey
                    }
                  </p>

                  {/* Call to Action */}
                  <div className="flex items-center text-white/60 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium mr-2">
                      {language === 'ar' ? 'استكشف' : 'Explore'}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p
            className={`text-white/70 mb-6 ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {language === 'ar'
              ? 'هل أنت مستعد لبدء رحلتك الرقمية؟'
              : 'Ready to start your digital journey?'}
          </p>
          
          <button
            onClick={() => onModalOpen('contact')}
            className="btn-premium text-white px-8 py-3 rounded-full font-semibold group"
          >
            {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
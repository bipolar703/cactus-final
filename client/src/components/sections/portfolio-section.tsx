import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { useOptimizedIntersection } from '@/utils/cache-manager';
import { ExternalLink, Github, Eye } from 'lucide-react';

export function PortfolioSection() {
  const { language } = useLanguage();
  const { ref, isIntersecting } = useOptimizedIntersection();

  const projects = [
    {
      title: language === 'ar' ? 'موقع تجاري متطور' : 'Advanced E-commerce Site',
      category: language === 'ar' ? 'تطوير ويب' : 'Web Development',
      desc: language === 'ar' 
        ? 'متجر إلكتروني شامل مع نظام دفع آمن وإدارة متقدمة'
        : 'Comprehensive online store with secure payment and advanced management',
      image: '/assets/Logo-Png_1751779171296.png',
      tags: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      title: language === 'ar' ? 'هوية بصرية مؤسسية' : 'Corporate Brand Identity',
      category: language === 'ar' ? 'تصميم' : 'Design',
      desc: language === 'ar'
        ? 'هوية بصرية كاملة شملت الشعار والألوان والخطوط'
        : 'Complete visual identity including logo, colors, and typography',
      image: '/assets/Logo-Png_1751779171296.png',
      tags: ['Branding', 'Design', 'Identity']
    },
    {
      title: language === 'ar' ? 'تطبيق جوال تفاعلي' : 'Interactive Mobile App',
      category: language === 'ar' ? 'تطبيقات' : 'Mobile Apps',
      desc: language === 'ar'
        ? 'تطبيق ذكي يوفر تجربة مستخدم سلسة ومميزة'
        : 'Smart app providing smooth and distinctive user experience',
      image: '/assets/Logo-Png_1751779171296.png',
      tags: ['React Native', 'API', 'UI/UX']
    },
    {
      title: language === 'ar' ? 'حملة تسويقية رقمية' : 'Digital Marketing Campaign',
      category: language === 'ar' ? 'تسويق' : 'Marketing',
      desc: language === 'ar'
        ? 'استراتيجية تسويقية شاملة حققت نتائج متميزة'
        : 'Comprehensive marketing strategy achieving outstanding results',
      image: '/assets/Logo-Png_1751779171296.png',
      tags: ['Social Media', 'SEO', 'Analytics']
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
          <div className="inline-block relative mb-8">
            <h2 className={`text-5xl md:text-6xl font-bold text-white ${
              language === 'ar' ? 'font-arabic' : 'font-poppins'
            }`}>
              {language === 'ar' ? 'إبداعاتنا' : 'Our Creations'}
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isIntersecting ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#3f7c6a] to-[#5a9b83] rounded-full origin-center"
            />
          </div>
          
          <p className={`text-xl text-white/90 max-w-2xl mx-auto font-light ${
            language === 'ar' ? 'font-arabic' : ''
          }`}>
            {language === 'ar' 
              ? 'مشاريع تحكي قصص نجاح'
              : 'Projects that tell success stories'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isIntersecting ? { 
                opacity: 1, 
                y: 0, 
                scale: 1 
              } : { 
                opacity: 0, 
                y: 60, 
                scale: 0.95 
              }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
            >
              <div className="glass-strong rounded-3xl overflow-hidden backdrop-blur-xl hover-glow transition-all duration-500 border border-white/10">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Overlay Icons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-[#5a9b83] text-sm font-medium uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-semibold text-white mb-3 group-hover:text-[#5a9b83] transition-colors duration-300 ${
                    language === 'ar' ? 'font-arabic' : 'font-poppins'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-white/70 mb-6 leading-relaxed ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}>
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-[#3f7c6a]/20 text-[#5a9b83] text-xs rounded-full border border-[#3f7c6a]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3f7c6a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
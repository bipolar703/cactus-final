import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { useOptimizedIntersection } from '@/utils/cache-manager';
import { ExternalLink, Eye, Calendar } from 'lucide-react';
import { useRef } from 'react';

export function ModernPortfolioSection({ onViewPortfolio }: { onViewPortfolio: () => void }) {
  const { language } = useLanguage();
  const { ref, isIntersecting } = useOptimizedIntersection();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  const projects = [
    {
      id: 1,
      title: language === 'ar' ? 'موقع تجارة إلكترونية' : 'E-commerce Platform',
      category: language === 'ar' ? 'تطوير ويب' : 'Web Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      year: '2024',
      description: language === 'ar' 
        ? 'منصة تجارة إلكترونية متكاملة مع نظام إدارة متقدم'
        : 'Complete e-commerce platform with advanced management system'
    },
    {
      id: 2,
      title: language === 'ar' ? 'تطبيق موبايل' : 'Mobile Application',
      category: language === 'ar' ? 'تطبيقات الجوال' : 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      year: '2024',
      description: language === 'ar'
        ? 'تطبيق جوال ذكي لإدارة المهام والمشاريع'
        : 'Smart mobile app for task and project management'
    },
    {
      id: 3,
      title: language === 'ar' ? 'هوية بصرية' : 'Brand Identity',
      category: language === 'ar' ? 'تصميم العلامة التجارية' : 'Brand Design',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      year: '2024',
      description: language === 'ar'
        ? 'هوية بصرية شاملة لشركة تقنية ناشئة'
        : 'Complete visual identity for tech startup'
    },
    {
      id: 4,
      title: language === 'ar' ? 'حملة تسويقية' : 'Marketing Campaign',
      category: language === 'ar' ? 'التسويق الرقمي' : 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      year: '2023',
      description: language === 'ar'
        ? 'حملة تسويقية متكاملة عبر منصات متعددة'
        : 'Integrated marketing campaign across multiple platforms'
    },
    {
      id: 5,
      title: language === 'ar' ? 'موقع شركة' : 'Corporate Website',
      category: language === 'ar' ? 'تطوير ويب' : 'Web Development',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      year: '2023',
      description: language === 'ar'
        ? 'موقع شركة احترافي مع نظام إدارة المحتوى'
        : 'Professional corporate website with CMS'
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 sm:px-8 bg-slate-50 relative overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50"
      />
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-jaded-green-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-jaded-green-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isIntersecting ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-0.5 bg-jaded-green-600 mx-auto mb-8"
          />

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 ${
              language === 'ar' ? 'font-arabic leading-tight' : 'font-poppins leading-tight'
            }`}
          >
            {language === 'ar' ? 'معرض أعمالنا' : 'Our Portfolio'}
          </h2>

          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${
              language === 'ar' ? 'font-arabic text-right' : ''
            }`}
          >
            {language === 'ar'
              ? 'مجموعة مختارة من مشاريعنا المتميزة التي تعكس خبرتنا وإبداعنا'
              : 'A curated selection of our exceptional projects showcasing our expertise and creativity'}
          </p>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 100 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group cursor-pointer flex-shrink-0 w-80"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center"
                    >
                      <div className="flex gap-4">
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Eye className="w-5 h-5 text-white" />
                        </button>
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-jaded-green-600 font-medium uppercase tracking-wide">
                        {project.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.year}
                      </div>
                    </div>

                    <h3
                      className={`text-xl font-semibold text-gray-900 group-hover:text-jaded-green-600 transition-colors duration-300 ${
                        language === 'ar' ? 'font-arabic text-right' : ''
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`text-gray-600 text-sm leading-relaxed ${
                        language === 'ar' ? 'font-arabic text-right' : ''
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-gray-300 rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <button
            onClick={onViewPortfolio}
            className="bg-jaded-green-600 hover:bg-jaded-green-700 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {language === 'ar' ? 'عرض المحفظة الكاملة' : 'View Complete Portfolio'}
            <ExternalLink className="w-5 h-5 ml-2 inline" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
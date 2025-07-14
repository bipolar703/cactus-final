import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { useOptimizedIntersection } from '@/utils/cache-manager';
import { ExternalLink, Eye } from 'lucide-react';
import { portfolioProjects } from '@/data/portfolio';

export function PortfolioSection() {
  const { language } = useLanguage();
  const { ref, isIntersecting } = useOptimizedIntersection();

  const projects = portfolioProjects.map(project => ({
    title: project.title,
    category: project.category,
    desc: language === 'ar' 
      ? `موقع احترافي مع تصميم عصري وتجربة مستخدم متميزة - ${project.description}`
      : project.description,
    image: project.image,
    tags: project.tags,
    url: project.url,
    year: project.year,
  }));

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
          <div className="inline-block relative mb-8">
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white ${
                language === 'ar' ? 'font-arabic leading-tight' : 'font-poppins leading-tight'
              }`}
            >
              {language === 'ar' ? 'أعمالنا المتميزة' : 'Featured Projects'}
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isIntersecting ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-jaded-green-600 to-jaded-green-400 rounded-full origin-center shadow-lg shadow-jaded-green-500/30"
            />
          </div>

          <p
            className={`text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed ${
              language === 'ar' ? 'font-arabic text-right' : ''
            }`}
          >
            {language === 'ar' 
              ? 'مجموعة مختارة من مشاريعنا الناجحة التي تعكس خبرتنا في تطوير حلول رقمية مبتكرة وتصاميم استثنائية تحقق أهداف عملائنا وتتجاوز توقعاتهم'
              : 'A curated selection of our successful projects showcasing our expertise in developing innovative digital solutions and exceptional designs that achieve our clients\' goals and exceed their expectations'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={
                isIntersecting
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      y: 60,
                      scale: 0.95,
                    }
              }
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
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
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Eye className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-[#5a9b83] text-sm font-medium uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-semibold text-white mb-3 group-hover:text-[#5a9b83] transition-colors duration-300 ${
                      language === 'ar' ? 'font-arabic' : 'font-poppins'
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-white/70 mb-6 leading-relaxed ${
                      language === 'ar' ? 'font-arabic text-right' : ''
                    }`}
                  >
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
      <div className="section-divider"></div>
    </section>
  );
}

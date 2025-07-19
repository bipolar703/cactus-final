import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { useOptimizedIntersection } from '@/utils/cache-manager';
import { ExternalLink, Eye, Globe, Calendar } from 'lucide-react';
import { portfolioProjects } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

interface WebsiteShowcaseProps {
  onViewPortfolio: () => void;
}

export function WebsiteShowcase({ onViewPortfolio }: WebsiteShowcaseProps) {
  const { language } = useLanguage();
  const { ref, isIntersecting } = useOptimizedIntersection();

  const featuredProjects = portfolioProjects.slice(0, 3);

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
            initial={{ width: 0 }}
            animate={isIntersecting ? { width: 120 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-jaded-green-600 to-jaded-green-400 rounded-full mx-auto mb-8 shadow-lg shadow-jaded-green-500/30"
          />

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
              language === 'ar' ? 'font-arabic leading-tight' : 'font-barlow leading-tight'
            }`}
          >
            {language === 'ar' ? 'معرض مواقعنا المباشر' : 'Live Website Showcase'}
          </h2>

          <div className="max-w-4xl mx-auto">
            <p
              className={`text-lg md:text-xl text-white/90 leading-relaxed font-light ${
                language === 'ar' ? 'font-arabic text-center' : ''
              }`}
            >
              {language === 'ar'
                ? 'استكشف مجموعة مختارة من أحدث مشاريعنا مع لقطات مباشرة ومحدثة تلقائياً من المواقع الفعلية'
                : 'Explore a curated selection of our latest projects with live, automatically updated snapshots from actual websites'}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60, rotateY: -15 }}
              animate={
                isIntersecting
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateY: 0,
                    }
                  : {
                      opacity: 0,
                      y: 60,
                      rotateY: -15,
                    }
              }
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
                rotateY: 2,
                transition: { duration: 0.4 },
              }}
              className="group cursor-pointer"
            >
              <div className="glass-strong rounded-3xl overflow-hidden backdrop-blur-xl hover-glow transition-all duration-500 border border-white/10 hover:border-jaded-green-500/40">
                {/* Live Website Preview */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  <div className="absolute top-3 left-3 flex items-center space-x-2 z-10">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="absolute top-3 right-3 z-10">
                    <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-white/80">LIVE</span>
                    </div>
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      e.currentTarget.src = `https://via.placeholder.com/400x300/1e293b/5a9b83?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Overlay Actions */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-3">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Eye className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-jaded-green-400 text-sm font-medium uppercase tracking-wide">
                      {project.category}
                    </span>
                    <div className="flex items-center text-white/60 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.year}
                    </div>
                  </div>

                  <h3
                    className={`text-xl font-semibold text-white mb-3 group-hover:text-jaded-green-400 transition-colors duration-300 ${
                      language === 'ar' ? 'font-arabic' : 'font-barlow'
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-white/70 mb-4 text-sm leading-relaxed ${
                      language === 'ar' ? 'font-arabic text-center' : ''
                    }`}
                  >
                    {language === 'ar' 
                      ? `موقع احترافي مع تصميم عصري وتجربة مستخدم متميزة - ${project.description}`
                      : project.description}
                  </p>

                  {/* Live URL Display */}
                  <div className="flex items-center text-jaded-green-400/80 text-xs mb-4">
                    <Globe className="w-3 h-3 mr-1" />
                    <span className="truncate">{project.url.replace('https://', '')}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-jaded-green-600/20 text-jaded-green-400 text-xs rounded-full border border-jaded-green-600/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-jaded-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            onClick={onViewPortfolio}
            className="bg-gradient-to-r from-jaded-green-600 to-jaded-green-400 hover:from-jaded-green-500 hover:to-jaded-green-300 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {language === 'ar' ? 'عرض المحفظة الكاملة' : 'View Complete Portfolio'}
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
      <div className="section-divider"></div>
    </section>
  );
}
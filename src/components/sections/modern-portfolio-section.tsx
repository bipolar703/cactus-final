import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { useOptimizedIntersection } from '@/utils/cache-manager';
import { ExternalLink, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useRef, useState, useEffect, useCallback } from 'react';
import { portfolioProjects } from '@/data/portfolio';

export function ModernPortfolioSection() {
  const { language } = useLanguage();
  const { ref, isIntersecting } = useOptimizedIntersection();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  // Use actual portfolio projects
  const projects = portfolioProjects;

  // Enhanced scroll handling with better sync
  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const containerWidth = container.clientWidth;
    const cardWidth = 320; // Card width + gap

    // More accurate index calculation
    const visibleIndex = Math.round(scrollLeft / cardWidth);
    const newIndex = Math.max(0, Math.min(visibleIndex, projects.length - 1));

    setCurrentIndex(newIndex);
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);
  }, [projects.length]);

  // Scroll to specific project
  const scrollToProject = (index: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = 320;
    const targetScroll = index * cardWidth;

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  // Navigation functions
  const scrollLeft = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToProject(newIndex);
  };

  const scrollRight = () => {
    const newIndex = Math.min(projects.length - 1, currentIndex + 1);
    scrollToProject(newIndex);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return (
    <section
      id="portfolio-section"
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

      <div className="max-w-7xl mx-auto relative" ref={ref as React.RefObject<HTMLDivElement>}>
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
              language === 'ar' ? 'font-arabic leading-tight' : 'font-barlow leading-tight'
            }`}
          >
            {language === 'ar' ? 'معرض أعمالنا' : 'Our Portfolio'}
          </h2>

          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {language === 'ar'
              ? 'مجموعة مختارة من مشاريعنا المتميزة التي تعكس خبرتنا وإبداعنا'
              : 'A curated selection of our exceptional projects showcasing our expertise and creativity'}
          </p>
        </motion.div>

        {/* Enhanced Portfolio Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative group"
        >
          {/* Navigation Arrows (hidden on mobile) */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 items-center justify-center transition-all duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 items-center justify-center transition-all duration-300"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-8 scrollbar-hide touch-pan-x px-4 scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={isIntersecting ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group/card cursor-pointer flex-shrink-0 snap-start"
                onClick={() => window.open(project.url, '_blank')}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100/50 w-80 sm:w-96 transition-all duration-700 ${hoveredIndex === index ? 'scale-[1.03] -translate-y-2 shadow-2xl' : ''}`}
                >
                  {/* Project Image */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-1000 ${hoveredIndex === index ? 'scale-110' : ''}`}
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-jaded-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                        {project.category}
                      </span>
                    </div>
                    {/* Visit Website Button (hidden on mobile) */}
                    <div className={`absolute top-4 right-4 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0 hidden sm:block`}>
                      <div className="bg-jaded-green-600 hover:bg-jaded-green-700 text-white p-2.5 rounded-full shadow-lg backdrop-blur-sm">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  {/* Tags Section */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs font-medium text-gray-600 bg-gray-50 hover:bg-jaded-green-50 hover:text-jaded-green-700 px-3 py-1.5 rounded-full transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className={`text-gray-900 text-xl font-bold mb-2 ${language === 'ar' ? 'font-arabic' : 'font-barlow'}`}>{project.title}</h3>
                    <p className={`text-gray-600 text-sm leading-relaxed line-clamp-2 ${language === 'ar' ? 'font-arabic' : ''}`}>{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Modern Navigation Dots (hidden on mobile) */}
          <div className="hidden sm:flex justify-center mt-12">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToProject(index)}
                  className={`relative transition-all duration-300 focus:outline-none ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-jaded-green-500 rounded-full'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-125'
                  }`}
                  aria-label={`Go to project ${index + 1}: ${projects[index].title}`}
                >
                  {index === currentIndex && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-jaded-green-500 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
          {/* Scroll Hint (always visible) */}
          <div className="text-center mt-4">
            <p className={`text-sm text-gray-400 ${language === 'ar' ? 'font-arabic' : 'font-barlow'}`}>{language === 'ar' ? 'اسحب أو استخدم الأسهم للتنقل' : 'Scroll or use arrows to navigate'}</p>
          </div>
        </motion.div>
        {/* CTA Button (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hidden sm:block text-center mt-16"
        >
          <button
            onClick={() => window.open(projects[currentIndex].url, '_blank')}
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

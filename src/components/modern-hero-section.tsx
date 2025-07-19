import { useLanguage } from "@/hooks/use-language";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { useRef } from "react";

export function ModernHeroSection() {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Scroll to section by id
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-jaded-green-900/20 to-black"
    >
      {/* Subtle Glowing Background */}
      <div className="absolute inset-0">
        {/* Gentle gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-jaded-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-jaded-green-500/5 to-gold-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Main Slogan - Hero Title with Glowing Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          <motion.h1
            className={`text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight text-center relative z-10 ${
              language === "ar" ? "font-arabic" : "font-barlow"
            }`}
            animate={{
              textShadow: [
                "0 0 10px rgba(0, 150, 125, 0.3), 0 0 20px rgba(0, 150, 125, 0.2)",
                "0 0 15px rgba(0, 150, 125, 0.4), 0 0 30px rgba(0, 150, 125, 0.3)",
                "0 0 10px rgba(0, 150, 125, 0.3), 0 0 20px rgba(0, 150, 125, 0.2)",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {language === "ar"
              ? "في عالم مليء بالزهور، كن صبارة!"
              : "In A World Full Of Flowers, Be A Cactus!"}
          </motion.h1>

          {/* Multiple Glowing Background Effects */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-jaded-green-400/5 via-jaded-green-500/10 to-jaded-green-400/5 rounded-3xl blur-3xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Company Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed text-center font-light ${
            language === "ar" ? "font-arabic" : "font-barlow"
          }`}
        >
          {language === "ar" ? "مجموعة كاكتوس الإعلامية" : "Cactus Media Group"}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed ${
            language === "ar" ? "font-arabic text-center" : "text-center"
          }`}
        >
          {language === "ar"
            ? "حلول رقمية متطورة مصممة للمرونة والنمو. نحن نصنع تجارب رقمية استثنائية تجمع بين الجمال والوظائف العملية."
            : "Premium digital solutions engineered for resilience and growth. We craft exceptional digital experiences that combine beauty with functionality."}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            onClick={() => window.dispatchEvent(new CustomEvent('open-modal', { detail: 'services' }))}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0, 150, 125, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
          >
            <Play className="w-5 h-5" />
            {language === "ar" ? "خدماتنا" : "Our Services"}
          </motion.button>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            {language === "ar" ? "ابدأ مشروعك" : "Start Your Project"}
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col items-center"
        >
          <p className="text-gray-400 text-sm mb-4 font-light">
            {language === "ar" ? "اكتشف المزيد" : "Discover More"}
          </p>
          <motion.button
            onClick={() => scrollToSection("about")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full border border-white/20 hover:border-jaded-green-400/50 transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

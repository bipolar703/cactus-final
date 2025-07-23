import { useLanguage } from "@/hooks/use-language";
import { motion } from "@motionone/react";
import { ArrowDown, Play } from "lucide-react";
import { useRef } from "react";
import { Link } from "wouter";

export function ModernHeroSection() {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  // Removed useScroll and useTransform (not supported in @motionone/react)

  // Scroll to next section (about section)
  const scrollToNextSection = () => {
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-jaded-green-900/20 to-black"
    >
      {/* Flowing Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Bottom-to-Top Flow */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#3f7c6a]/15 via-[#3f7c6a]/8 via-[#3f7c6a]/4 to-transparent blur-2xl"
          animate={{
            y: [0, -100, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

        {/* Secondary Flow Layer */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-[#3f7c6a]/12 via-[#3f7c6a]/6 to-transparent blur-xl"
          animate={{
            y: [20, -80, 20],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2,
          }}
        />
      </div>

      {/* Flowing Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Aurora Wave */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#3f7c6a]/12 via-transparent via-[#4a8a75]/8 to-[#5a9d88]/10 blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        />

        {/* Secondary Aurora Layer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#4a8a75]/6 to-[#3f7c6a]/8 blur-2xl"
          animate={{
            x: [100, -100, 100],
            y: [50, -50, 50],
            scale: [1.1, 0.9, 1.1],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            delay: 5,
          }}
        />

        {/* Flowing Bottom Aurora */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#3f7c6a]/15 via-[#4a8a75]/8 to-transparent blur-2xl"
          animate={{
            y: [0, -80, 0],
            x: [-50, 50, -50],
            opacity: [0.4, 0.7, 0.4],
            scaleX: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />

        {/* Top Aurora Accent */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#5a9d88]/8 via-[#4a8a75]/4 to-transparent blur-xl"
          animate={{
            x: [50, -50, 50],
            opacity: [0.2, 0.4, 0.2],
            scaleY: [1, 1.5, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            delay: 3,
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        // Removed dynamic style for y, opacity (useScroll/useTransform not supported)
        className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto h-full flex flex-col justify-center items-center min-h-screen"
      >
        {/* Main Slogan - Hero Title with Glowing Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.5 }}
          className="relative mb-6 sm:mb-8 mt-24 sm:mt-28 lg:mt-32"
        >
          <motion.h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-3 sm:mb-6 leading-tight text-center relative z-10 ${
              language === "ar" ? "font-arabic" : "font-barlow"
            }`}
            animate={{
              textShadow: [
                "0 0 6px rgba(63, 124, 106, 0.4), 0 0 12px rgba(63, 124, 106, 0.3)",
                "0 0 10px rgba(63, 124, 106, 0.5), 0 0 20px rgba(63, 124, 106, 0.35)",
                "0 0 6px rgba(63, 124, 106, 0.4), 0 0 12px rgba(63, 124, 106, 0.3)",
              ],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
          >
            {language === "ar"
              ? "في عالم مليء بالزهور، كن صبارة!"
              : "In A World Full Of Flowers, Be A Cactus!"}
          </motion.h1>

          {/* Optimized Background Glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#3f7c6a]/4 via-[#3f7c6a]/6 to-[#3f7c6a]/4 rounded-3xl blur-xl sm:blur-3xl"
            animate={{
              scale: [1, 1.03, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Company Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-center font-light ${
            language === "ar" ? "font-arabic" : "font-barlow"
          }`}
        ></motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className={`text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mb-6 sm:mb-12 max-w-4xl mx-auto leading-relaxed ${
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
          transition={{ delay: 1.6, duration: 1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-16"
        >
          <Link href="/services">
            <motion.button
              className="bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 text-sm sm:text-base"
            >
              <Play className="w-5 h-5" />
              {language === "ar" ? "خدماتنا" : "Our Services"}
            </motion.button>
          </Link>

          <motion.a
            href="/contact"
            className="border-2 border-white/30 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
          >
            {language === "ar" ? "ابدأ مشروعك" : "Start Your Project"}
          </motion.a>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col items-center"
        >
          <motion.p
            className={`text-gray-300 text-base mb-6 font-medium ${
              language === "ar" ? "font-arabic" : "font-barlow"
            }`}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {language === "ar" ? "اكتشف المزيد" : "Discover More"}
          </motion.p>

          <motion.button
            onClick={scrollToNextSection}
            className="relative group p-3 sm:p-4 rounded-full bg-[#3f7c6a]/20 border-2 border-[#3f7c6a]/40 hover:border-[#3f7c6a] backdrop-blur-sm transition-all duration-300"
          >
            {/* Pulsing background effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#3f7c6a]/10"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Bouncing arrow */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#3f7c6a] transition-colors duration-300 relative z-10" />
            </motion.div>
          </motion.button>

          {/* Scroll hint line */}
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-[#3f7c6a]/50 to-transparent mt-4"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

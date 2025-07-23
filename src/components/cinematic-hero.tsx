import { useLanguage } from "@/hooks/use-language";
import { motion } from "@motionone/react";
// Removed useMotionValue, useScroll, useSpring, useTransform (framer-motion only)
import { useEffect, useRef, useState } from "react";
import { OptimizedImage } from "./performance-wrapper";

interface CinematicHeroProps {}

export function CinematicHero() {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  // Removed all framer-motion hooks and scroll-based animation
  // Fallback: static animation only
  const [hovered, setHovered] = useState(false);
  // No mouse parallax or scroll-based transforms
  const handleMouseMove = () => {};

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Cinematic Video Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
      >
        {/* Enhanced Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-jaded-green-950/40 via-transparent to-jaded-green-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60" />

        {/* Color Grading Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-blue-900/10 mix-blend-overlay" />

        {/* Enhanced Film Grain */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <div className="absolute inset-0 bg-noise animate-grain" />
        </div>

        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/50" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 perspective-1000"
      >
        {/* Logo with Advanced Animation */}
        <motion.div
          initial={{
            scale: 0.3,
            opacity: 0,
            y: -100,
            rotateX: -45
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
            rotateX: 0
          }}
          transition={{
            duration: 2,
            delay: 0.5
          }}
          className="mb-16 perspective-1000"
        />

        {/* Tagline with Cinematic Typography */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          className="mb-12 space-y-6"
        >
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 ${
              language === "ar" ? "font-arabic" : "font-barlow"
            } text-shadow-strong leading-tight tracking-wide`}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="block"
            >
              {language === "ar"
                ? "حلول رقمية متميزة"
                : "Premium Digital Solutions"}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto ${
              language === "ar"
                ? "font-arabic leading-relaxed"
                : "leading-relaxed"
            } text-shadow-soft`}
          >
            {language === "ar"
              ? "في عالم مليء بالورود، كن صبارة!"
              : "In a world full of flowers, be a cactus!"}
          </motion.p>
        </motion.div>

        {/* CTA Buttons with Advanced Interactions */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button
            className="group relative bg-gradient-to-r from-jaded-green-600 to-jaded-green-400 text-white font-semibold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-jaded-green-500/40 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-jaded-green-400 to-jaded-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span
              className={`relative z-10 ${language === "ar" ? "font-arabic" : ""} text-lg`}
            >
              {language === "ar" ? "اكتشف خدماتنا" : "Discover Our Services"}
            </span>
          </button>

          <button
            className="group glass-strong text-white font-semibold px-10 py-5 rounded-2xl backdrop-blur-xl border border-white/30 hover:border-white/50 transition-all duration-500"
          >
            <span
              className={`${language === "ar" ? "font-arabic" : ""} text-lg`}
            >
              {language === "ar" ? "تواصل معنا" : "Contact Us"}
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

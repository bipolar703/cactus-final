import { useLanguage } from "@/hooks/use-language";
import { motion } from "@motionone/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useRef, useState } from "react";
import { ModalOverlay } from "../modal-overlay";

export function ModernAboutSection() {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  // Removed useInView, useScroll, useTransform
  const [showPortfolio, setShowPortfolio] = useState(false);
  // Fallback for isInView: always true for static animation
  const isInView = true;

  // Animated icon sources
  const animatedIcons = [
    "/assets/animated/target.gif",
    "/assets/animated/bulb.gif",
    "/assets/animated/partner.gif",
  ];

  const values = [
    {
      icon: animatedIcons[0],
      title: language === "ar" ? "الدقة والتميز" : "Precision & Excellence",
      desc:
        language === "ar"
          ? "نسعى للكمال في كل تفصيل"
          : "We strive for perfection in every detail",
    },
    {
      icon: animatedIcons[1],
      title:
        language === "ar" ? "الإبداع والابتكار" : "Creativity & Innovation",
      desc:
        language === "ar"
          ? "حلول مبتكرة تتجاوز التوقعات"
          : "Innovative solutions that exceed expectations",
    },
    {
      icon: animatedIcons[2],
      title:
        language === "ar" ? "التعاون والشراكة" : "Collaboration & Partnership",
      desc:
        language === "ar"
          ? "نبني علاقات طويلة الأمد"
          : "Building long-term relationships",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden -mt-1 text-white w-full"
    >
      {/* Dark sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating Icon with Glow Effect */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-16 sm:bottom-32 left-4 sm:left-16 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-jaded-green-400/12 rounded-full blur-xl animate-pulse" />
            <div className="absolute inset-0 bg-jaded-green-300/6 rounded-full blur-2xl" />
            {/* Icon */}
            <img
              src="/assets/Icon.png"
              alt="Cactus Media Group"
              className="relative w-16 h-16 sm:w-24 sm:h-24 object-contain opacity-25 drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 0 15px rgba(34, 197, 94, 0.2))",
              }}
            />
          </div>
        </motion.div>

        {/* Additional Floating Icons */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], x: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-16 sm:top-32 right-4 sm:right-20 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-jaded-green-400/8 rounded-full blur-lg animate-pulse" />
            <img
              src="/assets/Icon.png"
              alt="Cactus Media Group"
              className="relative w-12 h-12 sm:w-16 sm:h-16 object-contain opacity-15"
              style={{
                filter: "drop-shadow(0 0 10px rgba(34, 197, 94, 0.15))",
              }}
            />
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20 w-full flex flex-col items-center"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ duration: 1 }}
            className="h-1 bg-jaded-green-500 rounded-full mx-auto mb-8"
          />

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 text-center w-full ${
              language === "ar" ? "font-arabic" : "font-barlow"
            }`}
          >
            {language === "ar" ? "من نحن" : "About Us"}
          </h2>

          <p
            className={`text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-center w-full ${
              language === "ar" ? "font-arabic" : ""
            }`}
          >
            {language === "ar"
              ? "نحن فريق من المبدعين والمطورين المتخصصين في تقديم حلول رقمية متطورة تجمع بين الجمال والوظائف العملية"
              : "We are a team of creators and developers specialized in delivering cutting-edge digital solutions that combine beauty with functionality"}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center justify-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`w-full flex flex-col ${language === "ar" ? "order-2 lg:order-1 items-center text-center" : "items-start"}`}
          >
            <div className="space-y-6 sm:space-y-8 w-full">
              <div className="w-full">
                <h3
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 w-full ${
                    language === "ar"
                      ? "font-arabic text-center"
                      : "font-barlow text-left"
                  }`}
                >
                  {language === "ar"
                    ? "رؤيتنا للمستقبل الرقمي"
                    : "Our Vision for Digital Future"}
                </h3>

                <p
                  className={`text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8 w-full ${
                    language === "ar" ? "font-arabic text-center" : "text-left"
                  }`}
                >
                  {language === "ar"
                    ? "نؤمن بأن التكنولوجيا يجب أن تكون جسراً يربط بين الأحلام والواقع. نحن نصمم تجارب رقمية تتجاوز التوقعات وتترك أثراً إيجابياً في حياة المستخدمين."
                    : "We believe technology should be a bridge connecting dreams to reality. We design digital experiences that exceed expectations and leave a positive impact on users' lives."}
                </p>

                {/* Key Points */}
                <div
                  className={`space-y-3 sm:space-y-4 w-full ${language === "ar" ? "flex flex-col items-center" : ""}`}
                >
                  {[
                    language === "ar"
                      ? "تصميم يركز على المستخدم"
                      : "User-centered design approach",
                    language === "ar"
                      ? "تقنيات حديثة ومتطورة"
                      : "Cutting-edge technologies",
                    language === "ar"
                      ? "دعم مستمر وصيانة"
                      : "Continuous support & maintenance",
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className={`flex items-center gap-3 ${language === "ar" ? "justify-center" : "justify-start"} w-full max-w-md ${language === "ar" ? "mx-auto" : ""}`}
                    >
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-jaded-green-400 flex-shrink-0" />
                      <span
                        className={`text-sm sm:text-base text-gray-200 ${language === "ar" ? "font-arabic" : ""}`}
                      >
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`modern-btn group w-full sm:w-auto ${language === "ar" ? "mx-auto" : ""}`}
                onClick={() => setShowPortfolio(true)}
              >
                {language === "ar" ? "اكتشف المزيد" : "Discover More"}
                <ArrowRight
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${language === "ar" ? "mr-2" : "ml-2"} group-hover:${language === "ar" ? "-translate-x-1" : "translate-x-1"} transition-transform inline`}
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`w-full ${language === "ar" ? "order-1 lg:order-2" : ""}`}
          >
            <div className="space-y-4 sm:space-y-6 w-full">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="modern-card p-4 sm:p-6 lg:p-8 group cursor-pointer w-full"
                >
                  <div
                    className={`flex items-start gap-3 sm:gap-4 ${language === "ar" ? "flex-col items-center text-center" : ""}`}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-jaded-green-50 flex-shrink-0">
                      <img
                        src={value.icon}
                        alt={value.title}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                        loading="lazy"
                        decoding="async"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>

                    <div
                      className={`flex-1 w-full ${language === "ar" ? "text-center" : ""}`}
                    >
                      <h4
                        className={`text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-jaded-green-400 transition-colors ${
                          language === "ar"
                            ? "font-arabic text-center"
                            : "font-barlow"
                        }`}
                      >
                        {value.title}
                      </h4>
                      <p
                        className={`text-sm sm:text-base text-gray-200 leading-relaxed ${
                          language === "ar" ? "font-arabic text-center" : ""
                        }`}
                      >
                        {value.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {/* Portfolio Modal Overlay */}
      <ModalOverlay
        isOpen={showPortfolio}
        onClose={() => setShowPortfolio(false)}
      >
        <div className="p-8 sm:p-12">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="/assets/Icon.png"
              alt="Cactus Media Group Icon"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-2xl font-bold text-gray-900">
              {language === "ar"
                ? "محفظة أعمالنا الكاملة"
                : "Our Full Portfolio"}
            </h2>
          </div>
          <div className="text-gray-300 text-lg font-barlow">
            {language === "ar"
              ? "سيتم عرض جميع المشاريع هنا..."
              : "All projects will be shown here..."}
          </div>
        </div>
      </ModalOverlay>
    </section>
  );
}

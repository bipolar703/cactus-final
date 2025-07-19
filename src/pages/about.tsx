import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import {
    Globe, Heart,
    Lightbulb,
    Shield, Target, Users
} from "lucide-react";

export default function About() {
  const { language } = useLanguage();

  // SEO and meta data
  const pageTitle =
    language === "ar"
      ? "من نحن | مجموعة كاكتوس الإعلامية"
      : "About Us | Cactus Media Group";
  const pageDescription =
    language === "ar"
      ? "تعرف على قصتنا وفريقنا وقيمنا. نحن شركة رائدة في مجال الحلول الرقمية المبتكرة والتسويق الإلكتروني المتطور."
      : "Learn about our story, team, and values. We are a leading company in innovative digital solutions and advanced digital marketing.";

  const teamMembers = [
    {
      name: { en: "Ahmed Al-Rashid", ar: "أحمد الراشد" },
      role: { en: "CEO & Founder", ar: "الرئيس التنفيذي والمؤسس" },
      image: "/assets/team/ceo.jpg",
      bio: {
        en: "Visionary leader with 10+ years in digital innovation",
        ar: "قائد ذو رؤية مع أكثر من 10 سنوات في الابتكار الرقمي",
      },
    },
    {
      name: { en: "Sarah Johnson", ar: "سارة جونسون" },
      role: { en: "Creative Director", ar: "مديرة الإبداع" },
      image: "/assets/team/creative.jpg",
      bio: {
        en: "Award-winning designer specializing in brand identity",
        ar: "مصممة حائزة على جوائز متخصصة في هوية العلامة التجارية",
      },
    },
    {
      name: { en: "Omar Hassan", ar: "عمر حسان" },
      role: { en: "Lead Developer", ar: "مطور رئيسي" },
      image: "/assets/team/developer.jpg",
      bio: {
        en: "Full-stack expert in modern web technologies",
        ar: "خبير تطوير شامل في تقنيات الويب الحديثة",
      },
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: { en: "Innovation", ar: "الابتكار" },
      desc: {
        en: "We constantly push boundaries to deliver cutting-edge solutions",
        ar: "نتجاوز الحدود باستمرار لتقديم حلول متطورة",
      },
    },
    {
      icon: Shield,
      title: { en: "Quality", ar: "الجودة" },
      desc: {
        en: "Excellence in every project, from concept to completion",
        ar: "التميز في كل مشروع، من المفهوم إلى الإنجاز",
      },
    },
    {
      icon: Heart,
      title: { en: "Passion", ar: "الشغف" },
      desc: {
        en: "Driven by passion for creating exceptional digital experiences",
        ar: "مدفوعون بالشغف لإنشاء تجارب رقمية استثنائية",
      },
    },
    {
      icon: Globe,
      title: { en: "Global Vision", ar: "رؤية عالمية" },
      desc: {
        en: "Thinking globally while acting locally for our clients",
        ar: "نفكر عالمياً ونعمل محلياً لعملائنا",
      },
    },
  ];

  const stats = [
    { number: "100+", label: { en: "Happy Clients", ar: "عميل راضٍ" } },
    { number: "250+", label: { en: "Projects Completed", ar: "مشروع مكتمل" } },
    { number: "5+", label: { en: "Years Experience", ar: "سنوات خبرة" } },
    { number: "15+", label: { en: "Team Members", ar: "عضو فريق" } },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        name="keywords"
        content={
          language === "ar"
            ? "من نحن, فريق العمل, قيم الشركة, رؤية, رسالة"
            : "about us, team, company values, vision, mission"
        }
      />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/about" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />

      <main className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-jaded-green-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-jaded-green-100/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-gold-100/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 pt-32 pb-20 px-6 sm:px-8">
          {/* Hero Section */}
          <div className="max-w-6xl mx-auto text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-jaded-green-800 to-gray-900 bg-clip-text text-transparent ${
                language === "ar" ? "font-arabic" : "font-barlow"
              }`}
            >
              {language === "ar" ? "من نحن" : "About Us"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {language === "ar"
                ? "نحن فريق من المبدعين والمطورين المتخصصين في تقديم حلول رقمية مبتكرة تساعد الشركات على النمو والازدهار في العصر الرقمي"
                : "We are a team of creators and developers specialized in providing innovative digital solutions that help businesses grow and thrive in the digital age"}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-jaded-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div
                    className={`text-gray-600 font-medium ${language === "ar" ? "font-arabic" : ""}`}
                  >
                    {stat.label[language]}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-6xl mx-auto mb-20"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-gray-100/50">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 ${
                  language === "ar" ? "font-arabic" : "font-barlow"
                }`}
              >
                {language === "ar" ? "قصتنا" : "Our Story"}
              </h2>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p
                    className={`text-lg text-gray-700 leading-relaxed mb-6 ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {language === "ar"
                      ? "بدأت رحلتنا برؤية بسيطة: مساعدة الشركات على التميز في العالم الرقمي. منذ تأسيسنا، نمونا لنصبح شريكاً موثوقاً للعديد من الشركات في المنطقة."
                      : "Our journey began with a simple vision: helping businesses excel in the digital world. Since our founding, we have grown to become a trusted partner for many companies in the region."}
                  </p>
                  <p
                    className={`text-lg text-gray-700 leading-relaxed ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {language === "ar"
                      ? "نؤمن بقوة الإبداع والتكنولوجيا في تحويل الأفكار إلى واقع رقمي مذهل. فريقنا المتنوع يجمع بين الخبرة التقنية والرؤية الإبداعية."
                      : "We believe in the power of creativity and technology to transform ideas into stunning digital reality. Our diverse team combines technical expertise with creative vision."}
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-jaded-green-100 to-jaded-green-50 rounded-2xl p-8 text-center">
                    <Target className="w-16 h-16 text-jaded-green-600 mx-auto mb-4" />
                    <h3
                      className={`text-xl font-bold text-gray-900 mb-2 ${
                        language === "ar" ? "font-arabic" : "font-barlow"
                      }`}
                    >
                      {language === "ar" ? "رؤيتنا" : "Our Vision"}
                    </h3>
                    <p
                      className={`text-gray-700 ${language === "ar" ? "font-arabic" : ""}`}
                    >
                      {language === "ar"
                        ? "أن نكون الشريك الأول للشركات في رحلتها الرقمية"
                        : "To be the premier partner for companies in their digital journey"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-6xl mx-auto mb-20"
          >
            <h2
              className={`text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 ${
                language === "ar" ? "font-arabic" : "font-barlow"
              }`}
            >
              {language === "ar" ? "قيمنا" : "Our Values"}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 text-center shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-jaded-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-jaded-green-600" />
                  </div>
                  <h3
                    className={`text-xl font-bold text-gray-900 mb-4 ${
                      language === "ar" ? "font-arabic" : "font-barlow"
                    }`}
                  >
                    {value.title[language]}
                  </h3>
                  <p
                    className={`text-gray-600 leading-relaxed ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {value.desc[language]}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-6xl mx-auto mb-20"
          >
            <h2
              className={`text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 ${
                language === "ar" ? "font-arabic" : "font-barlow"
              }`}
            >
              {language === "ar" ? "فريقنا" : "Our Team"}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 text-center shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-jaded-green-100 to-jaded-green-50 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-jaded-green-600" />
                  </div>
                  <h3
                    className={`text-xl font-bold text-gray-900 mb-2 ${
                      language === "ar" ? "font-arabic" : "font-barlow"
                    }`}
                  >
                    {member.name[language]}
                  </h3>
                  <p
                    className={`text-jaded-green-600 font-semibold mb-4 ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {member.role[language]}
                  </p>
                  <p
                    className={`text-gray-600 ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {member.bio[language]}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 rounded-3xl p-12 text-white shadow-2xl">
              <h3
                className={`text-3xl md:text-4xl font-bold mb-6 ${
                  language === "ar" ? "font-arabic" : "font-barlow"
                }`}
              >
                {language === "ar"
                  ? "جاهز للعمل معنا؟"
                  : "Ready to Work With Us?"}
              </h3>
              <p
                className={`text-xl mb-8 opacity-90 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {language === "ar"
                  ? "دعنا نساعدك في تحقيق أهدافك الرقمية وبناء حضور قوي على الإنترنت"
                  : "Let us help you achieve your digital goals and build a strong online presence"}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-jaded-green-600 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="/contact">
                  {language === "ar" ? "تواصل معنا الآن" : "Contact Us Now"}
                </a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}

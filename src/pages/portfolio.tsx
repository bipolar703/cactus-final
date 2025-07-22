import { portfolioProjects } from "@/data/portfolio";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "@motionone/react";
import { ExternalLink, Eye } from "lucide-react";
import { Link } from "wouter";

export default function Portfolio() {
  const { language } = useLanguage();

  // SEO and meta data
  const pageTitle =
    language === "ar"
      ? "معرض أعمالنا المتميزة | مجموعة كاكتوس الإعلامية"
      : "Our Exceptional Portfolio | Cactus Media Group";
  const pageDescription =
    language === "ar"
      ? "استكشف مجموعة مختارة من مشاريعنا المتميزة في تطوير المواقع والتصميم والتسويق الرقمي. شاهد كيف نحول الأفكار إلى واقع رقمي مذهل."
      : "Explore our curated selection of exceptional projects in web development, design, and digital marketing. See how we transform ideas into stunning digital reality.";

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        name="keywords"
        content={
          language === "ar"
            ? "معرض أعمال, مشاريع ويب, تصميم مواقع, تطوير تطبيقات, هوية بصرية"
            : "portfolio, web projects, website design, app development, visual identity"
        }
      />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />

      <main className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-jaded-green-50 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-jaded-green-100/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-gold-100/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-jaded-green-50/10 to-gold-50/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 pt-32 pb-20 px-6 sm:px-8">
          {/* Header Section */}
          <div className="max-w-7xl mx-auto text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-jaded-green-800 to-gray-900 bg-clip-text text-transparent ${
                language === "ar" ? "font-arabic" : "font-barlow"
              }`}
            >
              {language === "ar"
                ? "معرض أعمالنا المتميزة"
                : "Our Exceptional Portfolio"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {language === "ar"
                ? "استكشف مجموعة مختارة من مشاريعنا المتميزة التي تجسد رؤيتنا في تحويل الأفكار إلى واقع رقمي مذهل"
                : "Explore our curated selection of exceptional projects that embody our vision of transforming ideas into stunning digital reality"}
            </motion.p>
          </div>

          {/* Portfolio Categories */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["All", "Web Development", "Branding", "Digital Marketing"].map(
                (category, index) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                      index === 0
                        ? "bg-jaded-green-600 text-white shadow-lg"
                        : "bg-white/80 text-gray-700 hover:bg-jaded-green-50 hover:text-jaded-green-700"
                    } ${language === "ar" ? "font-arabic" : "font-barlow"}`}
                  >
                    {language === "ar"
                      ? {
                          All: "الكل",
                          "Web Development": "تطوير المواقع",
                          Branding: "الهوية البصرية",
                          "Digital Marketing": "التسويق الرقمي",
                        }[category]
                      : category}
                  </motion.button>
                ),
              )}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 * idx,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -12, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-gray-100/50 hover:shadow-2xl hover:border-jaded-green-200/50 transition-all duration-500 h-full"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Project Type Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-jaded-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {project.category || "Web Development"}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <ExternalLink className="w-6 h-6 text-jaded-green-600" />
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-3">
                        <h2
                          className={`text-2xl font-bold text-gray-900 group-hover:text-jaded-green-800 transition-colors duration-300 ${
                            language === "ar" ? "font-arabic" : "font-barlow"
                          }`}
                        >
                          {project.title}
                        </h2>
                        <Eye className="w-5 h-5 text-gray-400 group-hover:text-jaded-green-600 transition-colors duration-300" />
                      </div>

                      <p
                        className={`text-gray-600 mb-6 leading-relaxed ${
                          language === "ar" ? "font-arabic" : ""
                        }`}
                      >
                        {project.description}
                      </p>

                      {/* Project Stats */}
                      <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {language === "ar" ? "مكتمل" : "Completed"}
                        </span>
                        <span>{project.year || "2024"}</span>
                        <span>{project.duration || "4 weeks"}</span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-jaded-green-50 text-jaded-green-700 px-3 py-1 rounded-full text-sm font-medium border border-jaded-green-100 group-hover:bg-jaded-green-100 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-jaded-green-600 to-jaded-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Portfolio Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="max-w-6xl mx-auto mt-20"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-gray-100/50">
              <h3
                className={`text-3xl font-bold text-center mb-12 text-gray-900 ${
                  language === "ar" ? "font-arabic" : "font-barlow"
                }`}
              >
                {language === "ar"
                  ? "إنجازاتنا بالأرقام"
                  : "Our Achievements in Numbers"}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  {
                    number: "150+",
                    label:
                      language === "ar" ? "مشروع مكتمل" : "Projects Completed",
                  },
                  {
                    number: "98%",
                    label:
                      language === "ar" ? "رضا العملاء" : "Client Satisfaction",
                  },
                  {
                    number: "50+",
                    label: language === "ar" ? "عميل سعيد" : "Happy Clients",
                  },
                  {
                    number: "24/7",
                    label: language === "ar" ? "دعم فني" : "Technical Support",
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-jaded-green-600 mb-2">
                      {stat.number}
                    </div>
                    <div
                      className={`text-gray-600 font-medium ${language === "ar" ? "font-arabic" : ""}`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mt-20"
          >
            <div className="bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 rounded-3xl p-12 text-white shadow-2xl">
              <h3
                className={`text-3xl md:text-4xl font-bold mb-6 ${
                  language === "ar" ? "font-arabic" : "font-barlow"
                }`}
              >
                {language === "ar"
                  ? "مستعد لإنشاء مشروعك التالي؟"
                  : "Ready to Create Your Next Project?"}
              </h3>
              <p
                className={`text-xl mb-8 opacity-90 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {language === "ar"
                  ? "دعنا نساعدك في تحويل رؤيتك إلى مشروع رقمي استثنائي يترك أثراً دائماً"
                  : "Let us help you transform your vision into an exceptional digital project that leaves a lasting impact"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-jaded-green-600 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {language === "ar" ? "ابدأ مشروعك" : "Start Your Project"}
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  >
                    {language === "ar"
                      ? "استكشف خدماتنا"
                      : "Explore Our Services"}
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}

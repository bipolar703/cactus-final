import {
  Zap,
  Globe,
  TrendingUp,
  Palette,
  Camera,
  Film,
  PenTool,
  Search,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useState } from 'react';
import { ServiceDetail } from '@/components/service-detail';

export function ServicesModal() {
  const { t, language } = useLanguage();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const serviceCategories = [
    {
      category: language === 'ar' ? 'الاستراتيجية الرقمية' : 'Digital Strategy',
      icon: Zap,
      services: [
        {
          icon: Globe,
          title: t('webDevelopment'),
          description: t('webDevDesc'),
          features: [t('webDevFeatures').split(', ')[0], t('webDevFeatures').split(', ')[1], t('webDevFeatures').split(', ')[2]],
        },
        {
          icon: Search,
          title: t('seoAnalysis'),
          description: t('seoDesc'),
          features: [language === 'ar' ? 'تحليل الكلمات المفتاحية' : 'Keyword Analysis', language === 'ar' ? 'تحسين المحتوى' : 'Content Optimization'],
        },
        {
          icon: Mail,
          title: t('emailMarketing'),
          description: t('emailDesc'),
          features: [language === 'ar' ? 'تصميم النشرات' : 'Newsletter Design', language === 'ar' ? 'إدارة القوائم' : 'List Management'],
        },
      ],
    },
    {
      category: language === 'ar' ? 'العلامة التجارية والتصميم' : 'Branding & Design',
      icon: Palette,
      services: [
        {
          icon: Palette,
          title: t('branding'),
          description: t('brandingDesc'),
          features: [language === 'ar' ? 'تصميم الشعار' : 'Logo Design', language === 'ar' ? 'دليل الهوية' : 'Brand Guidelines', language === 'ar' ? 'الهوية المتكاملة' : 'Complete Identity'],
        },
        {
          icon: PenTool,
          title: t('graphicDesign'),
          description: t('graphicDesignDesc'),
          features: [language === 'ar' ? 'تصاميم إبداعية' : 'Creative Designs', language === 'ar' ? 'مواد تسويقية' : 'Marketing Materials'],
        },
      ],
    },
    {
      category: language === 'ar' ? 'التسويق الأدائي' : 'Performance Marketing',
      icon: TrendingUp,
      services: [
        {
          icon: TrendingUp,
          title: t('socialMedia'),
          description: t('socialMediaDesc'),
          features: [language === 'ar' ? 'إدارة المحتوى' : 'Content Management', language === 'ar' ? 'تحليل الأداء' : 'Performance Analytics'],
        },
        {
          icon: Film,
          title: t('videography'),
          description: t('videographyDesc'),
          features: [language === 'ar' ? 'إنتاج احترافي' : 'Professional Production', language === 'ar' ? 'مونتاج متقدم' : 'Advanced Editing'],
        },
        {
          icon: Camera,
          title: t('photography'),
          description: t('photographyDesc'),
          features: [language === 'ar' ? 'تصوير احترافي' : 'Professional Photography', language === 'ar' ? 'معالجة متقدمة' : 'Advanced Processing'],
        },
      ],
    },
  ];

  // Sample service details for demo
  const serviceDetails = {
    'Digital Strategy-0': {
      id: 'web-development',
      title: t('webDevelopment'),
      description: t('webDevDesc'),
      features: t('webDevFeatures').split(', '),
      features: t('webDevFeatures').split(', '),
      benefits: t('webDevBenefits').split(', '),
      process: t('webDevProcess').split(', '),
      cta: t('webDevCTA'),
    },
  };

  if (selectedService && serviceDetails[selectedService]) {
    return (
      <ServiceDetail
        service={serviceDetails[selectedService]}
        onBack={() => setSelectedService(null)}
        onContact={() => {
          setSelectedService(null);
          // Would trigger contact modal
        }}
      />
    );
  }

  return (
    <div className={`p-6 sm:p-8 lg:p-12 ${language === 'ar' ? 'text-right font-arabic' : ''}`}>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3f7c6a] to-[#5a9b83] rounded-3xl mb-6">
          <Zap className="text-white w-8 h-8" />
        </div>
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 ${
            language === 'ar' ? 'font-arabic' : 'font-poppins'
          }`}
        >
          {t('servicesTitle')}
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          {t('servicesSubtitle')}
        </p>

        {/* Premium Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#3f7c6a] to-[#5a9b83] rounded-full text-white font-medium text-sm mt-4">
          <span className="mr-2">✨</span>
          {language === 'ar' ? 'حلول متميزة' : 'Premium Solutions'}
        </div>
      </div>

      {/* Service Categories */}
      <div className="space-y-12">
        {serviceCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3f7c6a] to-[#5a9b83] rounded-2xl mr-4">
                <category.icon className="text-white w-8 h-8" />
              </div>
              <h3
                className={`text-2xl sm:text-3xl font-bold text-gray-800 ${
                  language === 'ar' ? 'font-arabic' : 'font-poppins'
                }`}
              >
                {category.category}
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#3f7c6a]/30 group cursor-pointer"
                  onClick={() => setSelectedService(`${category.category}-${serviceIndex}`)}
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#3f7c6a]/10 to-[#5a9b83]/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-[#3f7c6a] w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-[#3f7c6a] font-medium bg-[#3f7c6a]/5 rounded-lg px-3 py-2 flex items-center"
                      >
                        <div className="w-2 h-2 bg-[#3f7c6a] rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-[#3f7c6a] text-sm font-medium group-hover:text-[#2d5a4a] transition-colors">
                    {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-[#3f7c6a] to-[#5a9b83] rounded-3xl p-8 sm:p-10 text-white text-center mt-12">
        <h3
          className={`text-2xl sm:text-3xl font-bold mb-4 ${
            language === 'ar' ? 'font-arabic' : 'font-poppins'
          }`}
        >
          {t('packageDeals')}
        </h3>
        <p className="text-white/90 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
          {t('packageDealsText')}
        </p>
        <button className="bg-white text-[#3f7c6a] px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
          {t('requestQuote')}
        </button>
      </div>
    </div>
  );
}

import { FolderOpen, Play, Camera as CameraIcon, Film, Tv, Share } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function PortfolioModal() {
  const { t, language } = useLanguage();

  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      title: t('corporateVideoSeries'),
      description: language === 'ar' ? 'بنك الراجحي - حملة العلامة التجارية' : 'Al-Rajhi Bank - Brand Campaign',
      icon: Play
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      title: t('fashionPhotography'),
      description: language === 'ar' ? 'مجموعة العلامة التجارية الفاخرة' : 'Luxury Brand Collection',
      icon: CameraIcon
    },
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      title: t('tvCommercial'),
      description: language === 'ar' ? 'حملة اليوم الوطني' : 'National Day Campaign',
      icon: Tv
    },
    {
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      title: t('eventPhotography'),
      description: language === 'ar' ? 'حفل إطلاق نيوم' : 'NEOM Launch Event',
      icon: CameraIcon
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      title: t('socialMediaContent'),
      description: language === 'ar' ? 'حملة التسويق الرقمي' : 'Digital Marketing Campaign',
      icon: Share
    },
    {
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      title: t('documentaryFilm'),
      description: language === 'ar' ? 'مشروع رؤية السعودية 2030' : 'Saudi Vision 2030 Project',
      icon: Film
    }
  ];

  return (
    <div className={`p-8 md:p-12 ${language === 'ar' ? 'text-right font-arabic' : ''}`}>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center mb-4">
          <img 
            src="/assets/Logo-Png_1751779171296.png" 
            alt="Cactus Media Group" 
            className="h-16 w-auto"
          />
        </div>
        <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 ${
          language === 'ar' ? 'font-arabic' : 'font-poppins'
        }`}>
          {t('portfolioTitle')}
        </h2>
        <p className="text-lg text-gray-600">{t('portfolioSubtitle')}</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {portfolioItems.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <item.icon className="text-white text-3xl w-8 h-8" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-3">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-6">
          {language === 'ar' 
            ? 'هل تريد رؤية المزيد؟ اتصل بنا لعرض محفظة أعمالنا الكاملة ومناقشة مشروعك القادم.'
            : 'Ready to see more? Contact us to view our complete portfolio and discuss your next project.'
          }
        </p>
        <button className="bg-cactus-green text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold">
          {t('viewCompletePortfolio')}
        </button>
      </div>
    </div>
  );
}

import { Users, Award, Clock, Handshake } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function AboutModal() {
  const { t, language } = useLanguage();

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
          {t('aboutTitle')}
        </h2>
        <p className="text-lg text-gray-600">{t('aboutSubtitle')}</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold text-cactus-green mb-4">{t('ourMission')}</h3>
          <p className="text-gray-700 leading-relaxed">
            {t('missionText')}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-cactus-green mb-4">{t('ourVision')}</h3>
          <p className="text-gray-700 leading-relaxed">
            {t('visionText')}
          </p>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-semibold text-cactus-green mb-4">{t('whyChooseUs')}</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <Award className="text-gold text-2xl mb-2 mx-auto w-6 h-6" />
            <h4 className="font-semibold text-gray-800">{t('awardWinning')}</h4>
            <p className="text-sm text-gray-600">
              {language === 'ar' ? 'تميز معترف به في الصناعة' : 'Industry recognized excellence'}
            </p>
          </div>
          <div className="text-center">
            <Clock className="text-gold text-2xl mb-2 mx-auto w-6 h-6" />
            <h4 className="font-semibold text-gray-800">{t('fastDelivery')}</h4>
            <p className="text-sm text-gray-600">
              {language === 'ar' ? 'إنجاز المشاريع في الوقت المحدد' : 'On-time project completion'}
            </p>
          </div>
          <div className="text-center">
            <Handshake className="text-gold text-2xl mb-2 mx-auto w-6 h-6" />
            <h4 className="font-semibold text-gray-800">{t('trustedPartner')}</h4>
            <p className="text-sm text-gray-600">
              {language === 'ar' ? 'علاقات طويلة الأمد مع العملاء' : 'Long-term client relationships'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Mail, MapPin, Phone, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export function ContactModal() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: language === 'ar' ? 'تم الإرسال بنجاح' : 'Message Sent Successfully',
          description: language === 'ar' 
            ? 'سنتواصل معك قريباً' 
            : 'We will get back to you soon',
        });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: language === 'ar' ? 'خطأ' : 'Error',
        description: language === 'ar' 
          ? 'فشل في إرسال الرسالة. حاول مرة أخرى.' 
          : 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: 'web-development', label: language === 'ar' ? 'تطوير المواقع' : 'Web Development' },
    { value: 'branding', label: language === 'ar' ? 'الهوية التجارية' : 'Branding' },
    { value: 'social-media', label: language === 'ar' ? 'وسائل التواصل' : 'Social Media' },
    { value: 'graphic-design', label: language === 'ar' ? 'التصميم الجرافيكي' : 'Graphic Design' },
    { value: 'videography', label: language === 'ar' ? 'التصوير المرئي' : 'Videography' },
    { value: 'photography', label: language === 'ar' ? 'التصوير الفوتوغرافي' : 'Photography' },
    { value: 'content-creation', label: language === 'ar' ? 'إنشاء المحتوى' : 'Content Creation' },
    { value: 'seo', label: language === 'ar' ? 'تحسين محركات البحث' : 'SEO' },
    { value: 'email-marketing', label: language === 'ar' ? 'التسويق عبر البريد' : 'Email Marketing' },
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
          {t('contactTitle')}
        </h2>
        <p className="text-lg text-gray-600">{t('contactSubtitle')}</p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-cactus-green mb-6">{t('contactInfo')}</h3>
          
          <div className="space-y-4 mb-8">
            <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <MapPin className={`text-desert-orange w-6 h-6 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
              <span className="text-gray-700">{t('address')}</span>
            </div>
            <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <Phone className={`text-desert-orange w-6 h-6 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
              <span className="text-gray-700" dir="ltr">{t('phone')}</span>
            </div>
            <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <Mail className={`text-desert-orange w-6 h-6 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
              <span className="text-gray-700">{t('email')}</span>
            </div>
            <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <Clock className={`text-desert-orange w-6 h-6 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
              <span className="text-gray-700">{t('workingHours')}</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">{t('followUs')}</h4>
            <div className={`flex space-x-4 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
              <a href="#" className="bg-cactus-green text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-cactus-green text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-cactus-green text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-cactus-green text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className={language === 'ar' ? 'text-right' : ''}>
          <h3 className="text-xl font-semibold text-cactus-green mb-6">{t('sendMessage')}</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {t('fullName')} *
              </label>
              <Input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder={t('fullNamePlaceholder')}
                className={language === 'ar' ? 'text-right' : ''}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {t('emailAddress')} *
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t('emailPlaceholder')}
                dir="ltr"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {t('phoneNumber')}
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={t('phonePlaceholder')}
                dir="ltr"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {t('serviceInterested')}
              </label>
              <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger className={language === 'ar' ? 'text-right' : ''}>
                  <SelectValue placeholder={t('selectService')} />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {t('message')} *
              </label>
              <Textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t('messagePlaceholder')}
                className={`resize-none ${language === 'ar' ? 'text-right' : ''}`}
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-cactus-green hover:bg-cactus-green/80"
            >
              {isSubmitting 
                ? (language === 'ar' ? 'جارٍ الإرسال...' : 'Sending...') 
                : t('sendMessageBtn')
              }
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

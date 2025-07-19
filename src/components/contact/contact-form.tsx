import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  projectType: z.string().min(1, 'Project type is required'),
  message: z.string().min(1, 'Message is required'),
});

export function ContactForm() {
  const { language } = useLanguage();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      projectType: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      toast({
        title: 'Success!',
        description: 'Your message has been sent.',
      });
      form.reset();
    } else {
      toast({
        title: 'Error!',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100/50">
      <h2 className={`text-3xl font-bold mb-8 text-gray-900 ${language === 'ar' ? 'font-arabic text-center' : 'font-barlow'}`}>
        {language === 'ar' ? 'ابدأ مشروعك معنا' : 'Start Your Project With Us'}
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'ar' ? 'الاسم الأول' : 'First Name'}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={language === 'ar' ? 'أدخل اسمك الأول' : 'Enter your first name'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'ar' ? 'الاسم الأخير' : 'Last Name'}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={language === 'ar' ? 'أدخل اسمك الأخير' : 'Enter your last name'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                </FormLabel>
                <FormControl>
                  <Input placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'نوع المشروع' : 'Project Type'}
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={language === 'ar' ? 'اختر نوع المشروع' : 'Select project type'} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="web-development">{language === 'ar' ? 'تطوير موقع' : 'Web Development'}</SelectItem>
                    <SelectItem value="branding">{language === 'ar' ? 'هوية بصرية' : 'Branding'}</SelectItem>
                    <SelectItem value="digital-marketing">{language === 'ar' ? 'تسويق رقمي' : 'Digital Marketing'}</SelectItem>
                    <SelectItem value="content-creation">{language === 'ar' ? 'إنشاء محتوى' : 'Content Creation'}</SelectItem>
                    <SelectItem value="photography">{language === 'ar' ? 'تصوير احترافي' : 'Photography'}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'تفاصيل المشروع' : 'Project Details'}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={language === 'ar' ? 'أخبرنا عن مشروعك وأهدافك' : 'Tell us about your project and goals'}
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button type="submit" className="w-full bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
            </Button>
          </motion.div>
        </form>
      </Form>
    </div>
  );
}

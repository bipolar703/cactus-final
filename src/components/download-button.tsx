import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';

interface DownloadButtonProps {
  className?: string;
}

export function DownloadButton({ className = '' }: DownloadButtonProps) {
  const { language } = useLanguage();

  const handleDownload = () => {
    window.open('/download', '_blank');
  };

  return (
    <Button
      onClick={handleDownload}
      variant="outline"
      className={`border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white ${className}`}
    >
      <Download className="h-4 w-4 mr-2" />
      {language === 'ar' ? 'تحميل الكود المصدري' : 'Download Source Code'}
    </Button>
  );
}

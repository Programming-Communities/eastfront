'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, Phone, Mail, ExternalLink, Send, MessageCircle, Globe } from 'lucide-react';
import { useTheme } from '@/components/ui/ThemeProvider';

export default function Footer() {
  const t = useTranslations('Footer');
  const common = useTranslations('Common');
  const pathname = usePathname();
  const { theme } = useTheme();
  
  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'ur';
  const currentYear = new Date().getFullYear();

  // Dynamic social links with translations
  const socialLinks = [
    { 
      name: t('telegram'), 
      url: common('telegramLink') || 'https://t.me/eastfront_pk',
      icon: Send,
      color: 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
    },
    { 
      name: t('whatsapp'), 
      url: common('whatsappLink') || 'https://wa.me/+923412786433',
      icon: MessageCircle,
      color: 'bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800'
    }
  ];

  // Dynamic quick links with locale
  const quickLinks = [
    { name: t('home'), href: `/${currentLocale}`, key: 'home' },
    { name: t('about'), href: `/${currentLocale}/about`, key: 'about' },
    { name: t('books'), href: `/${currentLocale}/books`, key: 'books' },
    { name: t('whatsappGroups'), href: `/${currentLocale}/whatsapp`, key: 'whatsappGroups' },
    { name: t('news'), href: `/${currentLocale}/news`, key: 'news' },
    { name: t('contact'), href: `/${currentLocale}/contact`, key: 'contact' },
  ];

  // Mission and vision based on locale
  const missionText = currentLocale === 'ur' 
    ? common('missionUrdu') 
    : common('missionEnglish') || t('defaultMission');
  
  const visionText = currentLocale === 'ur'
    ? common('visionUrdu')
    : common('visionEnglish') || t('defaultVision');

  return (
    <footer className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-900 text-white'} transition-colors duration-200`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section - Dynamic */}
          <div>
            <h3 className="text-xl font-bold mb-4">{common('title')}</h3>
            <p className="text-gray-400 dark:text-gray-300 mb-4">
              {common('description') || t('defaultDescription')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 ${social.color} rounded-lg transition-colors duration-200 flex items-center space-x-2`}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Dynamic with locale */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span>{link.name}</span>
                    {link.href.includes('#') && (
                      <ExternalLink className="w-3 h-3 ml-1" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Dynamic */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                <div>
                  <p className="text-gray-400 dark:text-gray-300 text-sm font-urdu">
                    {common('addressUrdu')}
                  </p>
                  <p className="text-gray-400 dark:text-gray-300 text-sm">
                    {common('addressEnglish')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400 shrink-0" />
                <a 
                  href={`tel:${common('phone')}`}
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {common('phone')}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400 shrink-0" />
                <a 
                  href={`mailto:${common('email')}`}
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {common('email')}
                </a>
              </div>
            </div>
          </div>

          {/* Mission & Vision - Dynamic with locale */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('mission')}</h4>
            <p className={`text-gray-400 dark:text-gray-300 mb-4 ${currentLocale === 'ur' ? 'font-urdu' : ''}`}>
              {missionText}
            </p>
            <h4 className="text-lg font-bold mb-4">{t('vision')}</h4>
            <p className={`text-gray-400 dark:text-gray-300 ${currentLocale === 'ur' ? 'font-urdu' : ''}`}>
              {visionText}
            </p>
          </div>
        </div>

        {/* Copyright - Dynamic */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-300">
          <p>{t('copyright', { year: currentYear })}</p>
          <p className="text-sm mt-2">
            {common('editorialNote') || t('editorial')}
          </p>
          <div className="flex items-center justify-center space-x-2 mt-1 opacity-75">
            <Globe className="w-3 h-3" />
            <p className="text-xs">
              {t('language')}: {currentLocale.toUpperCase()} | {t('version')}: 1.0.0
            </p>
          </div>
          <div className="mt-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Theme: {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
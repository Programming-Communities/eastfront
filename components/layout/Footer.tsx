'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, Phone, Mail, ExternalLink, Send, MessageCircle, Heart } from 'lucide-react';
import { useTheme } from '@/components/ui/ThemeProvider';

export default function Footer() {
  const t = useTranslations('Footer');
  const common = useTranslations('Common');
  const pathname = usePathname();
  const { theme } = useTheme();
  
  const currentLocale = pathname?.split('/')[1] || 'ur';
  const currentYear = new Date().getFullYear();

  // Social links with proper contrast (WCAG AA compliant)
  const socialLinks = [
    { 
      name: t('telegram'), 
      url: common('telegramLink') || 'https://t.me/eastfront_pk',
      icon: Send,
      color: 'bg-blue-700 hover:bg-blue-800 text-white',
      ariaLabel: 'Telegram channel'
    },
    { 
      name: t('whatsapp'), 
      url: common('whatsappLink') || 'https://wa.me/+923412786433',
      icon: MessageCircle,
      color: 'bg-green-700 hover:bg-green-800 text-white',
      ariaLabel: 'WhatsApp contact'
    }
  ];

  const quickLinks = [
    { name: t('home'), href: `/${currentLocale}`, key: 'home' },
    { name: t('about'), href: `/${currentLocale}/about`, key: 'about' },
    { name: t('books'), href: `/${currentLocale}/books`, key: 'books' },
    { name: t('whatsappGroups'), href: `/${currentLocale}/whatsapp`, key: 'whatsappGroups' },
    { name: t('news'), href: `/${currentLocale}/news`, key: 'news' },
    { name: t('contact'), href: `/${currentLocale}/contact`, key: 'contact' },
  ];

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
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">{common('title')}</h2>
            <p className="text-gray-200 dark:text-gray-200 mb-4 leading-relaxed">
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
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link 
                    href={link.href}
                    className="text-gray-200 dark:text-gray-200 hover:text-white transition-colors duration-200 flex items-center"
                    aria-label={`Go to ${link.name}`}
                  >
                    <span>{link.name}</span>
                    {link.href.includes('#') && (
                      <ExternalLink className="w-3 h-3 ml-1" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{t('contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-gray-200 dark:text-gray-200 text-sm">
                    {common('addressUrdu')}
                  </p>
                  <p className="text-gray-200 dark:text-gray-200 text-sm">
                    {common('addressEnglish')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400 shrink-0" aria-hidden="true" />
                <a 
                  href={`tel:${common('phone')}`}
                  className="text-gray-200 dark:text-gray-200 hover:text-white transition-colors duration-200"
                  aria-label={`Call ${common('phone')}`}
                >
                  {common('phone')}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400 shrink-0" aria-hidden="true" />
                <a 
                  href={`mailto:${common('email')}`}
                  className="text-gray-200 dark:text-gray-200 hover:text-white transition-colors duration-200"
                  aria-label={`Email ${common('email')}`}
                >
                  {common('email')}
                </a>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{t('mission')}</h3>
            <p className={`text-gray-200 dark:text-gray-200 mb-4 leading-relaxed ${currentLocale === 'ur' ? 'font-urdu' : ''}`}>
              {missionText}
            </p>
            <h3 className="text-lg font-bold mb-4 text-white">{t('vision')}</h3>
            <p className={`text-gray-200 dark:text-gray-200 leading-relaxed ${currentLocale === 'ur' ? 'font-urdu' : ''}`}>
              {visionText}
            </p>
          </div>
        </div>

        {/* Copyright - Fixed contrast */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 dark:text-gray-300 mb-3">
            {t('copyright', { year: currentYear })}
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Heart className="w-4 h-4 text-red-500" aria-hidden="true" />
            <a
              href="https://www.communities.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 dark:text-gray-300 hover:text-white transition-colors text-sm font-medium"
              aria-label="Made by Communities.pk - opens in new tab"
            >
              {t('madeBy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
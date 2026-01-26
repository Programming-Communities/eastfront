'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, Phone, Mail, ExternalLink, Send, MessageCircle } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');
  const common = useTranslations('Common');
  const pathname = usePathname();
  
  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'ur';
  const currentYear = new Date().getFullYear();

  // Dynamic social links with translations
  const socialLinks = [
    { 
      name: t('telegram'), 
      url: common('telegramLink') || 'https://t.me/eastfront_pk',
      icon: Send,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    { 
      name: t('whatsapp'), 
      url: common('whatsappLink') || 'https://wa.me/+923412786433',
      icon: MessageCircle,
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];

  // Dynamic quick links with locale
  const quickLinks = [
    { name: t('home'), href: `/${currentLocale}`, key: 'home' },
    { name: t('about'), href: `/${currentLocale}/about`, key: 'about' },
    { name: t('books'), href: `/${currentLocale}/books`, key: 'books' },
    { name: t('whatsappGroups'), href: `/${currentLocale}#whatsapp`, key: 'whatsappGroups' },
    { name: t('news'), href: `/${currentLocale}/news`, key: 'news' },
    { name: t('contact'), href: `/${currentLocale}/contact`, key: 'contact' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section - Dynamic */}
          <div>
            <h3 className="text-xl font-bold mb-4">{common('title')}</h3>
            <p className="text-gray-400 mb-4">
              {common('description') || t('defaultDescription')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 ${social.color} rounded-lg transition-colors flex items-center space-x-2`}
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
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
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
                <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm font-urdu">
                    {common('addressUrdu')}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {common('addressEnglish')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a 
                  href={`tel:${common('phone')}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {common('phone')}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a 
                  href={`mailto:${common('email')}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {common('email')}
                </a>
              </div>
            </div>
          </div>

          {/* Mission & Vision - Dynamic */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('mission')}</h4>
            <p className="text-gray-400 mb-4 font-urdu">
              {common('missionUrdu') || t('defaultMission')}
            </p>
            <h4 className="text-lg font-bold mb-4">{t('vision')}</h4>
            <p className="text-gray-400 font-urdu">
              {common('visionUrdu') || t('defaultVision')}
            </p>
          </div>
        </div>

        {/* Copyright - Dynamic */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('copyright', { year: currentYear })}</p>
          <p className="text-sm mt-2">
            {common('editorialNote') || t('editorial')}
          </p>
          <p className="text-xs mt-1 opacity-75">
            {t('language')}: {currentLocale.toUpperCase()} | {t('version')}: 1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
}
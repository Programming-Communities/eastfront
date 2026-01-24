import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');
  const common = useTranslations('Common');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">{common('title')}</h3>
            <p className="text-gray-400 mb-4">
              {common('description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/eastfront_pk" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <span className="text-sm">Telegram</span>
              </a>
              <a href="https://wa.me/+923412786433" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-gray-400 hover:text-white transition-colors">
                  {t('books')}
                </Link>
              </li>
              <li>
                <Link href="/#whatsapp" className="text-gray-400 hover:text-white transition-colors">
                  {t('whatsappGroups')}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  {t('news')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1" />
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
                <Phone className="w-5 h-5 text-red-400" />
                <a href="tel:+923412786433" className="text-gray-400 hover:text-white transition-colors">
                  {common('phone')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400" />
                <span className="text-gray-400">{common('email')}</span>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('mission')}</h4>
            <p className="text-gray-400 mb-4 font-urdu">
              {common('missionUrdu')}
            </p>
            <h4 className="text-lg font-bold mb-4">{t('vision')}</h4>
            <p className="text-gray-400 font-urdu">
              {common('visionUrdu')}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('copyright', { year: currentYear })}</p>
          <p className="text-sm mt-2">{t('editorial')}</p>
        </div>
      </div>
    </footer>
  );
}
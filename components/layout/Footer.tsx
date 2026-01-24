import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">EastFront PK</h3>
            <p className="text-gray-400 mb-4">
              سن 2011 سے جاری مزاحمت و مقاومت اسلامی کی خبریں، تحقیقات اور تجزیے
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
                  <p className="text-gray-400 text-sm">
                    سولجر بازار جمشید ٹاؤن کراچی شرقی پاکستان
                  </p>
                  <p className="text-gray-400 text-sm">
                    Soldier Bazaar Jamshed Town Karachi East Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400" />
                <a href="tel:+923412786433" className="text-gray-400 hover:text-white transition-colors">
                  +92 341 2786433
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400" />
                <span className="text-gray-400">info@eastfront.pk</span>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('mission')}</h4>
            <p className="text-gray-400 mb-4">
              حکمت ، قوت ، دیانت
            </p>
            <h4 className="text-lg font-bold mb-4">{t('vision')}</h4>
            <p className="text-gray-400">
              ظہور امام مہدی ع کی تیاری
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} EastFront PK. All rights reserved.</p>
          <p className="text-sm mt-2">اداریہ: مزمل حسن حاتمی - ایم فل بین الاقوامی تعلقات</p>
        </div>
      </div>
    </footer>
  );
}
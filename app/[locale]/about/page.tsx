import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { Users, Target, Shield, BookOpen, MapPin, Phone, Mail, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About - EastFront PK',
  description: 'Learn about EastFront PK Islamic Resistance movement',
};

const whatsappLinks = [
  "https://chat.whatsapp.com/GZJmBmUDH6TAWGs4suTI8R",
  "https://chat.whatsapp.com/HRr6iYtcC0q7eWiHu72Nkw",
  "https://chat.whatsapp.com/C57s4pVkQL34rZcGKLcjew",
  "https://chat.whatsapp.com/EMtO1UNopT85FqvVoYqWch",
  "https://chat.whatsapp.com/BQYftgpkz3z3qbLiCtcix4",
  "https://chat.whatsapp.com/EofDsqhArOELiKMhPXXYUh",
  "https://chat.whatsapp.com/DSOivpJVhzI8ckG3rDtwjM",
  "https://chat.whatsapp.com/DNeEppkyJteAzyKPpju0hO",
  "https://chat.whatsapp.com/DW78PRSHV865KauAAzS9tj",
  "https://chat.whatsapp.com/G4Wmb3MwoWc3JaekTXFQ7j",
  "https://chat.whatsapp.com/LjXk4Clg2ME2f72v5NyuI7",
  "https://chat.whatsapp.com/DWkpnsHLpfP2tQ16GeFX7G",
  "https://chat.whatsapp.com/FiItr3p2WHTKrThc1uZuKA",
  "https://chat.whatsapp.com/FUYQFooJepU2MgohEOrkMR",
  "https://chat.whatsapp.com/Ef46pt8FUITJukbJOsL15t",
  "https://chat.whatsapp.com/E3SqPJ6ES4PDaRjQfD2XSh",
  "https://chat.whatsapp.com/GzraA5uELGpDDK9PKMNYul",
  "https://chat.whatsapp.com/GRsOxck2R8U3MVBOQoER3n"
];

export default function AboutPage() {
  const t = useTranslations('About');
  const common = useTranslations('Common');

  return (
    <div className="min-h-screen py-10 px-4">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 mb-10 shadow-lg border border-gray-200 dark:border-gray-800">
          <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <BookOpen className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-3xl font-bold text-red-600 dark:text-red-400">{t('introduction')}</h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-right font-urdu">
              "سن 2011 سے جاری مزاحمت و مقاومت اسلامی کے متعلق 24/7 براہ راست تازہ ترین سیاسی ، عسکری اور سفارتی پیشرفت و حقائق پر مبنی خبریں، پولنگ، تحقیقاتی و تجزیاتی تحریریں، ہائی کوالٹی ویڈیو فوٹیجز، تصاویر، حکمت عملی پر مبنی نقشے، آڈیو/ویڈیو نشید اور ترانے، روزانہ تازہ اخبارات اور کتابیں نشر کی جاتی ہیں"
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-red-50 dark:from-blue-900/20 dark:to-red-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{t('purpose')}</h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 font-urdu">
                {common('visionUrdu')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-purple-50 dark:from-red-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
                <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">{t('mission')}</h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 font-urdu">
                {common('missionUrdu')}
              </p>
            </div>
          </div>

          {/* Editorial Section */}
          <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                <Users className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{t('editorial')}</h3>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h4 className="text-2xl font-bold mb-2 text-black dark:text-white font-urdu">
                {common('editorialUrdu')}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                MPhil International Relations, Pakistan-Iran Relations (Defense Affairs Researcher for Middle East)
              </p>
              <a href="tel:+923412786433" className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 text-lg">
                <Phone className="w-5 h-5" />
                {common('phone')}
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <MapPin className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-green-600 dark:text-green-400">{t('address')}</h3>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-urdu">
              {common('addressUrdu')}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
              {common('addressEnglish')}
            </p>
          </div>

          {/* Telegram Section */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">{t('telegram')}</h3>
            </div>
            <a 
              href="https://t.me/eastfront_pk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              <span className="text-2xl">📢</span>
              <div>
                <p className="text-lg font-semibold">t.me/eastfront_pk</p>
                <p className="text-sm text-blue-100">Join our Telegram channel</p>
              </div>
            </a>
          </div>
        </div>

        {/* WhatsApp Groups Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
            <span className="text-3xl">📱</span>
          </div>
          <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">{t('whatsappGroups')}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            18 Active WhatsApp groups for discussions, updates, and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {whatsappLinks.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-900 p-4 rounded-xl border border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                  <span className="text-lg">💬</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    WhatsApp Group {index + 1}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{link}</p>
                </div>
                <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full text-xs font-medium text-green-700 dark:text-green-300">
                  Active
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
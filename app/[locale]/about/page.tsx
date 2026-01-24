'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Users, Target, Shield, BookOpen, MapPin, Phone, Mail, Globe } from 'lucide-react';
import Image from 'next/image';

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
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: (e.clientX - window.innerWidth / 2) / 20,
        y: (e.clientY - window.innerHeight / 2) / 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen py-10 px-4">
      {/* Animated Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 
          className="text-[60px] leading-[80px] my-5 uppercase font-bold relative"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            textShadow: '0 0 10px #ff00ff, 0 0 20px #00ffff',
            background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          EASTFRONT PK
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-black/70 rounded-xl p-8 max-w-6xl mx-auto my-10 shadow-lg shadow-pink-500/50 border border-white/20"
      >
        <div className="mb-8 pb-8 border-b border-dashed border-white/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-pink-900/30 rounded-lg">
              <BookOpen className="w-8 h-8 text-pink-400" />
            </div>
            <h2 className="text-[32px] font-bold text-pink-500">{t('introduction')}</h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-300 text-right font-urdu">
            "سن 2011 سے جاری مزاحمت و مقاومت اسلامی کے متعلق 24/7 براہ راست تازہ ترین سیاسی ، عسکری اور سفارتی پیشرفت و حقائق پر مبنی خبریں، پولنگ، تحقیقاتی و تجزیاتی تحریریں، ہائی کوالٹی ویڈیو فوٹیجز، تصاویر، حکمت عملی پر مبنی نقشے، آڈیو/ویڈیو نشید اور ترانے، روزانہ تازہ اخبارات اور کتابیں نشر کی جاتی ہیں"
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-cyan-900/20 to-pink-900/20 p-6 rounded-xl border border-cyan-500/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-cyan-400" />
              <h3 className="text-[22px] font-bold text-cyan-400">{t('purpose')}</h3>
            </div>
            <p className="text-lg text-gray-300 font-urdu">ظہور امام مہدی ع کی تیاری</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 p-6 rounded-xl border border-pink-500/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-pink-400" />
              <h3 className="text-[22px] font-bold text-pink-400">{t('mission')}</h3>
            </div>
            <p className="text-lg text-gray-300 font-urdu">حکمت ، قوت ، دیانت</p>
          </motion.div>
        </div>

        {/* Editorial Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 pb-8 border-b border-dashed border-white/20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-yellow-900/30 rounded-lg">
              <Users className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-[28px] font-bold text-yellow-400">{t('editorial')}</h3>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-2 text-white">مزمل حسن حاتمی</h4>
            <p className="text-gray-300 mb-4 font-urdu">
              ایم فل بین الاقوامی تعلقات، موضوع پاک ایران (محقق دفاعی امور برائے مشرق وسطی)
            </p>
            <a href="tel:+923412786433" className="inline-flex items-center gap-2 text-yellow-300 hover:text-yellow-500 text-lg">
              <Phone className="w-5 h-5" />
              +92 341 2786433
            </a>
          </div>
        </motion.div>

        {/* Address Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 pb-8 border-b border-dashed border-white/20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-green-900/30 rounded-lg">
              <MapPin className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-[28px] font-bold text-green-400">{t('address')}</h3>
          </div>
          <p className="text-lg text-gray-300 font-urdu">
            سولجر بازار جمشید ٹاؤن کراچی شرقی پاکستان
          </p>
          <p className="text-lg text-gray-300 mt-2">
            Soldier Bazaar, Jamshed Town, Karachi East, Pakistan
          </p>
        </motion.div>

        {/* Telegram Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-900/30 rounded-lg">
              <Globe className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-[28px] font-bold text-blue-400">{t('telegram')}</h3>
          </div>
          <a 
            href="https://t.me/eastfront_pk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/50 rounded-xl transition-all hover:scale-105"
          >
            <span className="text-2xl">📢</span>
            <div>
              <p className="text-lg font-semibold text-white">t.me/eastfront_pk</p>
              <p className="text-sm text-gray-400">Join our Telegram channel</p>
            </div>
          </a>
        </motion.div>
      </motion.div>

      {/* WhatsApp Groups Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-6xl mx-auto my-10"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900/30 rounded-full mb-4">
            <span className="text-3xl">📱</span>
          </div>
          <h2 className="text-[32px] font-bold text-green-400 mb-4">{t('whatsappGroups')}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            18 Active WhatsApp groups for discussions, updates, and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whatsappLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-4 rounded-xl border border-green-500/30 hover:border-green-400 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                  <span className="text-lg">💬</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white group-hover:text-green-300 transition-colors">
                    WhatsApp Group {index + 1}
                  </h3>
                  <p className="text-sm text-gray-400 truncate">{link}</p>
                </div>
                <div className="px-3 py-1 bg-green-600/30 rounded-full text-xs font-medium text-green-300">
                  Active
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
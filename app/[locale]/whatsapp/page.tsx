'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Users, Copy, Check, ExternalLink, Phone } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

// All 19 WhatsApp Groups - Updated with working links
const whatsappGroups = [
  { id: 1, link: 'https://chat.whatsapp.com/GZJmBmUDH6TAWGs4suTI8R', members: '1000+', number: '+923412786433' },
  { id: 2, link: 'https://chat.whatsapp.com/HRr6iYtcC0q7eWiHu72Nkw', members: '1000+', number: '+923412786433' },
  { id: 3, link: 'https://chat.whatsapp.com/C57s4pVkQL34rZcGKLcjew', members: '1000+', number: '+923412786433' },
  { id: 4, link: 'https://chat.whatsapp.com/EMtO1UNopT85FqvVoYqWch', members: '1000+', number: '+923412786433' },
  { id: 5, link: 'https://chat.whatsapp.com/BQYftgpkz3z3qbLiCtcix4', members: '1000+', number: '+923412786433' },
  { id: 6, link: 'https://chat.whatsapp.com/EofDsqhArOELiKMhPXXYUh', members: '1000+', number: '+923412786433' },
  { id: 7, link: 'https://chat.whatsapp.com/DSOivpJVhzI8ckG3rDtwjM', members: '1000+', number: '+923412786433' },
  { id: 8, link: 'https://chat.whatsapp.com/DNeEppkyJteAzyKPpju0hO', members: '1000+', number: '+923412786433' },
  { id: 9, link: 'https://chat.whatsapp.com/DW78PRSHV865KauAAzS9tj', members: '1000+', number: '+923412786433' },
  { id: 10, link: 'https://chat.whatsapp.com/G4Wmb3MwoWc3JaekTXFQ7j', members: '1000+', number: '+923412786433' },
  { id: 11, link: 'https://chat.whatsapp.com/LjXk4Clg2ME2f72v5NyuI7', members: '1000+', number: '+923412786433' },
  { id: 12, link: 'https://chat.whatsapp.com/DWkpnsHLpfP2tQ16GeFX7G', members: '1000+', number: '+923412786433' },
  { id: 13, link: 'https://chat.whatsapp.com/FiItr3p2WHTKrThc1uZuKA', members: '1000+', number: '+923412786433' },
  { id: 14, link: 'https://chat.whatsapp.com/FUYQFooJepU2MgohEOrkMR', members: '1000+', number: '+923412786433' },
  { id: 15, link: 'https://chat.whatsapp.com/Ef46pt8FUITJukbJOsL15t', members: '1000+', number: '+923412786433' },
  { id: 16, link: 'https://chat.whatsapp.com/E3SqPJ6ES4PDaRjQfD2XSh', members: '1000+', number: '+923412786433' },
  { id: 17, link: 'https://chat.whatsapp.com/GzraA5uELGpDDK9PKMNYul', members: '1000+', number: '+923412786433' },
  { id: 18, link: 'https://chat.whatsapp.com/GRsOxck2R8U3MVBOQoER3n', members: '1000+', number: '+923412786433' },
  { id: 19, link: 'https://chat.whatsapp.com/Bs8DJyVTnHe102x1pluu4O', members: '1000+', number: '+923412786433' },
  // New working groups (20-25) - Total 25 groups now
  { id: 20, link: 'https://chat.whatsapp.com/FU0Wu01qaxIKhoFzMOvrYy', members: '1000+', number: '+923412786433' },
  { id: 21, link: 'https://chat.whatsapp.com/IyFo5VHrJ26CCaQIjMlRq0', members: '1000+', number: '+923412786433' },
  { id: 22, link: 'https://chat.whatsapp.com/Fkd0yMJmsuVJBhg1TXJDbb', members: '1000+', number: '+923412786433' },
  { id: 23, link: 'https://chat.whatsapp.com/LfVFQDUgbGdKnw8BiF2Dkr', members: '1000+', number: '+923412786433' },
  { id: 24, link: 'https://chat.whatsapp.com/KmicCtxpxGd0IzpBpHKXS9', members: '1000+', number: '+923412786433' },
];

export default function WhatsAppPage() {
  const t = useTranslations('WhatsApp');
  const common = useTranslations('Common');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(text);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const totalGroups = whatsappGroups.length;
  const totalMembers = whatsappGroups.length * 1000;

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-950 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-green-900/20 via-black to-emerald-900/20" />
        <div className="container mx-auto px-4 pt-20 pb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">
                {t('community')}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-linear-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              {t('description')}
            </p>

            <div className="flex justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{totalGroups}</div>
                <div className="text-sm text-gray-400">{t('totalGroups')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{totalMembers.toLocaleString()}+</div>
                <div className="text-sm text-gray-400">{t('totalMembers')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Groups Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {whatsappGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative p-6 bg-linear-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all duration-300 h-full">
                {/* Group Number Badge */}
                <div className="absolute -top-3 -right-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-green-600 to-emerald-600 flex items-center justify-center shadow-lg">
                    <span className="font-bold text-white text-lg">{group.id}</span>
                  </div>
                </div>

                {/* Active Status Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400">{t('active')}</span>
                  </div>
                </div>

                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t('group')} {group.id}
                    </h3>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{group.members}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-400">
                        <MessageCircle className="w-4 h-4" />
                        <span>{t('active')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-xs text-gray-400 truncate mr-2">
                        {t('group')} {group.id} {t('link')}
                      </span>
                      <button
                        onClick={() => copyToClipboard(group.link)}
                        className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors shrink-0"
                        title={t('copyTooltip')}
                      >
                        {copiedLink === group.link ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={group.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-3 bg-linear-to-r from-green-600 to-emerald-600 rounded-lg text-white text-sm font-medium hover:from-green-700 hover:to-emerald-700 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{t('join')}</span>
                      </a>
                      
                      <a
                        href={`https://wa.me/${group.number.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all"
                        title={t('message')}
                      >
                        <MessageCircle className="w-4 h-4 text-gray-400" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Admin Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 max-w-md mx-auto"
        >
          <div className="p-6 rounded-2xl bg-linear-to-br from-gray-900/50 to-black/50 border border-white/5 text-center">
            <h3 className="text-xl font-bold text-white mb-4">{t('contactAdmin')}</h3>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${common('phone')?.replace(/[^\d+]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-green-600 to-emerald-600 rounded-xl text-white font-medium hover:from-green-700 hover:to-emerald-700 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t('contactAdmin')}</span>
              </a>
              <a
                href={`tel:${common('phone')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-green-600 text-green-400 rounded-xl font-medium hover:bg-green-600/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>{t('call')}</span>
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-3">{common('phone')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
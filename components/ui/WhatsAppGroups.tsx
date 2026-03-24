'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Users, Copy, Check, ExternalLink, Shield } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

// All 19 WhatsApp Groups - ALL HAVE 1000+ MEMBERS
const whatsappGroupsData = [
  { id: 1, name: 'EastFront PK Group 1', members: '1000+', link: 'https://chat.whatsapp.com/GZJmBmUDH6TAWGs4suTI8R' },
  { id: 2, name: 'EastFront PK Group 2', members: '1000+', link: 'https://chat.whatsapp.com/HRr6iYtcC0q7eWiHu72Nkw' },
  { id: 3, name: 'EastFront PK Group 3', members: '1000+', link: 'https://chat.whatsapp.com/C57s4pVkQL34rZcGKLcjew' },
  { id: 4, name: 'EastFront PK Group 4', members: '1000+', link: 'https://chat.whatsapp.com/EMtO1UNopT85FqvVoYqWch' },
  { id: 5, name: 'EastFront PK Group 5', members: '1000+', link: 'https://chat.whatsapp.com/BQYftgpkz3z3qbLiCtcix4' },
  { id: 6, name: 'EastFront PK Group 6', members: '1000+', link: 'https://chat.whatsapp.com/EofDsqhArOELiKMhPXXYUh' },
  { id: 7, name: 'EastFront PK Group 7', members: '1000+', link: 'https://chat.whatsapp.com/DSOivpJVhzI8ckG3rDtwjM' },
  { id: 8, name: 'EastFront PK Group 8', members: '1000+', link: 'https://chat.whatsapp.com/DNeEppkyJteAzyKPpju0hO' },
  { id: 9, name: 'EastFront PK Group 9', members: '1000+', link: 'https://chat.whatsapp.com/DW78PRSHV865KauAAzS9tj' },
  { id: 10, name: 'EastFront PK Group 10', members: '1000+', link: 'https://chat.whatsapp.com/G4Wmb3MwoWc3JaekTXFQ7j' },
  { id: 11, name: 'EastFront PK Group 11', members: '1000+', link: 'https://chat.whatsapp.com/LjXk4Clg2ME2f72v5NyuI7' },
  { id: 12, name: 'EastFront PK Group 12', members: '1000+', link: 'https://chat.whatsapp.com/DWkpnsHLpfP2tQ16GeFX7G' },
  { id: 13, name: 'EastFront PK Group 13', members: '1000+', link: 'https://chat.whatsapp.com/FiItr3p2WHTKrThc1uZuKA' },
  { id: 14, name: 'EastFront PK Group 14', members: '1000+', link: 'https://chat.whatsapp.com/FUYQFooJepU2MgohEOrkMR' },
  { id: 15, name: 'EastFront PK Group 15', members: '1000+', link: 'https://chat.whatsapp.com/Ef46pt8FUITJukbJOsL15t' },
  { id: 16, name: 'EastFront PK Group 16', members: '1000+', link: 'https://chat.whatsapp.com/E3SqPJ6ES4PDaRjQfD2XSh' },
  { id: 17, name: 'EastFront PK Group 17', members: '1000+', link: 'https://chat.whatsapp.com/GzraA5uELGpDDK9PKMNYul' },
  { id: 18, name: 'EastFront PK Group 18', members: '1000+', link: 'https://chat.whatsapp.com/GRsOxck2R8U3MVBOQoER3n' },
  { id: 19, name: 'EastFront PK Group 19', members: '1000+', link: 'https://chat.whatsapp.com/Bs8DJyVTnHe102x1pluu4O' },
];

export default function WhatsAppGroups() {
  const t = useTranslations('WhatsApp');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(text);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <section className="py-20 px-4 bg-linear-to-b from-gray-900 to-black" aria-label="WhatsApp groups section">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <MessageCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
            <span className="text-sm font-medium text-green-400">{t('community')}</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            {t('description')}
          </p>
        </motion.div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {whatsappGroupsData.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative p-6 bg-linear-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all duration-500 h-full">
                {/* Active Badge */}
                <div className="absolute -top-3 right-6">
                  <div className="px-3 py-1 bg-linear-to-r from-green-600 to-emerald-600 rounded-full text-xs font-bold text-white flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" aria-hidden="true" />
                    {t('active')}
                  </div>
                </div>

                {/* Group Number Badge */}
                <div className="absolute -top-3 -right-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-green-600 to-emerald-600 flex items-center justify-center shadow-lg">
                    <span className="font-bold text-white text-lg">{group.id}</span>
                  </div>
                </div>

                {/* Header */}
                <div className="flex items-start gap-4 mb-6 mt-4">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center shrink-0">
                    <Shield className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {group.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1 text-sm text-gray-400">
                        <Users className="w-4 h-4" aria-hidden="true" />
                        {group.members} {t('members')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Link Section */}
                <div className="space-y-4">
                  <div className="p-3 bg-white/5 rounded-xl">
                    <div className="flex items-center justify-between">
                      <code className="text-sm text-gray-400 font-mono truncate">
                        {group.link}
                      </code>
                      <button
                        onClick={() => copyToClipboard(group.link)}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        aria-label="Copy group link"
                      >
                        {copiedLink === group.link ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
              <div className="flex gap-3">
  <a
    href={group.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 group/btn"
    aria-label={`Join ${group.name} - opens in new tab`}
  >
    <div className="flex items-center justify-center gap-2 px-4 py-3 bg-green-700 hover:bg-green-800 rounded-xl text-white font-medium transition-all duration-300">
      <ExternalLink className="w-4 h-4" aria-hidden="true" />
      {t('join')}
    </div>
  </a>
</div>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
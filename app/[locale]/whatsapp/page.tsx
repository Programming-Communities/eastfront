'use client';

import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Users, 
  Copy, 
  Check, 
  ExternalLink, 
  Phone,
  Zap
} from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

// Simple WhatsApp Groups Array - 19 groups
const whatsappGroups = Array.from({ length: 19 }, (_, i) => ({
  id: i + 1,
  link: `https://chat.whatsapp.com/${String.fromCharCode(65 + i)}${i + 1}example`, // Placeholder links
  members: '1000+',
  activity: 'Active'
}));

// Update with your actual links
const actualLinks = [
  'https://chat.whatsapp.com/GZJmBmUDH6TAWGs4suTI8R',
  'https://chat.whatsapp.com/HRr6iYtcC0q7eWiHu72Nkw',
  'https://chat.whatsapp.com/C57s4pVkQL34rZcGKLcjew',
  'https://chat.whatsapp.com/EMtO1UNopT85FqvVoYqWch',
  'https://chat.whatsapp.com/BQYftgpkz3z3qbLiCtcix4',
  'https://chat.whatsapp.com/EofDsqhArOELiKMhPXXYUh',
  'https://chat.whatsapp.com/DSOivpJVhzI8ckG3rDtwjM',
  'https://chat.whatsapp.com/DNeEppkyJteAzyKPpju0hO',
  'https://chat.whatsapp.com/DW78PRSHV865KauAAzS9tj',
  'https://chat.whatsapp.com/G4Wmb3MwoWc3JaekTXFQ7j',
  'https://chat.whatsapp.com/LjXk4Clg2ME2f72v5NyuI7',
  'https://chat.whatsapp.com/DWkpnsHLpfP2tQ16GeFX7G',
  'https://chat.whatsapp.com/FiItr3p2WHTKrThc1uZuKA',
  'https://chat.whatsapp.com/FUYQFooJepU2MgohEOrkMR',
  'https://chat.whatsapp.com/Ef46pt8FUITJukbJOsL15t',
  'https://chat.whatsapp.com/E3SqPJ6ES4PDaRjQfD2XSh',
  'https://chat.whatsapp.com/GzraA5uELGpDDK9PKMNYul',
  'https://chat.whatsapp.com/GRsOxck2R8U3MVBOQoER3n',
  'https://chat.whatsapp.com/Bs8DJyVTnHe102x1pluu4O'
];

// Merge with actual links
whatsappGroups.forEach((group, index) => {
  group.link = actualLinks[index] || group.link;
});

export default function WhatsAppPage() {
  const t = useTranslations('WhatsApp');
  const common = useTranslations('Common');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(text);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const stats = {
    totalGroups: whatsappGroups.length,
    totalMembers: whatsappGroups.length * 1000
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-black to-emerald-900/20" />
        <div className="container mx-auto px-4 pt-20 pb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">
                {t('communityBadge')}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              {t('description')}
            </p>

            {/* Simple Stats */}
            <div className="flex justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stats.totalGroups}</div>
                <div className="text-sm text-gray-400">{t('totalGroups')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stats.totalMembers}+</div>
                <div className="text-sm text-gray-400">{t('totalMembers')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Groups Grid - Simple Cards */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {whatsappGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              {/* Simple Card */}
              <div className="relative p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all duration-500">
                
                {/* Group Number */}
                <div className="absolute -top-3 -right-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center shadow-lg">
                    <span className="font-bold text-white text-lg">{group.id}</span>
                  </div>
                </div>

                {/* Group Info */}
                <div className="space-y-4">
                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t('groupPrefix')} {group.id}
                    </h3>
                    
                    {/* Stats */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{group.members}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-400">
                        <Zap className="w-4 h-4" />
                        <span>{group.activity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Copy Link Section */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-xs text-gray-400 truncate mr-2">
                        Group {group.id}
                      </span>
                      <button
                        onClick={() => copyToClipboard(group.link)}
                        className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors flex-shrink-0"
                        title={t('copyTooltip')}
                      >
                        {copiedLink === group.link ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={group.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white text-sm font-medium hover:from-green-700 hover:to-emerald-700 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{t('joinButton')}</span>
                      </a>
                      
                      <a
                        href={`https://wa.me/${common('phone')?.replace(/[^\d+]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all"
                        title={t('contactAdmin')}
                      >
                        <Phone className="w-4 h-4 text-gray-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 max-w-md mx-auto"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/5 text-center">
            <h3 className="text-xl font-bold text-white mb-4">{t('needHelp')}</h3>
            <a
              href={`https://wa.me/${common('phone')?.replace(/[^\d+]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-medium hover:from-green-700 hover:to-emerald-700 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>{t('contactAdmin')}</span>
            </a>
            <p className="text-sm text-gray-400 mt-3">{common('phone')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
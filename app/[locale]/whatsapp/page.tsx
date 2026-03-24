'use client';

import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Users, 
  Copy, 
  Check, 
  ExternalLink, 
  Phone,
  Zap,
  Shield,
  Award,
  Sparkles,
  ArrowRight,
  Globe
} from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

// Complete WhatsApp Groups Array - 19 groups with actual links
const whatsappGroups = [
  { id: 1, link: 'https://chat.whatsapp.com/GZJmBmUDH6TAWGs4suTI8R', members: '250+', activity: 'Active', category: 'General' },
  { id: 2, link: 'https://chat.whatsapp.com/HRr6iYtcC0q7eWiHu72Nkw', members: '200+', activity: 'Active', category: 'Politics' },
  { id: 3, link: 'https://chat.whatsapp.com/C57s4pVkQL34rZcGKLcjew', members: '180+', activity: 'Active', category: 'Military' },
  { id: 4, link: 'https://chat.whatsapp.com/EMtO1UNopT85FqvVoYqWch', members: '150+', activity: 'Active', category: 'Geopolitics' },
  { id: 5, link: 'https://chat.whatsapp.com/BQYftgpkz3z3qbLiCtcix4', members: '220+', activity: 'Active', category: 'Diplomacy' },
  { id: 6, link: 'https://chat.whatsapp.com/EofDsqhArOELiKMhPXXYUh', members: '190+', activity: 'Active', category: 'History' },
  { id: 7, link: 'https://chat.whatsapp.com/DSOivpJVhzI8ckG3rDtwjM', members: '170+', activity: 'Active', category: 'News' },
  { id: 8, link: 'https://chat.whatsapp.com/DNeEppkyJteAzyKPpju0hO', members: '160+', activity: 'Active', category: 'Research' },
  { id: 9, link: 'https://chat.whatsapp.com/DW78PRSHV865KauAAzS9tj', members: '140+', activity: 'Active', category: 'Strategy' },
  { id: 10, link: 'https://chat.whatsapp.com/G4Wmb3MwoWc3JaekTXFQ7j', members: '130+', activity: 'Active', category: 'MiddleEast' },
  { id: 11, link: 'https://chat.whatsapp.com/LjXk4Clg2ME2f72v5NyuI7', members: '120+', activity: 'Active', category: 'Technology' },
  { id: 12, link: 'https://chat.whatsapp.com/DWkpnsHLpfP2tQ16GeFX7G', members: '110+', activity: 'Active', category: 'International' },
  { id: 13, link: 'https://chat.whatsapp.com/FiItr3p2WHTKrThc1uZuKA', members: '100+', activity: 'Active', category: 'Security' },
  { id: 14, link: 'https://chat.whatsapp.com/FUYQFooJepU2MgohEOrkMR', members: '90+', activity: 'Active', category: 'Conflict' },
  { id: 15, link: 'https://chat.whatsapp.com/Ef46pt8FUITJukbJOsL15t', members: '80+', activity: 'Active', category: 'Peace' },
  { id: 16, link: 'https://chat.whatsapp.com/E3SqPJ6ES4PDaRjQfD2XSh', members: '70+', activity: 'Active', category: 'Regional' },
  { id: 17, link: 'https://chat.whatsapp.com/GzraA5uELGpDDK9PKMNYul', members: '60+', activity: 'Active', category: 'Partnership' },
  { id: 18, link: 'https://chat.whatsapp.com/GRsOxck2R8U3MVBOQoER3n', members: '50+', activity: 'Active', category: 'Future' },
  { id: 19, link: 'https://chat.whatsapp.com/Bs8DJyVTnHe102x1pluu4O', members: '45+', activity: 'Active', category: 'General' }
];

export default function WhatsAppPage() {
  const t = useTranslations('WhatsApp');
  const common = useTranslations('Common');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(text);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  // Get unique categories
  const categories = ['all', ...new Set(whatsappGroups.map(g => g.category))];

  // Filter groups by category
  const filteredGroups = activeCategory === 'all' 
    ? whatsappGroups 
    : whatsappGroups.filter(g => g.category === activeCategory);

  const stats = {
    totalGroups: whatsappGroups.length,
    totalMembers: whatsappGroups.reduce((sum, g) => sum + parseInt(g.members), 0)
  };

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
                {t('community') || 'Active Community'}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-linear-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {t('title') || 'WhatsApp Community'}
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              {t('description') || 'Join our exclusive WhatsApp groups for real-time discussions, analysis, and updates'}
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stats.totalGroups}</div>
                <div className="text-sm text-gray-400">{t('totalGroups') || 'Total Groups'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stats.totalMembers.toLocaleString()}+</div>
                <div className="text-sm text-gray-400">{t('totalMembers') || 'Total Members'}</div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? (t('allGroups') || 'All Groups') : category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Groups Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all duration-500">
                {/* Group Number Badge */}
                <div className="absolute -top-3 -right-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center shadow-lg">
                    <span className="font-bold text-white text-lg">{group.id}</span>
                  </div>
                </div>

                {/* Active Indicator */}
                {group.activity === 'Active' && (
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400">{t('active') || 'LIVE'}</span>
                    </div>
                  </div>
                )}

                {/* Group Info */}
                <div className="space-y-4 mt-4">
                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t('group')} {group.id}
                    </h3>
                    
                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                      <Globe className="w-3 h-3" />
                      <span>{group.category}</span>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center gap-4 mt-3">
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
                        Group {group.id} Link
                      </span>
                      <button
                        onClick={() => copyToClipboard(group.link)}
                        className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors flex-shrink-0"
                        title="Copy link"
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
                        <span>{t('join') || 'Join Group'}</span>
                      </a>
                      
                      <a
                        href={`https://wa.me/${common('phone')?.replace(/[^\d+]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all"
                        title={t('contactAdmin') || 'Contact Admin'}
                      >
                        <Phone className="w-4 h-4 text-gray-400" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Admin Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 max-w-md mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/5 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{t('needHelp') || 'Need Help?'}</h3>
            <p className="text-gray-400 text-sm mb-6">
              {t('contactAdminDesc') || 'Contact our admin for any questions or to join more groups'}
            </p>
            <a
              href={`https://wa.me/${common('phone')?.replace(/[^\d+]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-medium hover:from-green-700 hover:to-emerald-700 transition-all group"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{t('contactAdmin') || 'Contact Admin'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-500 mt-3">{common('phone')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
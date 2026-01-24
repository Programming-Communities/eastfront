'use client';

import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Users, 
  Copy, 
  Check, 
  ExternalLink, 
  Shield, 
  Award,
  Phone,
  Mail,
  Globe,
  Download,
  QrCode
} from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const whatsappGroups = [
  { 
    id: 1, 
    name: 'EastFront PK Group 1', 
    members: '250+',
    description: 'Main discussion group for Islamic resistance',
    link: 'https://chat.whatsapp.com/GZJmBmUDH6TAWGs4suTI8R',
    tags: ['Core', 'Active'],
    category: 'General'
  },
  { 
    id: 2, 
    name: 'EastFront PK Group 2', 
    members: '200+',
    description: 'Political analysis and discussions',
    link: 'https://chat.whatsapp.com/HRr6iYtcC0q7eWiHu72Nkw',
    tags: ['Politics', 'Active'],
    category: 'Politics'
  },
  { 
    id: 3, 
    name: 'EastFront PK Group 3', 
    members: '180+',
    description: 'Military strategy and defense',
    link: 'https://chat.whatsapp.com/C57s4pVkQL34rZcGKLcjew',
    tags: ['Military', 'Active'],
    category: 'Military'
  },
  { 
    id: 4, 
    name: 'EastFront PK Group 4', 
    members: '150+',
    description: 'Geopolitical analysis',
    link: 'https://chat.whatsapp.com/EMtO1UNopT85FqvVoYqWch',
    tags: ['Geopolitics'],
    category: 'Geopolitics'
  },
  { 
    id: 5, 
    name: 'EastFront PK Group 5', 
    members: '220+',
    description: 'Diplomatic relations study',
    link: 'https://chat.whatsapp.com/BQYftgpkz3z3qbLiCtcix4',
    tags: ['Diplomacy', 'Active'],
    category: 'Diplomacy'
  },
  { 
    id: 6, 
    name: 'EastFront PK Group 6', 
    members: '190+',
    description: 'Islamic history research',
    link: 'https://chat.whatsapp.com/EofDsqhArOELiKMhPXXYUh',
    tags: ['History'],
    category: 'History'
  },
  { 
    id: 7, 
    name: 'EastFront PK Group 7', 
    members: '170+',
    description: 'News and updates 24/7',
    link: 'https://chat.whatsapp.com/DSOivpJVhzI8ckG3rDtwjM',
    tags: ['News', 'Active'],
    category: 'News'
  },
  { 
    id: 8, 
    name: 'EastFront PK Group 8', 
    members: '160+',
    description: 'Research papers discussion',
    link: 'https://chat.whatsapp.com/DNeEppkyJteAzyKPpju0hO',
    tags: ['Research'],
    category: 'Research'
  },
  { 
    id: 9, 
    name: 'EastFront PK Group 9', 
    members: '140+',
    description: 'Strategic planning',
    link: 'https://chat.whatsapp.com/DW78PRSHV865KauAAzS9tj',
    tags: ['Strategy'],
    category: 'Strategy'
  },
  { 
    id: 10, 
    name: 'EastFront PK Group 10', 
    members: '130+',
    description: 'Middle East analysis',
    link: 'https://chat.whatsapp.com/G4Wmb3MwoWc3JaekTXFQ7j',
    tags: ['MiddleEast'],
    category: 'Regional'
  },
  { 
    id: 11, 
    name: 'EastFront PK Group 11', 
    members: '120+',
    description: 'Defense technology',
    link: 'https://chat.whatsapp.com/LjXk4Clg2ME2f72v5NyuI7',
    tags: ['Technology'],
    category: 'Technology'
  },
  { 
    id: 12, 
    name: 'EastFront PK Group 12', 
    members: '110+',
    description: 'International relations',
    link: 'https://chat.whatsapp.com/DWkpnsHLpfP2tQ16GeFX7G',
    tags: ['International'],
    category: 'International'
  },
  { 
    id: 13, 
    name: 'EastFront PK Group 13', 
    members: '100+',
    description: 'Security studies',
    link: 'https://chat.whatsapp.com/FiItr3p2WHTKrThc1uZuKA',
    tags: ['Security'],
    category: 'Security'
  },
  { 
    id: 14, 
    name: 'EastFront PK Group 14', 
    members: '90+',
    description: 'Conflict analysis',
    link: 'https://chat.whatsapp.com/FUYQFooJepU2MgohEOrkMR',
    tags: ['Conflict'],
    category: 'Conflict'
  },
  { 
    id: 15, 
    name: 'EastFront PK Group 15', 
    members: '80+',
    description: 'Peace and security',
    link: 'https://chat.whatsapp.com/Ef46pt8FUITJukbJOsL15t',
    tags: ['Peace'],
    category: 'Peace'
  },
  { 
    id: 16, 
    name: 'EastFront PK Group 16', 
    members: '70+',
    description: 'Regional cooperation',
    link: 'https://chat.whatsapp.com/E3SqPJ6ES4PDaRjQfD2XSh',
    tags: ['Regional'],
    category: 'Regional'
  },
  { 
    id: 17, 
    name: 'EastFront PK Group 17', 
    members: '60+',
    description: 'Strategic partnerships',
    link: 'https://chat.whatsapp.com/GzraA5uELGpDDK9PKMNYul',
    tags: ['Partnerships'],
    category: 'Partnerships'
  },
  { 
    id: 18, 
    name: 'EastFront PK Group 18', 
    members: '50+',
    description: 'Future projections',
    link: 'https://chat.whatsapp.com/GRsOxck2R8U3MVBOQoER3n',
    tags: ['Future'],
    category: 'Future'
  },
];

const categories = ['All', 'Core', 'Politics', 'Military', 'Geopolitics', 'News', 'Research'];

export default function WhatsAppPage() {
  const t = useTranslations('WhatsApp');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(text);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const filteredGroups = whatsappGroups.filter(group => {
    const matchesCategory = activeFilter === 'All' || group.tags.includes(activeFilter) || group.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <MessageCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium text-green-400">WhatsApp Community</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              WhatsApp Groups
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join our exclusive WhatsApp groups for real-time discussions, analysis, and updates
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">18</div>
              <div className="text-gray-400">Active Groups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2K+</div>
              <div className="text-gray-400">Total Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-gray-400">Active Discussions</div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search groups..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <MessageCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    activeFilter === category
                      ? 'bg-green-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative h-full p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all duration-500">
                {/* Badge */}
                {group.tags.includes('Core') && (
                  <div className="absolute -top-3 right-6">
                    <div className="px-3 py-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full text-xs font-bold text-white flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      CORE
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {group.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        {group.members}
                      </span>
                      {group.tags.includes('Active') && (
                        <span className="inline-flex items-center gap-1 text-sm text-green-400">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">
                  {group.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {group.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        tag === 'Core'
                          ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                          : tag === 'Active'
                          ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                          : 'bg-white/5 text-gray-400 border border-white/10'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-xs text-gray-400 truncate mr-2">
                      {group.link}
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

                  <div className="flex gap-2">
                    <a
                      href={group.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white text-sm font-medium hover:from-green-700 hover:to-emerald-700 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Join
                    </a>
                    
                    <a
                      href={`https://wa.me/+923412786433`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all"
                    >
                      <Phone className="w-4 h-4 text-gray-400" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Need Help Joining?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="https://wa.me/+923412786433"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 rounded-xl bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Call Admin</h4>
                <p className="text-sm text-gray-400 text-center">+92 341 2786433</p>
              </a>

              <a
                href="mailto:info@eastfront.pk"
                className="group flex flex-col items-center p-6 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-red-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Send Email</h4>
                <p className="text-sm text-gray-400 text-center">info@eastfront.pk</p>
              </a>

              <a
                href="https://t.me/eastfront_pk"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Telegram</h4>
                <p className="text-sm text-gray-400 text-center">Join our channel</p>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Download QR Codes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/5">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="text-center lg:text-left lg:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-4">QR Code Access</h3>
                <p className="text-gray-400 mb-6">
                  Scan the QR code with your WhatsApp to quickly join our main group. 
                  You can also download the QR code for offline sharing.
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-medium hover:from-green-700 hover:to-emerald-700 transition-all">
                  <Download className="w-5 h-5" />
                  Download QR Code
                </button>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-white p-4 rounded-xl inline-block">
                  <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <QrCode className="w-32 h-32 text-gray-700" />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">Scan to join WhatsApp Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
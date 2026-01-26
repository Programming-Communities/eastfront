'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Users, Copy, Check, ExternalLink, Shield, Award } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const whatsappGroups = [
  { 
    id: 1, 
    name: 'EastFront PK Group 1', 
    members: '250+',
    description: 'Main discussion group for Islamic resistance',
    link: 'https://chat.whatsapp.com/GZJmBmUDH6TAWGs4suTI8R',
    tags: ['Core', 'Active']
  },
  { 
    id: 2, 
    name: 'EastFront PK Group 2', 
    members: '200+',
    description: 'Political analysis and discussions',
    link: 'https://chat.whatsapp.com/HRr6iYtcC0q7eWiHu72Nkw',
    tags: ['Politics', 'Active']
  },
  { 
    id: 3, 
    name: 'EastFront PK Group 3', 
    members: '180+',
    description: 'Military strategy and defense',
    link: 'https://chat.whatsapp.com/C57s4pVkQL34rZcGKLcjew',
    tags: ['Military', 'Active']
  },
  { 
    id: 4, 
    name: 'EastFront PK Group 4', 
    members: '150+',
    description: 'Geopolitical analysis',
    link: 'https://chat.whatsapp.com/EMtO1UNopT85FqvVoYqWch',
    tags: ['Geopolitics']
  },
  { 
    id: 5, 
    name: 'EastFront PK Group 5', 
    members: '220+',
    description: 'Diplomatic relations study',
    link: 'https://chat.whatsapp.com/BQYftgpkz3z3qbLiCtcix4',
    tags: ['Diplomacy', 'Active']
  },
  { 
    id: 6, 
    name: 'EastFront PK Group 6', 
    members: '190+',
    description: 'Islamic history research',
    link: 'https://chat.whatsapp.com/EofDsqhArOELiKMhPXXYUh',
    tags: ['History']
  },
  { 
    id: 7, 
    name: 'EastFront PK Group 7', 
    members: '170+',
    description: 'News and updates 24/7',
    link: 'https://chat.whatsapp.com/DSOivpJVhzI8ckG3rDtwjM',
    tags: ['News', 'Active']
  },
  { 
    id: 8, 
    name: 'EastFront PK Group 8', 
    members: '160+',
    description: 'Research papers discussion',
    link: 'https://chat.whatsapp.com/DNeEppkyJteAzyKPpju0hO',
    tags: ['Research']
  },
  { 
    id: 9, 
    name: 'EastFront PK Group 9', 
    members: '140+',
    description: 'Strategic planning',
    link: 'https://chat.whatsapp.com/DW78PRSHV865KauAAzS9tj',
    tags: ['Strategy']
  },
  { 
    id: 10, 
    name: 'EastFront PK Group 10', 
    members: '130+',
    description: 'Middle East analysis',
    link: 'https://chat.whatsapp.com/G4Wmb3MwoWc3JaekTXFQ7j',
    tags: ['MiddleEast']
  },
  { 
    id: 11, 
    name: 'EastFront PK Group 11', 
    members: '120+',
    description: 'Defense technology',
    link: 'https://chat.whatsapp.com/LjXk4Clg2ME2f72v5NyuI7',
    tags: ['Technology']
  },
  { 
    id: 12, 
    name: 'EastFront PK Group 12', 
    members: '110+',
    description: 'International relations',
    link: 'https://chat.whatsapp.com/DWkpnsHLpfP2tQ16GeFX7G',
    tags: ['International']
  },
  { 
    id: 13, 
    name: 'EastFront PK Group 13', 
    members: '100+',
    description: 'Security studies',
    link: 'https://chat.whatsapp.com/FiItr3p2WHTKrThc1uZuKA',
    tags: ['Security']
  },
  { 
    id: 14, 
    name: 'EastFront PK Group 14', 
    members: '90+',
    description: 'Conflict analysis',
    link: 'https://chat.whatsapp.com/FUYQFooJepU2MgohEOrkMR',
    tags: ['Conflict']
  },
  { 
    id: 15, 
    name: 'EastFront PK Group 15', 
    members: '80+',
    description: 'Peace and security',
    link: 'https://chat.whatsapp.com/Ef46pt8FUITJukbJOsL15t',
    tags: ['Peace']
  },
  { 
    id: 16, 
    name: 'EastFront PK Group 16', 
    members: '70+',
    description: 'Regional cooperation',
    link: 'https://chat.whatsapp.com/E3SqPJ6ES4PDaRjQfD2XSh',
    tags: ['Regional']
  },
  { 
    id: 17, 
    name: 'EastFront PK Group 17', 
    members: '60+',
    description: 'Strategic partnerships',
    link: 'https://chat.whatsapp.com/GzraA5uELGpDDK9PKMNYul',
    tags: ['Partnerships']
  },
  { 
    id: 18, 
    name: 'EastFront PK Group 18', 
    members: '50+',
    description: 'Future projections',
    link: 'https://chat.whatsapp.com/GRsOxck2R8U3MVBOQoER3n',
    tags: ['Future']
  },
];

export default function WhatsAppGroups() {
  const t = useTranslations('WhatsApp');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(text);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const filteredGroups = activeFilter === 'all' 
    ? whatsappGroups 
    : whatsappGroups.filter(group => group.tags.includes(activeFilter));

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <MessageCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">Active Community</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              WhatsApp Community
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Join our exclusive WhatsApp groups for real-time discussions, analysis, and updates
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {['all', 'Active', 'Premium', 'Research', 'Military', 'Core'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-green-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {filter === 'all' ? 'All Groups' : filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all duration-500 h-full">
                {/* Badge */}
                {group.tags.includes('Premium') && (
                  <div className="absolute -top-3 right-6">
                    <div className="px-3 py-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full text-xs font-bold text-white flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      PREMIUM
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    {group.tags.includes('Core') ? (
                      <Shield className="w-7 h-7 text-white" />
                    ) : (
                      <MessageCircle className="w-7 h-7 text-white" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {group.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        {group.members} members
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
                <p className="text-gray-400 mb-6">
                  {group.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {group.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tag === 'Premium'
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
                        title="Copy link"
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
                    >
                      <div className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 group-hover/btn:scale-105">
                        <ExternalLink className="w-4 h-4" />
                        Join Group
                      </div>
                    </a>
                    
                    <a
                      href={`https://wa.me/+923412786433`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5 text-gray-400" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-gradient-to-r from-gray-900/50 to-black/50 border border-white/5 overflow-hidden">
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-white mb-2">18+</div>
                <div className="text-gray-400">Active Groups</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">2K+</div>
                <div className="text-gray-400">Active Members</div>
              </div>
              
              <div className="text-center md:text-right">
                <a
                  href="https://wa.me/+923412786433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta"
                >
                  <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/20 group-hover/cta:shadow-xl group-hover/cta:shadow-green-500/30">
                    <MessageCircle className="w-5 h-5" />
                    <span>Contact Admin</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Users, Copy, Check, ExternalLink, Shield, Search } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';

// WhatsApp groups data with dynamic structure
const whatsappGroupsData = [
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
    category: 'Analysis'
  },
  { 
    id: 3, 
    name: 'EastFront PK Group 3', 
    members: '180+',
    description: 'Military strategy and defense',
    link: 'https://chat.whatsapp.com/C57s4pVkQL34rZcGKLcjew',
    tags: ['Military', 'Active'],
    category: 'Strategy'
  },
  { 
    id: 4, 
    name: 'EastFront PK Group 4', 
    members: '150+',
    description: 'Geopolitical analysis',
    link: 'https://chat.whatsapp.com/EMtO1UNopT85FqvVoYqWch',
    tags: ['Geopolitics'],
    category: 'Analysis'
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
    category: 'Research'
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
    category: 'Analysis'
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
    category: 'Diplomacy'
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
    category: 'Analysis'
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
    category: 'Cooperation'
  },
  { 
    id: 17, 
    name: 'EastFront PK Group 17', 
    members: '60+',
    description: 'Strategic partnerships',
    link: 'https://chat.whatsapp.com/GzraA5uELGpDDK9PKMNYul',
    tags: ['Partnerships'],
    category: 'Partnership'
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

export default function WhatsAppGroups() {
  const t = useTranslations('WhatsApp');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(text);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  // Get unique categories for filters
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(whatsappGroupsData.map(group => group.category))];
    return cats;
  }, []);

  // Get unique tags for filter badges
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    whatsappGroupsData.forEach(group => {
      group.tags.forEach(tag => tags.add(tag));
    });
    return ['all', ...Array.from(tags)];
  }, []);

  // Filter groups based on active filter and search query
  const filteredGroups = useMemo(() => {
    let filtered = whatsappGroupsData;
    
    // Filter by category or tag
    if (activeFilter !== 'all') {
      filtered = filtered.filter(group => 
        group.category === activeFilter || group.tags.includes(activeFilter)
      );
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(group =>
        group.name.toLowerCase().includes(query) ||
        group.description.toLowerCase().includes(query) ||
        group.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [activeFilter, searchQuery]);

  // Calculate stats
  const totalGroups = whatsappGroupsData.length;
  const activeGroups = whatsappGroupsData.filter(g => g.tags.includes('Active')).length;
  const totalMembers = whatsappGroupsData.reduce((sum, g) => {
    const members = parseInt(g.members);
    return sum + (isNaN(members) ? 0 : members);
  }, 0);

  return (
    <section className="py-20 px-4 bg-linear-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <MessageCircle className="w-4 h-4 text-green-400" />
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

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-green-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category === 'all' ? t('allGroups') : category}
              </button>
            ))}
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {allTags.slice(0, 8).map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag === activeFilter ? 'all' : tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeFilter === tag
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {tag}
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
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative p-6 bg-linear-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all duration-500 h-full">
                {/* Badge */}
                {group.tags.includes('Active') && (
                  <div className="absolute -top-3 right-6">
                    <div className="px-3 py-1 bg-linear-to-r from-green-600 to-emerald-600 rounded-full text-xs font-bold text-white flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      {t('active')}
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center shrink-0">
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
                        {group.members} {t('members')}
                      </span>
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
                        tag === 'Active'
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
                      <div className="flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-green-600 to-emerald-600 rounded-xl text-white font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 group-hover/btn:scale-105">
                        <ExternalLink className="w-4 h-4" />
                        {t('join')}
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

        {/* No Results Message */}
        {filteredGroups.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">{t('noGroupsFound')}</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              {t('clearFilters')}
            </button>
          </div>
        )}

        {/* Stats CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-linear-to-r from-gray-900/50 to-black/50 border border-white/5 overflow-hidden">
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{totalGroups}+</div>
                <div className="text-gray-400">{t('totalGroups')}</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{activeGroups}+</div>
                <div className="text-gray-400">{t('activeGroups')}</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{totalMembers.toLocaleString()}+</div>
                <div className="text-gray-400">{t('totalMembers')}</div>
              </div>
              
              <div className="text-center">
                <a
                  href="https://wa.me/+923412786433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta inline-block"
                >
                  <div className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/20 group-hover/cta:shadow-xl group-hover/cta:shadow-green-500/30">
                    <MessageCircle className="w-5 h-5" />
                    <span>{t('contactAdmin')}</span>
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
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  Eye, 
  Share2, 
  Bookmark,
  TrendingUp,
  Filter,
  Search,
  ExternalLink,
  Globe,
  MapPin,
  Users,
  MessageCircle,
  ChevronRight,
  Hash,
  BarChart,
  Download,
  PlayCircle
} from 'lucide-react';
import { useState } from 'react';

// Sample news data - In real app, this would come from API
const newsCategories = [
  { id: 'all', name: 'All News', icon: Newspaper, count: 42 },
  { id: 'politics', name: 'Politics', icon: Globe, count: 15 },
  { id: 'military', name: 'Military', icon: TrendingUp, count: 12 },
  { id: 'diplomacy', name: 'Diplomacy', icon: Users, count: 8 },
  { id: 'analysis', name: 'Analysis', icon: BarChart, count: 7 },
];

const newsArticles = [
  {
    id: 1,
    title: 'Latest Developments in Middle East Islamic Resistance',
    excerpt: 'Comprehensive analysis of recent movements and strategic shifts in the region with detailed geopolitical implications.',
    category: 'politics',
    date: '2024-01-20',
    readTime: '5 min read',
    views: '2.4K',
    tags: ['Middle East', 'Resistance', 'Geopolitics'],
    imageColor: 'from-red-500 to-orange-500',
    breaking: true,
    featured: true
  },
  {
    id: 2,
    title: 'Defense Strategy Analysis for Modern Warfare',
    excerpt: 'In-depth study of defensive mechanisms and counter-strategies being employed by Islamic resistance groups.',
    category: 'military',
    date: '2024-01-19',
    readTime: '7 min read',
    views: '3.1K',
    tags: ['Military', 'Strategy', 'Defense'],
    imageColor: 'from-blue-500 to-cyan-500',
    breaking: false,
    featured: true
  },
  {
    id: 3,
    title: 'Diplomatic Relations and International Cooperation',
    excerpt: 'Analysis of diplomatic efforts and international collaborations supporting Islamic resistance movements.',
    category: 'diplomacy',
    date: '2024-01-18',
    readTime: '4 min read',
    views: '1.8K',
    tags: ['Diplomacy', 'International', 'Cooperation'],
    imageColor: 'from-green-500 to-emerald-500',
    breaking: false,
    featured: false
  },
  {
    id: 4,
    title: 'Economic Resistance Strategies Analysis',
    excerpt: 'Study of economic warfare and financial strategies employed in modern Islamic resistance.',
    category: 'analysis',
    date: '2024-01-17',
    readTime: '6 min read',
    views: '2.2K',
    tags: ['Economics', 'Strategy', 'Finance'],
    imageColor: 'from-purple-500 to-pink-500',
    breaking: true,
    featured: false
  },
  {
    id: 5,
    title: 'Media Warfare and Information Operations',
    excerpt: 'Comprehensive look at media strategies and information warfare in Islamic resistance context.',
    category: 'analysis',
    date: '2024-01-16',
    readTime: '8 min read',
    views: '2.9K',
    tags: ['Media', 'Information', 'Propaganda'],
    imageColor: 'from-yellow-500 to-amber-500',
    breaking: false,
    featured: false
  },
  {
    id: 6,
    title: 'Regional Security Developments Update',
    excerpt: 'Latest updates on security situations and regional stability affecting resistance movements.',
    category: 'military',
    date: '2024-01-15',
    readTime: '3 min read',
    views: '1.5K',
    tags: ['Security', 'Regional', 'Update'],
    imageColor: 'from-indigo-500 to-violet-500',
    breaking: false,
    featured: false
  },
];

const breakingNews = [
  {
    id: 'breaking1',
    title: 'Major Development in Regional Power Dynamics',
    time: '2 hours ago',
    category: 'politics'
  },
  {
    id: 'breaking2',
    title: 'New Strategic Alliance Announced',
    time: '4 hours ago',
    category: 'diplomacy'
  },
  {
    id: 'breaking3',
    title: 'Important Military Update Released',
    time: '6 hours ago',
    category: 'military'
  }
];

export default function NewsPage() {
  const t = useTranslations('News');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-black to-blue-900/20" />
        <div className="container mx-auto px-4 pt-20 pb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <Newspaper className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium text-red-400">
                {t('latestUpdates') || 'Latest Updates'}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 dark:from-red-400 dark:via-orange-400 dark:to-yellow-400 bg-clip-text text-transparent">
                {t('title') || 'News & Updates'}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              {t('description') || 'Stay updated with the latest developments, analysis, and breaking news from the Islamic resistance front'}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        {/* Breaking News Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-500/20">
                <TrendingUp className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-red-600 dark:text-red-400">
                {t('breakingNews') || 'Breaking News'}
              </h3>
            </div>
            
            <div className="space-y-2">
              {breakingNews.map((news, index) => (
                <div key={news.id} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white flex-1">
                    {news.title}
                  </span>
                  <span className="text-xs text-gray-500">{news.time}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('searchPlaceholder') || 'Search news articles...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {t('filterBy') || 'Filter by:'}
                </span>
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {newsCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center gap-2 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-white/20'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {t('featuredNews') || 'Featured News'}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {newsArticles.filter(article => article.featured).map((article) => (
              <div key={article.id} className="group">
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300">
                  {/* Breaking Badge */}
                  {article.breaking && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="px-3 py-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-full text-xs font-bold text-white flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        BREAKING
                      </div>
                    </div>
                  )}

                  {/* Article Image Placeholder */}
                  <div className={`h-48 bg-gradient-to-br ${article.imageColor} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Newspaper className="w-16 h-16 text-white/50" />
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        article.category === 'politics' ? 'bg-blue-500/10 text-blue-500' :
                        article.category === 'military' ? 'bg-red-500/10 text-red-500' :
                        article.category === 'diplomacy' ? 'bg-green-500/10 text-green-500' :
                        'bg-purple-500/10 text-purple-500'
                      }`}>
                        {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded-lg text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats and Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                          <Bookmark className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                          <Share2 className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg text-white hover:from-red-600 hover:to-orange-600">
                          <span>Read</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* All Articles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('allNews') || 'All News Articles'}
            </h2>
            <div className="text-sm text-gray-500">
              Showing {filteredArticles.length} of {newsArticles.length} articles
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400 mb-2">
                {t('noArticlesFound') || 'No articles found'}
              </h3>
              <p className="text-gray-500">
                {t('tryDifferentSearch') || 'Try adjusting your search or filter criteria'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300 overflow-hidden">
                    {/* Article Header */}
                    <div className={`h-32 bg-gradient-to-r ${article.imageColor} relative`}>
                      {article.breaking && (
                        <div className="absolute top-3 left-3">
                          <div className="px-2 py-1 bg-red-600 rounded-full text-xs font-bold text-white">
                            BREAKING
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Article Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          article.category === 'politics' ? 'bg-blue-500/10 text-blue-500' :
                          article.category === 'military' ? 'bg-red-500/10 text-red-500' :
                          article.category === 'diplomacy' ? 'bg-green-500/10 text-green-500' :
                          'bg-purple-500/10 text-purple-500'
                        }`}>
                          {article.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 rounded text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{article.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* News Sources Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t('newsSources') || 'Our News Sources'}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Primary Intelligence', icon: Globe, color: 'from-red-500 to-orange-500' },
                { name: 'Field Reports', icon: MapPin, color: 'from-blue-500 to-cyan-500' },
                { name: 'Analyst Network', icon: Users, color: 'from-green-500 to-emerald-500' },
                { name: 'Community Input', icon: MessageCircle, color: 'from-purple-500 to-pink-500' },
              ].map((source, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${source.color} flex items-center justify-center mx-auto mb-4`}>
                    <source.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{source.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('stayUpdated') || 'Stay Updated 24/7'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {t('ctaDescription') || 'Join our WhatsApp groups and Telegram channel for real-time updates and breaking news alerts'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/whatsapp"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Join WhatsApp Groups</span>
              </a>
              <a
                href="https://t.me/eastfront_pk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Join Telegram Channel</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
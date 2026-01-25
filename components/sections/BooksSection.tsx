'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Download, Eye, BookOpen, ExternalLink, Calendar, File, ArrowRight, Star, Users, Clock } from 'lucide-react';
import { useState } from 'react';

// REAL GOOGLE DRIVE BOOKS DATA
const books = [
  {
    id: '1g-rqk47F48OZrugHpCVZ1R4JIaSrqFpa',
    title: 'اسلامی مزاحمت کا تصور اور عملی تطبیق',
    titleEn: 'Concept and Practical Implementation of Islamic Resistance',
    category: 'Islamic Studies',
    categoryKey: 'islamicStudies',
    size: '4.7 MB',
    date: '2024-01-20',
    downloads: '1.8K',
    rating: 4.9,
    description: 'Comprehensive study on the concept and practical implementation of Islamic resistance movements in modern context.',
    color: 'from-red-500 to-orange-500',
    pages: '120',
    language: 'Urdu/English'
  },
  {
    id: '1YpIs_x7OQswO-LwWsXNCfA9waaXUrvxK',
    title: 'جیوپولیٹکس آف مڈل ایسٹ',
    titleEn: 'Geopolitics of Middle East',
    category: 'Geopolitical Analysis',
    categoryKey: 'geopolitics',
    size: '6.2 MB',
    date: '2024-01-18',
    downloads: '2.3K',
    rating: 4.8,
    description: 'In-depth analysis of Middle Eastern geopolitical dynamics, power structures and regional conflicts.',
    color: 'from-blue-500 to-cyan-500',
    pages: '156',
    language: 'Urdu'
  },
  {
    id: '1StRdt_hF6FKBgZbFxvsO_VIDNLBi3iou',
    title: 'دفاعی حکمت عملی اور جدید جنگ',
    titleEn: 'Defense Strategy and Modern Warfare',
    category: 'Military Strategy',
    categoryKey: 'military',
    size: '8.1 MB',
    date: '2024-01-15',
    downloads: '3.1K',
    rating: 4.9,
    description: 'Advanced defense mechanisms, strategic planning and modern warfare tactics analysis.',
    color: 'from-emerald-500 to-green-500',
    pages: '210',
    language: 'Urdu/Arabic'
  },
  {
    id: '1APOAbSl5IIF0fxxy5d9QfrHZQVMUIAKn',
    title: 'بین الاقوامی تعلقات اور خارجہ پالیسی',
    titleEn: 'International Relations and Foreign Policy',
    category: 'Diplomacy',
    categoryKey: 'diplomacy',
    size: '5.5 MB',
    date: '2024-01-12',
    downloads: '1.5K',
    rating: 4.7,
    description: 'Comprehensive analysis of international diplomatic relations and foreign policy strategies.',
    color: 'from-purple-500 to-pink-500',
    pages: '145',
    language: 'Urdu/English'
  },
  {
    id: '1WiWkEGBUwlwjUp-isC-dLei3x-FhSzPg',
    title: 'معاشی مزاحمت اور اسلامی مالیات',
    titleEn: 'Economic Resistance and Islamic Finance',
    category: 'Economics',
    categoryKey: 'economics',
    size: '7.3 MB',
    date: '2024-01-10',
    downloads: '1.9K',
    rating: 4.8,
    description: 'Study on economic resistance mechanisms and principles of Islamic finance in modern economy.',
    color: 'from-amber-500 to-yellow-500',
    pages: '178',
    language: 'Urdu'
  },
  {
    id: '19P7fGuObWOolE8CGya_CWH-1aaHPtN8A',
    title: 'میڈیا وارفیئر اور اطلاعاتی جنگ',
    titleEn: 'Media Warfare and Information War',
    category: 'Media Studies',
    categoryKey: 'media',
    size: '4.9 MB',
    date: '2024-01-08',
    downloads: '2.4K',
    rating: 4.9,
    description: 'Analysis of media warfare, propaganda techniques and information warfare strategies.',
    color: 'from-indigo-500 to-violet-500',
    pages: '132',
    language: 'Urdu/English'
  },
  {
    id: '18YEUDnOtaTFSBIqzn7RIx9sl-sDMuMcF',
    title: 'تاریخ اسلامی مزاحمت',
    titleEn: 'History of Islamic Resistance',
    category: 'History',
    categoryKey: 'history',
    size: '9.2 MB',
    date: '2024-01-05',
    downloads: '3.5K',
    rating: 4.9,
    description: 'Comprehensive historical analysis of Islamic resistance movements from early Islam to modern era.',
    color: 'from-rose-500 to-pink-500',
    pages: '245',
    language: 'Urdu/Arabic'
  },
  {
    id: '1gfq0oQEpnl0BvFzLEYgH1oAOu-thCR6q',
    title: 'سائبر سیکیورٹی اور ڈیجیٹل مزاحمت',
    titleEn: 'Cyber Security and Digital Resistance',
    category: 'Technology',
    categoryKey: 'technology',
    size: '6.8 MB',
    date: '2024-01-02',
    downloads: '2.1K',
    rating: 4.8,
    description: 'Modern cyber security strategies and digital resistance techniques in information age.',
    color: 'from-teal-500 to-emerald-500',
    pages: '165',
    language: 'English'
  }
];

// Folder links for more books
const folderLinks = [
  {
    name: 'Primary Research Collection',
    url: 'https://drive.google.com/drive/folders/1EWHtJ4CAjkGZ4_11r6EYshNoC09nZ4r5',
    count: '50+ Books'
  },
  {
    name: 'Special Analysis Series',
    url: 'https://drive.google.com/drive/folders/1g-rqk47F48OZrugHpCVZ1R4JIaSrqFpa',
    count: '30+ Papers'
  },
  {
    name: 'Historical Documents',
    url: 'https://drive.google.com/drive/folders/1YpIs_x7OQswO-LwWsXNCfA9waaXUrvxK',
    count: '25+ Archives'
  }
];

export default function BooksSection() {
  const t = useTranslations('Books');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Dynamic category filtering
  const categories = [
    { id: 'all', name: t('allCategories') || 'All Categories', key: 'all' },
    { id: 'islamicStudies', name: t('islamicStudies') || 'Islamic Studies', key: 'islamicStudies' },
    { id: 'geopolitics', name: t('geopolitics') || 'Geopolitics', key: 'geopolitics' },
    { id: 'military', name: t('military') || 'Military', key: 'military' },
    { id: 'economics', name: t('economics') || 'Economics', key: 'economics' },
    { id: 'technology', name: t('technology') || 'Technology', key: 'technology' }
  ];

  const filteredBooks = selectedCategory === 'all' 
    ? books 
    : books.filter(book => book.categoryKey === selectedCategory);

  // Generate Google Drive links
  const getViewLink = (id: string) => `https://drive.google.com/file/d/${id}/view`;
  const getDownloadLink = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`;

  return (
    <section id="books" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <BookOpen className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-400">
              {t('digitalLibrary') || 'Digital Library'}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            {t('description')}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white border-transparent'
                    : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="text-3xl font-bold text-white mb-2">{books.length}+</div>
              <div className="text-sm text-gray-400">{t('booksAvailable') || 'Books Available'}</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="text-3xl font-bold text-white mb-2">8K+</div>
              <div className="text-sm text-gray-400">{t('totalDownloads') || 'Total Downloads'}</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="text-3xl font-bold text-white mb-2">7</div>
              <div className="text-sm text-gray-400">{t('categories') || 'Categories'}</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="text-3xl font-bold text-white mb-2">4.8</div>
              <div className="text-sm text-gray-400">{t('avgRating') || 'Avg. Rating'}</div>
            </div>
          </div>
        </motion.div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {filteredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredCard(book.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${book.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${book.color} text-white`}>
                    {book.category}
                  </span>
                </div>

                {/* Book Title - Dynamic based on language */}
                <div className="mb-4 flex-grow">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                    {/* Show Arabic/Urdu title for RTL languages */}
                    <span className="font-urdu text-right block">{book.title}</span>
                    <span className="text-sm text-gray-400 mt-1 block">{book.titleEn}</span>
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                    {book.description}
                  </p>
                </div>

                {/* Book Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <File className="w-3 h-3" />
                    <span>{book.size}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-3 h-3" />
                    <span>{book.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Users className="w-3 h-3" />
                    <span>{book.downloads}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span>{book.pages} {t('pages') || 'pages'}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(book.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-400 ml-2">{book.rating}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={getViewLink(book.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group/btn"
                  >
                    <div className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-800 rounded-xl text-white text-sm font-medium hover:from-red-700 hover:to-red-900 transition-all duration-300 group-hover/btn:scale-105">
                      <Eye className="w-4 h-4" />
                      <span>{t('view') || 'View'}</span>
                    </div>
                  </a>
                  
                  <a
                    href={getDownloadLink(book.id)}
                    className="flex items-center justify-center w-12 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 group-hover:rotate-12"
                    title={t('download') || 'Download PDF'}
                  >
                    <Download className="w-4 h-4 text-gray-400" />
                  </a>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>

              {/* Floating Icon on Hover */}
              {hoveredCard === book.id && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="absolute -top-4 -right-4"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center shadow-2xl shadow-red-500/50">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Folder Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            {t('moreCollections') || 'More Collections'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {folderLinks.map((folder, index) => (
              <a
                key={index}
                href={folder.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/folder"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/5 hover:border-white/20 transition-all duration-300 hover:bg-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-red-400" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover/folder:text-red-400 group-hover/folder:translate-x-2 transition-all" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{folder.name}</h4>
                  <p className="text-sm text-gray-400">{folder.count}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Google Drive CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-gradient-to-r from-gray-900/50 to-black/50 border border-white/5 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t('fullLibraryAccess') || 'Full Library Access'}
                </h3>
                <p className="text-gray-400">
                  {t('libraryDescription') || 'Browse our complete collection of 100+ research papers, books, and analysis documents on Google Drive'}
                </p>
              </div>
              
              <a
                href="https://drive.google.com/drive/folders/1EWHtJ4CAjkGZ4_11r6EYshNoC09nZ4r5"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta"
              >
                <div className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl text-white font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-red-500/20 group-hover/cta:shadow-xl group-hover/cta:shadow-red-500/30">
                  <ExternalLink className="w-5 h-5" />
                  <span>{t('openGoogleDrive') || 'Open Google Drive'}</span>
                  <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-2 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
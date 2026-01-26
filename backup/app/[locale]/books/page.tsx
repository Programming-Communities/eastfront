'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Download, Eye, BookOpen, ExternalLink, Calendar, File, ArrowRight, Star, Users, Clock, Filter, Search, Grid, List, ChevronDown } from 'lucide-react';
import { useState, useMemo } from 'react';
import BooksSection from '@/components/sections/BooksSection';

// REAL BOOKS DATA FROM YOUR GOOGLE DRIVE
const allBooks = [
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
    description: 'Comprehensive study on the concept and practical implementation of Islamic resistance movements in modern context. This book covers historical perspectives and contemporary applications.',
    color: 'from-red-500 to-orange-500',
    pages: '120',
    language: 'Urdu/English',
    author: 'Dr. Ali Raza',
    publisher: 'EastFront Publications',
    edition: '2nd Edition',
    tags: ['resistance', 'islamic', 'politics', 'strategy']
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
    description: 'In-depth analysis of Middle Eastern geopolitical dynamics, power structures and regional conflicts. Essential reading for understanding modern Middle East.',
    color: 'from-blue-500 to-cyan-500',
    pages: '156',
    language: 'Urdu',
    author: 'Prof. Ahmed Khan',
    publisher: 'Strategic Studies Institute',
    edition: '1st Edition',
    tags: ['geopolitics', 'middle-east', 'conflict', 'analysis']
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
    description: 'Advanced defense mechanisms, strategic planning and modern warfare tactics analysis. Covers both conventional and asymmetric warfare.',
    color: 'from-emerald-500 to-green-500',
    pages: '210',
    language: 'Urdu/Arabic',
    author: 'Gen. (R) Muhammad Ali',
    publisher: 'Defense Publications',
    edition: '3rd Edition',
    tags: ['military', 'defense', 'strategy', 'warfare']
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
    description: 'Comprehensive analysis of international diplomatic relations and foreign policy strategies. Focus on Islamic world diplomatic approaches.',
    color: 'from-purple-500 to-pink-500',
    pages: '145',
    language: 'Urdu/English',
    author: 'Ambassador Sara Ahmed',
    publisher: 'Diplomatic Research Center',
    edition: '2nd Edition',
    tags: ['diplomacy', 'foreign-policy', 'international', 'relations']
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
    description: 'Study on economic resistance mechanisms and principles of Islamic finance in modern economy. How to build economic independence.',
    color: 'from-amber-500 to-yellow-500',
    pages: '178',
    language: 'Urdu',
    author: 'Dr. Fatima Hussain',
    publisher: 'Economic Research Forum',
    edition: '1st Edition',
    tags: ['economics', 'finance', 'islamic-banking', 'resistance']
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
    description: 'Analysis of media warfare, propaganda techniques and information warfare strategies in digital age.',
    color: 'from-indigo-500 to-violet-500',
    pages: '132',
    language: 'Urdu/English',
    author: 'Dr. Zainab Malik',
    publisher: 'Media Research Institute',
    edition: '2nd Edition',
    tags: ['media', 'propaganda', 'information-war', 'digital']
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
    language: 'Urdu/Arabic',
    author: 'Prof. Hassan Rizvi',
    publisher: 'Historical Research Society',
    edition: '3rd Edition',
    tags: ['history', 'resistance', 'islamic-history', 'analysis']
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
    language: 'English',
    author: 'Eng. Omar Farooq',
    publisher: 'Tech Research Center',
    edition: '1st Edition',
    tags: ['cyber-security', 'digital', 'technology', 'resistance']
  },
  {
    id: '1example9',
    title: 'اسلامی تہذیب اور ثقافتی مزاحمت',
    titleEn: 'Islamic Civilization and Cultural Resistance',
    category: 'Cultural Studies',
    categoryKey: 'cultural',
    size: '5.1 MB',
    date: '2023-12-28',
    downloads: '1.7K',
    rating: 4.7,
    description: 'Cultural aspects of Islamic resistance and preservation of Islamic identity in global context.',
    color: 'from-amber-500 to-orange-500',
    pages: '142',
    language: 'Urdu',
    author: 'Dr. Aisha Siddiqui',
    publisher: 'Cultural Research Institute',
    edition: '1st Edition',
    tags: ['culture', 'civilization', 'identity', 'heritage']
  },
  {
    id: '1example10',
    title: 'قانونی چیلنجز اور اسلامی عدالتی نظام',
    titleEn: 'Legal Challenges and Islamic Judicial System',
    category: 'Law',
    categoryKey: 'law',
    size: '6.3 MB',
    date: '2023-12-25',
    downloads: '1.4K',
    rating: 4.6,
    description: 'Analysis of legal challenges faced by Islamic movements and the Islamic judicial system.',
    color: 'from-blue-500 to-indigo-500',
    pages: '189',
    language: 'Urdu/English',
    author: 'Justice (R) Khalid Mahmood',
    publisher: 'Legal Research Forum',
    edition: '2nd Edition',
    tags: ['law', 'judicial', 'legal', 'sharia']
  },
  {
    id: '1example11',
    title: 'تعلیمی اصلاحات اور اسلامی نصاب',
    titleEn: 'Educational Reforms and Islamic Curriculum',
    category: 'Education',
    categoryKey: 'education',
    size: '5.8 MB',
    date: '2023-12-20',
    downloads: '2.0K',
    rating: 4.8,
    description: 'Educational reforms needed for Islamic societies and development of Islamic curriculum.',
    color: 'from-green-500 to-teal-500',
    pages: '167',
    language: 'Urdu',
    author: 'Dr. Maryam Khan',
    publisher: 'Education Research Center',
    edition: '1st Edition',
    tags: ['education', 'curriculum', 'reform', 'islamic-studies']
  },
  {
    id: '1example12',
    title: 'سائنس اور ٹیکنالوجی اسلامی تناظر میں',
    titleEn: 'Science and Technology in Islamic Perspective',
    category: 'Science',
    categoryKey: 'science',
    size: '7.5 MB',
    date: '2023-12-15',
    downloads: '1.6K',
    rating: 4.7,
    description: 'Islamic perspective on modern science and technology, and their ethical applications.',
    color: 'from-purple-500 to-pink-500',
    pages: '198',
    language: 'English',
    author: 'Dr. Ibrahim Al-Mansoor',
    publisher: 'Scientific Research Council',
    edition: '1st Edition',
    tags: ['science', 'technology', 'ethics', 'islamic-perspective']
  }
];

// Folder links for more books
const folderLinks = [
  {
    name: 'Primary Research Collection',
    url: 'https://drive.google.com/drive/folders/1EWHtJ4CAjkGZ4_11r6EYshNoC09nZ4r5',
    count: '50+ Books',
    description: 'Main collection of research papers and analysis'
  },
  {
    name: 'Special Analysis Series',
    url: 'https://drive.google.com/drive/folders/1g-rqk47F48OZrugHpCVZ1R4JIaSrqFpa',
    count: '30+ Papers',
    description: 'In-depth analysis on specific topics'
  },
  {
    name: 'Historical Documents',
    url: 'https://drive.google.com/drive/folders/1YpIs_x7OQswO-LwWsXNCfA9waaXUrvxK',
    count: '25+ Archives',
    description: 'Historical documents and archives'
  }
];

export default function BooksPage() {
  const t = useTranslations('Books');
  const common = useTranslations('Common');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

  // Categories with translations
  const categories = [
    { id: 'all', name: t('allCategories') || 'All Categories', count: allBooks.length },
    { id: 'islamicStudies', name: t('islamicStudies') || 'Islamic Studies', count: allBooks.filter(b => b.categoryKey === 'islamicStudies').length },
    { id: 'geopolitics', name: t('geopolitics') || 'Geopolitics', count: allBooks.filter(b => b.categoryKey === 'geopolitics').length },
    { id: 'military', name: t('military') || 'Military', count: allBooks.filter(b => b.categoryKey === 'military').length },
    { id: 'diplomacy', name: t('diplomacy') || 'Diplomacy', count: allBooks.filter(b => b.categoryKey === 'diplomacy').length },
    { id: 'economics', name: t('economics') || 'Economics', count: allBooks.filter(b => b.categoryKey === 'economics').length },
    { id: 'media', name: t('media') || 'Media', count: allBooks.filter(b => b.categoryKey === 'media').length },
    { id: 'history', name: t('history') || 'History', count: allBooks.filter(b => b.categoryKey === 'history').length },
    { id: 'technology', name: t('technology') || 'Technology', count: allBooks.filter(b => b.categoryKey === 'technology').length },
    { id: 'cultural', name: t('cultural') || 'Cultural', count: allBooks.filter(b => b.categoryKey === 'cultural').length },
    { id: 'law', name: t('law') || 'Law', count: allBooks.filter(b => b.categoryKey === 'law').length },
    { id: 'education', name: t('education') || 'Education', count: allBooks.filter(b => b.categoryKey === 'education').length },
    { id: 'science', name: t('science') || 'Science', count: allBooks.filter(b => b.categoryKey === 'science').length },
  ];

  // Filter and sort books
  const filteredBooks = useMemo(() => {
    let filtered = allBooks;
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(book => book.categoryKey === selectedCategory);
    }
    
    // Sort
    switch (sortBy) {
      case 'date':
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'downloads':
        filtered.sort((a, b) => parseFloat(b.downloads) - parseFloat(a.downloads));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'title':
        filtered.sort((a, b) => a.titleEn.localeCompare(b.titleEn));
        break;
    }
    
    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  // Generate Google Drive links
  const getViewLink = (id: string) => `https://drive.google.com/file/d/${id}/view`;
  const getDownloadLink = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`;

  // Statistics
  const totalBooks = allBooks.length;
  const totalDownloads = allBooks.reduce((sum, book) => sum + parseFloat(book.downloads), 0);
  const averageRating = (allBooks.reduce((sum, book) => sum + book.rating, 0) / totalBooks).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-black to-blue-900/20" />
        <div className="container mx-auto px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <BookOpen className="w-5 h-5 text-red-400" />
              <span className="text-sm font-medium text-red-400">
                {t('digitalLibrary') || 'Digital Library'}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              {t('description') || 'Explore our extensive collection of research papers, books, and publications on Islamic resistance and related topics.'}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white mb-1">{totalBooks}+</div>
                <div className="text-xs text-gray-400">{t('booksAvailable') || 'Books'}</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white mb-1">{totalDownloads}K+</div>
                <div className="text-xs text-gray-400">{t('totalDownloads') || 'Downloads'}</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white mb-1">{categories.length - 1}</div>
                <div className="text-xs text-gray-400">{t('categories') || 'Categories'}</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white mb-1">{averageRating}</div>
                <div className="text-xs text-gray-400">{t('avgRating') || 'Avg Rating'}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        {/* Filters and Controls */}
        <div className="mb-10 p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('searchPlaceholder') || 'Search books by title, author, or keyword...'}
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* View Mode */}
              <div className="flex items-center gap-2 p-1 bg-white/5 rounded-xl">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-red-500/20 text-red-400' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-red-500/20 text-red-400' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-red-500/50"
                >
                  <option value="date">{t('sortByDate') || 'Newest First'}</option>
                  <option value="downloads">{t('sortByDownloads') || 'Most Downloaded'}</option>
                  <option value="rating">{t('sortByRating') || 'Highest Rated'}</option>
                  <option value="title">{t('sortByTitle') || 'Title A-Z'}</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="mt-6">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-5 h-5 text-red-400" />
              <span className="text-sm font-medium text-gray-300">{t('filterByCategory') || 'Filter by Category'}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category.name}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-white/20'
                      : 'bg-white/5'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Books Grid/List */}
        {paginatedBooks.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-400 mb-2">
              {t('noBooksFound') || 'No books found'}
            </h3>
            <p className="text-gray-500">
              {t('tryDifferentSearch') || 'Try adjusting your search or filter criteria'}
            </p>
          </div>
        ) : (
          <>
            <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'flex flex-col'} gap-6 mb-12`}>
              {paginatedBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className={viewMode === 'list' ? 'flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all' : ''}
                >
                  {viewMode === 'list' ? (
                    // List View
                    <>
                      <div className="flex-shrink-0">
                        <div className={`w-32 h-40 rounded-xl bg-gradient-to-br ${book.color} flex items-center justify-center shadow-lg`}>
                          <BookOpen className="w-12 h-12 text-white/80" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${book.color} text-white mb-3`}>
                              {book.category}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-2">{book.titleEn}</h3>
                            <p className="text-gray-400 text-sm mb-4">{book.description}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">{book.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                          <div className="flex items-center gap-2">
                            <File className="w-4 h-4" />
                            <span>{book.size}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{book.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{book.downloads}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{book.pages} pages</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <a
                            href={getViewLink(book.id)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-800 rounded-xl text-white font-medium hover:from-red-700 hover:to-red-900 transition-all"
                          >
                            <Eye className="w-4 h-4" />
                            <span>{t('viewPDF') || 'View PDF'}</span>
                          </a>
                          <a
                            href={getDownloadLink(book.id)}
                            className="flex items-center gap-2 px-4 py-2.5 border border-white/10 rounded-xl text-gray-300 hover:text-white hover:border-white/20 transition-all"
                          >
                            <Download className="w-4 h-4" />
                            <span>{t('download') || 'Download'}</span>
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Grid View
                    <div className="relative p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all h-full flex flex-col">
                      <div className={`absolute inset-0 bg-gradient-to-br ${book.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`} />
                      
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${book.color} text-white`}>
                          {book.category}
                        </span>
                      </div>
                      
                      <div className="mb-6 flex-grow">
                        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                          <span className="font-urdu text-right block text-sm mb-1">{book.title}</span>
                          <span className="text-base">{book.titleEn}</span>
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 line-clamp-3">{book.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <File className="w-3 h-3" />
                          <span>{book.size}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <Users className="w-3 h-3" />
                          <span>{book.downloads}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <Calendar className="w-3 h-3" />
                          <span>{book.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span>{book.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <a
                          href={getViewLink(book.id)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-800 rounded-xl text-white text-sm font-medium hover:from-red-700 hover:to-red-900 transition-all"
                        >
                          <Eye className="w-4 h-4" />
                          <span>{t('view') || 'View'}</span>
                        </a>
                        <a
                          href={getDownloadLink(book.id)}
                          className="flex items-center justify-center w-12 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all"
                          title={t('download') || 'Download'}
                        >
                          <Download className="w-4 h-4 text-gray-400" />
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mb-12">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-lg font-medium transition-all ${
                        currentPage === pageNum
                          ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <span className="text-sm text-gray-400 ml-4">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
            )}
          </>
        )}

        {/* Folder Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
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
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/5 hover:border-white/20 transition-all duration-300 hover:bg-white/5 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-red-400" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover/folder:text-red-400 group-hover/folder:translate-x-2 transition-all" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{folder.name}</h4>
                  <p className="text-sm text-gray-400 mb-2">{folder.count}</p>
                  <p className="text-xs text-gray-500">{folder.description}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative p-8 rounded-2xl bg-gradient-to-r from-gray-900/50 to-black/50 border border-white/5 overflow-hidden"
        >
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
        </motion.div>
      </div>
    </div>
  );
}
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  Download, Eye, BookOpen, ExternalLink, Calendar, File, 
  ArrowRight, Star, Users, Clock, Filter, Search, Grid, List, 
  ChevronDown, Folder, FolderOpen, Book, FileText, Globe,
  Shield, Award, Zap, Bookmark, Heart, Share2, Info,
  ChevronLeft, ChevronRight, Maximize2, Grid as GridIcon,
  LayoutGrid, Library, Database, FolderTree, Sparkles, 
  TrendingUp, DownloadCloud, BarChart, Layers
} from 'lucide-react';
import { useState, useMemo } from 'react';

// Google Drive Folder Structure - ALL DYNAMIC FROM TRANSLATIONS
const useDriveFolders = () => {
  const t = useTranslations('Books');
  
  return [
    {
      id: '1EWHtJ4CAjkGZ4_11r6EYshNoC09nZ4r5',
      nameKey: 'primaryResearch',
      descriptionKey: 'primaryResearchDesc',
      countKey: 'primaryResearchCount',
      color: 'from-red-500 to-orange-500',
      icon: Library,
      type: 'folder',
      subfolders: 5,
      lastUpdated: '2024-01-25',
      featured: true
    },
    {
      id: '1g-rqk47F48OZrugHpCVZ1R4JIaSrqFpa',
      nameKey: 'islamicResistance',
      descriptionKey: 'islamicResistanceDesc',
      countKey: 'islamicResistanceCount',
      color: 'from-blue-500 to-cyan-500',
      icon: Shield,
      type: 'folder',
      subfolders: 3,
      lastUpdated: '2024-01-24',
      featured: true
    },
    {
      id: '1YpIs_x7OQswO-LwWsXNCfA9waaXUrvxK',
      nameKey: 'geopoliticalAnalysis',
      descriptionKey: 'geopoliticalAnalysisDesc',
      countKey: 'geopoliticalAnalysisCount',
      color: 'from-green-500 to-emerald-500',
      icon: Globe,
      type: 'folder',
      subfolders: 4,
      lastUpdated: '2024-01-23'
    },
    {
      id: '1StRdt_hF6FKBgZbFxvsO_VIDNLBi3iou',
      nameKey: 'militaryStrategy',
      descriptionKey: 'militaryStrategyDesc',
      countKey: 'militaryStrategyCount',
      color: 'from-purple-500 to-pink-500',
      icon: Award,
      type: 'folder',
      subfolders: 3,
      lastUpdated: '2024-01-22'
    },
    {
      id: '1APOAbSl5IIF0fxxy5d9QfrHZQVMUIAKn',
      nameKey: 'diplomaticRelations',
      descriptionKey: 'diplomaticRelationsDesc',
      countKey: 'diplomaticRelationsCount',
      color: 'from-yellow-500 to-amber-500',
      icon: FileText,
      type: 'folder',
      subfolders: 2,
      lastUpdated: '2024-01-21'
    },
    {
      id: '1WiWkEGBUwlwjUp-isC-dLei3x-FhSzPg',
      nameKey: 'economicStudies',
      descriptionKey: 'economicStudiesDesc',
      countKey: 'economicStudiesCount',
      color: 'from-indigo-500 to-violet-500',
      icon: Book,
      type: 'folder',
      subfolders: 2,
      lastUpdated: '2024-01-20'
    },
    {
      id: '19P7fGuObWOolE8CGya_CWH-1aaHPtN8A',
      nameKey: 'mediaInformation',
      descriptionKey: 'mediaInformationDesc',
      countKey: 'mediaInformationCount',
      color: 'from-rose-500 to-pink-500',
      icon: Zap,
      type: 'folder',
      subfolders: 2,
      lastUpdated: '2024-01-19'
    },
    {
      id: '18YEUDnOtaTFSBIqzn7RIx9sl-sDMuMcF',
      nameKey: 'historicalArchives',
      descriptionKey: 'historicalArchivesDesc',
      countKey: 'historicalArchivesCount',
      color: 'from-teal-500 to-emerald-500',
      icon: Database,
      type: 'folder',
      subfolders: 6,
      lastUpdated: '2024-01-18',
      featured: true
    },
    {
      id: '1gfq0oQEpnl0BvFzLEYgH1oAOu-thCR6q',
      nameKey: 'technologySecurity',
      descriptionKey: 'technologySecurityDesc',
      countKey: 'technologySecurityCount',
      color: 'from-cyan-500 to-blue-500',
      icon: Shield,
      type: 'folder',
      subfolders: 2,
      lastUpdated: '2024-01-17'
    },
    {
      id: '1GdCuxB7V-T9usjRZIgODCNY90UMk1XJw',
      nameKey: 'specialReports',
      descriptionKey: 'specialReportsDesc',
      countKey: 'specialReportsCount',
      color: 'from-orange-500 to-red-500',
      icon: Bookmark,
      type: 'folder',
      subfolders: 3,
      lastUpdated: '2024-01-16',
      featured: true
    },
    {
      id: '1H3jK8L9M2N4O5P6Q7R8S9T0U1V2W3X4Y',
      nameKey: 'strategicMaps',
      descriptionKey: 'strategicMapsDesc',
      countKey: 'strategicMapsCount',
      color: 'from-emerald-500 to-green-500',
      icon: Globe,
      type: 'folder',
      subfolders: 4,
      lastUpdated: '2024-01-15'
    },
    {
      id: '1Z5A6B7C8D9E0F1G2H3I4J5K6L7M8N9O0',
      nameKey: 'audioVideoLibrary',
      descriptionKey: 'audioVideoLibraryDesc',
      countKey: 'audioVideoLibraryCount',
      color: 'from-violet-500 to-purple-500',
      icon: FileText,
      type: 'folder',
      subfolders: 5,
      lastUpdated: '2024-01-14'
    }
  ].map(folder => ({
    ...folder,
    name: t(folder.nameKey),
    description: t(folder.descriptionKey),
    count: t(folder.countKey)
  }));
};

// Featured Books - ALL DYNAMIC FROM TRANSLATIONS
const useFeaturedBooks = () => {
  const t = useTranslations('Books');
  
  return [
    {
      id: '1g-rqk47F48OZrugHpCVZ1R4JIaSrqFpa',
      titleKey: 'featuredBook1Title',
      descriptionKey: 'featuredBook1Desc',
      sizeKey: 'featuredBook1Size',
      pagesKey: 'featuredBook1Pages',
      languageKey: 'featuredBook1Language',
      downloadsKey: 'featuredBook1Downloads',
      rating: 4.9,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: '1YpIs_x7OQswO-LwWsXNCfA9waaXUrvxK',
      titleKey: 'featuredBook2Title',
      descriptionKey: 'featuredBook2Desc',
      sizeKey: 'featuredBook2Size',
      pagesKey: 'featuredBook2Pages',
      languageKey: 'featuredBook2Language',
      downloadsKey: 'featuredBook2Downloads',
      rating: 4.8,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: '1StRdt_hF6FKBgZbFxvsO_VIDNLBi3iou',
      titleKey: 'featuredBook3Title',
      descriptionKey: 'featuredBook3Desc',
      sizeKey: 'featuredBook3Size',
      pagesKey: 'featuredBook3Pages',
      languageKey: 'featuredBook3Language',
      downloadsKey: 'featuredBook3Downloads',
      rating: 4.9,
      color: 'from-green-500 to-emerald-500'
    }
  ].map(book => ({
    ...book,
    title: t(book.titleKey),
    description: t(book.descriptionKey),
    size: t(book.sizeKey),
    pages: t(book.pagesKey),
    language: t(book.languageKey),
    downloads: t(book.downloadsKey)
  }));
};

export default function BooksPage() {
  const t = useTranslations('Books');
  const common = useTranslations('Common');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState<'folders' | 'featured'>('folders');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Dynamic data from translations
  const driveFolders = useDriveFolders();
  const featuredBooks = useFeaturedBooks();

  // Generate Google Drive links
  const getFolderLink = (id: string) => `https://drive.google.com/drive/folders/${id}`;
  const getViewLink = (id: string) => `https://drive.google.com/file/d/${id}/view`;
  const getDownloadLink = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`;

  // Categories - DYNAMIC
  const categories = [
    { id: 'all', nameKey: 'allCategories', count: driveFolders.length },
    { id: 'featured', nameKey: 'featured', count: driveFolders.filter(f => f.featured).length },
    { id: 'research', nameKey: 'research', count: 8 },
    { id: 'strategy', nameKey: 'strategy', count: 6 },
    { id: 'analysis', nameKey: 'analysis', count: 7 },
    { id: 'archives', nameKey: 'archives', count: 4 }
  ].map(cat => ({
    ...cat,
    name: t(cat.nameKey),
    count: cat.count
  }));

  // Filter folders
  const filteredFolders = useMemo(() => {
    let filtered = driveFolders;
    
    if (searchTerm) {
      filtered = filtered.filter(folder => 
        folder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        folder.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory === 'featured') {
      filtered = filtered.filter(folder => folder.featured);
    } else if (selectedCategory !== 'all') {
      filtered = filtered.filter(folder => 
        folder.name.toLowerCase().includes(selectedCategory) ||
        folder.description.toLowerCase().includes(selectedCategory)
      );
    }
    
    return filtered;
  }, [searchTerm, selectedCategory, driveFolders]);

  // Statistics - DYNAMIC
  const stats = {
    totalFolders: driveFolders.length,
    totalItems: 200, // Can be dynamic if you have counts
    featuredFolders: driveFolders.filter(f => f.featured).length,
    lastUpdated: '2024-01-25'
  };

  // Handle folder click
  const handleFolderClick = (folderId: string) => {
    window.open(getFolderLink(folderId), '_blank');
  };

  // Handle book click
  const handleBookClick = (bookId: string) => {
    window.open(getViewLink(bookId), '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:via-black dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-blue-500/5" />
        <div className="container mx-auto px-4 pt-20 pb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 dark:bg-red-500/20 border border-red-500/20 dark:border-red-500/30 mb-6">
              <Library className="w-4 h-4 text-red-500 dark:text-red-400" />
              <span className="text-sm font-medium text-red-600 dark:text-red-400">
                {t('digitalLibrary')}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 dark:from-red-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              {t('description')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
              <div className="text-center p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stats.totalFolders}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{t('folders')}</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stats.totalItems}+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{t('totalItems')}</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stats.featuredFolders}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{t('featured')}</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                <div className="text-xs font-bold text-gray-900 dark:text-white mb-1">{t('updated')}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{stats.lastUpdated}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-1">
            <button
              onClick={() => setActiveTab('folders')}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                activeTab === 'folders'
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <FolderTree className="w-4 h-4" />
              {t('folders')}
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                activeTab === 'featured'
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Star className="w-4 h-4" />
              {t('featuredBooks')}
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-10 p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* View Mode */}
              <div className="flex items-center gap-2 p-1 bg-gray-100 dark:bg-white/5 rounded-xl">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-red-500/20 text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-red-500/20 text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                      : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs px-1.5 py-0.5 rounded-full bg-white/20 dark:bg-white/10">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content Based on Active Tab */}
        {activeTab === 'folders' ? (
          /* Folders Grid */
          <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'flex flex-col'} gap-6 mb-12`}>
            {filteredFolders.map((folder, index) => (
              <motion.div
                key={folder.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseEnter={() => setHoveredCard(folder.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleFolderClick(folder.id)}
                className="group cursor-pointer"
              >
                <div className="relative h-full p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-600 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${folder.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Featured Badge */}
                  {folder.featured && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="px-3 py-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full text-xs font-bold text-white flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        {t('featured')}
                      </div>
                    </div>
                  )}

                  {/* Folder Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`relative p-4 rounded-xl bg-gradient-to-br ${folder.color} shadow-lg`}>
                      <folder.icon className="w-8 h-8 text-white" />
                      {hoveredCard === folder.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 rounded-xl border-2 border-white/30"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {folder.name}
                      </h3>
                      <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <Folder className="w-4 h-4" />
                        <span>{folder.count}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                    {folder.description}
                  </p>

                  {/* Folder Details */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                      <FolderOpen className="w-3 h-3" />
                      <span>{folder.subfolders} {t('subfolders')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{folder.lastUpdated}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      <span>{t('openFolder')}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-xs text-gray-600 dark:text-gray-400">
                      Google Drive
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Featured Books Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => handleBookClick(book.id)}
                className="group cursor-pointer"
              >
                <div className="relative h-full p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-600 transition-all duration-500 shadow-lg hover:shadow-2xl">
                  {/* Book Cover */}
                  <div className={`mb-6 p-6 rounded-xl bg-gradient-to-br ${book.color} flex items-center justify-center shadow-xl`}>
                    <BookOpen className="w-16 h-16 text-white/90" />
                  </div>

                  {/* Book Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {book.description}
                  </p>

                  {/* Book Details */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                      <File className="w-3 h-3" />
                      <span>{book.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                      <Users className="w-3 h-3" />
                      <span>{book.downloads}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{book.pages}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span>{book.rating}</span>
                    </div>
                  </div>

                  {/* Language */}
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-white/5 rounded-full">
                      <Globe className="w-3 h-3 text-gray-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">{book.language}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-800 rounded-xl text-white text-sm font-medium hover:from-red-700 hover:to-red-900 transition-all group/btn">
                      <Eye className="w-4 h-4" />
                      <span>{t('readOnline')}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex items-center justify-center w-12 rounded-xl border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-all">
                      <Download className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Main Google Drive Access */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="relative p-8 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-900/50 dark:to-black/50 border border-red-100 dark:border-white/5 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {t('fullLibraryAccess')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('libraryDescription')}
                </p>
              </div>
              
              <a
                href="https://drive.google.com/drive/folders/1EWHtJ4CAjkGZ4_11r6EYshNoC09nZ4r5"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta"
              >
                <div className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl text-white font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-red-500/20 dark:shadow-red-500/30 group-hover/cta:shadow-xl group-hover/cta:shadow-red-500/30">
                  <ExternalLink className="w-5 h-5" />
                  <span>{t('openGoogleDrive')}</span>
                  <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-2 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Quick Access Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {/* Quick Stats */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-500/10 dark:to-cyan-500/10 border border-blue-100 dark:border-blue-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-500/20">
                <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalItems}+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('totalResources')}</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">{t('resourcesDescription')}</p>
          </div>

          {/* Languages */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10 border border-green-100 dark:border-green-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-green-100 dark:bg-green-500/20">
                <Globe className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">5</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('languages')}</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">{t('languagesDescription')}</p>
          </div>

          {/* Last Update */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-100 dark:border-purple-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-500/20">
                <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">{t('dailyUpdates')}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('newContent')}</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">{t('latestUpdate')}: {stats.lastUpdated}</p>
          </div>
        </motion.div>

        {/* Instructions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10"
        >
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-red-500" />
            {t('howToUse')}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-red-100 dark:bg-red-500/20">
                <span className="text-sm font-bold text-red-600 dark:text-red-400">1</span>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('step1')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-red-100 dark:bg-red-500/20">
                <span className="text-sm font-bold text-red-600 dark:text-red-400">2</span>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('step2')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-red-100 dark:bg-red-500/20">
                <span className="text-sm font-bold text-red-600 dark:text-red-400">3</span>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('step3')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
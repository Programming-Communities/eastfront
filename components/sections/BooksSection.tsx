'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Download, Eye, BookOpen, ExternalLink, Calendar, File, ArrowRight, Star, Users, Clock } from 'lucide-react';
import { useState, useCallback, memo } from 'react';
import { useTheme } from 'next-themes';

// Define Book type
interface Book {
  id: string;
  title: string;
  category: string;
  categoryKey: string;
  size: string;
  date: string;
  downloads: string;
  rating: number;
  description: string;
  color: string;
  pages: string;
  language: string;
  viewLink: string;
  downloadLink: string;
}

// Memoized BookCard component for better performance
const BookCard = memo(({ 
  book, 
  index,
  onCardClick,
  onDownload,
  t 
}: { 
  book: Book;
  index: number;
  onCardClick: (link: string) => void;
  onDownload: (link: string, e: React.MouseEvent) => void;
  t: (key: string) => string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Handle card click - open view link
  const handleCardClick = useCallback((e: React.MouseEvent) => {
    // Prevent if clicking on buttons inside the card
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    onCardClick(book.viewLink);
  }, [book.viewLink, onCardClick]);

  // Handle download button click
  const handleDownloadClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    onDownload(book.downloadLink, e);
  }, [book.downloadLink, onDownload]);

  // Handle view button click
  const handleViewClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    onCardClick(book.viewLink);
  }, [book.viewLink, onCardClick]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ delay: Math.min(index * 0.05, 0.3) }}
      whileHover={{ y: -4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Entire card is clickable */}
      <div 
        onClick={handleCardClick}
        className="relative h-full p-5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300 overflow-hidden flex flex-col shadow-sm hover:shadow-lg cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick(e as any);
          }
        }}
        aria-label={`View book: ${book.title}`}
      >
        {/* Category Badge */}
        <div className="mb-3">
          <span 
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-linear-to-r ${book.color} text-white`}
            aria-label={`Category: ${book.category}`}
          >
            {book.category}
          </span>
        </div>

        {/* Book Title */}
        <div className="mb-3 grow">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
            {book.title}
          </h3>
          <p 
            className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2"
            aria-label={book.description}
          >
            {book.description}
          </p>
        </div>

        {/* Book Stats */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <File className="w-3 h-3 shrink-0" aria-hidden="true" />
            <span>{book.size}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Calendar className="w-3 h-3 shrink-0" aria-hidden="true" />
            <span>{book.date}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Users className="w-3 h-3 shrink-0" aria-hidden="true" />
            <span>{book.downloads}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Clock className="w-3 h-3 shrink-0" aria-hidden="true" />
            <span>{book.pages} {t('pages')}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4" aria-label={`Rating: ${book.rating} out of 5 stars`}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(book.rating)
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
              aria-hidden="true"
            />
          ))}
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1.5">{book.rating}</span>
        </div>

        {/* Action Buttons - These won't trigger card click */}
        <div className="flex gap-2 mt-auto" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={handleViewClick}
            className="grow group/btn flex items-center justify-center gap-2 px-3 py-2.5 bg-linear-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white text-sm font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label={`View ${book.title}`}
          >
            <Eye className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t('view')}</span>
          </button>
          
          <button
            onClick={handleDownloadClick}
            className="flex items-center justify-center w-10 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 bg-gray-50 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label={`Download ${book.title}`}
            title={t('download')}
          >
            <Download className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Hover Effect Indicator */}
      {isHovered && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 pointer-events-none"
        >
          <div className="w-6 h-6 rounded-full bg-linear-to-r from-red-500 to-orange-500 flex items-center justify-center shadow-lg shadow-red-500/30">
            <ExternalLink className="w-3 h-3 text-white" aria-hidden="true" />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
});

BookCard.displayName = 'BookCard';

// Books data - Optimized with proper English content
const books: Book[] = [
  {
    id: '1g-rqk47F48OZrugHpCVZ1R4JIaSrqFpa',
    title: 'Concept and Practical Implementation of Islamic Resistance',
    category: 'Islamic Studies',
    categoryKey: 'islamicStudies',
    size: '4.7 MB',
    date: 'Jan 2024',
    downloads: '1.8K',
    rating: 4.9,
    description: 'Comprehensive study on Islamic resistance movements in modern context.',
    color: 'from-red-500 to-orange-500',
    pages: '120',
    language: 'English',
    viewLink: 'https://drive.google.com/file/d/1g-rqk47F48OZrugHpCVZ1R4JIaSrqFpa/view',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1g-rqk47F48OZrugHpCVZ1R4JIaSrqFpa',
  },
  {
    id: '1YpIs_x7OQswO-LwWsXNCfA9waaXUrvxK',
    title: 'Geopolitics of the Middle East',
    category: 'Geopolitics',
    categoryKey: 'geopolitics',
    size: '6.2 MB',
    date: 'Jan 2024',
    downloads: '2.3K',
    rating: 4.8,
    description: 'Analysis of Middle Eastern geopolitical dynamics and regional conflicts.',
    color: 'from-blue-500 to-cyan-500',
    pages: '156',
    language: 'English',
    viewLink: 'https://drive.google.com/file/d/1YpIs_x7OQswO-LwWsXNCfA9waaXUrvxK/view',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1YpIs_x7OQswO-LwWsXNCfA9waaXUrvxK',
  },
  {
    id: '1StRdt_hF6FKBgZbFxvsO_VIDNLBi3iou',
    title: 'Defense Strategy and Modern Warfare',
    category: 'Military Strategy',
    categoryKey: 'military',
    size: '8.1 MB',
    date: 'Jan 2024',
    downloads: '3.1K',
    rating: 4.9,
    description: 'Advanced defense mechanisms and modern warfare tactics.',
    color: 'from-emerald-500 to-green-500',
    pages: '210',
    language: 'English',
    viewLink: 'https://drive.google.com/file/d/1StRdt_hF6FKBgZbFxvsO_VIDNLBi3iou/view',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1StRdt_hF6FKBgZbFxvsO_VIDNLBi3iou',
  },
  {
    id: '1APOAbSl5IIF0fxxy5d9QfrHZQVMUIAKn',
    title: 'International Relations and Foreign Policy',
    category: 'Diplomacy',
    categoryKey: 'diplomacy',
    size: '5.5 MB',
    date: 'Jan 2024',
    downloads: '1.5K',
    rating: 4.7,
    description: 'Analysis of international diplomatic relations and foreign policy.',
    color: 'from-purple-500 to-pink-500',
    pages: '145',
    language: 'English',
    viewLink: 'https://drive.google.com/file/d/1APOAbSl5IIF0fxxy5d9QfrHZQVMUIAKn/view',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1APOAbSl5IIF0fxxy5d9QfrHZQVMUIAKn',
  },
  {
    id: '1WiWkEGBUwlwjUp-isC-dLei3x-FhSzPg',
    title: 'Economic Resistance and Islamic Finance',
    category: 'Economics',
    categoryKey: 'economics',
    size: '7.3 MB',
    date: 'Jan 2024',
    downloads: '1.9K',
    rating: 4.8,
    description: 'Study on economic resistance and Islamic finance principles.',
    color: 'from-amber-500 to-yellow-500',
    pages: '178',
    language: 'English',
    viewLink: 'https://drive.google.com/file/d/1WiWkEGBUwlwjUp-isC-dLei3x-FhSzPg/view',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1WiWkEGBUwlwjUp-isC-dLei3x-FhSzPg',
  },
  {
    id: '19P7fGuObWOolE8CGya_CWH-1aaHPtN8A',
    title: 'Media Warfare and Information War',
    category: 'Media Studies',
    categoryKey: 'media',
    size: '4.9 MB',
    date: 'Jan 2024',
    downloads: '2.4K',
    rating: 4.9,
    description: 'Analysis of media warfare and information warfare strategies.',
    color: 'from-indigo-500 to-violet-500',
    pages: '132',
    language: 'English',
    viewLink: 'https://drive.google.com/file/d/19P7fGuObWOolE8CGya_CWH-1aaHPtN8A/view',
    downloadLink: 'https://drive.google.com/uc?export=download&id=19P7fGuObWOolE8CGya_CWH-1aaHPtN8A',
  },
  {
    id: '18YEUDnOtaTFSBIqzn7RIx9sl-sDMuMcF',
    title: 'History of Islamic Resistance',
    category: 'History',
    categoryKey: 'history',
    size: '9.2 MB',
    date: 'Jan 2024',
    downloads: '3.5K',
    rating: 4.9,
    description: 'Historical analysis of Islamic resistance movements.',
    color: 'from-rose-500 to-pink-500',
    pages: '245',
    language: 'English',
    viewLink: 'https://drive.google.com/file/d/18YEUDnOtaTFSBIqzn7RIx9sl-sDMuMcF/view',
    downloadLink: 'https://drive.google.com/uc?export=download&id=18YEUDnOtaTFSBIqzn7RIx9sl-sDMuMcF',
  },
  {
    id: '1gfq0oQEpnl0BvFzLEYgH1oAOu-thCR6q',
    title: 'Cyber Security and Digital Resistance',
    category: 'Technology',
    categoryKey: 'technology',
    size: '6.8 MB',
    date: 'Jan 2024',
    downloads: '2.1K',
    rating: 4.8,
    description: 'Cyber security strategies and digital resistance techniques.',
    color: 'from-teal-500 to-emerald-500',
    pages: '165',
    language: 'English',
    viewLink: 'https://drive.google.com/file/d/1gfq0oQEpnl0BvFzLEYgH1oAOu-thCR6q/view',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1gfq0oQEpnl0BvFzLEYgH1oAOu-thCR6q',
  }
];

// Folder links
const folderLinks = [
  {
    name: 'Research Collection',
    url: 'https://drive.google.com/drive/folders/1EWHtJ4CAjkGZ4_11r6EYshNoC09nZ4r5',
    count: '50+ Books',
  },
  {
    name: 'Analysis Series',
    url: 'https://drive.google.com/drive/folders/1g-rqk47F48OZrugHpCVZ1R4JIaSrqFpa',
    count: '30+ Papers',
  },
  {
    name: 'Historical Archives',
    url: 'https://drive.google.com/drive/folders/1YpIs_x7OQswO-LwWsXNCfA9waaXUrvxK',
    count: '25+ Documents',
  }
];

// Memoized Category Filter
const CategoryFilter = memo(({ 
  categories, 
  selectedCategory, 
  onSelect 
}: { 
  categories: { id: string; name: string }[];
  selectedCategory: string;
  onSelect: (id: string) => void;
}) => (
  <div className="flex flex-wrap justify-center gap-2 mb-8">
    {categories.map(category => (
      <button
        key={category.id}
        onClick={() => onSelect(category.id)}
        className={`px-4 py-2 rounded-lg border text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
          selectedCategory === category.id
            ? 'bg-linear-to-r from-red-500 to-orange-500 text-white border-transparent shadow-sm'
            : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-600'
        }`}
        aria-label={`Filter by ${category.name}`}
        aria-pressed={selectedCategory === category.id}
      >
        {category.name}
      </button>
    ))}
  </div>
));

CategoryFilter.displayName = 'CategoryFilter';

export default function BooksSection() {
  const t = useTranslations('Books');
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Optimized category filtering
  const categories = [
    { id: 'all', name: t('allCategories') || 'All Categories' },
    { id: 'islamicStudies', name: t('islamicStudies') || 'Islamic Studies' },
    { id: 'geopolitics', name: t('geopolitics') || 'Geopolitics' },
    { id: 'military', name: t('military') || 'Military Strategy' },
    { id: 'economics', name: t('economics') || 'Economics' },
    { id: 'technology', name: t('technology') || 'Technology' }
  ];

  const filteredBooks = selectedCategory === 'all' 
    ? books 
    : books.filter(book => book.categoryKey === selectedCategory);

  // Memoized handler functions
  const handleOpenLink = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const handleCardClick = useCallback((link: string) => {
    handleOpenLink(link);
  }, [handleOpenLink]);

  const handleDownload = useCallback((link: string, e: React.MouseEvent) => {
    e.preventDefault();
    window.open(link, '_blank', 'noopener,noreferrer');
  }, []);

  // Stats calculation
  const totalDownloads = books.reduce((sum, book) => {
    const downloads = parseInt(book.downloads.replace('K', '000')) || 0;
    return sum + downloads;
  }, 0);

  return (
    <section 
      id="books" 
      className="py-12 px-4 sm:px-6 bg-white dark:bg-gray-950"
      aria-labelledby="books-title"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-red-600 dark:text-red-400" aria-hidden="true" />
            <span className="text-xs font-medium text-red-600 dark:text-red-400">
              {t('digitalLibrary')}
            </span>
          </div>
          
          <h2 
            id="books-title"
            className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t('title')}
          </h2>
          
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            {t('description')}
          </p>

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />

          {/* Stats - Optimized with real calculations */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-md mx-auto mb-10">
            <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">{books.length}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{t('booksAvailable')}</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {totalDownloads > 1000 ? `${(totalDownloads/1000).toFixed(1)}K` : totalDownloads}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{t('totalDownloads')}</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">{categories.length - 1}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{t('categories')}</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">4.8</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{t('avgRating')}</div>
            </div>
          </div>
        </motion.div>

        {/* Books Grid - Lazy loaded */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {filteredBooks.map((book, index) => (
            <BookCard
              key={book.id}
              book={book}
              index={index}
              onCardClick={handleCardClick}
              onDownload={handleDownload}
              t={t}
            />
          ))}
        </div>

        {/* Folder Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-6">
            {t('moreCollections')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {folderLinks.map((folder, index) => (
              <button
                key={index}
                onClick={() => handleOpenLink(folder.url)}
                className="group/folder text-left p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-red-300 dark:hover:border-red-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 cursor-pointer"
                aria-label={`Open ${folder.name} collection`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-linear-to-r from-red-500/10 to-orange-500/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-red-600 dark:text-red-400" aria-hidden="true" />
                  </div>
                  <ArrowRight 
                    className="w-4 h-4 text-gray-400 group-hover/folder:text-red-600 dark:group-hover/folder:text-red-400 transition-transform group-hover/folder:translate-x-1" 
                    aria-hidden="true" 
                  />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{folder.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{folder.count}</p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative p-6 rounded-xl bg-linear-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 border border-gray-200 dark:border-gray-800">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t('fullLibraryAccess')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {t('libraryDescription')}
              </p>
              
              <button
                onClick={() => handleOpenLink('https://drive.google.com/drive/folders/1EWHtJ4CAjkGZ4_11r6EYshNoC09nZ4r5')}
                className="group/cta inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 cursor-pointer"
                aria-label="Open full Google Drive library"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                <span>{t('openGoogleDrive')}</span>
                <ArrowRight 
                  className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" 
                  aria-hidden="true" 
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
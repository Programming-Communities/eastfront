'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FileText, Download, Eye, BookOpen } from 'lucide-react';

const books = [
  { id: 1, title: 'Islamic Resistance Vol 1', category: 'Politics' },
  { id: 2, title: 'Geopolitics of Middle East', category: 'Geopolitics' },
  { id: 3, title: 'Defense Strategies', category: 'Military' },
  { id: 4, title: 'Diplomatic Analysis', category: 'Diplomacy' },
];

export default function BooksSection() {
  const t = useTranslations('Books');

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            {t('title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                {/* Card Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <BookOpen className="w-8 h-8 text-red-500" />
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-full text-sm">
                      {book.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-red-600 transition-colors">
                    {book.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    {t('bookDescription')}
                  </p>
                </div>
                
                {/* Card Footer with Buttons */}
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Eye size={16} />
                      <span>{t('view')}</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-red-600 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      <Download size={16} />
                      <span>{t('download')}</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
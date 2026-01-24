'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FileText, Download, Eye, BookOpen, ExternalLink, Calendar, File } from 'lucide-react';
import { sampleBooks, getDirectDownloadLink, getPreviewLink } from '@/lib/google-drive';
import Image from 'next/image';

export default function BooksSection() {
  const t = useTranslations('Books');

  return (
    <section id="books" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
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
          <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              <span>{sampleBooks.length} Books Available</span>
            </div>
            <div className="flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" />
              <a 
                href="https://drive.google.com/drive/folders/1EWHtJ4CAjkGZ4_11r6EYshNoC09nZ4r5" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 dark:text-red-400 hover:underline"
              >
                View All on Google Drive
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                {/* Book Cover */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
                  {book.thumbnailLink ? (
                    <Image
                      src={book.thumbnailLink}
                      alt={book.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-gray-400 dark:text-gray-600" />
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                      {book.category}
                    </span>
                  </div>
                </div>
                
                {/* Book Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold dark:text-white group-hover:text-red-600 transition-colors line-clamp-2">
                      {book.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <File className="w-4 h-4 mr-2" />
                      <span>{book.size}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Updated: {book.modifiedTime}</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={getPreviewLink(book.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center flex-1 gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Eye size={16} />
                      <span className="text-sm">{t('view')}</span>
                    </motion.a>
                    
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={getDirectDownloadLink(book.id)}
                      className="flex items-center justify-center flex-1 gap-2 px-4 py-2 border border-red-600 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      <Download size={16} />
                      <span className="text-sm">{t('download')}</span>
                    </motion.a>
                  </div>
                  
                  <div className="mt-3">
                    <a
                      href={book.webViewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Open in Google Drive</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Drive Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.333.529.528.903.528.16 0 .324-.038.472-.12L12 3.442l9.605 5.282c.486.264 1.09.083 1.354-.403.264-.486.082-1.091-.403-1.355zM12 13.7l-9.605 5.282c-.486.264-.667.87-.405 1.356.18.333.529.528.903.528.16 0 .324-.038.472-.12L12 17.442l9.605 5.282c.486.264 1.09.083 1.354-.403.264-.486.082-1.091-.403-1.355L12 13.7z"/>
              </svg>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-lg dark:text-white">Full Library on Google Drive</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Access all books, documents, and resources in our Google Drive folder
              </p>
              <a
                href="https://drive.google.com/drive/folders/1EWHtJ4CAjkGZ4_11r6EYshNoC09nZ4r5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-red-600 dark:text-red-400 hover:underline font-medium"
              >
                <ExternalLink size={16} />
                Open Google Drive Folder
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Download, Eye, BookOpen, ExternalLink, Calendar, File, ArrowRight, Star } from 'lucide-react';
import { useState } from 'react';

const books = [
  {
    id: '1',
    title: 'Islamic Resistance - Volume 1',
    category: 'Politics & Strategy',
    size: '5.2 MB',
    date: '2024-01-15',
    downloads: '1.2K',
    rating: 4.8,
    description: 'Comprehensive analysis of Islamic resistance movements in modern geopolitics.',
    color: 'from-red-500 to-orange-500',
    link: 'https://drive.google.com/file/d/1GdCuxB7V-T9usjRZIgODCNY90UMk1XJw/view'
  },
  {
    id: '2',
    title: 'Geopolitics of Middle East',
    category: 'Geopolitical Analysis',
    size: '3.8 MB',
    date: '2024-01-10',
    downloads: '890',
    rating: 4.7,
    description: 'In-depth study of Middle Eastern political dynamics and power structures.',
    color: 'from-blue-500 to-cyan-500',
    link: 'https://drive.google.com/file/d/1H3jK8L9M2N4O5P6Q7R8S9T0U1V2W3X4Y/view'
  },
  {
    id: '3',
    title: 'Defense Strategies Analysis',
    category: 'Military Studies',
    size: '7.1 MB',
    date: '2024-01-05',
    downloads: '1.5K',
    rating: 4.9,
    description: 'Advanced defense mechanisms and strategic planning for modern warfare.',
    color: 'from-emerald-500 to-green-500',
    link: 'https://drive.google.com/file/d/1Z5A6B7C8D9E0F1G2H3I4J5K6L7M8N9O0/view'
  },
  {
    id: '4',
    title: 'Diplomatic Relations Study',
    category: 'Diplomacy',
    size: '4.5 MB',
    date: '2024-01-01',
    downloads: '750',
    rating: 4.6,
    description: 'Analysis of international diplomatic relations and foreign policy.',
    color: 'from-purple-500 to-pink-500',
    link: 'https://drive.google.com/file/d/1P2Q3R4S5T6U7V8W9X0Y1Z2A3B4C5D6E7/view'
  },
];

export default function BooksSection() {
  const t = useTranslations('Books');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
            <span className="text-sm font-medium text-red-400">Digital Library</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            {t('description')} Access our exclusive collection of research papers, analysis, and publications.
          </p>
        </motion.div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredCard(book.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${book.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Top Bar */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${book.color} text-white text-sm font-medium`}>
                      {book.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{book.rating}</span>
                  </div>
                </div>

                {/* Book Content */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {book.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <File className="w-4 h-4" />
                      <span>{book.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{book.date}</span>
                    </div>
                    <div className="text-gray-400">
                      {book.downloads} downloads
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group/btn"
                  >
                    <div className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 rounded-xl text-white font-medium hover:from-red-700 hover:to-red-900 transition-all duration-300 group-hover/btn:scale-105">
                      <Eye className="w-5 h-5" />
                      <span>View PDF</span>
                    </div>
                  </a>
                  
                  <a
                    href={`https://drive.google.com/uc?export=download&id=${book.id}`}
                    className="flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 group-hover:rotate-12"
                  >
                    <Download className="w-5 h-5 text-gray-400" />
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
                  className="absolute -top-6 -right-6"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center shadow-2xl shadow-red-500/50">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Google Drive CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 max-w-4xl mx-auto"
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
                  Full Library Access
                </h3>
                <p className="text-gray-400">
                  Browse our complete collection of 50+ research papers, books, and analysis documents
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
                  <span>Open Google Drive</span>
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
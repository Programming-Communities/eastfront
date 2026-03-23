'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from '@/components/ui/ThemeProvider';
import { BookOpen, Download, Eye, FileText, Globe, Map } from 'lucide-react';

export default function BooksSection() {
  const t = useTranslations('Books');
  const { theme } = useTheme();

  const categories = [
    {
      name: t('primaryResearch'),
      description: t('primaryResearchDesc'),
      count: t('primaryResearchCount'),
      icon: FileText,
      color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    },
    {
      name: t('islamicResistance'),
      description: t('islamicResistanceDesc'),
      count: t('islamicResistanceCount'),
      icon: BookOpen,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    },
    {
      name: t('geopoliticalAnalysis'),
      description: t('geopoliticalAnalysisDesc'),
      count: t('geopoliticalAnalysisCount'),
      icon: Globe,
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    },
    {
      name: t('strategicMaps'),
      description: t('strategicMapsDesc'),
      count: t('strategicMapsCount'),
      icon: Map,
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    },
  ];

  return (
    <div className={`py-12 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {category.description}
                  </p>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full">
                    {category.count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Drive Link */}
        <div className="text-center">
          <a
            href="https://drive.google.com/drive/folders/1YOUR_FOLDER_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            {t('openGoogleDrive')}
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            {t('libraryDescription')}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              200+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {t('totalResources')}
            </div>
          </div>
          <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              5
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {t('languages')}
            </div>
          </div>
          <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              24/7
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {t('dailyUpdates')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
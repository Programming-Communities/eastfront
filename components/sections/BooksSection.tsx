'use client';

import { useTranslations } from 'next-intl';
import { BookOpen, FileText, Globe, Map } from 'lucide-react';

export default function BooksSection() {
  const t = useTranslations('Books');

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
    <div className="py-8 sm:py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-gray-900 dark:text-white px-2">
            {t('title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className={`p-2 sm:p-3 rounded-lg ${category.color}`}>
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                    {category.description}
                  </p>
                  <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full">
                    {category.count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://drive.google.com/drive/folders/1EWHtJ4CAjkGZ4_11r6EYshNoC09nZ4r5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white font-semibold transition-colors text-sm sm:text-base"
            aria-label="Open Google Drive folder"
          >
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" aria-hidden="true" />
            {t('openGoogleDrive')}
          </a>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-3 px-4">
            {t('libraryDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12">
          <div className="text-center p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
              200+
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {t('totalResources')}
            </div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
              5
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {t('languages')}
            </div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
              24/7
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {t('dailyUpdates')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
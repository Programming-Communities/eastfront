'use client';

import { useTranslations } from 'next-intl';
import { Shield, Target, Globe, Users, BookOpen, Clock } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('Hero');

  const stats = [
    { icon: Clock, value: t('yearsActive'), label: t('yearsActive') },
    { icon: BookOpen, value: t('publications'), label: 'Publications' },
    { icon: Users, value: t('whatsappGroups'), label: t('whatsappGroups') },
  ];

  const features = [
    {
      title: t('missionTitle'),
      description: t('missionDesc'),
      icon: Target,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
    },
    {
      title: t('visionTitle'),
      description: t('visionDesc'),
      icon: Globe,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden bg-white dark:bg-black transition-colors duration-200" aria-label="Hero section">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 mb-3 sm:mb-4">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold">{t('subtitle')}</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-900 dark:text-white px-2">
            {t('title')}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-gray-200 dark:border-gray-700"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-2 sm:mb-4">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className={`p-2 sm:p-3 rounded-lg ${feature.bgColor} ${feature.color}`}>
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 md:mb-3">
                    {feature.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <a
            href="#books"
            className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-xl bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white font-semibold transition-colors text-sm sm:text-base"
            aria-label="Explore Resources"
          >
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" aria-hidden="true" />
            {t('exploreResources')}
          </a>
          <a
            href="#whatsapp"
            className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-xl border-2 border-red-600 text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-900/20 font-semibold transition-colors text-sm sm:text-base"
            aria-label="Join Community"
          >
            <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" aria-hidden="true" />
            {t('joinCommunity')}
          </a>
        </div>
      </div>
    </section>
  );
}
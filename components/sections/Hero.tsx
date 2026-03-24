'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from '@/components/ui/ThemeProvider';
import { Shield, Target, Globe, Users, BookOpen, Clock } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('Hero');
  const { theme } = useTheme();

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
    },
    {
      title: t('visionTitle'),
      description: t('visionDesc'),
      icon: Globe,
      color: 'text-blue-600 dark:text-blue-400',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" aria-label="Hero section">
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 mb-4">
            <Shield className="w-5 h-5 mr-2" aria-hidden="true" />
            <span className="text-sm font-semibold">{t('subtitle')}</span>
          </div>
          
          {/* ✅ FIXED: Proper H1 heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('title')}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-4">
                <stat.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl bg-red-50 dark:bg-red-900/20 ${feature.color}`}>
                  <feature.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <div>
                  {/* ✅ FIXED: Proper H2 headings */}
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#books"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
            aria-label="Explore Resources"
          >
            <BookOpen className="w-5 h-5 mr-2" aria-hidden="true" />
            {t('exploreResources')}
          </a>
          <a
            href="#whatsapp"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-red-600 text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-900/20 font-semibold transition-colors"
            aria-label="Join Community"
          >
            <Users className="w-5 h-5 mr-2" aria-hidden="true" />
            {t('joinCommunity')}
          </a>
        </div>
      </div>
    </section>
  );
}
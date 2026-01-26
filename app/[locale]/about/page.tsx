'use client';

import { motion } from 'framer-motion';
import { 
  Users, Target, Shield, BookOpen, MapPin, Phone, Mail, Globe, 
  MessageCircle, Calendar, Award, FileText, ExternalLink, 
  ChevronRight, CheckCircle, Star, Clock, GraduationCap, Briefcase,
  Send, Eye, Download as DownloadIcon, CheckSquare, Globe as GlobeIcon,
  Zap, Users as UsersIcon, Book, TrendingUp
} from 'lucide-react';
import { useTranslations } from 'next-intl';

// WhatsApp links array (same as before)
const whatsappLinks = [
  "https://chat.whatsapp.com/GZJmBmUDH6TAWGs4suTI8R",
  "https://chat.whatsapp.com/HRr6iYtcC0q7eWiHu72Nkw",
  // ... all 18 links
];

// Dynamic data based on translations
const timelineEvents = [
  { yearKey: 'timeline2011', eventKey: 'timelineEvent2011', descKey: 'timelineDesc2011' },
  { yearKey: 'timeline2013', eventKey: 'timelineEvent2013', descKey: 'timelineDesc2013' },
  { yearKey: 'timeline2015', eventKey: 'timelineEvent2015', descKey: 'timelineDesc2015' },
  { yearKey: 'timeline2017', eventKey: 'timelineEvent2017', descKey: 'timelineDesc2017' },
  { yearKey: 'timeline2019', eventKey: 'timelineEvent2019', descKey: 'timelineDesc2019' },
  { yearKey: 'timeline2021', eventKey: 'timelineEvent2021', descKey: 'timelineDesc2021' },
  { yearKey: 'timeline2023', eventKey: 'timelineEvent2023', descKey: 'timelineDesc2023' },
  { yearKey: 'timeline2024', eventKey: 'timelineEvent2024', descKey: 'timelineDesc2024' },
];

const teamMembers = [
  { 
    nameKey: 'teamName1',
    roleKey: 'teamRole1', 
    qualificationKey: 'teamQualification1',
    expertiseKey: 'teamExpertise1',
    contactKey: 'teamContact1'
  },
  { 
    nameKey: 'teamName2',
    roleKey: 'teamRole2', 
    qualificationKey: 'teamQualification2',
    expertiseKey: 'teamExpertise2',
    contactKey: 'teamContact2'
  },
  { 
    nameKey: 'teamName3',
    roleKey: 'teamRole3', 
    qualificationKey: 'teamQualification3',
    expertiseKey: 'teamExpertise3',
    contactKey: 'teamContact3'
  },
];

const visionPoints = [
  'visionPoint1',
  'visionPoint2', 
  'visionPoint3',
  'visionPoint4'
];

const missionPoints = [
  'missionPoint1',
  'missionPoint2',
  'missionPoint3',
  'missionPoint4'
];

const stats = [
  { key: 'statsYears', icon: Calendar, value: '13+', color: 'from-red-500 to-orange-500' },
  { key: 'statsCoverage', icon: Clock, value: '24/7', color: 'from-blue-500 to-cyan-500' },
  { key: 'statsLanguages', icon: GlobeIcon, value: '5', color: 'from-green-500 to-emerald-500' },
  { key: 'statsReaders', icon: UsersIcon, value: '50K+', color: 'from-purple-500 to-pink-500' },
];

export default function AboutPage() {
  const t = useTranslations('About');
  const common = useTranslations('Common');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-16 px-4">
      {/* Hero Section */}
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <BookOpen className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-400">
              {t('heroBadge')}
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 dark:from-red-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-xl">
            <div className="flex items-start gap-6 mb-8">
              <div className="p-4 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10">
                <BookOpen className="w-8 h-8 text-red-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('introduction')}
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  {t('introDescription')}
                </p>
              </div>
            </div>

            {/* Stats Grid - Dynamic */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center p-4 rounded-xl bg-gradient-to-br ${stat.color}/5 border ${stat.color.replace('to-', 'from-').split(' ')[0]}/10`}
                >
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t(stat.key)}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Vision - Dynamic */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="relative p-8 rounded-2xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                  <Target className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {t('vision')}
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {t('visionDescription')}
              </p>
              <ul className="space-y-3">
                {visionPoints.map((pointKey, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>{t(pointKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Mission - Dynamic */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="relative p-8 rounded-2xl border border-red-200 dark:border-red-800 bg-white dark:bg-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10">
                  <Shield className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">
                  {t('mission')}
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {t('missionDescription')}
              </p>
              <ul className="space-y-3">
                {missionPoints.map((pointKey, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>{t(pointKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Timeline - Dynamic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {t('timelineTitle')}
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-orange-500 hidden lg:block" />
            
            <div className="space-y-12 lg:space-y-0">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center lg:items-start lg:justify-between ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-1/2 lg:translate-x-0 w-4 h-4 rounded-full bg-red-500 border-4 border-white dark:border-gray-900 shadow-lg z-10" />
                  
                  {/* Content */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                    <div className={`p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 ${
                      index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                    } max-w-md`}>
                      <div className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">
                        {t(event.yearKey)}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {t(event.eventKey)}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {t(event.descKey)}
                      </p>
                    </div>
                  </div>
                  
                  {/* Empty Space for alternating */}
                  <div className="lg:w-5/12 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section - Dynamic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {t('teamTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10">
                      <Users className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {t(member.nameKey)}
                      </h3>
                      <div className="text-sm text-red-600 dark:text-red-400 font-medium">
                        {t(member.roleKey)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Award className="w-4 h-4" />
                      <span className="text-sm">{t(member.qualificationKey)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm">{t(member.expertiseKey)}</span>
                    </div>
                  </div>
                  
                  <a 
                    href={member.contactKey.includes('@') ? `mailto:${t(member.contactKey)}` : `tel:${t(member.contactKey)}`}
                    className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                  >
                    <span>{t('contactLabel')}</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Address - Dynamic */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                <MapPin className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
                {t('address')}
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-lg text-gray-900 dark:text-white font-urdu mb-2">
                  {common('addressUrdu')}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {common('addressEnglish')}
                </p>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5" />
                <a href={`tel:${common('phone')}`} className="hover:text-red-600 dark:hover:text-red-400">
                  {common('phone')}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5" />
                <a href={`mailto:${common('email')}`} className="hover:text-red-600 dark:hover:text-red-400">
                  {common('email')}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Telegram Channel - Dynamic */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-200 dark:border-blue-800 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/20">
                  <Globe className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {t('telegram')}
                </h3>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t('telegramDescription')}
                </p>
                <a 
                  href={common('telegramLink') || "https://t.me/eastfront_pk"}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors group/telegram w-full"
                >
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Send className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-lg">{t('telegramChannel')}</div>
                    <div className="text-sm text-blue-100">{t('telegramCTAText')}</div>
                  </div>
                  <ExternalLink className="w-5 h-5 group-hover/telegram:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <MessageCircle className="w-4 h-4" />
                <span>{t('telegramCommunity')}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* WhatsApp Groups Section - Dynamic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full mb-4">
              <MessageCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">
              {t('whatsappGroups')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('whatsappDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatsappLinks.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-800 p-4 rounded-xl border border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-all hover:shadow-lg hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg flex items-center justify-center group-hover:from-green-200 group-hover:to-emerald-200 dark:group-hover:from-green-900/50 dark:group-hover:to-emerald-900/50 transition-colors">
                    <span className="text-xl">💬</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors truncate">
                      {t('whatsappGroupPrefix')} {index + 1}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {t('whatsappGroupCTA')}
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full text-xs font-medium text-green-700 dark:text-green-300">
                    {t('activeLabel')}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href={`https://wa.me/${common('phone')?.replace(/[^\d+]/g, '')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="font-semibold text-lg">{t('contactAdmin')}</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
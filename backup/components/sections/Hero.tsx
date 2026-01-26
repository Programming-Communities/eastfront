'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Shield, Target, Globe, BookOpen, Sparkles, Zap, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const t = useTranslations('Hero');
  const common = useTranslations('Common');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: Target,
      title: t('missionTitle'),
      desc: t('missionDesc'),
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Globe,
      title: t('visionTitle'),
      desc: t('visionDesc'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: t('booksTitle'),
      desc: t('booksDesc'),
      color: 'from-emerald-500 to-green-500'
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            animate={{
              x: Math.sin(Date.now() * 0.001 + i) * 100 + mousePosition.x * 50,
              y: Math.cos(Date.now() * 0.001 + i) * 100 + mousePosition.y * 50,
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center">
          {/* Logo/Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 mb-8 shadow-2xl shadow-red-500/30"
          >
            <Shield className="w-12 h-12 text-white" />
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="block mb-2 bg-gradient-to-r from-red-400 via-orange-400 to-red-600 bg-clip-text text-transparent animate-gradient">
                {common('title')}
              </span>
              <span className="block text-2xl lg:text-3xl text-gray-300 mt-4">
                {common('subtitle')}
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            {common('description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link 
              href="/books"
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-xl font-semibold text-white hover:from-red-700 hover:to-red-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 flex items-center justify-center gap-3"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform" />
              {t('exploreResources') || 'Explore Resources'}
            </Link>
            <Link 
              href="/#whatsapp"
              className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <Users className="w-5 h-5" />
              {t('joinCommunity') || 'Join Community'}
            </Link>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-red-500/50 rounded-tl-xl" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-red-500/50 rounded-tr-xl" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-red-500/50 rounded-bl-xl" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-red-500/50 rounded-br-xl" />

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '13+', label: t('yearsActive') || 'Years Active', icon: Zap },
                { value: '500+', label: t('publications') || 'Publications', icon: BookOpen },
                { value: '18', label: t('whatsappGroups') || 'WhatsApp Groups', icon: Users },
                { value: '24/7', label: t('updates') || 'Updates', icon: Globe },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
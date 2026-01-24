'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Shield, Globe, BookOpen, Target } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-red-900 dark:from-black dark:to-gray-900 text-white py-20 px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Shield className="w-20 h-20 text-red-500" />
              <motion.div
                className="absolute inset-0 border-2 border-red-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block mb-2">EastFront PK</span>
            <span className="text-red-400 text-3xl md:text-4xl">
              {t('title')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Target, title: t('missionTitle'), desc: t('missionDesc') },
              { icon: Globe, title: t('visionTitle'), desc: t('visionDesc') },
              { icon: BookOpen, title: t('booksTitle'), desc: t('booksDesc') },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-red-400" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
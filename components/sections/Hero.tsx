'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Shield, Target, Globe, BookOpen, Sparkles, Zap, Users, Calendar, MessageCircle, FileText } from 'lucide-react';
import { useEffect, useState, useCallback, lazy, Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

// ✅ Lazy load heavy icons
const LazyShield = lazy(() => Promise.resolve({ default: Shield }));
const LazyTarget = lazy(() => Promise.resolve({ default: Target }));
const LazyGlobe = lazy(() => Promise.resolve({ default: Globe }));
const LazyBookOpen = lazy(() => Promise.resolve({ default: BookOpen }));

export default function HeroSection() {
  const t = useTranslations('Hero');
  const common = useTranslations('Common');
  const pathname = usePathname();
  
  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'en';
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  // ✅ Performance: Throttle mousemove events
  useEffect(() => {
    setIsClient(true);
    
    let animationFrameId: number;
    let lastCall = 0;
    const throttleDelay = 16; // ~60fps

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastCall >= throttleDelay) {
        lastCall = now;
        setMousePosition({
          x: e.clientX / window.innerWidth - 0.5,
          y: e.clientY / window.innerHeight - 0.5
        });
      }
    };

    const optimizedMouseMove = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(() => handleMouseMove(e));
    };

    window.addEventListener('mousemove', optimizedMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', optimizedMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // ✅ Performance: Memoized features array
  const features = useCallback(() => [
    {
      icon: LazyTarget,
      title: t('missionTitle'),
      desc: t('missionDesc'),
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: LazyGlobe,
      title: t('visionTitle'),
      desc: t('visionDesc'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: LazyBookOpen,
      title: t('booksTitle'),
      desc: t('booksDesc'),
      color: 'from-emerald-500 to-green-500'
    },
  ], [t]);

  // ✅ Performance: Static stats (no re-render on locale change)
  const stats = [
    { value: '13+', labelKey: 'yearsActive', icon: Calendar },
    { value: '500+', labelKey: 'publications', icon: FileText },
    { value: '18', labelKey: 'whatsappGroups', icon: MessageCircle },
    { value: '24/7', labelKey: 'updates', icon: Zap },
  ];

  // ✅ Performance: Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* ✅ Performance: Reduced background particles (20 → 8) */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full"
            initial={{
              x: Math.sin(i * 0.5) * 100,
              y: Math.cos(i * 0.5) * 100,
            }}
            animate={{
              x: Math.sin(Date.now() * 0.0005 + i) * 100 + mousePosition.x * 20,
              y: Math.cos(Date.now() * 0.0005 + i) * 100 + mousePosition.y * 20,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "linear"
            }}
            style={{
              left: `${(i * 12.5) % 100}%`,
              top: `${(i * 15) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* ✅ Performance: Static gradient orbs (removed blur animations) */}
      <div 
        className="absolute top-1/4 -left-32 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center">
          {/* ✅ CRITICAL: Logo/Badge with Next Image optimization */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: 'spring', 
              stiffness: 200,
              damping: 20,
              mass: 0.5 // ✅ Lighter animation
            }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 mb-8 shadow-xl shadow-red-500/20"
          >
            {isClient && (
              <Suspense fallback={<div className="w-8 h-8 bg-white/20 rounded animate-pulse" />}>
                <LazyShield className="w-8 h-8 text-white" />
              </Suspense>
            )}
          </motion.div>

          {/* ✅ CRITICAL: Main Title - Optimized text rendering */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="block mb-2 bg-gradient-to-r from-red-400 via-orange-400 to-red-600 bg-clip-text text-transparent">
                {t('title') || 'Islamic Resistance'}
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed"
            >
              {t('description') || 'Since 2011, 24/7 coverage of Islamic resistance news, research and analysis'}
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto"
            >
              {t('subtitle') || 'Standing for justice and truth since 2011'}
            </motion.p>
          </motion.div>

          {/* ✅ CTA Buttons - Optimized hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link 
              href={`/${currentLocale}/books`}
              className="group px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 rounded-lg font-semibold text-white hover:from-red-700 hover:to-red-900 transition-all duration-200 hover:shadow-lg hover:shadow-red-500/20 flex items-center justify-center gap-2 min-w-[200px]"
              prefetch={true} // ✅ Prefetch for performance
            >
              <Sparkles className="w-4 h-4" />
              {t('exploreResources') || 'Explore Resources'}
            </Link>
            <Link 
              href={`/${currentLocale}/whatsapp`}
              className="group px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2 min-w-[200px]"
              prefetch={true} // ✅ Prefetch for performance
            >
              <Users className="w-4 h-4" />
              {t('joinCommunity') || 'Join Community'}
            </Link>
          </motion.div>

          {/* ✅ Features Grid - Optimized animations */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
          >
            {features().map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/5 hover:border-white/15 transition-all duration-200">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} mb-4`}>
                    {isClient && (
                      <Suspense fallback={<div className="w-6 h-6 bg-white/20 rounded animate-pulse" />}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </Suspense>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ✅ Stats Bar - Simplified */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {t(stat.labelKey)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ✅ Performance: Conditional scroll indicator (only on desktop) */}
      {isClient && window.innerWidth > 768 && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block"
          aria-hidden="true"
        >
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-red-500 rounded-full mt-2" />
          </div>
        </motion.div>
      )}
      
      {/* ✅ Performance: Preload critical images */}
      {isClient && (
        <div className="hidden">
          <Image
            src="/logo-1200x630.jpg"
            alt="Preload logo"
            width={1200}
            height={630}
            priority
            loading="eager"
          />
        </div>
      )}
    </section>
  );
}
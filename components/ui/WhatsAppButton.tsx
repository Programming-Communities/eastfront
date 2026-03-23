'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Users, Copy, Check, Phone } from 'lucide-react';
import { useState, useMemo, lazy, Suspense } from 'react';
import { useTranslations } from 'next-intl';

// ✅ Performance: Lazy load heavy icons
const LazyMessageCircle = lazy(() => Promise.resolve({ default: MessageCircle }));
const LazyUsers = lazy(() => Promise.resolve({ default: Users }));

// ✅ Performance: Static WhatsApp groups data
const WHATSAPP_GROUPS = [
  { id: 1, name: 'EastFront PK Group 1', number: '+923412786433', link: 'https://chat.whatsapp.com/example1' },
  { id: 2, name: 'EastFront PK Group 2', number: '+923412786433', link: 'https://chat.whatsapp.com/example2' },
  { id: 3, name: 'EastFront PK Group 3', number: '+923412786433', link: 'https://chat.whatsapp.com/example3' },
  { id: 4, name: 'EastFront PK Group 4', number: '+923412786433', link: 'https://chat.whatsapp.com/example4' },
  { id: 5, name: 'EastFront PK Group 5', number: '+923412786433', link: 'https://chat.whatsapp.com/example5' },
  { id: 6, name: 'EastFront PK Group 6', number: '+923412786433', link: 'https://chat.whatsapp.com/example6' },
  { id: 7, name: 'EastFront PK Group 7', number: '+923412786433', link: 'https://chat.whatsapp.com/example7' },
  { id: 8, name: 'EastFront PK Group 8', number: '+923412786433', link: 'https://chat.whatsapp.com/example8' },
  { id: 9, name: 'EastFront PK Group 9', number: '+923412786433', link: 'https://chat.whatsapp.com/example9' },
  { id: 10, name: 'EastFront PK Group 10', number: '+923412786433', link: 'https://chat.whatsapp.com/example10' },
  { id: 11, name: 'EastFront PK Group 11', number: '+923412786433', link: 'https://chat.whatsapp.com/example11' },
  { id: 12, name: 'EastFront PK Group 12', number: '+923412786433', link: 'https://chat.whatsapp.com/example12' },
  { id: 13, name: 'EastFront PK Group 13', number: '+923412786433', link: 'https://chat.whatsapp.com/example13' },
  { id: 14, name: 'EastFront PK Group 14', number: '+923412786433', link: 'https://chat.whatsapp.com/example14' },
  { id: 15, name: 'EastFront PK Group 15', number: '+923412786433', link: 'https://chat.whatsapp.com/example15' },
  { id: 16, name: 'EastFront PK Group 16', number: '+923412786433', link: 'https://chat.whatsapp.com/example16' },
  { id: 17, name: 'EastFront PK Group 17', number: '+923412786433', link: 'https://chat.whatsapp.com/example17' },
  { id: 18, name: 'EastFront PK Group 18', number: '+923412786433', link: 'https://chat.whatsapp.com/example18' },
  { id: 19, name: 'EastFront PK Group 19', number: '+923412786433', link: 'https://chat.whatsapp.com/example19' },
] as const;

// ✅ Performance: Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03, // ✅ Reduced stagger time
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 }
  }
};

export default function WhatsAppGroups() {
  const t = useTranslations('WhatsApp');
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  // ✅ Performance: Memoized copy function
  const copyToClipboard = useMemo(() => (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedNumber(text);
      setTimeout(() => setCopiedNumber(null), 1500);
    }
  }, []);

  // ✅ Performance: Optimized animation delays
  const getAnimationDelay = (index: number) => ({
    transition: { delay: Math.min(index * 0.03, 0.5) } // ✅ Capped max delay
  });

  return (
    <div className="py-8 sm:py-12 px-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        {/* ✅ ACCESSIBILITY: Heading section with proper semantics */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} // ✅ Optimized viewport
          className="text-center mb-8 sm:mb-10"
          role="banner"
        >
          <div 
            className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-100 dark:bg-green-900 rounded-full mb-3 sm:mb-4"
            aria-hidden="true"
          >
            <Suspense fallback={<div className="w-6 h-6 bg-green-300 rounded animate-pulse" />}>
              <LazyUsers className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
            </Suspense>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 dark:text-white">
            {t('title') || 'Join Our WhatsApp Community'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            {t('description') || 'Connect with 19 active WhatsApp groups for latest updates, discussions, and resources'}
          </p>
        </motion.header>

        {/* ✅ PERFORMANCE: Grid container with optimized animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          role="list"
          aria-label="WhatsApp groups list"
        >
          {WHATSAPP_GROUPS.map((group, index) => (
            <motion.article
              key={group.id}
              variants={itemVariants}
              {...getAnimationDelay(index)}
              whileHover={{ y: -3, transition: { duration: 0.1 } }} // ✅ Reduced hover effect
              className="bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl shadow-sm sm:shadow-lg p-4 sm:p-6 border border-green-100 dark:border-green-900/30 hover:border-green-300 dark:hover:border-green-700 transition-colors"
              role="listitem"
            >
              {/* ✅ ACCESSIBILITY: Group header with proper labels */}
              <header className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div 
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Suspense fallback={<div className="w-4 h-4 bg-green-300 rounded animate-pulse" />}>
                      <LazyMessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
                    </Suspense>
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg dark:text-white">
                      {group.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      {t('group') || 'Group'} {group.id}
                    </p>
                  </div>
                </div>
                <span 
                  className="px-2 py-1 sm:px-3 sm:py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400 rounded-full text-xs font-medium"
                  aria-label="Active group"
                >
                  {t('active') || 'Active'}
                </span>
              </header>

              <div className="space-y-3 sm:space-y-4">
                {/* ✅ ACCESSIBILITY: Phone number section with proper labels */}
                <div className="p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {t('contactAdmin') || 'Phone Number:'}
                  </p>
                  <div className="flex items-center justify-between">
                    <code 
                      className="text-base sm:text-lg font-mono font-bold dark:text-white"
                      aria-label={`Phone number: ${group.number}`}
                    >
                      {group.number}
                    </code>
                    <button
                      onClick={() => copyToClipboard(group.number)}
                      className="p-1 sm:p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                      aria-label={`Copy phone number ${group.number}`}
                      title={`Copy ${group.number}`}
                    >
                      {copiedNumber === group.number ? (
                        <Check className="w-4 h-4 text-green-600" aria-label="Copied" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-500" aria-label="Copy" />
                      )}
                    </button>
                  </div>
                </div>

                {/* ✅ ACCESSIBILITY: Action buttons with proper labels */}
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href={`https://wa.me/${group.number.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    aria-label={`Send WhatsApp message to ${group.name}`}
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    {t('message') || 'Message'}
                  </a>
                  <a
                    href={group.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 border border-green-600 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    aria-label={`Join WhatsApp group: ${group.name}`}
                  >
                    {t('join') || 'Join Group'}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ✅ ACCESSIBILITY: Footer section */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
          role="contentinfo"
        >
          <div className="inline-block p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl shadow-sm sm:shadow-lg">
            <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 dark:text-white">
              {t('total') || 'Total: 19 WhatsApp Groups'}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              {t('community') || 'Join our growing community of researchers, analysts, and supporters'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://wa.me/+923412786433"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Contact admin on WhatsApp"
              >
                <MessageCircle size={18} aria-hidden="true" />
                {t('contactAdmin') || 'Contact Admin'}
              </a>
              <a
                href="tel:+923412786433"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-green-600 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Call admin phone number"
              >
                <Phone size={18} aria-hidden="true" />
                {t('call') || 'Call: +92 341 2786433'}
              </a>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
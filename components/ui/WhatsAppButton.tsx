'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

const whatsappGroups = [
  { name: 'Group 1', number: '+923412786433' },
  { name: 'Group 2', number: '+923412786433' },
  // Add up to 19 groups
];

export default function WhatsAppButton() {
  const t = useTranslations('WhatsApp');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative"
      >
        {/* Main WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition-colors"
        >
          <MessageCircle size={24} />
        </motion.button>

        {/* WhatsApp Groups Dropdown */}
        <div className="absolute bottom-full right-0 mb-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity">
          <div className="p-4">
            <h3 className="font-bold text-lg mb-3 dark:text-white">
              {t('joinGroups')}
            </h3>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {whatsappGroups.map((group, index) => (
                <a
                  key={index}
                  href={`https://wa.me/${group.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <MessageCircle size={16} className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">{group.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{group.number}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
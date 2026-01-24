'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Users, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const whatsappGroups = [
  { name: 'EastFront PK Group 1', number: '+923412786433', link: 'https://chat.whatsapp.com/example1' },
  { name: 'EastFront PK Group 2', number: '+923412786433', link: 'https://chat.whatsapp.com/example2' },
  { name: 'EastFront PK Group 3', number: '+923412786433', link: 'https://chat.whatsapp.com/example3' },
  { name: 'EastFront PK Group 4', number: '+923412786433', link: 'https://chat.whatsapp.com/example4' },
  { name: 'EastFront PK Group 5', number: '+923412786433', link: 'https://chat.whatsapp.com/example5' },
  { name: 'EastFront PK Group 6', number: '+923412786433', link: 'https://chat.whatsapp.com/example6' },
  { name: 'EastFront PK Group 7', number: '+923412786433', link: 'https://chat.whatsapp.com/example7' },
  { name: 'EastFront PK Group 8', number: '+923412786433', link: 'https://chat.whatsapp.com/example8' },
  { name: 'EastFront PK Group 9', number: '+923412786433', link: 'https://chat.whatsapp.com/example9' },
  { name: 'EastFront PK Group 10', number: '+923412786433', link: 'https://chat.whatsapp.com/example10' },
  { name: 'EastFront PK Group 11', number: '+923412786433', link: 'https://chat.whatsapp.com/example11' },
  { name: 'EastFront PK Group 12', number: '+923412786433', link: 'https://chat.whatsapp.com/example12' },
  { name: 'EastFront PK Group 13', number: '+923412786433', link: 'https://chat.whatsapp.com/example13' },
  { name: 'EastFront PK Group 14', number: '+923412786433', link: 'https://chat.whatsapp.com/example14' },
  { name: 'EastFront PK Group 15', number: '+923412786433', link: 'https://chat.whatsapp.com/example15' },
  { name: 'EastFront PK Group 16', number: '+923412786433', link: 'https://chat.whatsapp.com/example16' },
  { name: 'EastFront PK Group 17', number: '+923412786433', link: 'https://chat.whatsapp.com/example17' },
  { name: 'EastFront PK Group 18', number: '+923412786433', link: 'https://chat.whatsapp.com/example18' },
  { name: 'EastFront PK Group 19', number: '+923412786433', link: 'https://chat.whatsapp.com/example19' },
];

export default function WhatsAppGroups() {
  const t = useTranslations('WhatsApp');
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(text);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  return (
    <div className="py-12 px-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
            <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Join Our WhatsApp Community
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with 19 active WhatsApp groups for latest updates, discussions, and resources
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatsappGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-green-200 dark:border-green-900"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg dark:text-white">{group.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Group {index + 1}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                  Active
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Phone Number:</p>
                  <div className="flex items-center justify-between">
                    <code className="text-lg font-mono font-bold dark:text-white">
                      {group.number}
                    </code>
                    <button
                      onClick={() => copyToClipboard(group.number)}
                      className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      {copiedNumber === group.number ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={`https://wa.me/${group.number.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    <MessageCircle size={18} />
                    Message
                  </a>
                  <a
                    href={group.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 border border-green-600 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors font-medium"
                  >
                    Join Group
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-3 dark:text-white">Total: 19 WhatsApp Groups</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Join our growing community of researchers, analysts, and supporters
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/+923412786433"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={20} />
                Contact Admin
              </a>
              <a
                href="tel:+923412786433"
                className="inline-flex items-center gap-2 px-6 py-3 border border-green-600 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
              >
                Call: +92 341 2786433
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
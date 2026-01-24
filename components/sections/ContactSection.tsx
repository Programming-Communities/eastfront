'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactSection() {
  const t = useTranslations();

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            رابطہ کریں
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ہمارے ساتھ رابطہ میں رہیں تازہ ترین معلومات کے لیے
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <MapPin className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 dark:text-white">پتہ</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  سولجر بازار جمشید ٹاؤن کراچی شرقی پاکستان
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Phone className="w-6 h-6 text-red-500" />
              <div>
                <h3 className="font-bold text-lg mb-2 dark:text-white">فون</h3>
                <a href="tel:+923412786433" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                  +92 341 2786433
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Mail className="w-6 h-6 text-red-500" />
              <div>
                <h3 className="font-bold text-lg mb-2 dark:text-white">ای میل</h3>
                <p className="text-gray-600 dark:text-gray-400">info@eastfront.pk</p>
              </div>
            </div>

            {/* Telegram Link */}
            <a
              href="https://t.me/eastfront_pk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3 px-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              <span>ٹیلی گرام چینل میں شامل ہوں</span>
              <Send className="w-4 h-4 ml-2" />
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6 dark:text-white">پیغام بھیجیں</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  نام
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="اپنا نام درج کریں"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  ای میل
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  پیغام
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="اپنا پیغام درج کریں..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                پیغام بھیجیں
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
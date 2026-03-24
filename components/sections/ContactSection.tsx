'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const t = useTranslations('Contact');
  const common = useTranslations('Common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-12 sm:py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-gray-900 dark:text-white px-2">
            {t('title') || 'Contact Us'}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            {t('description') || 'Stay connected with us for latest updates'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mt-0.5 sm:mt-1 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-900 dark:text-white">{t('addressTitle') || 'Address'}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {common('addressUrdu') || 'سولجر بازار جمشید ٹاؤن کراچی شرقی پاکستان'}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {common('addressEnglish') || 'Soldier Bazar, Jamshed Town, Karachi East, Pakistan'}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-900 dark:text-white">{t('phone') || 'Phone'}</h3>
                <a href={`tel:${common('phone')}`} className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  {common('phone') || '+92 341 2786433'}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-900 dark:text-white">{t('email') || 'Email'}</h3>
                <a href={`mailto:${common('email')}`} className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  {common('email') || 'info@eastfront.pk'}
                </a>
              </div>
            </div>

            <a
              href={common('telegramLink') || 'https://t.me/eastfront_pk'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900 text-white rounded-xl transition-colors text-sm sm:text-base"
              aria-label="Join Telegram channel"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" aria-hidden="true" />
              {t('telegramName') || 'Join Telegram Channel'}
            </a>

            <a
              href={common('whatsappLink') || 'https://wa.me/+923412786433'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-green-700 hover:bg-green-800 dark:bg-green-800 dark:hover:bg-green-900 text-white rounded-xl transition-colors text-sm sm:text-base"
              aria-label="Join WhatsApp group"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" aria-hidden="true" />
              {t('whatsappName') || 'Join WhatsApp Group'}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-50 dark:bg-gray-800 p-5 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">{t('sendMessage') || 'Send Message'}</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-lg text-sm">
                {t('successMessage') || 'Your message has been sent successfully!'}
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-lg text-sm">
                {t('errorMessage') || 'Something went wrong. Please try again.'}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 sm:mb-2 text-gray-700 dark:text-gray-300">
                  {t('name') || 'Name'}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors text-sm sm:text-base"
                  placeholder={t('namePlaceholder') || 'Enter your name'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 sm:mb-2 text-gray-700 dark:text-gray-300">
                  {t('email') || 'Email'}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors text-sm sm:text-base"
                  placeholder={t('emailPlaceholder') || 'your.email@example.com'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 sm:mb-2 text-gray-700 dark:text-gray-300">
                  {t('message') || 'Message'}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors resize-none text-sm sm:text-base"
                  placeholder={t('messagePlaceholder') || 'Type your message here...'}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
              >
                {isSubmitting ? (t('sending') || 'Sending...') : (t('sendButton') || 'Send Message')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
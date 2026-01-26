'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Send, MessageSquare, Globe, Clock, User, Globe as GlobeIcon } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const t = useTranslations('Contact');
  const common = useTranslations('Common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Dynamic contact info - all from translations
  const contactInfo = [
    {
      icon: MapPin,
      titleKey: 'addressTitle',
      contentKey: 'location',
      subtitleKey: 'addressSubtitle',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      linkKey: 'addressLink'
    },
    {
      icon: Phone,
      titleKey: 'phone',
      contentKey: 'phoneNumber',
      subtitleKey: 'phoneSubtitle',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      linkKey: 'phoneLink'
    },
    {
      icon: Mail,
      titleKey: 'email',
      contentKey: 'emailAddress',
      subtitleKey: 'emailSubtitle',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      linkKey: 'emailLink'
    },
    {
      icon: Clock,
      titleKey: 'workingHoursTitle',
      contentKey: 'workingHours',
      subtitleKey: 'workingHoursSubtitle',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      linkKey: null
    }
  ];

  // Dynamic social links - all from translations
  const socialLinks = [
    {
      nameKey: 'telegramName',
      urlKey: 'telegramLink',
      icon: Send,
      color: 'bg-blue-600 hover:bg-blue-700',
      descriptionKey: 'telegramDescription'
    },
    {
      nameKey: 'whatsappName',
      urlKey: 'whatsappLink',
      icon: MessageSquare,
      color: 'bg-green-600 hover:bg-green-700',
      descriptionKey: 'whatsappDescription'
    }
  ];

  // Dynamic form subjects - from translations
  const subjectOptions = [
    { value: 'general', labelKey: 'subjectGeneral' },
    { value: 'support', labelKey: 'subjectSupport' },
    { value: 'collaboration', labelKey: 'subjectCollaboration' },
    { value: 'media', labelKey: 'subjectMedia' },
    { value: 'other', labelKey: 'subjectOther' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send data to your backend
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to get link URLs
  const getLinkUrl = (linkKey: string | null) => {
    if (!linkKey) return '#';
    if (linkKey === 'addressLink') return `https://maps.google.com/?q=${encodeURIComponent(t('location'))}`;
    if (linkKey === 'phoneLink') return `tel:${t('phoneNumber')}`;
    if (linkKey === 'emailLink') return `mailto:${t('emailAddress')}`;
    return t(linkKey as any);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <MessageSquare className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-400">
              {t('getInTouch')}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards - Dynamic */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={getLinkUrl(info.linkKey)}
                target={info.linkKey ? '_blank' : undefined}
                rel={info.linkKey ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className={`block p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-red-300 dark:hover:border-red-800 transition-all duration-300 ${
                  info.linkKey ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${info.bgColor}`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                      {t(info.titleKey)}
                    </h3>
                    <p className="text-gray-800 dark:text-gray-200 font-medium text-lg mb-1">
                      {t(info.contentKey)}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t(info.subtitleKey)}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links - Dynamic */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-6"
            >
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
                {t('connectTitle')}
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={t(social.urlKey as any)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 rounded-xl text-white transition-all duration-300 ${social.color} hover:shadow-lg`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <social.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium">{t(social.nameKey)}</div>
                        <div className="text-sm opacity-90">{t(social.descriptionKey)}</div>
                      </div>
                    </div>
                    <Send className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-red-500/10">
                  <MessageSquare className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t('sendMessage')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('formDescription')}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Messages - Dynamic */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-green-100 dark:bg-green-800">
                        <Send className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-green-800 dark:text-green-300">
                          {t('successTitle')}
                        </div>
                        <div className="text-sm text-green-700 dark:text-green-400">
                          {t('successMessage')}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-red-100 dark:bg-red-800">
                        <Send className="w-4 h-4 text-red-600 dark:text-red-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-red-800 dark:text-red-300">
                          {t('errorTitle')}
                        </div>
                        <div className="text-sm text-red-700 dark:text-red-400">
                          {t('errorMessage')}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {t('name')}
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder={t('namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder={t('emailPlaceholder')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('phoneLabel')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder={t('phonePlaceholder')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('subjectLabel')}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    >
                      <option value="">{t('selectSubject')}</option>
                      {subjectOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {t(option.labelKey)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                    placeholder={t('messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 shadow-lg hover:shadow-xl hover:shadow-red-500/20'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      {t('sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('sendButton')}
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center pt-4">
                  {t('privacyNotice')}
                </p>
              </form>
            </motion.div>

            {/* Additional Info - Dynamic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10">
                  <GlobeIcon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {t('globalReachTitle')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('globalReachDescription')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
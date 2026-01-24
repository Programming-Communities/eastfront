'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Send, MessageCircle, Globe, Clock, User } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would integrate with your backend
    console.log('Form submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          {t('title')}
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          {t('description')}
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              {/* Address Card */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-900/30 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t('addressTitle')}</h3>
                    <p className="text-sm text-gray-400">{t('location')}</p>
                  </div>
                </div>
                <p className="text-gray-300 font-urdu text-right">
                  سولجر بازار جمشید ٹاؤن کراچی شرقی پاکستان
                </p>
                <p className="text-gray-300 mt-2">
                  Soldier Bazaar, Jamshed Town, Karachi East, Pakistan
                </p>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-900/30 rounded-lg">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a href="tel:+923412786433" className="text-lg font-semibold text-white hover:text-blue-400 transition-colors">
                        +92 341 2786433
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-900/30 rounded-lg">
                      <Mail className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-lg font-semibold text-white">info@eastfront.pk</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-900/30 rounded-lg">
                      <Clock className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Available</p>
                      <p className="text-lg font-semibold text-white">24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp & Telegram */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Quick Connect</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/+923412786433"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-green-900/20 hover:bg-green-900/30 border border-green-700/50 rounded-lg transition-colors group"
                  >
                    <MessageCircle className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                    <div>
                      <p className="font-semibold text-white">WhatsApp</p>
                      <p className="text-sm text-gray-400">Message directly</p>
                    </div>
                  </a>

                  <a
                    href="https://t.me/eastfront_pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-blue-900/20 hover:bg-blue-900/30 border border-blue-700/50 rounded-lg transition-colors group"
                  >
                    <Send className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                    <div>
                      <p className="font-semibold text-white">Telegram</p>
                      <p className="text-sm text-gray-400">Join channel</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-white">{t('sendMessage')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    {t('name')}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder={t('namePlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    {t('email')}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Mail className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder={t('emailPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    {t('message')}
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder={t('messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-cyan-600 to-pink-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t('sending')}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      {t('sendButton')}
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-900/5 p-6 rounded-2xl border border-cyan-700/30">
                <h3 className="text-lg font-bold text-white mb-3">Response Time</h3>
                <p className="text-gray-300">
                  We typically respond within 2-4 hours during business hours. For urgent matters, please use WhatsApp.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-900/20 to-pink-900/5 p-6 rounded-2xl border border-pink-700/30">
                <h3 className="text-lg font-bold text-white mb-3">Working Hours</h3>
                <p className="text-gray-300">
                  Our team is available 24/7 for urgent defense and geopolitical analysis matters.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">Our Location</h2>
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
              {/* Google Maps Embed */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Karachi, Pakistan</h3>
                  <p className="text-gray-300">Soldier Bazaar, Jamshed Town</p>
                  <a 
                    href="https://maps.google.com/?q=Soldier+Bazaar+Jamshed+Town+Karachi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
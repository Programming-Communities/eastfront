'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Send, MessageSquare, Globe, Clock, User } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: MapPin,
      title: t('addressTitle'),
      content: t('location'),
      subtitle: 'Karachi, Pakistan',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      link: 'https://maps.google.com/?q=Soldier+Bazaar+Karachi+Pakistan'
    },
    {
      icon: Phone,
      title: t('phone'),
      content: '+92 341 2786433',
      subtitle: 'Available 24/7 for urgent matters',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      link: 'tel:+923412786433'
    },
    {
      icon: Mail,
      title: t('email'),
      content: 'info@eastfront.pk',
      subtitle: 'Response within 24 hours',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      link: 'mailto:info@eastfront.pk'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: '24/7 Support',
      subtitle: 'Online assistance available',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'Telegram Channel',
      url: 'https://t.me/eastfront_pk',
      icon: Send,
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Join for instant updates'
    },
    {
      name: 'WhatsApp Groups',
      url: 'https://wa.me/+923412786433',
      icon: MessageSquare,
      color: 'bg-green-600 hover:bg-green-700',
      description: 'Connect with community'
    }
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
      // Simulate API call - Replace with actual form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send data to your backend
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
              {t('getInTouch') || 'Get In Touch'}
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
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link || '#'}
                target={info.link ? '_blank' : undefined}
                rel={info.link ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className={`block p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-red-300 dark:hover:border-red-800 transition-all duration-300 ${
                  info.link ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${info.bgColor}`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-800 dark:text-gray-200 font-medium text-lg mb-1">
                      {info.content}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {info.subtitle}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-6"
            >
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
                Connect With Us
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 rounded-xl text-white transition-all duration-300 ${social.color} hover:shadow-lg`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <social.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium">{social.name}</div>
                        <div className="text-sm opacity-90">{social.description}</div>
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
                    Fill out the form below and we'll get back to you soon
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-green-100 dark:bg-green-800">
                        <Send className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-green-800 dark:text-green-300">
                          Message Sent Successfully!
                        </div>
                        <div className="text-sm text-green-700 dark:text-green-400">
                          Thank you for contacting us. We'll respond within 24 hours.
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
                          Failed to Send Message
                        </div>
                        <div className="text-sm text-red-700 dark:text-red-400">
                          Please try again or contact us directly via phone/email.
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
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="+92 341 2786433"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
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
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10">
                  <Globe className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    Global Reach
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    We serve readers and researchers worldwide. Available in 5 languages: English, Urdu, Arabic, Farsi, and Hindi.
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
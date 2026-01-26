'use client';

import { Facebook, Twitter, Link as LinkIcon, MessageCircle, Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface ShareButtonsProps {
  title?: string;
  description?: string;
  url?: string;
}

export default function ShareButtons({ 
  title = 'EastFront PK - Islamic Resistance Movement',
  description = 'Since 2011, 24/7 coverage of Islamic resistance news, research and analysis',
  url = typeof window !== 'undefined' ? window.location.href : ''
}: ShareButtonsProps) {
  const t = useTranslations('Share');
  const [copied, setCopied] = useState(false);

  const shareData = {
    title,
    text: description,
    url,
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(description)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${title}\n\n${description}\n\n${url}`)}`, '_blank');
  };

  const shareViaEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`;
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareButtons = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-green-500 hover:bg-green-600',
      action: shareOnWhatsApp,
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      action: shareOnFacebook,
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-sky-500 hover:bg-sky-600',
      action: shareOnTwitter,
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'bg-gray-600 hover:bg-gray-700',
      action: shareViaEmail,
    },
    {
      name: copied ? 'Copied!' : 'Copy Link',
      icon: copied ? Check : Copy,
      color: copied ? 'bg-green-600' : 'bg-gray-700 hover:bg-gray-800',
      action: copyLink,
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900 dark:text-white">{t('shareTitle') || 'Share this page'}</h3>
      
      <div className="flex flex-wrap gap-2">
        {shareButtons.map((button) => (
          <button
            key={button.name}
            onClick={button.action}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-white transition-all ${button.color}`}
            aria-label={`Share on ${button.name}`}
          >
            <button.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{button.name}</span>
          </button>
        ))}
      </div>

      {/* Preview Card */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold">EF</span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 dark:text-white truncate">{title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{description}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 truncate">{url}</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
          {t('sharePreview') || 'This is how the link will appear when shared'}
        </p>
      </div>
    </div>
  );
}
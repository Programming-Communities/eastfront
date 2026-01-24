'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { locales, localeNames } from '@/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (newLocale: string) => {
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(en|ur|hi|fa|ar)/, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium">
          {localeNames[locale as keyof typeof localeNames]}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 py-2 z-50">
          {locales.map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${locale === lang ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' : ''}`}
            >
              <div className="flex items-center justify-between">
                <span>{localeNames[lang as keyof typeof localeNames]}</span>
                {locale === lang && (
                  <span className="text-xs">✓</span>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
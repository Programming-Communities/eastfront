'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { locales, localeNames } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (newLocale: string) => {
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(en|ur|hi|fa|ar)/, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsOpen(false);
    
    // Update localStorage
    try {
      localStorage.setItem('locale', newLocale);
    } catch (e) {
      // Ignore
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Desktop/Tablet Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        <span className="font-medium hidden md:inline text-gray-800 dark:text-gray-200">
          {localeNames[locale as keyof typeof localeNames] || 'English'}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-700 dark:text-gray-300 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        aria-label="Change language"
      >
        <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-2">
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Select Language</div>
          </div>
          {locales.map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center justify-between ${
                locale === lang ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
                  locale === lang 
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                }`}>
                  <span className="text-xs font-medium">{lang.toUpperCase()}</span>
                </div>
                <span className="font-medium">{localeNames[lang as keyof typeof localeNames] || lang}</span>
              </div>
              {locale === lang && (
                <Check className="w-4 h-4 text-red-600 dark:text-red-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Globe, Check } from 'lucide-react';
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
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Desktop/Tablet Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium hidden md:inline">
          {localeNames[locale as keyof typeof localeNames]}
        </span>
        <span className="font-medium md:hidden">
          {locale.toUpperCase()}
        </span>
      </button>

      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5"
        aria-label="Change language"
      >
        <Globe className="w-5 h-5" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2">
          <div className="px-3 py-2">
            <div className="text-xs font-medium text-gray-400 mb-2">Select Language</div>
          </div>
          {locales.map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`w-full text-left px-4 py-3 hover:bg-white/5 transition-colors flex items-center justify-between ${
                locale === lang ? 'text-red-400' : 'text-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
                  locale === lang ? 'bg-red-500/20' : 'bg-white/5'
                }`}>
                  <span className="text-xs font-medium">{lang.toUpperCase()}</span>
                </div>
                <span>{localeNames[lang as keyof typeof localeNames]}</span>
              </div>
              {locale === lang && (
                <Check className="w-4 h-4 text-red-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
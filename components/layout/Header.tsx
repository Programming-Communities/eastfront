'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Info, BookOpen, Newspaper, Phone, MessageCircle } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header() {
  const t = useTranslations('Navbar');
  const common = useTranslations('Common');
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'ur';

  // Dynamic navigation items
  const navItems = [
    { 
      name: t('home'), 
      href: `/${currentLocale}`, 
      icon: Home,
      translationKey: 'home'
    },
    { 
      name: t('about'), 
      href: `/${currentLocale}/about`, 
      icon: Info,
      translationKey: 'about'
    },
    { 
      name: t('books'), 
      href: `/${currentLocale}/books`, 
      icon: BookOpen,
      translationKey: 'books'
    },
    { 
      name: t('news'), 
      href: `/${currentLocale}/news`, 
      icon: Newspaper,
      translationKey: 'news'
    },
    { 
      name: t('whatsappGroups'), 
      href: `/${currentLocale}#whatsapp`, 
      icon: MessageCircle,
      translationKey: 'whatsappGroups'
    },
    { 
      name: t('contact'), 
      href: `/${currentLocale}/contact`, 
      icon: Phone,
      translationKey: 'contact'
    },
  ];

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === `/${currentLocale}`) {
      return pathname === `/${currentLocale}`;
    }
    return pathname.startsWith(href);
  };

  // Get logo alt text dynamically
  const logoAltText = common('logoAlt') || 'EastFront PK Logo';

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with Image - Dynamic alt text */}
          <Link href={`/${currentLocale}`} className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                {/* Fallback EF text if image fails */}
                <span className="text-white font-bold text-lg">EF</span>
              </div>
              {/* Logo Image */}
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.jpg"
                  alt={logoAltText}
                  fill
                  className="object-contain rounded-lg"
                  sizes="48px"
                  priority
                />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-black dark:text-white">
                {common('title')}
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {common('subtitle')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.translationKey}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-red-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                aria-label={item.name}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={isMenuOpen ? t('closeMenu') || 'Close menu' : t('openMenu') || 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3">
            <div className="flex flex-col space-y-2 bg-white dark:bg-gray-900 rounded-xl p-2 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.translationKey}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-red-600 text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white'
                  }`}
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Menu, X, Globe, BookOpen, Home, Info, Newspaper, Phone } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Navbar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: t('home'), href: '/', icon: Home },
    { name: t('about'), href: '/about', icon: Info },
    { name: t('books'), href: '/books', icon: BookOpen },
    { name: t('news'), href: '/news', icon: Newspaper },
    { name: t('contact'), href: '/contact', icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">EF</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">EastFront PK</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Islamic Resistance</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium text-gray-900 dark:text-white">
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
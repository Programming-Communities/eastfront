'use client';

import { useTranslations } from 'next-intl';
import HeroSection from '@/components/sections/Hero';
import BooksSection from '@/components/sections/BooksSection';
import WhatsAppGroups from '@/components/ui/WhatsAppGroups';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  const t = useTranslations('Hero');
  const booksT = useTranslations('Books');

  return (
    <div className="dark:bg-black transition-colors duration-200">
      {/* Hero Section */}
      <section id="hero" className="dark:bg-linear-to-b dark:from-black dark:to-gray-900">
        <HeroSection />
      </section>

      {/* Books Section */}
      <section id="books" className="py-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black dark:text-white">
            {booksT('title')}
          </h2>
          <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {booksT('description')}
          </p>
          <BooksSection />
        </div>
      </section>

      {/* WhatsApp Section */}
      <section id="whatsapp" className="py-16 dark:bg-black">
        <div className="container mx-auto px-4">
          <WhatsAppGroups />
        </div>
      </section>

    
    </div>
  );
}
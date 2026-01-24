import { useTranslations } from 'next-intl';

export default function BooksPage() {
  const t = useTranslations('Navbar');
  
  return (
    <div className="min-h-screen py-10 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">{t('books')}</h1>
        <p className="text-gray-600 dark:text-gray-300">Books page coming soon...</p>
      </div>
    </div>
  );
}
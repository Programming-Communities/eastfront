import HeroSection from '@/components/sections/Hero';
import BooksSection from '@/components/sections/BooksSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BooksSection />
      <ContactSection />
      <WhatsAppButton />
    </>
  );
}
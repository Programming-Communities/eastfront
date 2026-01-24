import HeroSection from '@/components/sections/Hero';
import BooksSection from '@/components/sections/BooksSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ContactSection from '@/components/sections/ContactSection';
import WhatsAppGroups from '@/components/ui/WhatsAppGroups';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BooksSection />
      <WhatsAppGroups />
      <ContactSection />
      <WhatsAppButton />
    </>
  );
}
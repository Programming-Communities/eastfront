import HeroSection from '@/components/sections/Hero';
import BooksSection from '@/components/sections/BooksSection';
import WhatsAppGroups from '@/components/ui/WhatsAppGroups';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BooksSection />
      <div id="whatsapp">
        <WhatsAppGroups />
      </div>
      <ContactSection />
    </>
  );
}
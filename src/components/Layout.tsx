import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import MobileBottomBar from './MobileBottomBar';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Layout({ children }: { children: ReactNode }) {
  useScrollReveal();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <MobileBottomBar />
    </div>
  );
}

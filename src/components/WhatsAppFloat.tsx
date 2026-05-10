import { MessageCircle } from 'lucide-react';
import { buildWaLink } from '@/lib/format';

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWaLink('Halo, saya ingin bertanya tentang motor Viar.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 lg:bottom-6 right-4 lg:right-6 z-40 flex items-center gap-2 group"
    >
      <span className="hidden md:block bg-white shadow-xl px-4 py-2 rounded-full text-sm font-bold text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity">
        Chat Sales Sekarang
      </span>
      <span className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl animate-pulse-glow group-hover:scale-110 transition-transform">
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </span>
    </a>
  );
}

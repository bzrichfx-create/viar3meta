import { Phone, MessageCircle, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildWaLink } from '@/lib/format';

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-2xl">
      <div className="grid grid-cols-3">
        <a
          href="tel:+6281234567890"
          className="flex flex-col items-center justify-center py-3 text-[#0054A6] hover:bg-blue-50 transition"
        >
          <Phone className="w-5 h-5 mb-0.5" />
          <span className="text-xs font-bold">Telepon</span>
        </a>
        <a
          href={buildWaLink('Halo, saya ingin info motor Viar.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 bg-[#25D366] text-white hover:bg-[#1fb955]"
        >
          <MessageCircle className="w-5 h-5 mb-0.5" />
          <span className="text-xs font-bold">WhatsApp</span>
        </a>
        <Link
          to="/promo"
          className="flex flex-col items-center justify-center py-3 bg-[#FF6B00] text-white hover:bg-[#e85f00]"
        >
          <Calculator className="w-5 h-5 mb-0.5" />
          <span className="text-xs font-bold">Hitung Kredit</span>
        </Link>
      </div>
    </div>
  );
}

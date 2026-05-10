import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      await fetch('https://famous.ai/api/crm/6a00bfd5e7cd65b0b5633c6e/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'footer-signup',
          tags: ['newsletter', 'viar-dealer'],
        }),
      });
    } catch (e) { /* ignore */ }
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3500);
  };

  return (
    <footer className="bg-[#0F1419] text-gray-300 pt-16 pb-28 lg:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-[#0054A6] rounded-lg flex items-center justify-center font-heading font-black text-white text-2xl">V</div>
              <div>
                <div className="font-heading font-black text-xl text-white">VIAR<span className="text-[#FF6B00]">.</span></div>
                <div className="text-[11px] font-semibold tracking-wide text-gray-400">PT MULTI DIMENSI BARU</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Dealer Resmi Motor Viar terpercaya. Melayani penjualan, kredit, sparepart, dan service untuk seluruh Indonesia.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF6B00] flex items-center justify-center transition"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF6B00] flex items-center justify-center transition"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF6B00] flex items-center justify-center transition"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-lg">Link Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/produk" className="hover:text-[#FF6B00]">Katalog Produk</Link></li>
              <li><Link to="/promo" className="hover:text-[#FF6B00]">Promo & Kredit</Link></li>
              <li><Link to="/dealer" className="hover:text-[#FF6B00]">Lokasi Dealer</Link></li>
              <li><Link to="/dealer" className="hover:text-[#FF6B00]">Booking Service</Link></li>
              <li><Link to="/artikel" className="hover:text-[#FF6B00]">Artikel & Tips</Link></li>
              <li><Link to="/tentang" className="hover:text-[#FF6B00]">Tentang Kami</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-lg">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><MapPin className="w-4 h-4 text-[#FF6B00] mt-0.5 shrink-0" /><span>Jl. Raya Industri No. 88, Jakarta Timur 13920</span></li>
              <li className="flex gap-2"><Phone className="w-4 h-4 text-[#FF6B00] mt-0.5 shrink-0" /><span>0812-3456-7890</span></li>
              <li className="flex gap-2"><Mail className="w-4 h-4 text-[#FF6B00] mt-0.5 shrink-0" /><span>info@viarptmdb.com</span></li>
              <li className="flex gap-2"><Clock className="w-4 h-4 text-[#FF6B00] mt-0.5 shrink-0" /><span>Senin–Sabtu: 08.00–17.00<br />Minggu: 09.00–15.00</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-lg">Newsletter</h4>
            <p className="text-sm mb-3">Dapatkan info promo & produk terbaru langsung ke email Anda.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Anda"
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-4 py-2.5 rounded-lg bg-[#FF6B00] hover:bg-[#e85f00] text-white font-bold btn-glow disabled:opacity-60"
              >
                {status === 'loading' ? 'Mengirim…' : status === 'success' ? '✓ Terdaftar!' : 'Berlangganan'}
              </button>
            </form>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs px-2 py-1 bg-white/5 rounded">ISO 9001</span>
              <span className="text-xs px-2 py-1 bg-white/5 rounded">Dealer Resmi</span>
              <span className="text-xs px-2 py-1 bg-white/5 rounded">15+ Tahun</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} PT Multi Dimensi Baru. Dealer Resmi Viar Indonesia. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#FF6B00]">Kebijakan Privasi</a>
            <a href="#" className="hover:text-[#FF6B00]">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-[#FF6B00]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

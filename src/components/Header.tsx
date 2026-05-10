import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { label: 'Beranda', path: '/' },
  { label: 'Produk', path: '/produk' },
  { label: 'Promo & Kredit', path: '/promo' },
  { label: 'Test Ride', path: '/test-ride' },
  { label: 'Dealer', path: '/dealer' },
  { label: 'Tentang', path: '/tentang' },
  { label: 'Kontak', path: '/kontak' },
];


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2'
          : 'bg-gradient-to-b from-black/50 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#0054A6] rounded-lg flex items-center justify-center font-heading font-black text-white text-xl shadow-md group-hover:scale-105 transition">
            V
          </div>
          <div className="leading-tight">
            <div className={`font-heading font-black text-lg ${scrolled ? 'text-[#0054A6]' : 'text-white'}`}>
              VIAR<span className="text-[#FF6B00]">.</span>
            </div>
            <div className={`text-[10px] font-semibold tracking-wide ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>
              PT MULTI DIMENSI BARU
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const active = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-colors relative ${
                  scrolled ? 'text-[#1A1A1A] hover:text-[#0054A6]' : 'text-white hover:text-[#FF6B00]'
                } ${active ? '!text-[#FF6B00]' : ''}`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF6B00] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+6281234567890"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B00] text-white font-bold text-sm btn-glow shadow-lg hover:bg-[#e85f00]"
          >
            <Phone className="w-4 h-4" />
            0812-3456-7890
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white shadow-xl border-t mt-2 animate-fade-up">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-3 rounded-lg font-semibold text-[#1A1A1A] hover:bg-[#0054A6] hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+6281234567890" className="mt-2 px-4 py-3 rounded-lg bg-[#FF6B00] text-white font-bold text-center">
              Hubungi Sales
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';

const slides = [
  {
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434338297_c317c065.png',
    eyebrow: 'Roda Tiga Niaga',
    title: 'VIAR KARYA',
    subtitle: 'Raja Motor Niaga Indonesia',
    desc: 'Daya angkut hingga 1 ton. Cicilan mulai 20rb/hari.',
  },
  {
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434358197_091db89c.png',
    eyebrow: 'Adventure Series',
    title: 'CROSS X 200',
    subtitle: 'Petualang Sejati Off-Road',
    desc: 'Tangguh di segala medan. Suspensi long travel.',
  },
  {
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434376329_6011a8a4.jpg',
    eyebrow: 'Electric Vehicle',
    title: 'VIAR Q1',
    subtitle: 'Skuter Listrik Generasi Baru',
    desc: 'Bebas BBM, bebas polusi. Hemat 70% biaya operasional.',
  },
  {
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434397404_63bd6b52.png',
    eyebrow: 'Pilihan Pengusaha',
    title: 'KUAT TAHAN BANTING',
    subtitle: 'Andalan UMKM & Petani',
    desc: 'Dipercaya ribuan pengusaha di seluruh Indonesia.',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 8000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [paused]);

  return (
    <section
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div
            key={`${idx}-${current}`}
            className={`absolute inset-0 ${idx === current ? 'animate-ken-burns' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
        <div className="max-w-2xl text-white">
          <div key={current} className="animate-fade-up">
            <div className="inline-block px-4 py-1.5 bg-[#FF6B00] text-white text-xs font-bold uppercase tracking-widest rounded-full mb-5">
              {slides[current].eyebrow}
            </div>
            <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-3 leading-none drop-shadow-2xl">
              {slides[current].title}
            </h1>
            <p className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-[#FF6B00]">
              {slides[current].subtitle}
            </p>
            <p className="text-base sm:text-lg text-white/90 mb-8 max-w-lg">
              {slides[current].desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/produk"
                className="btn-glow inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#FF6B00] hover:bg-[#e85f00] text-white font-bold rounded-full shadow-xl"
              >
                Lihat Katalog <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/promo"
                className="btn-glow inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#0054A6] text-white border-2 border-white/40 font-bold rounded-full"
              >
                <Calculator className="w-5 h-5" /> Hitung Kredit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${idx === current ? 'w-10 bg-[#FF6B00]' : 'w-6 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 z-30 hidden lg:flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-widest">
        <span className="w-12 h-px bg-white/50" /> Scroll
      </div>
    </section>
  );
}

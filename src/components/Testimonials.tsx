import { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Pak Sutrisno',
    role: 'Pemilik Toko Material',
    city: 'Bekasi',
    stars: 5,
    photo: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434588341_32dcb5b5.png',
    text: 'Sudah 3 tahun pakai Karya 200 untuk antar material. Tidak pernah mogok, irit BBM, dan service-nya cepat. Modal balik dalam 8 bulan!',
  },
  {
    name: 'Ibu Ratna',
    role: 'Pengusaha Sayur',
    city: 'Bogor',
    stars: 5,
    photo: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434584980_6f1da97c.png',
    text: 'Karya 150 sangat membantu usaha sayur saya. Bisa muat banyak, lincah di gang sempit, dan cicilannya ringan. Recommended banget!',
  },
  {
    name: 'Pak Hendra',
    role: 'Mitra Kurir Online',
    city: 'Jakarta',
    stars: 5,
    photo: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434583193_2452b11c.jpg',
    text: 'Pakai Viar Q1 listrik buat kerja delivery. Hemat banget, sehari cuma habis 5 ribu listrik. Penghasilan jadi lebih besar.',
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const go = (d: number) => setIdx((i) => (i + d + testimonials.length) % testimonials.length);
  const t = testimonials[idx];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 reveal-on-scroll">
          <div className="inline-block px-4 py-1.5 bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-bold uppercase tracking-widest rounded-full mb-3">
            Testimoni Pengusaha
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#1A1A1A]">Dipercaya Ribuan Pengusaha</h2>
        </div>

        <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-14 reveal-on-scroll">
          <Quote className="absolute top-6 left-6 w-16 h-16 text-[#0054A6]/10" />
          <div key={idx} className="grid md:grid-cols-3 gap-8 items-center animate-fade-up">
            <div className="text-center">
              <img src={t.photo} alt={t.name} className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#FF6B00] shadow-lg" />
              <h4 className="font-heading font-bold text-lg mt-4">{t.name}</h4>
              <p className="text-sm text-gray-600">{t.role}</p>
              <p className="text-xs text-gray-500">{t.city}</p>
              <div className="flex justify-center gap-0.5 mt-2">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FF6B00] text-[#FF6B00]" />
                ))}
              </div>
            </div>
            <p className="md:col-span-2 text-lg lg:text-xl text-gray-700 italic leading-relaxed">"{t.text}"</p>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={() => go(-1)} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0054A6] hover:text-white flex items-center justify-center transition" aria-label="Prev">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-[#FF6B00]' : 'w-2 bg-gray-300'}`}
                  aria-label={`Testimoni ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={() => go(1)} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0054A6] hover:text-white flex items-center justify-center transition" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

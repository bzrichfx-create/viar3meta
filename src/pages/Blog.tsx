import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const articles = [
  { id: 1, title: '5 Tips Merawat Motor Niaga Agar Awet 10 Tahun', date: '15 Jan 2025', category: 'Tips Perawatan', img: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434632138_a98ce248.png', excerpt: 'Motor niaga Anda adalah aset usaha. Begini cara merawatnya supaya tetap prima dan tahan lama meski dipakai harian.' },
  { id: 2, title: 'Kisah Pak Sutrisno: Sukses Naik Kelas Berkat Viar Karya', date: '08 Jan 2025', category: 'Kisah Sukses', img: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434397404_63bd6b52.png', excerpt: 'Dari pemilik toko material kecil di Bekasi, kini Pak Sutrisno punya 3 cabang berkat distribusi yang lebih cepat dengan Viar Karya 200.' },
  { id: 3, title: 'Viar Q1 vs Motor BBM: Hemat Berapa Per Bulan?', date: '02 Jan 2025', category: 'Komparasi', img: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434500848_5377e565.jpg', excerpt: 'Hitungan rinci biaya operasional motor listrik vs konvensional. Hasilnya bikin kaget!' },
  { id: 4, title: 'Tanda-tanda Aki Motor Harus Diganti', date: '28 Des 2024', category: 'Tips Perawatan', img: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434468820_2d4104b0.png', excerpt: 'Jangan tunggu mogok! Kenali 6 tanda aki sudah lemah & saatnya ganti baru.' },
  { id: 5, title: 'Berita: Viar Luncurkan E-Cross Generasi Baru 2025', date: '20 Des 2024', category: 'Berita Viar', img: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434557762_8a1026ca.png', excerpt: 'Trail bike listrik dengan baterai removable kini hadir di showroom kami. Test ride gratis!' },
  { id: 6, title: 'Bagaimana Memilih Tenor Kredit Motor Yang Pas?', date: '15 Des 2024', category: 'Finansial', img: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434426102_f14e99b4.jpg', excerpt: 'Tenor 12 vs 36 bulan? Mana yang lebih untung? Simak panduan lengkapnya.' },
];

export default function Blog() {
  return (
    <Layout>
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-[#0054A6] to-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434397404_63bd6b52.png)', backgroundSize: 'cover' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-[#FF6B00] font-bold text-sm uppercase tracking-widest mb-2">Artikel & Berita</div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl mb-3">Insight Motor Viar</h1>
          <p className="text-blue-100 max-w-2xl text-lg">Tips perawatan, kisah sukses pengguna, dan berita terkini dunia motor Viar.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Featured */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12 reveal-on-scroll">
            <div className="lg:col-span-2 group cursor-pointer">
              <div className="grid md:grid-cols-2 gap-6 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={articles[0].img} alt={articles[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex gap-3 text-xs font-bold mb-3">
                    <span className="px-3 py-1 bg-[#FF6B00]/10 text-[#FF6B00] rounded-full">FEATURED</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full flex items-center gap-1"><Tag className="w-3 h-3" /> {articles[0].category}</span>
                  </div>
                  <h2 className="font-heading font-black text-2xl lg:text-3xl mb-3 group-hover:text-[#0054A6] transition">{articles[0].title}</h2>
                  <p className="text-gray-600 mb-4">{articles[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1"><Calendar className="w-4 h-4" /> {articles[0].date}</span>
                    <span className="text-[#FF6B00] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Baca <ArrowRight className="w-4 h-4" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SectionHeader eyebrow="Artikel Lainnya" title="Bacaan Pilihan" center={false} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((a, i) => (
              <article key={a.id} className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition reveal-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 bg-[#0054A6]/10 text-[#0054A6] rounded-full font-bold">{a.category}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-[#FF6B00] transition line-clamp-2">{a.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{a.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {a.date}</span>
                    <span className="text-[#FF6B00] font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Baca selengkapnya →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

import Layout from '@/components/Layout';
import HeroSlider from '@/components/HeroSlider';
import StatsCounter from '@/components/StatsCounter';
import ProductCard from '@/components/ProductCard';
import ParallaxSection from '@/components/ParallaxSection';
import SectionHeader from '@/components/SectionHeader';
import Testimonials from '@/components/Testimonials';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Shield, Award, Wrench, Zap, ArrowRight, CheckCircle2, Truck, HandCoins, Calculator } from 'lucide-react';

export default function AppLayout() {
  const featured = products.slice(0, 6);

  const reasons = [
    { icon: Shield, title: 'Dealer Resmi Viar', desc: 'Garansi resmi pabrikan, sertifikasi distributor sah.' },
    { icon: HandCoins, title: 'DP Mulai 10%', desc: 'Cicilan ringan, proses kredit cepat 1 hari ACC.' },
    { icon: Wrench, title: 'Service & Sparepart', desc: 'Bengkel resmi, teknisi terlatih, sparepart original.' },
    { icon: Award, title: '15+ Tahun Berpengalaman', desc: 'Dipercaya ribuan pengusaha di seluruh Indonesia.' },
  ];

  const useCases = [
    { icon: Truck, title: 'UMKM & Pedagang', desc: 'Antar material, sayuran, dagangan harian dengan mudah.' },
    { icon: Wrench, title: 'Petani & Peternak', desc: 'Angkut hasil panen, pupuk, dan kebutuhan ladang.' },
    { icon: Zap, title: 'Kurir & Delivery', desc: 'Lincah di kota, hemat BBM, listrik bahkan lebih murah.' },
    { icon: Award, title: 'Adventure & Hobby', desc: 'Cross X & Vortex untuk petualangan tanpa batas.' },
  ];

  return (
    <Layout>
      <HeroSlider />
      <StatsCounter />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Produk Unggulan"
            title="Motor Viar Pilihan Pengusaha"
            desc="Berbagai tipe motor untuk semua kebutuhan: niaga, adventure, dan listrik ramah lingkungan."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <div key={p.slug} className="reveal-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal-on-scroll">
            <Link to="/produk" className="btn-glow inline-flex items-center gap-2 px-8 py-4 bg-[#0054A6] hover:bg-[#003875] text-white font-bold rounded-full shadow-lg">
              Lihat Semua Produk <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <ParallaxSection bgImage="https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434397404_63bd6b52.png">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-[#FF6B00] text-white text-xs font-bold uppercase tracking-widest rounded-full mb-3">
            Solusi Mobilitas
          </div>
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-white mb-4">Viar Untuk Semua Kebutuhan</h2>
          <p className="text-white/90 max-w-2xl mx-auto">Dari pasar tradisional hingga jalan pegunungan, motor Viar menemani setiap langkah usaha dan petualangan Anda.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {useCases.map((u, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl reveal-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 bg-[#FF6B00] rounded-xl flex items-center justify-center mb-4">
                <u.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">{u.title}</h3>
              <p className="text-white/80 text-sm">{u.desc}</p>
            </div>
          ))}
        </div>
      </ParallaxSection>

      <section className="py-20 bg-gradient-to-br from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Kenapa Pilih Kami"
            title="Dealer Viar Yang Bisa Anda Percaya"
            desc="Lebih dari sekedar penjual motor. Kami partner sukses usaha Anda."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-[#FF6B00]/40 hover:shadow-xl transition-all reveal-on-scroll group" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-14 h-14 bg-gradient-to-br from-[#0054A6] to-[#003875] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <r.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{r.title}</h3>
                <p className="text-sm text-gray-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434338297_c317c065.png)', backgroundSize: 'cover', backgroundPosition: 'right center' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0054A6] via-[#0054A6]/90 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-2xl">
            <div className="text-[#FF6B00] font-bold text-sm uppercase tracking-widest mb-3">Promo Spesial Bulan Ini</div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl mb-4">Cicilan Mulai <span className="text-[#FF6B00]">20 Ribu/hari</span></h2>
            <p className="text-white/90 mb-6 text-lg">Wujudkan usaha sukses Anda dengan motor niaga Viar. DP rendah, proses cepat, ACC 1 hari!</p>
            <ul className="space-y-2 mb-8">
              {['DP mulai dari 10%', 'Tenor hingga 48 bulan', 'Proses ACC 1 hari', 'Bonus aksesoris'].map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-white"><CheckCircle2 className="w-5 h-5 text-[#FF6B00]" /> {b}</li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/promo" className="btn-glow inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#FF6B00] hover:bg-[#e85f00] text-white font-bold rounded-full">
                <Calculator className="w-5 h-5" /> Hitung Cicilan Sekarang
              </Link>
              <Link to="/produk" className="btn-glow inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#0054A6] font-bold rounded-full">
                Lihat Promo Lengkap <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </Layout>
  );
}

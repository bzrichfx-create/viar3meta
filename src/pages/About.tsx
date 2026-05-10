import Layout from '@/components/Layout';
import StatsCounter from '@/components/StatsCounter';
import SectionHeader from '@/components/SectionHeader';
import { Award, Target, Eye, Shield, CheckCircle2, Users } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <section className="relative pt-32 pb-16 bg-[#0054A6] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434610297_8cf8fd3c.png)', backgroundSize: 'cover' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0054A6] via-[#0054A6]/85 to-[#0054A6]/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-[#FF6B00] font-bold text-sm uppercase tracking-widest mb-2">Tentang Kami</div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl mb-4">PT Multi Dimensi Baru</h1>
          <p className="text-blue-100 max-w-3xl text-lg">Dealer Resmi Motor Viar yang melayani dengan dedikasi tinggi sejak 2009. Komitmen kami adalah menjadi partner sukses bagi setiap pengusaha Indonesia.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll">
            <div className="text-[#FF6B00] font-bold text-sm uppercase tracking-widest mb-3">Profil Perusahaan</div>
            <h2 className="font-heading font-black text-3xl lg:text-4xl mb-5">Lebih dari Sekadar Dealer Motor</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">PT Multi Dimensi Baru berdiri sebagai dealer resmi PT Triangle Motorindo (Viar) yang berkomitmen menghadirkan motor niaga, sport, dan listrik berkualitas tinggi dengan layanan after-sales terbaik.</p>
            <p className="text-gray-700 mb-6 leading-relaxed">Selama lebih dari 15 tahun, kami telah membantu ribuan UMKM, petani, kurir, dan pelaku usaha mengembangkan bisnis mereka melalui solusi mobilitas yang andal dan terjangkau.</p>
            <div className="space-y-3">
              {[
                'Sertifikasi resmi sebagai distributor PT Triangle Motorindo',
                'Tim sales bersertifikat & berpengalaman 10+ tahun',
                'Bengkel resmi dengan teknisi terlatih pabrik',
                'Stok sparepart original lengkap',
              ].map((b, i) => (
                <div key={i} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" /><span className="text-gray-700">{b}</span></div>
              ))}
            </div>
          </div>
          <div className="relative reveal-on-scroll">
            <img src="https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434610297_8cf8fd3c.png" alt="Showroom" className="rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-[#FF6B00] text-white p-6 rounded-2xl shadow-xl">
              <div className="font-heading font-black text-4xl">15+</div>
              <div className="font-bold text-sm uppercase tracking-wide">Tahun Melayani</div>
            </div>
          </div>
        </div>
      </section>

      <StatsCounter />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Visi & Misi" title="Komitmen Kami Untuk Anda" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 reveal-on-scroll">
              <div className="w-14 h-14 bg-[#0054A6] rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-black text-2xl mb-3">Visi</h3>
              <p className="text-gray-700">Menjadi dealer motor Viar terdepan di Indonesia yang dipercaya dan diandalkan oleh seluruh masyarakat dalam mendukung mobilitas dan produktivitas usaha.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 reveal-on-scroll" style={{ transitionDelay: '120ms' }}>
              <div className="w-14 h-14 bg-[#FF6B00] rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-black text-2xl mb-3">Misi</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" /> Menyediakan produk Viar berkualitas dengan harga kompetitif</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" /> Memberikan layanan purna jual terbaik & responsif</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" /> Mendukung pertumbuhan UMKM melalui solusi kredit ringan</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" /> Berkontribusi pada lingkungan melalui kendaraan listrik</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: Shield, title: 'Legalitas Lengkap', desc: 'Terdaftar resmi sebagai dealer PT Triangle Motorindo dengan SK distributor sah.' },
              { icon: Award, title: 'Award Best Dealer', desc: 'Penerima Best Performance Dealer Viar 2022, 2023, dan 2024.' },
              { icon: Users, title: 'Tim Profesional', desc: 'Lebih dari 50 staf bersertifikat siap melayani kebutuhan Anda 6 hari seminggu.' },
            ].map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 reveal-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <c.icon className="w-10 h-10 text-[#FF6B00] mb-3" />
                <h4 className="font-heading font-bold text-lg mb-2">{c.title}</h4>
                <p className="text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

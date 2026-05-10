import Layout from '@/components/Layout';
import CreditCalculator from '@/components/CreditCalculator';
import SectionHeader from '@/components/SectionHeader';
import { Tag, Percent, Calendar, Gift, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const leasingPartners = [
  { name: 'Adira Finance', desc: 'Cicilan 12-48 bulan, ACC cepat 1 hari' },
  { name: 'BAF', desc: 'DP rendah mulai 10%, tenor fleksibel' },
  { name: 'BFI Finance', desc: 'Bunga kompetitif, syarat mudah' },
  { name: 'WOM Finance', desc: 'Spesialis motor niaga, ACC ramah UMKM' },
  { name: 'FIF Group', desc: 'Proses online, kontrak digital' },
  { name: 'Mandiri Tunas', desc: 'Bunga premium untuk nasabah Mandiri' },
];

const promos = [
  { tag: 'HOT', icon: Percent, title: 'DP Mulai 10%', desc: 'Khusus pembelian unit Roda Tiga Karya Series. Berlaku hingga akhir bulan.', color: 'bg-[#FF6B00]' },
  { tag: 'BARU', icon: Gift, title: 'Bonus Paket Aksesoris', desc: 'Helm, jas hujan, dan kunci ganda gratis untuk setiap pembelian motor.', color: 'bg-[#0054A6]' },
  { tag: 'CICILAN', icon: Calendar, title: 'Tenor 48 Bulan', desc: 'Cicilan ringan dengan tenor panjang, mulai 20rb/hari.', color: 'bg-[#FF6B00]' },
  { tag: 'TRADE-IN', icon: Tag, title: 'Tukar Tambah Untung', desc: 'Tukar motor lama Anda dengan harga tinggi & dapatkan diskon Rp 1 juta.', color: 'bg-[#0054A6]' },
];

export default function Promo() {
  return (
    <Layout>
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-[#FF6B00] to-[#cc5500] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434397404_63bd6b52.png)', backgroundSize: 'cover' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-white/90 font-bold text-sm uppercase tracking-widest mb-2">Promo Spesial</div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl mb-3">Cicilan Mulai 20rb/hari</h1>
          <p className="text-white/90 max-w-2xl text-lg">Wujudkan motor impian dengan kredit super ringan & bonus menarik dari dealer resmi Viar.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Penawaran Bulan Ini" title="Promo Yang Tidak Boleh Dilewatkan" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {promos.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all reveal-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={`${p.color} text-white p-5 flex items-center justify-between`}>
                  <p.icon className="w-9 h-9" />
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded font-bold">{p.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Kalkulator Cerdas" title="Hitung Cicilan Anda Sekarang" desc="Dapatkan estimasi cicilan langsung dengan kalkulator interaktif kami." />
          <div className="reveal-on-scroll">
            <CreditCalculator />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Leasing Partner" title="6 Partner Pembiayaan Terpercaya" desc="Kami bekerja sama dengan leasing terbaik untuk memudahkan proses kredit Anda." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {leasingPartners.map((l, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#FF6B00]/40 transition reveal-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0054A6] to-[#003875] rounded-xl flex items-center justify-center text-white font-heading font-black text-lg">
                    {l.name.charAt(0)}
                  </div>
                  <h4 className="font-heading font-bold text-lg">{l.name}</h4>
                </div>
                <p className="text-sm text-gray-600">{l.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#0054A6] to-[#003875] text-white p-8 lg:p-12 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading font-black text-2xl lg:text-3xl mb-3">Syarat Pengajuan Kredit Mudah</h3>
                <p className="text-blue-100 mb-6">Proses ACC cepat 1 hari kerja, tanpa ribet, dan ramah UMKM.</p>
                <ul className="space-y-2">
                  {['KTP & KK Suami/Istri', 'Slip Gaji / SKU UMKM', 'Rekening 3 Bulan Terakhir', 'Foto Survei Domisili'].map((s, i) => (
                    <li key={i} className="flex items-center gap-2 text-white"><CheckCircle2 className="w-5 h-5 text-[#FF6B00]" /> {s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-2xl">
                <p className="text-sm text-blue-100 mb-2">Butuh bantuan pengajuan?</p>
                <p className="font-heading font-black text-2xl mb-4">Tim sales kami siap membantu Anda dari konsultasi sampai unit dikirim.</p>
                <Link to="/kontak" className="btn-glow inline-block px-6 py-3 bg-[#FF6B00] hover:bg-[#e85f00] text-white font-bold rounded-xl">
                  Hubungi Sales Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

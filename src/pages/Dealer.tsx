import { useState } from 'react';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import { MapPin, Phone, Clock, Wrench, Calendar, CheckCircle2 } from 'lucide-react';
import { products } from '@/data/products';
import { buildWaLink } from '@/lib/format';

const branches = [
  { name: 'Viar MDB Jakarta Pusat', address: 'Jl. Raya Industri No. 88, Jakarta Timur', phone: '021-1234-5678', hours: 'Sen-Sab: 08:00-17:00' },
  { name: 'Viar MDB Bekasi', address: 'Jl. Cut Meutia No. 42, Bekasi', phone: '021-2345-6789', hours: 'Sen-Sab: 08:00-17:00' },
  { name: 'Viar MDB Bogor', address: 'Jl. Pajajaran No. 100, Bogor', phone: '0251-345-678', hours: 'Sen-Sab: 08:00-17:00' },
  { name: 'Viar MDB Tangerang', address: 'Jl. M.H. Thamrin No. 15, Tangerang', phone: '021-3456-7890', hours: 'Sen-Sab: 08:00-17:00' },
];

const services = [
  { title: 'Service Berkala', desc: 'Servis rutin setiap 2.000 km. Mulai Rp 75.000.' },
  { title: 'Ganti Oli', desc: 'Oli berkualitas original Viar. Mulai Rp 45.000.' },
  { title: 'Perbaikan Mesin', desc: 'Overhaul mesin oleh teknisi bersertifikat.' },
  { title: 'Tune Up Lengkap', desc: 'Cek menyeluruh + setel komponen utama.' },
];

export default function Dealer() {
  const [form, setForm] = useState({ name: '', phone: '', model: products[0].slug, branch: branches[0].name, date: '', service: services[0].title, notes: '' });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const product = products.find((p) => p.slug === form.model);
    const msg = `Halo, saya ingin booking service:\nNama: ${form.name}\nNo HP: ${form.phone}\nMotor: ${product?.name}\nCabang: ${form.branch}\nTanggal: ${form.date}\nJenis Service: ${form.service}\nCatatan: ${form.notes}`;
    window.open(buildWaLink(msg), '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <Layout>
      <section className="relative pt-32 pb-12 bg-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434632138_a98ce248.png)', backgroundSize: 'cover' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0054A6]/95 to-[#0054A6]/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-[#FF6B00] font-bold text-sm uppercase tracking-widest mb-2">Dealer & Service</div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl mb-3">Lokasi & Booking Service</h1>
          <p className="text-white/90 max-w-2xl text-lg">Temukan cabang terdekat & booking service motor Viar Anda dengan mudah.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Lokasi Cabang" title="4 Cabang Siap Melayani" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {branches.map((b, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-[#FF6B00]/40 hover:shadow-xl transition reveal-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-12 h-12 bg-[#0054A6] rounded-xl flex items-center justify-center mb-3"><MapPin className="w-6 h-6 text-white" /></div>
                <h4 className="font-heading font-bold text-lg mb-2">{b.name}</h4>
                <div className="space-y-1.5 text-sm text-gray-600">
                  <div className="flex gap-2"><MapPin className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" /><span>{b.address}</span></div>
                  <div className="flex gap-2"><Phone className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" /><span>{b.phone}</span></div>
                  <div className="flex gap-2"><Clock className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" /><span>{b.hours}</span></div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white reveal-on-scroll">
            <iframe
              title="Peta Dealer Viar"
              src="https://maps.google.com/maps?q=Jakarta%20Timur&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[400px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <div className="reveal-on-scroll">
            <div className="text-[#FF6B00] font-bold text-sm uppercase tracking-widest mb-2">Bengkel Resmi</div>
            <h2 className="font-heading font-black text-3xl lg:text-4xl mb-4">Service Profesional Untuk Motor Viar Anda</h2>
            <p className="text-gray-700 mb-6">Bengkel resmi dengan teknisi bersertifikat pabrikan Viar dan menggunakan sparepart 100% original. Service berkala adalah investasi terbaik untuk usia motor Anda.</p>
            <div className="space-y-4">
              {services.map((s, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-10 h-10 bg-[#FF6B00]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-1">{s.title}</h4>
                    <p className="text-sm text-gray-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0054A6] to-[#003875] rounded-3xl p-8 text-white shadow-2xl reveal-on-scroll">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-[#FF6B00] rounded-xl flex items-center justify-center"><Calendar className="w-6 h-6" /></div>
              <div>
                <h3 className="font-heading font-bold text-xl">Booking Service Online</h3>
                <p className="text-sm text-blue-100">Antri tanpa repot</p>
              </div>
            </div>

            {sent && (
              <div className="bg-green-500/20 border border-green-300 rounded-xl p-3 mb-4 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Booking diteruskan ke WhatsApp! Tim kami akan konfirmasi.
              </div>
            )}

            <form onSubmit={submit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nama Lengkap" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20" />
                <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="No. WhatsApp" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20" />
              </div>
              <select value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none">
                {products.map((p) => <option key={p.slug} value={p.slug} className="text-black">{p.name}</option>)}
              </select>
              <select value={form.branch} onChange={(e) => setForm({ ...form, branch: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none">
                {branches.map((b) => <option key={b.name} value={b.name} className="text-black">{b.name}</option>)}
              </select>
              <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none">
                {services.map((s) => <option key={s.title} value={s.title} className="text-black">{s.title}</option>)}
              </select>
              <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none" />
              <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Catatan keluhan motor (opsional)" rows={3} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none" />
              <button type="submit" className="btn-glow w-full py-3.5 bg-[#FF6B00] hover:bg-[#e85f00] text-white font-bold rounded-xl shadow-lg">
                Kirim Booking via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

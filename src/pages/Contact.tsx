import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { buildWaLink } from '@/lib/format';


export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'Tanya Produk', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Subscribe to CRM
      await fetch('https://famous.ai/api/crm/6a00bfd5e7cd65b0b5633c6e/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          source: 'contact-form',
          tags: ['contact', form.subject.toLowerCase().replace(/\s+/g, '-')],
        }),
      });
    } catch (e) { /* ignore */ }
    setLoading(false);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', phone: '', subject: 'Tanya Produk', message: '' });
    }, 5000);
  };

  return (
    <Layout>
      <section className="relative pt-32 pb-12 bg-[#0054A6] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434610297_8cf8fd3c.png)', backgroundSize: 'cover' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-[#FF6B00] font-bold text-sm uppercase tracking-widest mb-2">Hubungi Kami</div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl mb-3">Mari Berdialog</h1>
          <p className="text-blue-100 max-w-2xl text-lg">Tim sales & service kami siap melayani pertanyaan Anda 6 hari seminggu.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { icon: MapPin, title: 'Kantor Utama', desc: 'Jl. Raya Industri No. 88\nJakarta Timur 13920', color: 'bg-[#0054A6]' },
              { icon: Phone, title: 'Telepon', desc: '0812-3456-7890\n(021) 1234-5678', color: 'bg-[#FF6B00]' },
              { icon: Mail, title: 'Email', desc: 'info@viarptmdb.com\nsales@viarptmdb.com', color: 'bg-[#0054A6]' },
              { icon: Clock, title: 'Jam Buka', desc: 'Sen-Sab: 08:00-17:00\nMinggu: 09:00-15:00', color: 'bg-[#FF6B00]' },
            ].map((c, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:border-[#FF6B00]/40 transition reveal-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={`w-12 h-12 ${c.color} rounded-xl flex items-center justify-center mb-3`}>
                  <c.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-heading font-bold mb-2">{c.title}</h4>
                <p className="text-sm text-gray-600 whitespace-pre-line">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-8 rounded-3xl reveal-on-scroll">
              <h2 className="font-heading font-black text-2xl mb-2">Kirim Pesan</h2>
              <p className="text-gray-600 mb-6">Isi form & tim kami akan menghubungi dalam 1x24 jam.</p>

              {sent && (
                <div className="bg-green-100 border border-green-300 text-green-800 rounded-xl p-3 mb-4 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Terima kasih! Pesan Anda sudah kami terima.
                </div>
              )}

              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nama Lengkap" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0054A6] focus:outline-none transition" />
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0054A6] focus:outline-none transition" />
                </div>
                <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="No. WhatsApp" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0054A6] focus:outline-none transition" />
                <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0054A6] focus:outline-none transition">
                  <option>Tanya Produk</option>
                  <option>Simulasi Kredit</option>
                  <option>Booking Service</option>
                  <option>Test Ride</option>
                  <option>Lainnya</option>
                </select>
                <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Pesan Anda..." rows={5} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0054A6] focus:outline-none transition resize-none" />
                <button type="submit" disabled={loading} className="btn-glow w-full py-3.5 bg-[#FF6B00] hover:bg-[#e85f00] text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-60">
                  <Send className="w-5 h-5" /> {loading ? 'Mengirim…' : 'Kirim Pesan'}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t flex items-center gap-3">
                <span className="text-sm text-gray-600">Atau langsung:</span>
                <a href={buildWaLink('Halo, saya ingin bertanya tentang motor Viar.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-full text-sm font-bold hover:bg-[#1fb955]">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="reveal-on-scroll">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[400px]">
                <iframe
                  title="Lokasi Viar MDB"
                  src="https://maps.google.com/maps?q=Jakarta%20Timur%20Industri&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 bg-gradient-to-br from-[#0054A6] to-[#003875] text-white p-6 rounded-2xl">
                <h3 className="font-heading font-bold text-xl mb-2">Mau Test Ride Gratis?</h3>
                <p className="text-blue-100 mb-4 text-sm">Datang langsung ke showroom & rasakan sendiri ketangguhan motor Viar.</p>
                <Link to="/test-ride" className="btn-glow inline-block px-6 py-3 bg-[#FF6B00] hover:bg-[#e85f00] text-white font-bold rounded-xl">
                  Daftar Test Ride →
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

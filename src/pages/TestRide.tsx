import { useState } from 'react';
import Layout from '@/components/Layout';
import { products } from '@/data/products';
import { supabase } from '@/lib/supabase';
import { CheckCircle2, Calendar, Clock, MapPin, User, Mail, Phone, Bike, MessageSquare, Loader2, ArrowRight, Shield, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const branches = [
  'Viar MDB Jakarta Pusat',
  'Viar MDB Bekasi',
  'Viar MDB Bogor',
  'Viar MDB Tangerang',
];

const timeSlots = [
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '13:00 - 14:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
];

const minDate = (() => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
})();

export default function TestRide() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    motorSlug: products[0].slug,
    branch: branches[0],
    date: '',
    time: '',
    notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookingId, setBookingId] = useState<string>('');
  const [error, setError] = useState('');

  const selectedProduct = products.find((p) => p.slug === form.motorSlug)!;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.time) {
      setError('Silakan pilih jam test ride.');
      return;
    }
    setLoading(true);

    try {
      // 1. Save to database
      const { data: booking, error: dbError } = await supabase
        .from('test_ride_bookings')
        .insert({
          name: form.name,
          email: form.email,
          phone: form.phone,
          motor_model: selectedProduct.name,
          motor_slug: form.motorSlug,
          dealer_branch: form.branch,
          preferred_date: form.date,
          preferred_time: form.time,
          notes: form.notes || null,
          status: 'pending',
        })
        .select('id')
        .single();

      if (dbError) throw dbError;

      const id = booking?.id || '';
      setBookingId(id);

      // 2. Send confirmation email
      await supabase.functions.invoke('send-test-ride-confirmation', {
        body: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          motorModel: selectedProduct.name,
          dealerBranch: form.branch,
          preferredDate: form.date,
          preferredTime: form.time,
          notes: form.notes,
          bookingId: id.substring(0, 8).toUpperCase(),
        },
      });

      // 3. Subscribe to CRM
      try {
        await fetch('https://famous.ai/api/crm/6a00bfd5e7cd65b0b5633c6e/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: form.email,
            name: form.name,
            source: 'test-ride',
            tags: ['test-ride', 'lead', selectedProduct.category.toLowerCase().replace(/\s+/g, '-')],
          }),
        });
      } catch { /* ignore */ }

      setSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.error(err);
      setError('Terjadi kesalahan. Silakan coba lagi atau hubungi WhatsApp kami.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Layout>
        <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50 min-h-[80vh]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 text-center animate-fade-up">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="font-heading font-black text-3xl lg:text-4xl text-[#1A1A1A] mb-3">
                Booking Berhasil!
              </h1>
              <p className="text-gray-600 mb-6">
                Terima kasih, <span className="font-bold text-[#0054A6]">{form.name}</span>. Kami sudah mengirim email konfirmasi ke <span className="font-bold">{form.email}</span>.
              </p>

              <div className="bg-gradient-to-br from-[#0054A6] to-[#003875] text-white p-6 rounded-2xl mb-6 text-left">
                <div className="text-xs uppercase tracking-widest text-blue-100 mb-1">No. Booking</div>
                <div className="font-heading font-black text-2xl mb-4">#{bookingId.substring(0, 8).toUpperCase()}</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-t border-white/20 pt-2"><span className="text-blue-100">Motor</span><span className="font-bold">{selectedProduct.name}</span></div>
                  <div className="flex justify-between"><span className="text-blue-100">Cabang</span><span className="font-bold">{form.branch}</span></div>
                  <div className="flex justify-between"><span className="text-blue-100">Tanggal</span><span className="font-bold">{form.date}</span></div>
                  <div className="flex justify-between"><span className="text-blue-100">Jam</span><span className="font-bold">{form.time}</span></div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-[#FF6B00] p-4 rounded-r-xl text-left mb-6">
                <p className="font-bold text-[#1A1A1A] mb-1">Langkah Selanjutnya</p>
                <p className="text-sm text-gray-700">Tim sales kami akan menghubungi Anda via WhatsApp dalam <span className="font-bold">1x24 jam</span> untuk konfirmasi & detail teknis test ride.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/" className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[#1A1A1A] font-bold rounded-xl transition">Kembali ke Beranda</Link>
                <Link to="/produk" className="flex-1 btn-glow px-6 py-3 bg-[#FF6B00] hover:bg-[#e85f00] text-white font-bold rounded-xl">Lihat Motor Lain</Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-[#0054A6] to-[#003875] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434358197_091db89c.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0054A6] via-[#0054A6]/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-block px-4 py-1.5 bg-[#FF6B00] text-white text-xs font-bold uppercase tracking-widest rounded-full mb-3">
            100% GRATIS
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl mb-3">Booking Test Ride</h1>
          <p className="text-blue-100 max-w-2xl text-lg">Rasakan langsung ketangguhan motor Viar sebelum membeli. Cepat, mudah, dan tanpa biaya.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] text-white p-6">
                <h2 className="font-heading font-black text-2xl mb-1">Form Booking Test Ride</h2>
                <p className="text-gray-300 text-sm">Isi data Anda. Kami akan konfirmasi via WhatsApp.</p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 lg:p-8 space-y-5">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 text-sm">
                    {error}
                  </div>
                )}

                {/* Personal Info */}
                <div>
                  <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-[#0054A6] mb-3 flex items-center gap-2">
                    <User className="w-4 h-4" /> Data Pribadi
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">Nama Lengkap *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0054A6] focus:outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">No. WhatsApp *</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="08xxxxxxxxxx"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0054A6] focus:outline-none transition"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="email@anda.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0054A6] focus:outline-none transition"
                    />
                    <p className="text-xs text-gray-500 mt-1">Konfirmasi booking akan dikirim ke email ini</p>
                  </div>
                </div>

                {/* Motor & Branch */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-[#0054A6] mb-3 flex items-center gap-2">
                    <Bike className="w-4 h-4" /> Pilihan Motor & Cabang
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">Motor yang Ingin Dicoba *</label>
                      <select
                        required
                        value={form.motorSlug}
                        onChange={(e) => setForm({ ...form, motorSlug: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0054A6] focus:outline-none transition bg-white"
                      >
                        {products.map((p) => (
                          <option key={p.slug} value={p.slug}>{p.name} ({p.category})</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">Cabang Dealer *</label>
                      <select
                        required
                        value={form.branch}
                        onChange={(e) => setForm({ ...form, branch: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0054A6] focus:outline-none transition bg-white"
                      >
                        {branches.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-[#0054A6] mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Tanggal & Jam
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">Tanggal Test Ride *</label>
                      <input
                        required
                        type="date"
                        min={minDate}
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0054A6] focus:outline-none transition"
                      />
                      <p className="text-xs text-gray-500 mt-1">Minimal H+1 dari hari ini</p>
                    </div>
                  </div>

                  <label className="block text-xs font-bold text-gray-700 mb-2">Pilih Jam *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm({ ...form, time: t })}
                        className={`px-3 py-2.5 rounded-lg text-sm font-bold border-2 transition flex items-center justify-center gap-1 ${
                          form.time === t
                            ? 'border-[#FF6B00] bg-[#FF6B00] text-white shadow-md'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-[#FF6B00]/40'
                        }`}
                      >
                        <Clock className="w-3 h-3" /> {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-[#0054A6] mb-3 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Catatan Tambahan
                  </h3>
                  <textarea
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Misal: tertarik info kredit, ingin coba 2 model, dll. (opsional)"
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0054A6] focus:outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-glow w-full py-4 bg-[#FF6B00] hover:bg-[#e85f00] text-white font-bold rounded-xl shadow-lg disabled:opacity-60 flex items-center justify-center gap-2 text-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Memproses Booking…
                    </>
                  ) : (
                    <>
                      Kirim Booking Test Ride <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-[10px] text-gray-500 text-center">Dengan mengirim form ini, Anda setuju untuk dihubungi tim sales Viar PT MDB.</p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Selected Motor Preview */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-24">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="text-xs text-[#FF6B00] font-bold uppercase tracking-widest mb-1">{selectedProduct.category}</div>
                <h3 className="font-heading font-bold text-lg mb-1">{selectedProduct.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{selectedProduct.tagline}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Harga OTR</span>
                  <span className="font-heading font-black text-[#0054A6]">Rp {selectedProduct.price.toLocaleString('id-ID')}</span>
                </div>
              </div>
            </div>

            {/* Why Test Ride */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white p-6 rounded-2xl">
              <h3 className="font-heading font-bold text-lg mb-4">Kenapa Test Ride?</h3>
              <div className="space-y-3">
                {[
                  { icon: Shield, text: '100% Gratis & tanpa komitmen' },
                  { icon: Award, text: 'Didampingi sales profesional' },
                  { icon: Zap, text: 'Test langsung di showroom resmi' },
                  { icon: MapPin, text: '4 cabang siap melayani' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#FF6B00] rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm pt-1.5">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[#FF6B00]/10 border border-[#FF6B00]/20 p-5 rounded-2xl">
              <p className="text-sm font-bold text-[#1A1A1A] mb-2">Butuh bantuan?</p>
              <p className="text-xs text-gray-700 mb-3">Hubungi sales kami langsung.</p>
              <a href="tel:+6281234567890" className="flex items-center gap-2 text-[#FF6B00] font-bold text-sm">
                <Phone className="w-4 h-4" /> 0812-3456-7890
              </a>
              <a href="mailto:info@viarptmdb.com" className="flex items-center gap-2 text-[#FF6B00] font-bold text-sm mt-1">
                <Mail className="w-4 h-4" /> info@viarptmdb.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

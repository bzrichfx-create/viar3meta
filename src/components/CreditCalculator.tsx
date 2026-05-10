import { useMemo, useState } from 'react';
import { Calculator, MessageCircle } from 'lucide-react';
import { products } from '@/data/products';
import { formatRupiah, buildWaLink } from '@/lib/format';

export default function CreditCalculator() {
  const [productSlug, setProductSlug] = useState(products[0].slug);
  const [dpPercent, setDpPercent] = useState(20);
  const [tenor, setTenor] = useState(24);

  const product = products.find((p) => p.slug === productSlug)!;
  const interestRate = 0.07; // 7% per year flat-ish

  const result = useMemo(() => {
    const dp = (product.price * dpPercent) / 100;
    const principal = product.price - dp;
    const totalInterest = principal * interestRate * (tenor / 12);
    const totalPayment = principal + totalInterest;
    const monthly = Math.round(totalPayment / tenor);
    return { dp, monthly, principal, totalPayment };
  }, [product, dpPercent, tenor]);

  const waMsg = `Halo, saya tertarik kredit ${product.name} dengan DP ${formatRupiah(result.dp)} (${dpPercent}%) dan tenor ${tenor} bulan. Cicilan ${formatRupiah(result.monthly)}/bln. Mohon info lengkap.`;

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-[#0054A6] to-[#003875] p-6 text-white flex items-center gap-3">
        <div className="w-12 h-12 bg-[#FF6B00] rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl">Simulasi Kredit Motor</h3>
          <p className="text-blue-100 text-sm">Estimasi cicilan ringan & cepat</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-0">
        <div className="p-6 lg:p-8 space-y-6 border-r border-gray-100">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Pilih Motor</label>
            <select
              value={productSlug}
              onChange={(e) => setProductSlug(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl font-semibold focus:border-[#0054A6] focus:outline-none"
            >
              {products.map((p) => (
                <option key={p.slug} value={p.slug}>{p.name} — {formatRupiah(p.price)}</option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-bold text-gray-700">Down Payment</label>
              <span className="font-heading font-black text-[#0054A6]">{dpPercent}% — {formatRupiah(result.dp)}</span>
            </div>
            <input
              type="range"
              min={10} max={50} step={5}
              value={dpPercent}
              onChange={(e) => setDpPercent(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>10%</span><span>30%</span><span>50%</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-bold text-gray-700">Tenor (Bulan)</label>
              <span className="font-heading font-black text-[#0054A6]">{tenor} bulan</span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {[12, 18, 24, 36, 48].map((t) => (
                <button
                  key={t}
                  onClick={() => setTenor(t)}
                  className={`py-2 rounded-lg font-bold text-sm transition ${
                    tenor === t ? 'bg-[#0054A6] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-8 bg-gradient-to-br from-orange-50 to-blue-50">
          <div className="text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Estimasi Cicilan / Bulan</p>
            <div className="font-heading font-black text-4xl lg:text-5xl text-[#FF6B00] leading-none">
              {formatRupiah(result.monthly)}
            </div>
            <p className="text-xs text-gray-500 mt-2">≈ {formatRupiah(Math.round(result.monthly / 30))}/hari</p>
          </div>

          <div className="space-y-2 text-sm bg-white rounded-xl p-4 mb-5 shadow-sm">
            <div className="flex justify-between"><span>Harga OTR</span><span className="font-bold">{formatRupiah(product.price)}</span></div>
            <div className="flex justify-between"><span>DP ({dpPercent}%)</span><span className="font-bold text-[#0054A6]">{formatRupiah(result.dp)}</span></div>
            <div className="flex justify-between"><span>Pokok Pinjaman</span><span className="font-bold">{formatRupiah(result.principal)}</span></div>
            <div className="flex justify-between"><span>Tenor</span><span className="font-bold">{tenor} bulan</span></div>
            <div className="border-t pt-2 flex justify-between text-base"><span className="font-bold">Total Pembayaran</span><span className="font-heading font-black text-[#0054A6]">{formatRupiah(Math.round(result.dp + result.totalPayment))}</span></div>
          </div>

          <a
            href={buildWaLink(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#25D366] hover:bg-[#1fb955] text-white font-bold rounded-xl shadow-lg"
          >
            <MessageCircle className="w-5 h-5" /> Ajukan via WhatsApp
          </a>
          <p className="text-[10px] text-gray-500 text-center mt-3">*Estimasi. Suku bunga & syarat final ditentukan oleh leasing partner.</p>
        </div>
      </div>
    </div>
  );
}

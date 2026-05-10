import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { getProductBySlug, products } from '@/data/products';
import { formatRupiah, buildWaLink } from '@/lib/format';
import CreditCalculator from '@/components/CreditCalculator';
import ProductCard from '@/components/ProductCard';
import { Check, MessageCircle, ChevronLeft, X, ZoomIn, Truck, Phone } from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : null;
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  if (!product) return <Navigate to="/produk" replace />;

  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 3);

  return (
    <Layout>
      <div className="pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link to="/produk" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#FF6B00] mb-6 font-semibold">
            <ChevronLeft className="w-4 h-4" /> Kembali ke Katalog
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            {/* Gallery */}
            <div>
              <div className="relative aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
                <img src={product.gallery[activeImg]} alt={product.name} className="w-full h-full object-cover" />
                <button onClick={() => setLightbox(true)} className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-[#FF6B00] hover:text-white transition">
                  <ZoomIn className="w-5 h-5" />
                </button>
                {product.badge && (
                  <span className="absolute top-4 left-4 px-4 py-1.5 bg-[#FF6B00] text-white font-bold text-sm rounded-full">{product.badge}</span>
                )}
              </div>
              {product.gallery.length > 1 && (
                <div className="flex gap-3 mt-4">
                  {product.gallery.map((img, i) => (
                    <button key={i} onClick={() => setActiveImg(i)} className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition ${i === activeImg ? 'border-[#FF6B00]' : 'border-transparent'}`}>
                      <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="inline-block px-3 py-1 bg-[#0054A6]/10 text-[#0054A6] text-xs font-bold uppercase tracking-widest rounded-full mb-3">{product.category}</div>
              <h1 className="font-heading font-black text-3xl sm:text-4xl text-[#1A1A1A] mb-2">{product.name}</h1>
              <p className="text-xl text-[#FF6B00] font-bold mb-5">{product.tagline}</p>

              <div className="bg-gradient-to-r from-[#0054A6] to-[#003875] text-white p-5 rounded-2xl mb-6">
                <div className="text-xs uppercase tracking-widest font-bold text-blue-100">Harga OTR Mulai</div>
                <div className="font-heading font-black text-4xl">{formatRupiah(product.price)}</div>
                <div className="text-sm text-blue-100 mt-1">Cicilan mulai {formatRupiah(Math.round(product.price * 0.04))} /bulan</div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {product.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                    <span className="font-semibold text-gray-800">{h}</span>
                  </div>
                ))}
              </div>

              {product.loadCapacity && (
                <div className="bg-orange-50 border-l-4 border-[#FF6B00] p-4 rounded-r-xl mb-6 flex items-center gap-3">
                  <Truck className="w-8 h-8 text-[#FF6B00]" />
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase">Daya Angkut Maksimal</div>
                    <div className="font-heading font-black text-2xl text-[#0054A6]">{product.loadCapacity}</div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <a href={buildWaLink(`Halo, saya tertarik dengan ${product.name}. Mohon info ketersediaan dan promo terbaru.`)} target="_blank" rel="noopener noreferrer" className="btn-glow flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#1fb955] text-white font-bold rounded-xl shadow-lg">
                  <MessageCircle className="w-5 h-5" /> Tanya & Pesan
                </a>
                <a href="tel:+6281234567890" className="btn-glow inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FF6B00] hover:bg-[#e85f00] text-white font-bold rounded-xl shadow-lg">
                  <Phone className="w-5 h-5" /> Hubungi Sales
                </a>
              </div>
            </div>
          </div>

          {/* Specs */}
          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="font-heading font-black text-2xl mb-5">Spesifikasi Lengkap</h2>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {product.specs.map((s, i) => (
                  <div key={i} className={`grid grid-cols-2 px-5 py-3 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <div className="text-sm text-gray-600 font-semibold">{s.label}</div>
                    <div className="text-sm font-bold text-[#1A1A1A]">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading font-black text-2xl mb-5">Simulasi Cicilan</h2>
              <CreditCalculator />
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div>
              <h2 className="font-heading font-black text-2xl mb-6">Produk Sejenis</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p) => <ProductCard key={p.slug} product={p} />)}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6" onClick={() => setLightbox(false)}>
          <button className="absolute top-6 right-6 text-white/80 hover:text-white" onClick={() => setLightbox(false)}>
            <X className="w-8 h-8" />
          </button>
          <img src={product.gallery[activeImg]} alt={product.name} className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl" />
        </div>
      )}
    </Layout>
  );
}

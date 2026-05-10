import { useMemo, useState } from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import { products } from '@/data/products';
import { Search, SlidersHorizontal } from 'lucide-react';
import { formatRupiah } from '@/lib/format';

const categories = ['Semua', 'Roda Tiga', 'Roda Dua', 'EV'] as const;

export default function ProductsPage() {
  const [cat, setCat] = useState<typeof categories[number]>('Semua');
  const [query, setQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(40000000);
  const [sort, setSort] = useState('default');

  const filtered = useMemo(() => {
    let list = products.filter((p) =>
      (cat === 'Semua' || p.category === cat) &&
      p.price <= maxPrice &&
      (p.name.toLowerCase().includes(query.toLowerCase()) || p.tagline.toLowerCase().includes(query.toLowerCase()))
    );
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [cat, query, maxPrice, sort]);

  return (
    <Layout>
      {/* Page hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-[#0054A6] to-[#003875] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434610297_8cf8fd3c.png)', backgroundSize: 'cover' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-[#FF6B00] font-bold text-sm uppercase tracking-widest mb-2">Katalog Lengkap</div>
          <h1 className="font-heading font-black text-4xl sm:text-5xl mb-3">Semua Motor Viar</h1>
          <p className="text-blue-100 max-w-2xl">Pilih motor sesuai kebutuhan Anda. Dari roda tiga niaga, sport adventure, hingga skuter listrik canggih.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filter bar */}
          <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Search */}
              <div className="lg:col-span-4 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cari motor..."
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0054A6] focus:outline-none"
                />
              </div>

              {/* Categories */}
              <div className="lg:col-span-5 flex flex-wrap gap-2 items-center">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={`px-4 py-2 rounded-full font-semibold text-sm transition ${
                      cat === c ? 'bg-[#0054A6] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="lg:col-span-3 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-gray-500" />
                <select value={sort} onChange={(e) => setSort(e.target.value)} className="flex-1 px-3 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0054A6] focus:outline-none font-semibold text-sm">
                  <option value="default">Urutan Default</option>
                  <option value="price-asc">Harga Terendah</option>
                  <option value="price-desc">Harga Tertinggi</option>
                  <option value="name">Nama (A-Z)</option>
                </select>
              </div>
            </div>

            {/* Price slider */}
            <div className="mt-4 pt-4 border-t flex flex-col sm:flex-row sm:items-center gap-3">
              <label className="text-sm font-bold text-gray-700 whitespace-nowrap">Harga Maksimal: <span className="text-[#FF6B00]">{formatRupiah(maxPrice)}</span></label>
              <input
                type="range"
                min={15000000}
                max={40000000}
                step={500000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
              />
            </div>
          </div>

          {/* Results */}
          <div className="mb-4 text-sm text-gray-600">
            Menampilkan <span className="font-bold text-[#0054A6]">{filtered.length}</span> dari {products.length} produk
          </div>

          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl p-16 text-center border border-gray-100">
              <p className="text-gray-500 mb-2">Tidak ada produk yang sesuai filter</p>
              <button onClick={() => { setCat('Semua'); setQuery(''); setMaxPrice(40000000); }} className="text-[#FF6B00] font-bold">Reset Filter</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

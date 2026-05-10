import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Zap } from 'lucide-react';
import type { Product } from '@/data/products';
import { formatRupiah } from '@/lib/format';
import { useState } from 'react';

export default function ProductCard({ product }: { product: Product }) {
  const [loaded, setLoaded] = useState(false);
  const Icon = product.category === 'EV' ? Zap : Truck;

  return (
    <Link
      to={`/produk/${product.slug}`}
      className="tilt-card group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {!loaded && <div className="absolute inset-0 skeleton-shimmer" />}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-[#FF6B00] text-white text-xs font-bold rounded-full shadow-md">
            {product.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-black/70 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
          <Icon className="w-3 h-3" /> {product.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-heading font-bold text-lg text-[#1A1A1A] mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-[#FF6B00] font-semibold mb-3">{product.tagline}</p>

        {product.loadCapacity && (
          <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-3">
            <Truck className="w-3.5 h-3.5" />
            Daya angkut <span className="font-bold text-[#0054A6]">{product.loadCapacity}</span>
          </div>
        )}

        <div className="flex items-end justify-between pt-3 border-t border-gray-100">
          <div>
            <div className="text-[10px] text-gray-500 uppercase font-semibold tracking-wide">Mulai Dari</div>
            <div className="font-heading font-black text-xl text-[#0054A6]">{formatRupiah(product.price)}</div>
          </div>
          <div className="flex items-center gap-1 text-[#FF6B00] font-bold text-sm group-hover:gap-2 transition-all">
            Detail <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

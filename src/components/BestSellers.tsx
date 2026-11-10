import React from 'react';
import { Product } from '../data/portalData';
import { ImagePlaceholder } from './ImagePlaceholder';

interface BestSellersProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onOpenProduct: (product: Product) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({ products, onAddToCart, onOpenProduct }) => {
  // Best sellers: PTZ Camera, 16CH NVR, 2TB Purple HDD, 12V 5A SMPS
  const bestProducts = products.filter(p => ['p4', 'p7', 'p13', 'p16'].includes(p.id));

  return (
    <section id="best-sellers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Section Band */}
      <div className="bg-orange-50/80 border-l-4 border-[#EE6E00] rounded-2xl p-4 sm:p-5 mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-[#EE6E00]">
            ⭐
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-black flex items-center gap-2">
              Best Sellers
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              What actually sells — high rotation stock verified across 4,000+ dealers
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Best Sellers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {bestProducts.map((p, idx) => {
          const placeholderLabel = `image${idx + 24}`;
          return (
            <div
              key={p.id}
              className="bg-white border border-gray-200 hover:border-[#EE6E00] rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#EE6E00] text-white">
                    ⭐ TOP SELLER
                  </span>
                  <span className="text-[11px] font-bold text-gray-500 uppercase font-mono">
                    {p.brand}
                  </span>
                </div>

                <div
                  className="cursor-pointer mb-3"
                  onClick={() => onOpenProduct(p)}
                >
                  <ImagePlaceholder
                    label={placeholderLabel}
                    aspectRatio="aspect-[4/3]"
                    icon={p.icon}
                  />
                </div>

                <h3
                  onClick={() => onOpenProduct(p)}
                  className="font-bold text-sm text-black group-hover:text-[#EE6E00] transition-colors line-clamp-2 cursor-pointer leading-snug mb-1"
                >
                  {p.name}
                </h3>

                <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                  {p.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-base sm:text-lg font-extrabold text-black font-sans">
                      ₹{p.dp.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-gray-400 line-through ml-2">
                      ₹{p.mrp.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    ● In Stock ({p.stock})
                  </span>
                </div>

                <button
                  onClick={() => onAddToCart(p)}
                  className="w-full py-2.5 px-4 bg-black hover:bg-[#EE6E00] text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>🛒</span> Add to Quote
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

import React from 'react';
import { Product } from '../data/portalData';
import { ImagePlaceholder } from './ImagePlaceholder';

interface BulkDealsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onOpenProduct: (product: Product) => void;
  onRequestBulkQuote: (product: Product) => void;
}

export const BulkDeals: React.FC<BulkDealsProps> = ({
  products,
  onAddToCart,
  onOpenProduct,
  onRequestBulkQuote,
}) => {
  // Select items commonly bought in carton/bulk quantities
  const bulkItems = products.filter(p =>
    ['p9', 'p12', 'p16', 'p17'].includes(p.id)
  );

  return (
    <section id="bulk-deals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Section Band */}
      <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border-l-4 border-[#EE6E00] rounded-2xl p-4 sm:p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-[#EE6E00]">
            🏷️
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-black flex items-center gap-2">
              Bulk Deals & Carton Rates
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              Buying in quantity? Ask for a special rate on these high-volume essentials
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-white border border-[#EE6E00]/30 text-[#EE6E00] rounded-full text-xs font-bold shadow-sm">
            Tiered Dealer Pricing
          </span>
        </div>
      </div>

      {/* Grid of Bulk Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {bulkItems.map((p) => {
          return (
            <div
              key={p.id}
              className="bg-white border-2 border-orange-100 hover:border-[#EE6E00] rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-[#EE6E00] text-white text-[10px] font-extrabold px-3 py-0.5 rounded-bl-lg">
                BULK RATE
              </div>

              <div>
                {/* Header & Badges */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-gray-500 uppercase font-mono">
                    {p.brand}
                  </span>
                  <span className="text-[10px] text-gray-500 mr-14">
                    MOQ: 5+ Units
                  </span>
                </div>

                {/* Image Placeholder */}
                <div
                  className="cursor-pointer mb-3"
                  onClick={() => onOpenProduct(p)}
                >
                  <ImagePlaceholder
                    label={p.imageLabel}
                    aspectRatio="aspect-square"
                    className="group-hover:border-[#EE6E00] transition-colors"
                  />
                </div>

                {/* Title & Category */}
                <div className="mb-2">
                  <span className="text-[10px] font-semibold text-[#EE6E00] uppercase tracking-wider">
                    {p.cat}
                  </span>
                  <h3
                    onClick={() => onOpenProduct(p)}
                    className="font-bold text-sm text-black group-hover:text-[#EE6E00] transition-colors line-clamp-1 cursor-pointer"
                    title={p.name}
                  >
                    {p.name}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>

              {/* Pricing & Actions */}
              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-baseline justify-between mb-2">
                  <div>
                    <span className="text-[10px] text-gray-400 line-through mr-1 font-mono">
                      ₹{p.mrp.toLocaleString()}
                    </span>
                    <span className="text-base font-extrabold text-black font-mono">
                      ₹{p.dp.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Save ₹{(p.mrp - p.dp).toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Stock: <strong className="text-black">{p.stock} units</strong>
                  </span>
                  <span className="text-[#EE6E00] font-semibold">Special Carton Tier</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onRequestBulkQuote(p)}
                    className="py-2 px-2 bg-orange-100 hover:bg-orange-200 text-[#EE6E00] font-bold text-xs rounded-xl transition-colors text-center"
                  >
                    Bulk Quote
                  </button>
                  <button
                    onClick={() => onAddToCart(p)}
                    className="py-2 px-2 bg-[#EE6E00] hover:bg-[#D96300] text-white font-bold text-xs rounded-xl transition-all text-center shadow-sm"
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

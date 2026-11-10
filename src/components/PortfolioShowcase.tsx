import React, { useState, useMemo } from 'react';
import { Product, CATEGORIES, BRANDS } from '../data/portalData';
import { ImagePlaceholder } from './ImagePlaceholder';

interface PortfolioShowcaseProps {
  products: Product[];
  selectedCategory: string;
  selectedBrand: string;
  onSelectCategory: (cat: string) => void;
  onSelectBrand: (brand: string) => void;
  onOpenProductDetail: (product: Product) => void;
  onInquireProduct: (product: Product) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  products,
  selectedCategory,
  selectedBrand,
  onSelectCategory,
  onSelectBrand,
  onOpenProductDetail,
  onInquireProduct,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCat =
        !selectedCategory ||
        selectedCategory === 'All' ||
        p.cat.toLowerCase() === selectedCategory.toLowerCase();

      const matchBrand =
        !selectedBrand ||
        selectedBrand === 'All' ||
        p.brand.toLowerCase() === selectedBrand.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.cat.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q);

      return matchCat && matchBrand && matchSearch;
    });
  }, [products, selectedCategory, selectedBrand, searchQuery]);

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#EE6E00] mb-3">
            <span>🛍️</span>
            <span>HARDWARE & SYSTEM WORKS PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
            Curated Hardware <span className="text-[#EE6E00]">Portfolio</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Explore our curated catalog of CCTV surveillance, enterprise recording hubs, industrial PoE, and biometric access control hardware deployed across India.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-[#F4F5F7] border-2 border-gray-200/90 rounded-3xl p-5 mb-10 space-y-4">
          
          {/* Top row: Search and Brand Dropdown */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search works by keyword, brand, or model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-4 pr-10 bg-white border border-gray-300 rounded-2xl text-xs sm:text-sm text-black placeholder-gray-400 focus:outline-none focus:border-[#EE6E00] focus:ring-2 focus:ring-[#EE6E00]/20 transition-all"
              />
              <span className="absolute right-3.5 top-3 text-gray-400 text-sm">
                🔍
              </span>
            </div>

            {/* Brand Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-bold text-gray-500 whitespace-nowrap">Filter Brand:</span>
              <select
                value={selectedBrand}
                onChange={(e) => onSelectBrand(e.target.value)}
                className="h-10 px-3 bg-white border border-gray-300 rounded-xl text-xs font-semibold text-black focus:outline-none focus:border-[#EE6E00]"
              >
                <option value="All">All Brands (10)</option>
                {BRANDS.map((b) => (
                  <option key={b.name} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full scrollbar-none pt-2 border-t border-gray-200">
            <button
              onClick={() => onSelectCategory('All')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                !selectedCategory || selectedCategory === 'All'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-black'
              }`}
            >
              All Portfolio ({products.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => onSelectCategory(cat.name)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCategory === cat.name
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-black'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.name}</span>
                <span className="text-[10px] opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>

        </div>

        {/* Portfolio Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white border-2 border-gray-200/90 hover:border-[#EE6E00] rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Card Header: Brand & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-gray-500 uppercase">
                      {p.brand}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {p.badge === 'hot' && (
                        <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#EE6E00] text-white">
                          HOT
                        </span>
                      )}
                      {p.badge === 'new' && (
                        <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-600 text-white">
                          NEW
                        </span>
                      )}
                      <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                        {p.cat}
                      </span>
                    </div>
                  </div>

                  {/* Image Placeholder */}
                  <div
                    onClick={() => onOpenProductDetail(p)}
                    className="cursor-pointer mb-4"
                  >
                    <ImagePlaceholder
                      label={p.imageLabel}
                      aspectRatio="aspect-[4/3]"
                      className="group-hover:border-[#EE6E00] transition-colors"
                      icon={p.icon}
                    />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5 mb-4">
                    <h3
                      onClick={() => onOpenProductDetail(p)}
                      className="font-bold text-base text-black group-hover:text-[#EE6E00] transition-colors line-clamp-1 cursor-pointer"
                      title={p.name}
                    >
                      {p.name}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>

                {/* Footer: Pricing & Action Buttons */}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-gray-400 line-through mr-1.5 font-mono">
                        ₹{p.mrp.toLocaleString()}
                      </span>
                      <span className="text-lg font-black text-black font-mono">
                        ₹{p.dp.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Dealer Rate
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenProductDetail(p)}
                      className="py-2.5 px-3 bg-gray-100 hover:bg-gray-200 text-black font-bold text-xs rounded-xl transition-colors text-center"
                    >
                      View Specs
                    </button>
                    <button
                      onClick={() => onInquireProduct(p)}
                      className="py-2.5 px-3 bg-[#EE6E00] hover:bg-[#D96300] text-white font-bold text-xs rounded-xl transition-all text-center shadow-sm"
                    >
                      Inquire / Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#F4F5F7] border-2 border-dashed border-gray-300 rounded-3xl p-12 text-center max-w-md mx-auto">
            <span className="text-4xl block mb-2">🔍</span>
            <h3 className="font-bold text-base text-black">No works match your filter</h3>
            <p className="text-xs text-gray-500 mt-1 mb-4">
              Try adjusting your search keyword or switching category tabs.
            </p>
            <button
              onClick={() => {
                onSelectCategory('All');
                onSelectBrand('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#EE6E00] text-white font-bold rounded-xl text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

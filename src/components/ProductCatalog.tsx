import React, { useState, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  CheckCircle2,
  Plus,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  ShoppingBag,
  Zap,
  Tag
} from 'lucide-react';
import {
  PORTAL_PRODUCTS,
  PORTAL_CATEGORIES,
  PORTAL_BRANDS,
  COMPANY_INFO
} from '../data/companyData';
import { PortalProduct } from '../types';

interface ProductCatalogProps {
  onOpenPartnerModal: () => void;
  onAddToCart?: (product: PortalProduct) => void;
  externalSearchQuery?: string;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onOpenPartnerModal,
  onAddToCart,
  externalSearchQuery = ''
}) => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [internalSearch, setInternalSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('default');

  const activeSearch = externalSearchQuery || internalSearch;

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PORTAL_PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCat !== 'All' && p.cat !== selectedCat) return false;
      // Brand filter
      if (selectedBrand !== 'All' && p.brand !== selectedBrand) return false;
      // Search query
      if (activeSearch.trim()) {
        const q = activeSearch.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesBrand = p.brand.toLowerCase().includes(q);
        const matchesCat = p.cat.toLowerCase().includes(q);
        const matchesDesc = p.desc.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesCat && !matchesDesc) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.dp - b.dp;
      if (sortBy === 'price-high') return b.dp - a.dp;
      if (sortBy === 'stock') return b.stock - a.stock;
      return 0;
    });
  }, [selectedCat, selectedBrand, activeSearch, sortBy]);

  const handleInquire = (product: PortalProduct) => {
    if (onAddToCart) {
      onAddToCart(product);
    }
    onOpenPartnerModal();
  };

  return (
    <section id="catalog" className="py-12 sm:py-16 bg-[#fafafa] border-b border-[#E5E8EC]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E5E8EC] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#5F666D] uppercase tracking-wider mb-1.5">
              <Tag className="w-3.5 h-3.5 text-[#EE6E00]" />
              <span>Realtech Vision Verified Wholesale Inventory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F262C] font-sans tracking-tight">
              Live Dealer Catalog & Hardware Stock
            </h2>
            <p className="text-sm text-[#5F666D] mt-1">
              Direct OEM prices and real-time inventory buffers from our Ritchie Street central warehouse.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="text-xs text-[#5F666D] font-mono">
              Showing <strong>{filteredProducts.length}</strong> of {PORTAL_PRODUCTS.length} hardware lines
            </span>
          </div>
        </div>

        {/* Category Filter Tabs (Horizontal Pill Strip) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          <button
            onClick={() => setSelectedCat('All')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-[2px] transition-all whitespace-nowrap ${
              selectedCat === 'All'
                ? 'bg-[#EE6E00] text-white shadow-sm'
                : 'bg-white border border-[#d1d1d1] text-[#1F262C] hover:bg-[#E5E8EC]'
            }`}
          >
            All Products ({PORTAL_PRODUCTS.length})
          </button>

          {PORTAL_CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCat(cat.name)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-[2px] transition-all whitespace-nowrap flex items-center gap-1.5 ${
                selectedCat === cat.name
                  ? 'bg-[#EE6E00] text-white shadow-sm'
                  : 'bg-white border border-[#d1d1d1] text-[#1F262C] hover:bg-[#E5E8EC]'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.name} ({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Secondary Filter & Sort Toolbar */}
        <div className="bg-white border border-[#E5E8EC] p-3 mb-6 rounded-[2px] flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Brand Filter */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#1F262C]">Filter by Brand:</span>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="bg-[#FFFFFF] border border-[#d1d1d1] px-2.5 py-1 rounded-[2px] text-xs text-[#1F262C] focus:outline-none focus:border-[#EE6E00]"
            >
              <option value="All">All Brands (10)</option>
              {PORTAL_BRANDS.map((b) => (
                <option key={b.name} value={b.name}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>

          {/* Quick Search inside Catalog if topbar search isn't active */}
          <div className="flex-1 max-w-xs hidden sm:block">
            <input
              type="text"
              value={internalSearch}
              onChange={(e) => setInternalSearch(e.target.value)}
              placeholder="Filter current view..."
              className="w-full bg-[#FFFFFF] border border-[#d1d1d1] px-2.5 py-1 text-xs text-[#1F262C] rounded-[2px] focus:outline-none focus:border-[#EE6E00]"
            />
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#1F262C]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FFFFFF] border border-[#d1d1d1] px-2.5 py-1 rounded-[2px] text-xs text-[#1F262C] focus:outline-none focus:border-[#EE6E00]"
            >
              <option value="default">Default Order</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="stock">Highest Stock</option>
            </select>
          </div>
        </div>

        {/* Minimal High-Density Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-[#E5E8EC] p-12 text-center rounded-[2px]">
            <p className="text-sm font-semibold text-[#1F262C]">No hardware lines match your active filter.</p>
            <button
              onClick={() => {
                setSelectedCat('All');
                setSelectedBrand('All');
                setInternalSearch('');
              }}
              className="mt-3 ms-btn-secondary text-xs"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="ms-card p-4 flex flex-col justify-between bg-white border border-[#E5E8EC] hover:border-[#EE6E00] transition-all group"
              >
                <div>
                  {/* Top Bar: Icon + Brand & Badge */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-[2px] bg-[#f0f4f8] flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#F0F1F3] transition-colors">
                      {p.icon}
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      {p.badge && (
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] uppercase tracking-wider ${
                          p.badge.toLowerCase().includes('hot')
                            ? 'bg-[#fdf2f2] text-[#e63946] border border-[#fcc]'
                            : p.badge.toLowerCase().includes('new')
                            ? 'bg-[#F0F1F3] text-[#EE6E00] border border-[#cbe2f8]'
                            : 'bg-[#E3EEE6] text-[#2F6B48] border border-[#cbe8be]'
                        }`}>
                          {p.badge}
                        </span>
                      )}
                      <span className="text-[10px] font-mono text-[#5F666D] uppercase">
                        {p.brand}
                      </span>
                    </div>
                  </div>

                  {/* Product Title */}
                  <h3 className="text-sm font-bold text-[#1F262C] leading-snug group-hover:text-[#EE6E00] transition-colors mb-1 line-clamp-1">
                    {p.name}
                  </h3>

                  {/* Technical Spec */}
                  <p className="text-xs text-[#5F666D] leading-relaxed mb-3 line-clamp-2">
                    {p.desc}
                  </p>
                </div>

                {/* Bottom Section: Stock & Pricing & Inquire Button */}
                <div className="pt-3 border-t border-[#E5E8EC]">
                  {/* Stock Indicator */}
                  <div className="flex items-center justify-between text-[11px] mb-2 font-mono">
                    <span className="flex items-center gap-1.5 text-[#2F6B48] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F6B48] animate-pulse" />
                      In Stock ({p.stock} units)
                    </span>
                    <span className="text-[#888888]">{p.cat}</span>
                  </div>

                  {/* Pricing: MRP vs Dealer Price (DP) */}
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-[10px] text-[#888888] block line-through">
                        MRP ₹{p.mrp.toLocaleString('en-IN')}
                      </span>
                      <span className="text-base font-bold text-[#EE6E00] font-sans">
                        ₹{p.dp.toLocaleString('en-IN')}
                        <span className="text-[10px] font-normal text-[#5F666D] ml-1">Dealer Price</span>
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleInquire(p)}
                    className="w-full ms-btn-primary py-2 text-xs justify-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Inquire / Add to BOM</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductCatalog;

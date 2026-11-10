import React, { useState, useMemo } from 'react';
import { Product, CATEGORIES, BRANDS } from '../data/portalData';
import { ImagePlaceholder } from './ImagePlaceholder';

interface ProductCatalogSectionProps {
  products: Product[];
  selectedCategory: string;
  selectedBrand: string;
  searchQuery: string;
  onSelectCategory: (cat: string) => void;
  onSelectBrand: (brand: string) => void;
  onAddToCart: (product: Product) => void;
  onOpenProduct: (product: Product) => void;
  onClearFilters: () => void;
}

export const ProductCatalogSection: React.FC<ProductCatalogSectionProps> = ({
  products,
  selectedCategory,
  selectedBrand,
  searchQuery,
  onSelectCategory,
  onSelectBrand,
  onAddToCart,
  onOpenProduct,
  onClearFilters,
}) => {
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'name' | 'stock'>('default');

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory =
          !selectedCategory ||
          selectedCategory === 'All' ||
          p.cat.toLowerCase() === selectedCategory.toLowerCase();
        
        const matchesBrand =
          !selectedBrand ||
          selectedBrand === 'All' ||
          p.brand.toLowerCase() === selectedBrand.toLowerCase();

        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.cat.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q);

        return matchesCategory && matchesBrand && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.dp - b.dp;
        if (sortBy === 'price-desc') return b.dp - a.dp;
        if (sortBy === 'stock') return b.stock - a.stock;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [products, selectedCategory, selectedBrand, searchQuery, sortBy]);

  const hasActiveFilters =
    Boolean(searchQuery) ||
    (Boolean(selectedCategory) && selectedCategory !== 'All') ||
    (Boolean(selectedBrand) && selectedBrand !== 'All');

  return (
    <section id="all-products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Header */}
      <div className="bg-white border-l-4 border-[#EE6E00] shadow-sm rounded-2xl p-5 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#EE6E00] text-2xl flex items-center justify-center font-bold">
            🛍️
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-black flex items-center gap-2">
              All Products Catalog
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              The whole B2B inventory — authentic brands with transparent dealer pricing
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end md:self-center">
          <span className="text-xs font-semibold px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full">
            Showing <strong className="text-black">{filteredProducts.length}</strong> of {products.length} items
          </span>
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="text-xs font-bold text-[#EE6E00] hover:text-[#D96300] underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
        
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 max-w-full scrollbar-none">
          <button
            onClick={() => onSelectCategory('All')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              !selectedCategory || selectedCategory === 'All'
                ? 'bg-black text-white shadow-sm'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-black'
            }`}
          >
            All Categories
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.name}
              onClick={() => onSelectCategory(c.name)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                selectedCategory === c.name
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-black'
              }`}
            >
              <span>{c.emoji}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        {/* Dropdowns for Brand & Sort */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Brand select */}
          <div className="flex-1 sm:flex-initial">
            <select
              value={selectedBrand || 'All'}
              onChange={(e) => onSelectBrand(e.target.value)}
              className="w-full sm:w-44 h-9 bg-white border border-gray-300 rounded-xl px-3 text-xs font-semibold text-black focus:outline-none focus:border-[#EE6E00]"
            >
              <option value="All">All Brands</option>
              {BRANDS.map((b) => (
                <option key={b.name} value={b.name}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sort select */}
          <div className="flex-1 sm:flex-initial">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full sm:w-44 h-9 bg-white border border-gray-300 rounded-xl px-3 text-xs font-semibold text-black focus:outline-none focus:border-[#EE6E00]"
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="stock">Stock: Highest First</option>
              <option value="name">Product Name (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p) => {
            return (
              <div
                key={p.id}
                className="bg-white border border-gray-200 hover:border-[#EE6E00] rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Badges / Brand */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      {p.badge === 'hot' && (
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#EE6E00] text-white">
                          HOT DEAL
                        </span>
                      )}
                      {p.badge === 'new' && (
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                          NEW
                        </span>
                      )}
                      {p.badge === 'bulk' && (
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-500 text-white">
                          BULK
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-bold text-gray-500 uppercase font-mono">
                      {p.brand}
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

                  {/* Category & Title */}
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
                  <div className="flex items-baseline justify-between mb-1.5">
                    <div>
                      <span className="text-[10px] text-gray-400 line-through mr-1 font-mono">
                        ₹{p.mrp.toLocaleString()}
                      </span>
                      <span className="text-base font-extrabold text-black font-mono">
                        ₹{p.dp.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      ₹{(p.mrp - p.dp).toLocaleString()} Margin
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          p.stock > 50 ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}
                      ></span>
                      <span>
                        Stock: <strong className="text-black">{p.stock}</strong>
                      </span>
                    </span>
                    <span className="text-gray-400 text-[10px] font-mono">GST Extra</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenProduct(p)}
                      className="py-2 px-2 bg-gray-100 hover:bg-gray-200 text-black font-semibold text-xs rounded-xl transition-colors text-center"
                    >
                      Specs
                    </button>
                    <button
                      onClick={() => onAddToCart(p)}
                      className="py-2 px-2 bg-[#EE6E00] hover:bg-[#D96300] text-white font-bold text-xs rounded-xl transition-all text-center shadow-sm"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center max-w-lg mx-auto">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-lg font-bold text-black">No products found</h3>
          <p className="text-sm text-gray-500 mt-1 mb-5">
            We couldn't find any products matching your current filters or search term.
          </p>
          <button
            onClick={onClearFilters}
            className="px-5 py-2.5 bg-[#EE6E00] hover:bg-[#D96300] text-white font-bold rounded-xl text-sm transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </section>
  );
};

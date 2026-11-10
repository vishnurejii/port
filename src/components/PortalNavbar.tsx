import React, { useState } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface PortalNavbarProps {
  onOpenLogin: () => void;
  onOpenRegister: () => void;
  onOpenAbout: () => void;
  onOpenWhy: () => void;
  onOpenContact: () => void;
  onOpenCart: () => void;
  cartCount: number;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSelectCategory: (cat: string) => void;
  onSelectBrand: (brand: string) => void;
}

export const PortalNavbar: React.FC<PortalNavbarProps> = ({
  onOpenLogin,
  onOpenRegister,
  onOpenAbout,
  onOpenWhy,
  onOpenContact,
  onOpenCart,
  cartCount,
  searchQuery,
  onSearchChange,
  onSelectCategory,
  onSelectBrand,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      {/* Top Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-6">
          
          {/* Logo Space - image1 */}
          <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="w-36 sm:w-44 h-10 sm:h-12 flex items-center">
              <ImagePlaceholder label="image1" aspectRatio="aspect-auto h-full w-full" />
            </div>
            <div className="hidden xl:flex flex-col border-l border-gray-200 pl-3">
              <span className="font-bold text-sm tracking-tight text-black">Realtech Vision</span>
              <span className="text-[11px] font-semibold text-[#EE6E00] uppercase tracking-wider">Dealer Portal</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-2">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search CCTV, NVR, DVR, switches, hard drives, brands..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full h-10 sm:h-11 pl-4 pr-12 bg-gray-50 border border-gray-300 rounded-xl text-sm text-black placeholder-gray-400 focus:outline-none focus:border-[#EE6E00] focus:ring-2 focus:ring-[#EE6E00]/20 transition-all"
              />
              <button
                type="button"
                onClick={() => scrollTo('all-products')}
                className="absolute right-1 w-9 h-9 sm:h-9 bg-[#EE6E00] hover:bg-[#D96300] text-white rounded-lg flex items-center justify-center transition-colors shadow-sm"
                aria-label="Search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Dealer Login */}
            <button
              onClick={onOpenLogin}
              className="px-3.5 sm:px-4 py-2 bg-black hover:bg-gray-800 text-white font-semibold text-xs sm:text-sm rounded-full transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>🔐</span>
              <span className="hidden sm:inline">Dealer</span> Login
            </button>

            {/* Join as Dealer */}
            <a
              href="https://realtechvision.in/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex px-3.5 sm:px-4 py-2 bg-[#EE6E00] hover:bg-[#D96300] text-white font-semibold text-xs sm:text-sm rounded-full transition-all shadow-sm whitespace-nowrap"
            >
              Join as Dealer
            </a>

            {/* Cart / Inquiry */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 text-black hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center"
              aria-label="View Cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#EE6E00] text-white rounded-full text-[11px] font-bold flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-lg"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Dark Nav Bar (Matching Realtech Vision rc-nav2) */}
      <div className="bg-[#16233b] text-white text-xs sm:text-[13px] font-medium overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between min-h-[44px] gap-2">
          <nav className="flex items-center gap-1 sm:gap-2 py-1.5 whitespace-nowrap">
            <button onClick={() => scrollTo('hot-deals')} className="px-2.5 py-1.5 hover:bg-white/10 rounded-md text-white transition-colors flex items-center gap-1 font-semibold text-[#EE6E00]">
              🔥 Hot Deals
            </button>
            <button onClick={() => scrollTo('brands')} className="px-2.5 py-1.5 hover:bg-white/10 rounded-md text-white/90 hover:text-white transition-colors flex items-center gap-1">
              🏆 Top Brands
            </button>
            <button onClick={() => scrollTo('categories')} className="px-2.5 py-1.5 hover:bg-white/10 rounded-md text-white/90 hover:text-white transition-colors flex items-center gap-1">
              📂 Categories
            </button>
            <button onClick={() => scrollTo('best-sellers')} className="px-2.5 py-1.5 hover:bg-white/10 rounded-md text-white/90 hover:text-white transition-colors flex items-center gap-1">
              ⭐ Best Sellers
            </button>
            <button onClick={() => scrollTo('new-launches')} className="px-2.5 py-1.5 hover:bg-white/10 rounded-md text-white/90 hover:text-white transition-colors flex items-center gap-1">
              🆕 New Launches
            </button>
            <button onClick={() => scrollTo('bulk-deals')} className="px-2.5 py-1.5 hover:bg-white/10 rounded-md text-white/90 hover:text-white transition-colors flex items-center gap-1">
              🏷️ Bulk Deals
            </button>
            <button onClick={() => scrollTo('all-products')} className="px-2.5 py-1.5 hover:bg-white/10 rounded-md text-white/90 hover:text-white transition-colors flex items-center gap-1 font-semibold">
              🛍️ All Products
            </button>
            <span className="w-px h-4 bg-white/20 mx-1 hidden md:block"></span>
            <button onClick={onOpenAbout} className="px-2.5 py-1.5 hover:bg-white/10 rounded-md text-white/90 hover:text-white transition-colors">
              About Us
            </button>
            <button onClick={onOpenWhy} className="px-2.5 py-1.5 hover:bg-white/10 rounded-md text-white/90 hover:text-white transition-colors">
              Why Realtech
            </button>
            <button onClick={onOpenContact} className="px-2.5 py-1.5 hover:bg-white/10 rounded-md text-white/90 hover:text-white transition-colors">
              Contact Us
            </button>
          </nav>

          {/* Branch indicator */}
          <div className="hidden lg:flex items-center gap-1 text-[11px] text-white/70 whitespace-nowrap pl-4 border-l border-white/10">
            <span className="text-[#EE6E00]">📍</span>
            <span>Branches: Delhi · Hyderabad · Bangalore · Surat · Chennai (HO)</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-4 space-y-2">
          <div className="flex flex-col gap-1 text-sm font-semibold text-black divide-y divide-gray-100">
            <button onClick={() => scrollTo('hot-deals')} className="text-left py-2 text-[#EE6E00] flex items-center gap-2">
              🔥 Hot Deals
            </button>
            <button onClick={() => scrollTo('brands')} className="text-left py-2 text-black flex items-center gap-2">
              🏆 Top Brands
            </button>
            <button onClick={() => scrollTo('categories')} className="text-left py-2 text-black flex items-center gap-2">
              📂 Categories
            </button>
            <button onClick={() => scrollTo('best-sellers')} className="text-left py-2 text-black flex items-center gap-2">
              ⭐ Best Sellers
            </button>
            <button onClick={() => scrollTo('new-launches')} className="text-left py-2 text-black flex items-center gap-2">
              🆕 New Launches
            </button>
            <button onClick={() => scrollTo('bulk-deals')} className="text-left py-2 text-black flex items-center gap-2">
              🏷️ Bulk Deals
            </button>
            <button onClick={() => scrollTo('all-products')} className="text-left py-2 text-black flex items-center gap-2">
              🛍️ All Products
            </button>
            <button onClick={() => { onOpenAbout(); setMobileMenuOpen(false); }} className="text-left py-2 text-black">
              🏢 About Us
            </button>
            <button onClick={() => { onOpenWhy(); setMobileMenuOpen(false); }} className="text-left py-2 text-black">
              ⭐ Why Realtech
            </button>
            <button onClick={() => { onOpenContact(); setMobileMenuOpen(false); }} className="text-left py-2 text-black">
              📞 Contact Us
            </button>
            <button onClick={() => { onOpenRegister(); setMobileMenuOpen(false); }} className="w-full mt-3 py-2.5 bg-[#EE6E00] text-white font-bold rounded-xl text-center">
              Join as Dealer
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

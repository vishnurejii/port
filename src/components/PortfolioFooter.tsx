import React from 'react';
import { BRANDS, BRANCHES } from '../data/portalData';
import { ImagePlaceholder } from './ImagePlaceholder';

interface PortfolioFooterProps {
  onOpenPartnerModal: () => void;
  onOpenContactModal: () => void;
}

export const PortfolioFooter: React.FC<PortfolioFooterProps> = ({
  onOpenPartnerModal,
  onOpenContactModal,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111827] text-gray-300 pt-16 pb-10 border-t-4 border-[#EE6E00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Identity & Logo (image1) */}
          <div className="space-y-4">
            <div className="inline-block bg-white/95 px-3 py-1.5 rounded-xl border border-white/20 shadow-sm">
              <div className="w-36 sm:w-40 h-8 flex items-center">
                <ImagePlaceholder
                  label="image1"
                  alt="Realtech Vision Logo"
                  aspectRatio="aspect-auto h-full w-full"
                />
              </div>
            </div>
            <h3 className="text-white font-bold text-base">Realtech Vision</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              India's premier technology & surveillance distribution powerhouse. Connecting 10 global OEM brands with 4,000+ system integrators nationwide.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-white/10 text-[#EE6E00] rounded-full text-xs font-bold border border-white/10">
                100% Pure B2B Distribution
              </span>
            </div>
          </div>

          {/* Col 2: In-Order Sitemap Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-gray-800 pb-2">
              Website Sections
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button onClick={() => scrollTo('home')} className="hover:text-[#EE6E00] transition-colors cursor-pointer text-left">
                  1. Home (First Impression & CTAs)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-[#EE6E00] transition-colors cursor-pointer text-left">
                  2. About the Company & History
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products-services')} className="hover:text-[#EE6E00] transition-colors cursor-pointer text-left">
                  3. Products & Services Offerings
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('clients-credentials')} className="hover:text-[#EE6E00] transition-colors cursor-pointer text-left">
                  4. Clients, Partners & Credentials
                </button>
              </li>
              <li>
                <button onClick={onOpenContactModal} className="hover:text-[#EE6E00] transition-colors cursor-pointer text-left">
                  Contact & Business Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Authorized OEM Brand Partners */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-gray-800 pb-2">
              Authorized OEM Brands
            </h4>
            <div className="flex flex-wrap gap-2">
              {BRANDS.map((b) => (
                <span
                  key={b.name}
                  className="px-2.5 py-1 bg-gray-800/80 hover:bg-gray-700 text-gray-300 rounded-lg text-xs font-medium border border-gray-700"
                >
                  {b.name}
                </span>
              ))}
            </div>

            <h4 className="text-white font-bold text-sm tracking-wider uppercase mt-6 mb-3 border-b border-gray-800 pb-2">
              Dealer Network
            </h4>
            <p className="text-xs text-gray-400 mb-3 leading-relaxed">
              Join 4,000+ verified trade integrators receiving authorized OEM rates.
            </p>
            <button
              onClick={onOpenPartnerModal}
              className="px-4 py-2 bg-[#EE6E00] hover:bg-[#D96300] text-white rounded-xl text-xs font-bold transition-colors shadow-sm cursor-pointer"
            >
              Apply for Dealership →
            </button>
          </div>

          {/* Col 4: Central Headquarters & Regional Hubs */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-gray-800 pb-2">
              Headquarters & Hubs
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-white block">Head Office (Chennai):</span>
                <p className="text-gray-400">Ritchie Street, Electronics Market, Mount Road, Chennai 600002</p>
              </div>
              <div>
                <span className="font-bold text-white block">Regional Fulfillment Hubs:</span>
                <p className="text-gray-400">Delhi NCR · Hyderabad · Bangalore · Surat</p>
              </div>
              <div className="pt-2 border-t border-gray-800">
                <span className="text-gray-400 block">Central Helpline:</span>
                <a href="tel:+919840001515" className="text-base font-bold text-[#EE6E00] font-mono hover:underline">
                  +91 98400 01515
                </a>
              </div>
              <div>
                <span className="text-gray-400 block">Email Inquiries:</span>
                <a href="mailto:sales@realtechvision.in" className="text-xs text-white hover:text-[#EE6E00]">
                  sales@realtechvision.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Realtech Vision. All Rights Reserved. Official B2B Distribution Portfolio.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#EE6E00] font-semibold">Strict Channel Protection</span>
            <span>•</span>
            <span>Zero Direct End-User Retail</span>
            <span>•</span>
            <span>100% Genuine Barcoded Stock</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

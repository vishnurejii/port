import React from 'react';
import { BRANCHES, BRANDS } from '../data/portalData';
import { ImagePlaceholder } from './ImagePlaceholder';

interface PortalFooterProps {
  onOpenAbout: () => void;
  onOpenWhy: () => void;
  onOpenContact: () => void;
  onOpenRegister: () => void;
}

export const PortalFooter: React.FC<PortalFooterProps> = ({
  onOpenAbout,
  onOpenWhy,
  onOpenContact,
  onOpenRegister,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111827] text-gray-300 pt-14 pb-8 border-t-4 border-[#EE6E00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Col 1: About & Logo */}
          <div className="space-y-4">
            <div className="inline-block bg-white/95 px-3 py-1.5 rounded-xl border border-white/20 shadow-sm">
              <div className="w-36 sm:w-40 h-8 flex items-center">
                <ImagePlaceholder label="image1" alt="Realtech Vision Logo" aspectRatio="aspect-auto h-full w-full" />
              </div>
            </div>
            <h3 className="text-white font-bold text-base">Realtech Vision</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              India's premier B2B electronics & security distribution powerhouse. Delivering CCTV, networking, biometrics, and storage to 4,000+ dealers nationwide.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-white/10 text-[#EE6E00] rounded-full text-xs font-bold border border-white/10">
                100% Pure Distribution
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-gray-800 pb-2">
              Dealer Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('hot-deals')} className="hover:text-[#EE6E00] transition-colors">
                  🔥 Hot Deals & Weekly Promos
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('brands')} className="hover:text-[#EE6E00] transition-colors">
                  🏆 Top Brand Directory
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('categories')} className="hover:text-[#EE6E00] transition-colors">
                  📂 Product Categories
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('best-sellers')} className="hover:text-[#EE6E00] transition-colors">
                  ⭐ Dealer Best Sellers
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('bulk-deals')} className="hover:text-[#EE6E00] transition-colors">
                  🏷️ Bulk & Carton Deals
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('all-products')} className="hover:text-[#EE6E00] transition-colors">
                  🛍️ Complete Product Catalog
                </button>
              </li>
              <li>
                <button onClick={onOpenAbout} className="hover:text-[#EE6E00] transition-colors">
                  🏢 About Realtech Vision
                </button>
              </li>
              <li>
                <button onClick={onOpenWhy} className="hover:text-[#EE6E00] transition-colors">
                  ⭐ Why Realtech
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Authorized Brands */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-gray-800 pb-2">
              OEM Brand Partners
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {BRANDS.map((b) => (
                <span
                  key={b.name}
                  className="px-2.5 py-1 bg-gray-800/80 hover:bg-gray-700 text-gray-300 rounded-lg text-xs font-medium border border-gray-700 cursor-default"
                >
                  {b.name}
                </span>
              ))}
            </div>

            <h4 className="text-white font-bold text-sm tracking-wider uppercase mt-6 mb-3 border-b border-gray-800 pb-2">
              Become a Dealer
            </h4>
            <p className="text-xs text-gray-400 mb-2">
              Get tiered dealer pricing, stock holds, and tender protection.
            </p>
            <a
              href="https://realtechvision.in/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#EE6E00] hover:bg-[#D96300] text-white rounded-xl text-xs font-bold transition-colors"
            >
              Apply for Dealership
            </a>
          </div>

          {/* Col 4: Branches & Helpline */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-gray-800 pb-2">
              Branch Network & Support
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-white block">Head Office:</span>
                <p className="text-gray-400">Ritchie Street, Mount Road, Chennai 600002</p>
              </div>
              <div>
                <span className="font-bold text-white block">Fulfillment Hubs:</span>
                <p className="text-gray-400">Delhi NCR · Hyderabad · Bangalore · Surat</p>
              </div>
              <div className="pt-2 border-t border-gray-800">
                <span className="text-gray-400 block">Dealer Helpline:</span>
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
              <div className="pt-1">
                <button
                  onClick={onOpenContact}
                  className="text-xs font-bold text-white hover:text-[#EE6E00] underline"
                >
                  View All Branch Addresses →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Realtech Vision. All Rights Reserved. Pure B2B Distribution.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#EE6E00] font-semibold">Strict Channel Protection</span>
            <span>·</span>
            <span>Zero Retail Selling</span>
            <span>·</span>
            <span>GST Invoicing</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

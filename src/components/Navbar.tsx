import React, { useState } from 'react';
import {
  Menu,
  X,
  ExternalLink,
  MessageSquare,
  UserPlus
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenPartnerModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPartnerModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E5E8EC] shadow-[0_1px_4px_rgba(31,38,44,0.05)] relative overflow-hidden transition-colors duration-300">
      {/* Subtle warm low-glare grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(31, 38, 44, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(31, 38, 44, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between gap-4 relative z-10">
        
        {/* Left: Official Realtech Vision Logo & Brand Tag */}
        <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#1F262C] hover:bg-[#F4F5F7] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EE6E00]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <a
            href="#top"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EE6E00] rounded-md py-1"
            aria-label="Realtech Vision Homepage"
          >
            <img
              src="/realtech-logo-v2.png"
              alt="Realtech Vision - Security & IT Distribution"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-150 group-hover:scale-[1.02]"
              width="180"
              height="36"
            />
            <span className="hidden sm:inline-block text-[11px] font-mono text-[#B53E00] font-semibold uppercase tracking-wider pl-2 border-l border-[#E5E8EC]">
              B2B Distribution
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-[13px] text-[#1F262C]">
            <a
              href="#about"
              className="px-3 py-1.5 hover:text-[#B53E00] hover:underline decoration-1 underline-offset-4 transition-colors font-medium focus-visible:ring-2 focus-visible:ring-[#EE6E00] rounded"
            >
              About
            </a>
            <a
              href="#solutions"
              className="px-3 py-1.5 hover:text-[#B53E00] hover:underline decoration-1 underline-offset-4 transition-colors font-medium focus-visible:ring-2 focus-visible:ring-[#EE6E00] rounded"
            >
              Solutions
            </a>
            <a
              href="#brands"
              className="px-3 py-1.5 hover:text-[#B53E00] hover:underline decoration-1 underline-offset-4 transition-colors font-medium focus-visible:ring-2 focus-visible:ring-[#EE6E00] rounded"
            >
              Authorized Brands
            </a>
            <a
              href="#how-to-partner"
              className="px-3 py-1.5 hover:text-[#B53E00] hover:underline decoration-1 underline-offset-4 transition-colors font-medium focus-visible:ring-2 focus-visible:ring-[#EE6E00] rounded"
            >
              How to Partner
            </a>
            <a
              href="#network"
              className="px-3 py-1.5 hover:text-[#B53E00] hover:underline decoration-1 underline-offset-4 transition-colors font-medium focus-visible:ring-2 focus-visible:ring-[#EE6E00] rounded"
            >
              5 Regional Hubs
            </a>
          </nav>
        </div>

        {/* Right: Actions with unified CTA labels */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          {/* Tertiary Action: WhatsApp Desk */}
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#2F6B48] bg-[#E3EEE6] px-3 py-1.5 border border-[#2F6B48]/30 font-medium rounded-full hover:bg-[#d7e5da] transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-[#EE6E00]"
            title="Chat directly with our channel desk on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#2F6B48]" />
            <span className="hidden sm:inline">WhatsApp Desk</span>
          </a>

          {/* Secondary Action: Become a Dealer */}
          <a
            href={COMPANY_INFO.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-es-outline text-xs py-1.5 px-3.5 hidden md:inline-flex focus-visible:ring-2 focus-visible:ring-[#EE6E00]"
          >
            <span>Become a Dealer</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={COMPANY_INFO.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-es-primary text-xs py-1.5 px-4 inline-flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#EE6E00]"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Become a Dealer</span>
          </a>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF]/98 backdrop-blur-md border-t border-[#E5E8EC] px-4 py-4 space-y-3 relative z-10 shadow-md">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#1F262C] hover:text-[#B53E00]"
          >
            About Realtech
          </a>
          <a
            href="#solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#1F262C] hover:text-[#B53E00]"
          >
            Hardware Solutions
          </a>
          <a
            href="#brands"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#1F262C] hover:text-[#B53E00]"
          >
            Authorized OEM Brands
          </a>
          <a
            href="#network"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#1F262C] hover:text-[#B53E00]"
          >
            5 Regional Distribution Hubs
          </a>
          <a
            href="#how-to-partner"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#1F262C] hover:text-[#B53E00]"
          >
            How to Partner
          </a>

          <div className="pt-2 border-t border-[#E5E8EC] flex flex-col gap-2">
            <a
              href={COMPANY_INFO.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-es-primary text-xs py-2.5 px-4 w-full justify-center inline-flex items-center"
            >
              <span>Become a Dealer</span>
            </a>

            <a
              href={COMPANY_INFO.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-es-outline text-xs py-2 px-4 w-full justify-center"
            >
              <span>Become a Dealer</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

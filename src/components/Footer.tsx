import React, { useState } from 'react';
import {
  Globe,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ArrowUp,
  Clock,
  ExternalLink,
  ShieldAlert,
  UserPlus,
  X
} from 'lucide-react';
import { COMPANY_INFO, PORTAL_CATEGORIES } from '../data/companyData';

interface FooterProps {
  onOpenPartnerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPartnerModal }) => {
  const [legalModalContent, setLegalModalContent] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLegalModal = (title: string) => {
    setLegalModalContent(title);
  };

  const closeLegalModal = () => {
    setLegalModalContent(null);
  };

  return (
    <footer className="relative bg-[#2A323A] text-[#B6BCC4] text-xs border-t border-[#3A444E] overflow-hidden">
      {/* Subtle warm background mesh pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#EE6E00_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.05] pointer-events-none" />

      {/* 4-Column Minimal B2B Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Realtech Vision Brand, Legal Entity, GSTIN & Official Contacts */}
          <div className="space-y-4">
            <a href="#top" className="inline-block" aria-label="Return to top">
              <div className="bg-[#FFFFFF] px-3.5 py-2 rounded-xl shadow-sm inline-flex items-center border border-[#E5E8EC]">
                <img
                  src="/realtech-logo-v2.png"
                  alt="Realtech Vision"
                  className="h-7 w-auto object-contain"
                  width="140"
                  height="28"
                />
              </div>
            </a>
            <p className="text-xs text-[#B6BCC4] leading-relaxed">
              India's B2B electronic physical security & IT hardware distributor. Operating on an exclusive wholesale covenant serving verified channel partners nationwide.
            </p>

            {/* Legal Entity & GSTIN Information */}
            <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl space-y-1 text-[11px]">
              {/* TODO: Add official legal entity name (Pvt Ltd / LLP / Proprietary) and 15-digit GSTIN */}
              <div className="text-[#ECEAE5] font-semibold">
                Entity: {COMPANY_INFO.legalEntity}
              </div>
              <div className="text-[#EE6E00] font-mono">
                {COMPANY_INFO.gstinPlaceholder}
              </div>
            </div>

            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EE6E00] flex-shrink-0 mt-0.5" />
                <span className="text-[#ECEAE5]">{COMPANY_INFO.headOffice}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EE6E00] flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="font-semibold text-[#ECEAE5] hover:text-[#EE6E00] transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EE6E00] flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-[#ECEAE5] hover:text-[#EE6E00] transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#EE6E00] flex-shrink-0" />
                <span className="text-[#B6BCC4]">{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Hardware Lines */}
          <div>
            <h3 className="font-semibold text-[#ECEAE5] text-sm mb-4 tracking-wide">
              Hardware Lines
            </h3>
            <ul className="space-y-2.5 text-xs">
              {PORTAL_CATEGORIES.map((c) => (
                <li key={c.name}>
                  <a href="#solutions" className="text-[#B6BCC4] hover:text-[#EE6E00] transition-colors flex items-center gap-2">
                    <span className="text-sm" aria-hidden="true">{c.emoji}</span>
                    <span>{c.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Regional Hubs */}
          <div>
            <h3 className="font-semibold text-[#ECEAE5] text-sm mb-4 tracking-wide">
              Regional Super-Hubs
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#network" className="text-[#B6BCC4] hover:text-[#EE6E00] transition-colors block">Chennai Central HQ (Ritchie St)</a></li>
              <li><a href="#network" className="text-[#B6BCC4] hover:text-[#EE6E00] transition-colors block">Delhi NCR Regional Hub</a></li>
              <li><a href="#network" className="text-[#B6BCC4] hover:text-[#EE6E00] transition-colors block">Hyderabad Central Branch</a></li>
              <li><a href="#network" className="text-[#B6BCC4] hover:text-[#EE6E00] transition-colors block">Bangalore Tech Hub</a></li>
              <li><a href="#network" className="text-[#B6BCC4] hover:text-[#EE6E00] transition-colors block">Surat Western Hub</a></li>
            </ul>
          </div>

          {/* Col 4: Channel & B2B Portal Actions */}
          <div>
            <h3 className="font-semibold text-[#ECEAE5] text-sm mb-4 tracking-wide">
              Dealer Operations & Legal
            </h3>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={COMPANY_INFO.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#EE6E00] hover:text-white transition-colors text-left"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Become a Dealer</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#ECEAE5] hover:text-[#EE6E00] transition-colors"
                >
                  <span>Dealer Portal Login</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#B6BCC4]" />
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2F6B48]/30 border border-[#2F6B48]/50 text-[#ECEAE5] font-semibold hover:bg-[#2F6B48]/50 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#2F6B48]" />
                  <span>WhatsApp Channel Desk</span>
                </a>
              </li>

              {/* Legal & Compliance Links */}
              <li className="pt-2 border-t border-white/10 space-y-2">
                <button
                  onClick={() => openLegalModal('Privacy Policy')}
                  className="text-[#B6BCC4] hover:text-[#ECEAE5] transition-colors block text-left text-[11px]"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => openLegalModal('Terms of Partnership')}
                  className="text-[#B6BCC4] hover:text-[#ECEAE5] transition-colors block text-left text-[11px]"
                >
                  Terms of Partnership
                </button>
                <button
                  onClick={() => openLegalModal('RMA & Warranty Policy')}
                  className="text-[#B6BCC4] hover:text-[#ECEAE5] transition-colors block text-left text-[11px]"
                >
                  RMA & Warranty Service SLA
                </button>
                <button
                  onClick={() => openLegalModal('Wholesale Distribution Covenant')}
                  className="text-[#B6BCC4] hover:text-[#ECEAE5] transition-colors block text-left text-[11px]"
                >
                  Pure Wholesale Covenant
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Utility Strip */}
      <div className="bg-[#21282F] border-t border-[#3A444E] py-4 text-[11px] text-[#B6BCC4] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#EE6E00]" />
            <span className="font-medium text-[#ECEAE5]">English (India)</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={scrollToTop}
              className="text-[#ECEAE5] hover:text-white font-medium flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2A323A] border border-[#3A444E] hover:border-[#EE6E00] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EE6E00]"
            >
              <ArrowUp className="w-3 h-3 text-[#EE6E00]" />
              <span>Back to top</span>
            </button>
            <span>© Realtech Vision 2026. All rights reserved.</span>
          </div>

        </div>
      </div>

      {/* Accessible Modal for Legal Placeholders */}
      {legalModalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141C22]/70 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#FFFFFF] text-[#1F262C] border border-[#E5E8EC] p-6 rounded-2xl shadow-xl">
            <button
              onClick={closeLegalModal}
              className="absolute top-4 right-4 p-2 text-[#5F666D] hover:text-[#1F262C] rounded-full"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-3">
              <ShieldAlert className="w-5 h-5 text-[#EE6E00]" />
              <h4 className="text-base font-bold text-[#1F262C]">{legalModalContent}</h4>
            </div>
            <p className="text-xs text-[#5F666D] leading-relaxed mb-4">
              {legalModalContent === 'Privacy Policy' &&
                'Realtech Vision is committed to protecting dealer confidential data, project designs, and price quotation histories. Partner registration data is stored in accordance with the Information Technology Act and Indian data privacy standards.'}
              {legalModalContent === 'Terms of Partnership' &&
                'Participation in Realtech Vision wholesale channel programs requires valid enterprise GSTIN, business credentials, and agreement to our non-retail pure distribution covenant.'}
              {legalModalContent === 'RMA & Warranty Policy' &&
                'All factory-sealed hardware distributed by Realtech Vision carries full manufacturer warranty. In-house warranty facilitation aims for 48-hour diagnostic turnaround on active serials.'}
              {legalModalContent === 'Wholesale Distribution Covenant' &&
                'Realtech Vision operates strictly on a B2B model and never competes with channel partners for retail or end-user contracts.'}
            </p>
            <div className="p-3 bg-[#F4F5F7] border border-[#E5E8EC] rounded-xl text-[11px] text-[#5F666D] mb-4">
              <span>Notice: Formal legal text is currently undergoing annual regulatory review. Contact sales@realtechvision.in for signed legal agreements.</span>
            </div>
            <div className="text-right">
              <button
                onClick={closeLegalModal}
                className="btn-es-primary text-xs py-1.5 px-4 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

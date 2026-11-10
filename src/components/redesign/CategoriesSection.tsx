import React from 'react';
import { ArrowRight, Layers, ExternalLink, Sparkles } from 'lucide-react';

export interface CategoryItem {
  id: string;
  name: string;
  tagline?: string;
  items: string;
  image: string;
  alt: string;
  brands: string[];
}

interface CategoriesSectionProps {
  onSelectCategory: (category: CategoryItem) => void;
  onOpenDealerModal: () => void;
}

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: 'surveillance-cameras',
    name: 'Network & CCTV Cameras',
    tagline: 'High-definition 4K optical sensors, ColorVu, night-vision & smart tracking',
    items: 'IP Camera, HD Dome, Bullet, WiFi Camera, 4G Solar Camera, Dash Cam, PTZ',
    image: '/images/categories/surveillance-v2.png',
    alt: 'Surveillance cameras arranged on studio stands',
    brands: ['Hikvision', 'Trueview', 'CP Plus', 'HiFocus', 'Prama', 'Imou', 'Qubo'],
  },
  {
    id: 'access-control-biometrics',
    name: 'Access Control & Biometrics',
    tagline: 'Enterprise facial recognition, optical fingerprinting & smart locks',
    items: 'Biometric Attendance, Magnetic Door Lock, Smart RFID Lock, Video Door Phone',
    image: '/images/categories/access-v2.png',
    alt: 'Access control and biometric terminals',
    brands: ['eSSL', 'Matrix', 'Maxxion', 'Yadon', 'Hikvision'],
  },
  {
    id: 'networking',
    name: 'PoE Switches & Networking',
    tagline: 'Gigabit smart managed switching, high-power PoE & fiber infrastructure',
    items: 'PoE Switch, Desktop Switch, Enterprise Routers, Media Converters, PoE Extenders',
    image: '/images/categories/networking-v2.png',
    alt: 'PoE switches and networking equipment',
    brands: ['TP-Link', 'D-Link', 'Fyber', 'Trionet', 'Lemorele'],
  },
  {
    id: 'recorders',
    name: 'Recorders & Video Analytics',
    tagline: 'Up to 128-channel 4K NVR decoding, AI motion search & multi-bay storage',
    items: 'NVR, WiFi NVR, HD DVR, Mobile NVR, Multi-Channel Video Servers',
    image: '/images/categories/recorders-v2.png',
    alt: 'Network video recorders and digital video recorders',
    brands: ['Hikvision', 'Trueview', 'CP Plus', 'Matrix', 'Prama'],
  },
  {
    id: 'storage',
    name: 'Surveillance Storage',
    tagline: '24/7 continuous write endurance, AllFrame video streaming drives',
    items: 'Surveillance Hard Disks (1TB-20TB), Industrial MicroSD Flash Cards',
    image: '/images/categories/storage-v2.png',
    alt: 'Surveillance grade storage hard drives',
    brands: ['Western Digital (Purple)', 'Seagate (SkyHawk)', 'Toshiba (S300)'],
  },
  {
    id: 'power',
    name: 'Regulated Power & Protection',
    tagline: 'Stabilized SMPS switching power supplies, CCTV battery backup & UPS',
    items: 'Multi-Channel SMPS, Online UPS, PC UPS, Power Managers, CCTV Adapters',
    image: '/images/categories/power-v2.png',
    alt: 'Power supply units and UPS backup systems',
    brands: ['Elco', 'Yadon', 'Beetel', 'Maxxion'],
  },
  {
    id: 'cables-infrastructure',
    name: 'Structured Cables & Racks',
    tagline: '100% pure copper certified CAT6 cabling, server racks & patch panels',
    items: 'CAT 6 Cable, 3+1 CCTV Cable, HDMI Cable, 4U-42U Server Racks, Connectors',
    image: '/images/categories/cables-v2.png',
    alt: 'Cables, racks and passive infrastructure equipment',
    brands: ['D-Link', 'Folla', 'Krystaa', 'Fyber'],
  },
  {
    id: 'business-display-devices',
    name: 'Commercial Displays & Telecom',
    tagline: '24/7 continuous CCTV monitoring screens, EPABX intercoms & audio',
    items: 'Security Monitors, Commercial LED TV, EPABX Systems, Currency Counters',
    image: '/images/categories/business-v2.png',
    alt: 'Commercial displays and telecom hardware',
    brands: ['TCL', 'Panasonic', 'Beetel', 'Matrix'],
  },
];

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategory,
  onOpenDealerModal,
}) => {
  return (
    <section id="categories" className="w-full bg-[#FAFAFC] py-20 lg:py-28 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[11px] font-bold text-[#F85C08] uppercase tracking-[0.2em] mb-3">
              <span>Wholesale Equipment Families</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Explore 8 Core <span className="text-gradient-brand">Product Categories</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3">
              Comprehensive hardware distribution with direct OEM allocation, full manufacturer warranty, and same-day dispatch.
            </p>
          </div>

          <button
            onClick={onOpenDealerModal}
            className="btn-secondary-white text-xs sm:text-[13px] self-start md:self-auto group"
          >
            <span>Download OEM Master Rate Card</span>
            <ExternalLink size={14} className="text-[#F85C08] transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* 4x2 Grid of Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="white-card overflow-hidden cursor-pointer flex flex-col justify-between group"
            >
              {/* Product Visual Top */}
              <div className="relative aspect-[4/3] w-full bg-[#F3F6FA] flex items-center justify-center p-6 overflow-hidden border-b border-slate-100">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/redesign/cat-surveillance.jpg';
                  }}
                />

                {/* Corner Arrow Pill */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 group-hover:text-[#F85C08] group-hover:border-orange-200 transition-colors">
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#F85C08] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                    {cat.tagline || cat.items}
                  </p>
                </div>

                {/* Sourced Brands */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {cat.brands.slice(0, 3).map((b, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-600"
                      >
                        {b}
                      </span>
                    ))}
                    {cat.brands.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold text-[#F85C08] bg-orange-50">
                        +{cat.brands.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default CategoriesSection;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BRAND_LOGOS } from '../../data/brandLogos';

export interface BrandItem {
  id: string;
  name: string;
  category: string;
  highlight?: string;
  categories: string[];
}

export const ALL_BRANDS: BrandItem[] = [
  { id: 'trionet', name: 'Trionet', category: 'Networking', highlight: 'Enterprise Switches & Routing', categories: ['Networking'] },
  { id: 'srb', name: 'SRB', category: 'Surveillance', highlight: 'Commercial CCTV & Accessories', categories: ['Accessories'] },
  { id: 'beetel', name: 'Beetel', category: 'Telecom & Power', highlight: 'Telephony & Business Systems', categories: ['Telephone'] },
  { id: 'matrix', name: 'Matrix', category: 'Security & Telecom', highlight: 'Unified Communication & Access', categories: ['EPABX'] },
  { id: 'hifocus', name: 'HiFocus', category: 'CCTV & NVR', highlight: 'High-Resolution IP Systems', categories: ['PoE Switch', 'Routers', 'NVR', 'IP Camera', 'Accessories', 'CAT 6 Cables', 'Power Supply', 'HD DVR', 'HD Camera', 'CCTV Cables', 'Memory Card'] },
  { id: 'panasonic', name: 'Panasonic', category: 'Surveillance Systems', highlight: 'Industrial Enterprise Grade', categories: ['Telephone'] },
  { id: 'tp-link', name: 'TP-Link', category: 'Networking & PoE', highlight: 'VIGI CCTV & Omada Switches', categories: ['Networking', 'PoE Switch', 'Desktop Switch', 'Routers'] },
  { id: 'maxxion', name: 'Maxxion', category: 'Power & Display', highlight: 'CCTV Power & Commercial Monitors', categories: ['Accessories', 'Electric Door Lock', 'PoE Extender', 'Networking', 'PoE Switch', 'Imported Accessories', 'Memory Card', 'HDMI Cable', 'Desktop Switch', 'Power Manager', '4G Camera', 'HD DVR', 'CAT 6 Cables', 'Wi-Fi Camera', 'LED TV', 'Android Box', 'HD Camera', 'Power Supply', 'CCTV Rack', 'UPS', 'Adaptors', 'CCTV Cables', 'Media Convertor'] },
  { id: 'trueview', name: 'Trueview', category: 'Surveillance', highlight: '4G Smart Cameras & IP Optics', categories: ['PoE Switch', 'HD DVR', 'HD Camera', 'Wi-Fi Camera', 'Wi-Fi NVR', 'Solar Panel', 'Routers', '4G Camera'] },
  { id: 'cp-plus', name: 'CP Plus', category: 'Security Solutions', highlight: 'National Surveillance Leader', categories: ['IP Camera', 'PoE Switch', 'HD Camera', 'NVR', 'CAT 6 Cables', 'HD DVR', 'Wi-Fi Camera', '4G Camera', 'Memory Card', 'CCTV Cables'] },
  { id: 'prama', name: 'Prama', category: 'Video Surveillance', highlight: 'Made for India Hardware', categories: ['NVR', 'IP Camera'] },
  { id: 'fyber', name: 'Fyber', category: 'Optical Networking', highlight: 'PoE Switches & Fiber Racks', categories: ['Desktop Switch', 'PoE Switch', 'Adaptors', 'Power Supply', 'Accessories', 'HDMI Cable', 'UPS', 'PoE Extender', 'Media Convertor', 'Networking'] },
  { id: 'hikvision', name: 'Hikvision', category: 'Security & AI', highlight: 'Global CCTV #1 & ColorVu', categories: ['Biometric', 'Video Door Phone', 'HD DVR', 'HD Camera', 'Monitors'] },
  { id: 'accessories', name: 'Accessories', category: 'Mounts & Passive', highlight: 'Cables, Connectors & Brackets', categories: ['CCTV Connectors & BNC', 'Mounting Brackets', 'Patch Cords & Tooling', 'Power Distribution Accessories'] },
  { id: 'qubo', name: 'Qubo', category: 'Smart Security', highlight: 'Hero Group Smart IoT', categories: ['Wi-Fi Camera', 'Dash Camera', 'Tyre Inflator', 'Smart Plug', 'Accessories', 'GPS Tracker', 'Video Door Phone', 'Smart Door Lock'] },
  { id: 'tcl', name: 'TCL', category: 'Commercial Displays', highlight: '24/7 Security CCTV Monitors', categories: ['LED TV'] },
  { id: 'toshiba', name: 'Toshiba', category: 'Surveillance Drives', highlight: 'S300 Surveillance HDDs', categories: ['Hard Disk (Surveillance HDD)'] },
  { id: 'wd', name: 'WD', category: 'Purple Storage', highlight: 'WD Purple 24/7 Video Hard Drives', categories: ['Hard Disk (Surveillance HDD)'] },
  { id: 'seagate', name: 'Seagate', category: 'SkyHawk Storage', highlight: 'SkyHawk Surveillance Drives', categories: ['Hard Disk (Surveillance HDD)'] },
  { id: 'krystaa', name: 'Krystaa', category: 'Infrastructure', highlight: 'Server Racks & Cabinets', categories: ['Hard Disk', 'Memory Card', 'Monitors'] },
  { id: 'essl', name: 'eSSL', category: 'Biometric Access', highlight: 'Fingerprint & Facial Terminals', categories: ['Biometric', 'UPS'] },
  { id: 'yadon', name: 'Yadon', category: 'Electronic Locks', highlight: 'Magnetic Locks & Exit Sensors', categories: ['UPS', 'PC UPS', 'PoE Switch'] },
  { id: 'd-link', name: 'D-Link', category: 'Structured Cabling', highlight: 'Certified Pure Copper CAT6', categories: ['PoE Switch', 'Routers', 'Networking', 'CCTV Cables', 'CAT 6 Cables'] },
  { id: 'elco', name: 'Elco', category: 'Power Units', highlight: 'Stabilized SMPS Power Supplies', categories: ['CCTV Rack', 'Accessories'] },
  { id: 'folla', name: 'Folla', category: 'Security Cables', highlight: '3+1 Coaxial & Armored Cables', categories: ['Cash Counting Machines'] },
  { id: 'lemorele', name: 'Lemorele', category: 'Transmission & Hubs', highlight: 'Industrial USB/HDMI Hubs', categories: ['Accessories'] },
  { id: 'imou', name: 'Imou', category: 'Smart Surveillance', highlight: 'Wireless Smart Security Cameras', categories: ['Memory Card'] },
];

export const BrandsSection: React.FC<{ onSelectBrand?: (brand: BrandItem) => void }> = ({ onSelectBrand }) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'Surveillance', 'Networking', 'Storage', 'Power', 'Access'];

  const filteredBrands = ALL_BRANDS.filter((b) => {
    return filter === 'all' || b.category.toLowerCase().includes(filter.toLowerCase());
  });

  const handleBrandClick = (brand: BrandItem) => {
    const brandSlug = encodeURIComponent(brand.name.toUpperCase().replace(/\s+/g, '-'));
    navigate(`/brand.html?brand=${brandSlug}`);
    if (onSelectBrand) {
      onSelectBrand(brand);
    }
  };

  return (
    <section id="brands" className="w-full bg-[#FAFAFC] py-20 lg:py-28 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[11px] font-bold text-[#F85C08] uppercase tracking-[0.2em] mb-3">
              <span>Authorised OEM Ecosystem</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              27 Authorised <span className="text-gradient-brand">Brand Alliances</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3">
              Factory-direct distribution with verified serial numbers, direct OEM warranty backing, and same-day warehouse dispatch.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-slate-200/60 border border-slate-200 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 27 Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredBrands.map((brand) => {
            const logo = BRAND_LOGOS[brand.id];
            return (
              <div
                key={brand.id}
                onClick={() => handleBrandClick(brand)}
                className="white-card h-40 p-4 flex flex-col items-center justify-center text-center cursor-pointer relative group"
              >
                {/* Corner Link Icon */}
                <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#F85C08] group-hover:border-orange-200 transition-colors">
                  <ArrowUpRight size={13} />
                </div>

                {/* Brand Logo Container */}
                <div className="h-16 w-full mb-2 flex items-center justify-center p-2">
                  {logo ? (
                    <img
                      src={logo}
                      alt={`${brand.name} logo`}
                      loading="lazy"
                      className="max-w-[85%] max-h-[85%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <span className="font-display font-extrabold text-slate-800 text-lg tracking-wider">
                      {brand.name}
                    </span>
                  )}
                </div>

                {/* Brand Info */}
                <div className="w-full">
                  <p className="font-display text-xs sm:text-[13px] font-bold text-slate-800 group-hover:text-[#F85C08] transition-colors truncate">
                    {brand.name}
                  </p>
                  <p className="text-[10px] text-slate-400 truncate mt-0.5 font-medium">
                    {brand.category}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Inquire Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div>
            <div className="font-display font-bold text-slate-900 text-sm">Need unlisted models or specialized tender pricing?</div>
            <div className="text-xs text-slate-500 mt-0.5">Our Ritchie Street central desk provides direct OEM back-office support.</div>
          </div>
          <a
            href="https://wa.me/919840001515?text=Hello%20Realtech%20Vision,%20I%20need%20a%20special%20quote%20for%20OEM%20hardware."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-orange text-xs py-2.5 px-5 whitespace-nowrap"
          >
            Inquire on WhatsApp Desk
          </a>
        </div>

      </div>
    </section>
  );
};
export default BrandsSection;

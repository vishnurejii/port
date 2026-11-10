import React from 'react';

interface Section3ProductsServicesProps {
  onOpenPartnerModal: () => void;
}

export const Section3ProductsServices: React.FC<Section3ProductsServicesProps> = ({
  onOpenPartnerModal,
}) => {
  // 4 Core Service Offerings (What customers can hire Realtech Vision for)
  const serviceOfferings = [
    {
      icon: '📦',
      title: 'B2B Wholesale Hardware Supply',
      badge: 'Procurement',
      desc: 'Direct factory inward supply of CCTV, NVR, PoE switches, storage, and access hardware with verified serial numbers and original warranties.',
      perks: ['Tier-1 OEM Rates', 'Carton Volume Discounts', '100% Genuine Barcodes'],
    },
    {
      icon: '📐',
      title: 'Pre-Sales Solution & Tender Architecture',
      badge: 'Engineering',
      desc: 'Expert assistance with Bill of Materials (BOM) sizing, optical lens calculations, storage bandwidth sizing, and tender OEM authorization letters.',
      perks: ['BOM Optimization', 'Tender Authorization', 'Bandwidth Retention Sizing'],
    },
    {
      icon: '⚡',
      title: 'Same-Day Regional Dispatch Logistics',
      badge: 'Fulfillment',
      desc: 'Orders placed before 3:00 PM are packed and dispatched the same day from our 5 regional warehouses for express delivery across 28 states.',
      perks: ['Same-Day Packing', 'Insured Cargo Transit', '5 Super-Hub Cities'],
    },
    {
      icon: '🛠️',
      title: 'In-House Technical RMA & Warranty Bench',
      badge: 'Support',
      desc: 'Dedicated bench engineers offering firmware updates, testing diagnostics, warranty replacements, and rapid RMA turnaround.',
      perks: ['Rapid Replacement RMA', 'Firmware Updates', 'Bench Testing Support'],
    },
  ];

  // 7 Organized Product Categories with full descriptions and specifications
  const categoryOfferings = [
    {
      name: 'IP Surveillance & CCTV Cameras',
      emoji: '📷',
      brands: 'Trueview, Hikvision, Prama',
      desc: 'Professional 4MP to 8MP Ultra HD IP dome and bullet cameras featuring 24/7 ColorVu night vision, Smart IR up to 100m, and AI human/vehicle classification.',
      specs: '4K Resolution • AI Motion Detection • F1.0 Super Aperture • IP67 Waterproof Housing',
    },
    {
      name: 'NVR / DVR Recording Hubs',
      emoji: '🖥️',
      brands: 'Hikvision, Prama',
      desc: 'High-throughput 8-channel to 64-channel 4K network video recorders with H.265+ ultra compression, dual HDMI outputs, and up to 40TB SATA storage capacity.',
      specs: '8/16/64 Channels • 4K HDMI Output • H.265+ Encoding • Multi-Bay SATA Interfaces',
    },
    {
      name: 'Industrial Networking & PoE',
      emoji: '🔌',
      brands: 'Fyber, Trionet',
      desc: 'Heavy-duty 8-port and 16-port PoE switches delivering up to 240W power budgets with Gigabit SFP fiber uplinks and intelligent bandwidth QoS.',
      specs: '120W–240W PoE Budget • Gigabit SFP Ports • 250m Extended Range Mode • Metal Chassis',
    },
    {
      name: 'Surveillance-Grade Storage',
      emoji: '💾',
      brands: 'Toshiba',
      desc: 'Enterprise 2TB to 4TB internal surveillance hard disk drives engineered for continuous 24×7 multi-stream write cycles without dropped video frames.',
      specs: '24×7 Surveillance Duty • 5400 RPM • 64MB Cache • Multi-Stream Write Optimization',
    },
    {
      name: 'Biometric Access Control',
      emoji: '🔐',
      brands: 'Maxxion',
      desc: 'Standalone RFID card and biometric fingerprint terminals with magnetic lock kits, exit buttons, cloud time-attendance logging, and TCP/IP interfaces.',
      specs: '1,000+ Fingerprints • TCP/IP Cloud Reporting • Electromagnetic Lock Kits • Access Logs',
    },
    {
      name: 'Regulated Power & SMPS',
      emoji: '🔋',
      brands: 'Yadon',
      desc: 'Heavy-duty 12V 5A regulated DC switched-mode power supplies featuring automatic overload, overvoltage, surge suppression, and short-circuit protection.',
      specs: '12V 5A DC Regulated • Short-Circuit Protection • Surge Suppression • Metal Casing',
    },
    {
      name: 'Infrastructure & Cables',
      emoji: '🔧',
      brands: 'Fyber, Qubo',
      desc: 'Pure solid bare copper 305m CAT6 LAN cable boxes certified for Gigabit transmission, alongside universal smart home Zigbee/Wi-Fi gateways.',
      specs: '100% Solid Bare Copper • 305m Easy-Pull Box • Verified Gigabit Speed • Zigbee Wireless Hubs',
    },
  ];

  return (
    <section id="products-services" className="py-20 sm:py-28 bg-[#F4F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#EE6E00] mb-3">
            <span>🛍️</span>
            <span>3. PRODUCTS & SERVICES • WHAT CUSTOMERS BUY & HIRE US FOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
            Complete Hardware Offerings & Distribution Services.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            From direct OEM tier-1 procurement to pre-sales tender engineering and same-day express logistics, explore what our partners rely on us for every day.
          </p>
        </div>

        {/* 1. What services customers can hire Realtech Vision for */}
        <div id="distribution-services" className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-gray-200 gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-[#EE6E00] uppercase tracking-wider block">
                Professional Value-Added Services
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-black">
                Services You Can Hire Realtech Vision For
              </h3>
            </div>
            <button
              onClick={onOpenPartnerModal}
              className="text-xs font-bold text-[#EE6E00] hover:text-[#D96300] underline self-start sm:self-auto cursor-pointer"
            >
              Apply for Trade Credit & Account →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceOfferings.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200/90 hover:border-[#EE6E00] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl p-2.5 bg-orange-50 rounded-2xl block border border-orange-100">
                      {srv.icon}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-black text-white">
                      {srv.badge}
                    </span>
                  </div>

                  <h4 className="font-bold text-base text-black group-hover:text-[#EE6E00] transition-colors mb-2">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 space-y-1">
                  {srv.perks.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-1.5 text-[11px] font-semibold text-black">
                      <span className="text-[#EE6E00]">✓</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Organized Categories with Descriptions & Specifications */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold text-[#EE6E00] uppercase tracking-wider block mb-1">
              Organized Offerings
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-black">
              Product Categories & Technical Specifications
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Structured hardware lines engineered for government, enterprise, and residential surveillance deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryOfferings.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:border-[#EE6E00] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl p-2 bg-orange-50 rounded-xl block border border-orange-100">
                      {cat.emoji}
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-black leading-tight">{cat.name}</h4>
                      <span className="text-[11px] font-mono text-[#EE6E00] font-semibold">{cat.brands}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    Key Specifications:
                  </span>
                  <p className="text-xs font-mono font-semibold text-black bg-gray-50 p-2.5 rounded-xl border border-gray-200/80">
                    {cat.specs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

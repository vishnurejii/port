import React from 'react';

export const PortfolioAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#EE6E00] mb-3">
            <span>🏢</span>
            <span>CORPORATE PROFILE & ETHOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
            Built on channel stewardship, technical discipline, and mutual dealer growth.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Headquartered in Chennai’s legendary Ritchie Street electronics market, Realtech Vision has spent 15+ years architecting India's most dependable distribution bridge between global surveillance giants and domestic system integrators.
          </p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1 */}
          <div className="bg-[#F4F5F7] border-2 border-gray-200 hover:border-[#EE6E00] p-8 rounded-3xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center text-2xl mb-6 shadow-md group-hover:bg-[#EE6E00] transition-colors">
              🛡️
            </div>
            <span className="text-[11px] font-mono font-bold text-[#EE6E00] uppercase tracking-wider block mb-2">
              Pillar I • Channel Integrity
            </span>
            <h3 className="text-xl font-bold text-black mb-3">
              Zero Direct End-User Retail
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We never bid against our partners, sell to retail end-consumers, or install systems. Your client relationships and project margins remain 100% sacred and secure with us.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#F4F5F7] border-2 border-gray-200 hover:border-[#EE6E00] p-8 rounded-3xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center text-2xl mb-6 shadow-md group-hover:bg-[#EE6E00] transition-colors">
              🔍
            </div>
            <span className="text-[11px] font-mono font-bold text-[#EE6E00] uppercase tracking-wider block mb-2">
              Pillar II • Authenticity
            </span>
            <h3 className="text-xl font-bold text-black mb-3">
              Serial-Verified OEM Stock
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Every camera, NVR, switch, and hard drive arrives through authorized manufacturer inward allocations. Verified barcode serials, official warranties, and full GST billing.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#F4F5F7] border-2 border-gray-200 hover:border-[#EE6E00] p-8 rounded-3xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center text-2xl mb-6 shadow-md group-hover:bg-[#EE6E00] transition-colors">
              🛠️
            </div>
            <span className="text-[11px] font-mono font-bold text-[#EE6E00] uppercase tracking-wider block mb-2">
              Pillar III • Engineering Lab
            </span>
            <h3 className="text-xl font-bold text-black mb-3">
              In-House Tech & RMA Bench
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our in-house technical team provides pre-sales tender solution architecture, firmware updates, configuration assistance, and rapid RMA replacement turnarounds.
            </p>
          </div>

        </div>

        {/* Operational Highlights Banner */}
        <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200 rounded-3xl p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <div className="text-sm font-bold text-black mb-1">Headquarters</div>
              <div className="text-xs text-gray-600">Ritchie Street, Mount Road, Chennai 600002</div>
            </div>
            <div>
              <div className="text-sm font-bold text-black mb-1">Fulfillment Speed</div>
              <div className="text-xs text-gray-600">Same-Day Packing • 24h Express Regional Transit</div>
            </div>
            <div>
              <div className="text-sm font-bold text-black mb-1">Partner Scale</div>
              <div className="text-xs text-gray-600">4,000+ Authorized Integrators across 28 States</div>
            </div>
            <div>
              <div className="text-sm font-bold text-black mb-1">Tender Support</div>
              <div className="text-xs text-gray-600">Dedicated OEM Authorization & Quantity Holds</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

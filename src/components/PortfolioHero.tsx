import React from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface PortfolioHeroProps {
  onExplorePortfolio: () => void;
  onExploreBrands: () => void;
  onOpenPartnerModal: () => void;
}

export const PortfolioHero: React.FC<PortfolioHeroProps> = ({
  onExplorePortfolio,
  onExploreBrands,
  onOpenPartnerModal,
}) => {
  return (
    <section id="hero" className="pt-28 sm:pt-36 pb-16 sm:pb-20 relative overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-[#F4F5F7]">
      {/* Background Ambience */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Top Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left Column: Portfolio Intro (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-orange-200 text-xs font-bold text-black shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EE6E00] animate-pulse"></span>
              <span>B2B Security & Technology Distribution Portfolio</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-[1.12]">
              Powering India's <br />
              <span className="text-[#EE6E00]">Security & Technology</span> <br />
              Distribution Network.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
              Realtech Vision connects world-class CCTV, networking, storage, and premises access OEMs with <strong>4,000+ system integrators</strong> across India. 15+ years of pure channel integrity and zero retail conflict.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onExplorePortfolio}
                className="px-6 sm:px-8 py-3.5 bg-[#EE6E00] hover:bg-[#D96300] text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>📂</span> View Product Works
              </button>

              <button
                onClick={onExploreBrands}
                className="px-6 sm:px-7 py-3.5 bg-black hover:bg-gray-800 text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-md hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>🏆</span> Brand Alliances
              </button>

              <button
                onClick={onOpenPartnerModal}
                className="px-5 py-3.5 bg-white hover:bg-gray-50 text-black font-bold text-sm sm:text-base rounded-xl border border-gray-300 transition-all hover:border-black"
              >
                Become a Partner →
              </button>
            </div>

            {/* Trust Footnote */}
            <div className="flex items-center gap-3 text-xs text-gray-500 pt-2 font-medium">
              <span className="flex items-center gap-1 text-black font-semibold">
                <span className="text-emerald-600">✓</span> 100% Pure Distribution
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-black font-semibold">
                <span className="text-emerald-600">✓</span> 5 Regional Warehouses
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-black font-semibold">
                <span className="text-emerald-600">✓</span> In-House Tech RMA
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative card */}
              <div className="bg-white border-2 border-gray-200/80 rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300">
                
                {/* Header tag */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                    <span className="text-xs font-mono font-bold text-gray-500 ml-2">
                      rtv-showcase.b2b
                    </span>
                  </div>
                  <span className="text-[11px] font-bold uppercase text-[#EE6E00] bg-orange-50 px-2.5 py-0.5 rounded-full">
                    Featured Visual
                  </span>
                </div>

                {/* Main Hero Placeholder image2 */}
                <div className="mb-4">
                  <ImagePlaceholder
                    label="image2"
                    aspectRatio="aspect-[4/3]"
                    className="w-full shadow-inner"
                  />
                </div>

                {/* Card caption */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-black">
                      Official Tier-1 Distribution Portfolio
                    </h3>
                    <span className="text-xs font-mono font-bold text-emerald-600">
                      LIVE
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Direct OEM allocation with verified serial numbers, GST invoices, and same-day express dispatch across India.
                  </p>
                </div>

              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-5 -left-5 bg-black text-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 border border-gray-800">
                <div className="w-10 h-10 rounded-xl bg-[#EE6E00] flex items-center justify-center text-xl font-bold">
                  🤝
                </div>
                <div>
                  <div className="text-lg font-extrabold text-white leading-tight">4,000+</div>
                  <div className="text-[11px] text-gray-300">Verified System Integrators</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 5-Column Portfolio Metric Strip */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 pt-6 border-t border-gray-200">
          <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-[#EE6E00]">15+</div>
            <div className="text-xs font-bold text-black mt-1">Years Excellence</div>
            <div className="text-[11px] text-gray-500 mt-0.5">Distribution mastery</div>
          </div>

          <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-black">4,000+</div>
            <div className="text-xs font-bold text-black mt-1">Dealer Network</div>
            <div className="text-[11px] text-gray-500 mt-0.5">PAN-India integrators</div>
          </div>

          <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-[#EE6E00]">10</div>
            <div className="text-xs font-bold text-black mt-1">OEM Brands</div>
            <div className="text-[11px] text-gray-500 mt-0.5">Direct alliances</div>
          </div>

          <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-black">5 Hubs</div>
            <div className="text-xs font-bold text-black mt-1">Regional Warehouses</div>
            <div className="text-[11px] text-gray-500 mt-0.5">Chennai to Delhi NCR</div>
          </div>

          <div className="col-span-2 md:col-span-1 p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">100%</div>
            <div className="text-xs font-bold text-black mt-1">Pure B2B Model</div>
            <div className="text-[11px] text-gray-500 mt-0.5">Zero retail competition</div>
          </div>
        </div>

      </div>
    </section>
  );
};

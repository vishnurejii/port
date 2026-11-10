import React from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface PortalHeroProps {
  onOpenLogin: () => void;
  onBrowseProducts: () => void;
}

export const PortalHero: React.FC<PortalHeroProps> = ({ onOpenLogin, onBrowseProducts }) => {
  return (
    <div id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-4">
      <div className="relative rounded-3xl bg-gradient-to-br from-[#1F2430] via-[#0F3460] to-[#141C22] p-6 sm:p-10 lg:p-12 text-white shadow-xl overflow-hidden border border-gray-700/40">
        
        {/* Ambient Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#EE6E00]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-[#EE6E00] animate-pulse"></span>
              <span>Official B2B Technology & Surveillance Distributor</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[46px] font-black tracking-tight leading-[1.15] mb-5 text-white">
              India's Trusted <br />
              <span className="text-[#EE6E00]">B2B Distribution</span> <br />
              Partner
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              10 premium brands. Exclusive dealer pricing. Real-time ordering. Your complete CCTV, surveillance, networking, and IT security supply partner.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center mb-10">
              <button
                onClick={onOpenLogin}
                className="px-6 sm:px-8 py-3.5 bg-[#EE6E00] hover:bg-[#D96300] text-black font-bold text-sm sm:text-base rounded-xl transition-all shadow-lg hover:shadow-[#EE6E00]/30 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>🔐</span> Dealer Login
              </button>
              <button
                onClick={onBrowseProducts}
                className="px-6 sm:px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base rounded-xl border border-white/20 transition-all flex items-center gap-2"
              >
                Browse Products ↓
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">4,000+</div>
                <div className="text-xs text-white/60 mt-0.5">Active Dealers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">10</div>
                <div className="text-xs text-white/60 mt-0.5">Premier Brands</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">15+</div>
                <div className="text-xs text-white/60 mt-0.5">Years Excellence</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">5</div>
                <div className="text-xs text-white/60 mt-0.5">Regional Hubs</div>
              </div>
            </div>

          </div>

          {/* Right Image Space Column - image2 */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-3 text-xs text-white/70">
                <span className="font-semibold text-[#EE6E00]">Featured Promotion</span>
                <span>Realconnect Banner</span>
              </div>
              <ImagePlaceholder
                label="image2"
                aspectRatio="aspect-[4/3]"
                className="bg-white/10 border-white/20 text-white"
              />
              <div className="mt-3 text-center text-xs text-white/60">
                Direct OEM Stock • GST Invoice • Fast Dispatch
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

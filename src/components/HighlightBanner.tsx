import React from 'react';
import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  Activity,
  Box
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HighlightBannerProps {
  onOpenPartnerModal: () => void;
}

export const HighlightBanner: React.FC<HighlightBannerProps> = ({ onOpenPartnerModal }) => {
  return (
    <section className="bg-[#0b192c] text-white relative overflow-hidden py-16 sm:py-20 border-b border-[#E5E8EC]">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00a4ef_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -right-20 top-0 w-96 h-96 bg-[#EE6E00]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Block (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Microsoft Spotlight Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-xs font-semibold tracking-wider uppercase border border-white/20">
              <Zap className="w-3.5 h-3.5 text-[#ffb900]" />
              <span>Platform Spotlight</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
              Realconnect™ Digital Platform: The Channel Operating System.
            </h2>

            <p className="text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed font-normal">
              Designed exclusively for our 4,000+ authorized dealers and system integrators. Check live inventory buffers across 5 regional super-hubs, generate instant GST-compliant quotes, and track RMA claim resolution 24/7.
            </p>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-4 pt-3 pb-2 max-w-lg">
              <div className="border-l-2 border-[#00a4ef] pl-3">
                <div className="text-2xl sm:text-3xl font-bold text-white">4,000+</div>
                <div className="text-xs text-white/70">Verified Dealers</div>
              </div>
              <div className="border-l-2 border-[#7fba00] pl-3">
                <div className="text-2xl sm:text-3xl font-bold text-white">5 Hubs</div>
                <div className="text-xs text-white/70">Regional Logistics</div>
              </div>
              <div className="border-l-2 border-[#ffb900] pl-3">
                <div className="text-2xl sm:text-3xl font-bold text-white">24-48h</div>
                <div className="text-xs text-white/70">Transit Dispatch</div>
              </div>
            </div>

            {/* Microsoft Standard Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={COMPANY_INFO.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-btn-primary text-[15px] group"
              >
                <span>Access Realconnect Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenPartnerModal}
                className="bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white font-semibold text-[15px] px-5 py-2.5 rounded-[2px] transition-colors inline-flex items-center gap-1.5"
              >
                <span>Register as Channel Partner</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Legal / Covenant Guarantee Note */}
            <p className="text-xs text-white/60 pt-2">
              * Strict 100% Pure Distribution Covenant: Access strictly verified for registered IT and CCTV channel partners. Zero retail consumers.
            </p>
          </div>

          {/* Right Digital Dashboard Mockup Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white text-[#1F262C] p-6 shadow-2xl border border-white/20 rounded-[2px]">
              
              {/* Header of Simulated Platform Window */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5E8EC]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#f25022]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffb900]" />
                  <div className="w-3 h-3 rounded-full bg-[#7fba00]" />
                  <span className="text-xs font-bold text-[#5F666D] ml-2 font-mono">Realconnect™ Cloud v4.2</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-[#e8f7ff] text-[#EE6E00] rounded uppercase">
                  Live Sync
                </span>
              </div>

              {/* Simulated Live Stock Hubs */}
              <div className="space-y-3 mb-5">
                <div className="text-xs font-semibold text-[#1F262C] uppercase tracking-wider flex items-center justify-between">
                  <span>Regional Warehouse Inventory</span>
                  <Activity className="w-3.5 h-3.5 text-[#7fba00] animate-pulse" />
                </div>

                <div className="bg-[#FFFFFF] p-2.5 rounded-[2px] border border-[#E5E8EC] text-xs flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-[#1F262C] block">Chennai Central Super-Hub</span>
                    <span className="text-[#5F666D] text-[11px]">Ritchie St • 22,000+ Units Ready</span>
                  </div>
                  <span className="text-[#7fba00] font-bold text-xs">High Stock</span>
                </div>

                <div className="bg-[#FFFFFF] p-2.5 rounded-[2px] border border-[#E5E8EC] text-xs flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-[#1F262C] block">Delhi NCR Regional Center</span>
                    <span className="text-[#5F666D] text-[11px]">North Corridor • 15,000+ Units Ready</span>
                  </div>
                  <span className="text-[#7fba00] font-bold text-xs">High Stock</span>
                </div>

                <div className="bg-[#FFFFFF] p-2.5 rounded-[2px] border border-[#E5E8EC] text-xs flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-[#1F262C] block">Hyderabad & Bangalore Hubs</span>
                    <span className="text-[#5F666D] text-[11px]">South Tech Hubs • Daily Re-supply</span>
                  </div>
                  <span className="text-[#EE6E00] font-bold text-xs">Optimal</span>
                </div>
              </div>

              {/* Quick Serial Verification Simulation */}
              <div className="p-3 bg-[#F0F1F3] border border-[#cbe2f8] rounded-[2px] text-xs mb-4">
                <div className="flex items-center gap-2 text-[#EE6E00] font-semibold mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Instant OEM Serial & Warranty Check</span>
                </div>
                <p className="text-[11px] text-[#444444]">
                  Verify genuine factory serials, manufacturing dates, and warranty status in under 2 seconds.
                </p>
              </div>

              {/* Bottom Quick Action */}
              <button
                onClick={onOpenPartnerModal}
                className="ms-btn-primary w-full justify-center text-xs py-2"
              >
                <span>Request B2B Portal Credentials</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HighlightBanner;

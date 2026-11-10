import React from 'react';
import {
  ExternalLink,
  ChevronDown,
  UserPlus
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenPartnerModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPartnerModal }) => {
  return (
    <section className="relative overflow-hidden bg-[#2A323A] text-[#ECEAE5] py-16 sm:py-20 border-b border-[#3A444E]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-30"
      >
        <source src="/rtvhome.mp4" type="video/mp4" />
        <source src="/rtvhome.MOV" type='video/mp4; codecs="hvc1"' />
        <source src="/rtvhome.MOV" type="video/quicktime" />
      </video>

      {/* Subtle warm mesh pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#EE6E00_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.05] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EE6E00]/08 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Centered Banner Text */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Scannable Verified Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#ECEAE5] text-xs font-medium border border-white/15 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#EE6E00] animate-pulse" />
              <span>India's Verified <span className="text-[#EE6E00] font-semibold">B2B Hardware Network</span></span>
            </div>

            {/* Single Concise H1 Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#ECEAE5] font-sans leading-[1.18] mb-5">
              Direct OEM Hardware Supply for <span className="text-[#EE6E00]">Security Dealers & Integrators</span>
            </h1>

            {/* Single Concise Supporting Sentence */}
            <p className="text-base sm:text-lg text-[#B6BCC4] leading-relaxed max-w-2xl mx-auto mb-9 font-normal">
              Connecting certified CCTV optics, NVR decoders, enterprise PoE switches, and surveillance storage with over 4,000 verified channel partners across India.
            </p>

            {/* Centered Primary and Secondary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-6">
              {/* Primary Action */}
              <a
                href={COMPANY_INFO.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-es-white text-sm sm:text-base py-3 px-7 shadow-sm group inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#EE6E00]"
              >
                <UserPlus className="w-4 h-4 text-[#141C22]" />
                <span>Become a Dealer</span>
              </a>

              {/* Secondary Action */}
              <a
                href={COMPANY_INFO.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#B6BCC4]/50 hover:border-[#ECEAE5] text-[#ECEAE5] hover:bg-white/10 text-sm sm:text-base font-medium py-3 px-6 transition-all inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#EE6E00]"
              >
                <span>Become a Dealer</span>
                <ExternalLink className="w-4 h-4 text-[#B6BCC4] transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Demoted Tertiary Link */}
            <div className="mb-12">
              <a
                href="#solutions"
                className="text-xs sm:text-sm font-medium text-[#B6BCC4] hover:text-[#EE6E00] transition-colors inline-flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#EE6E00] rounded"
              >
                <span>Explore Hardware Lines</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 6 Scannable Trust Stats (Icon, Stat, 2-4 word label) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 transition-all">
              <div className="text-xl mb-1" aria-hidden="true">🏢</div>
              <span className="text-sm font-bold text-[#EE6E00] block font-mono">100% Wholesale</span>
              <span className="text-[11px] text-[#B6BCC4] block mt-0.5">Pure B2B channel</span>
            </div>

            <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 transition-all">
              <div className="text-xl mb-1" aria-hidden="true">💰</div>
              <span className="text-sm font-bold text-[#EE6E00] block font-mono">Protected Margins</span>
              <span className="text-[11px] text-[#B6BCC4] block mt-0.5">Zero retail bypass</span>
            </div>

            <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 transition-all">
              <div className="text-xl mb-1" aria-hidden="true">🛠️</div>
              <span className="text-sm font-bold text-[#EE6E00] block font-mono">In-House RMA</span>
              <span className="text-[11px] text-[#B6BCC4] block mt-0.5">Rapid warranty service</span>
            </div>

            <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 transition-all">
              <div className="text-xl mb-1" aria-hidden="true">🚀</div>
              <span className="text-sm font-bold text-[#EE6E00] block font-mono">24–48h Dispatch</span>
              <span className="text-[11px] text-[#B6BCC4] block mt-0.5">5 regional hubs</span>
            </div>

            <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 transition-all">
              <div className="text-xl mb-1" aria-hidden="true">🏆</div>
              <span className="text-sm font-bold text-[#EE6E00] block font-mono">15+ Years</span>
              <span className="text-[11px] text-[#B6BCC4] block mt-0.5">Established 2008</span>
            </div>

            <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 transition-all">
              <div className="text-xl mb-1" aria-hidden="true">🤝</div>
              <span className="text-sm font-bold text-[#EE6E00] block font-mono">4,000+ Dealers</span>
              <span className="text-[11px] text-[#B6BCC4] block mt-0.5">Active across India</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

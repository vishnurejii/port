import React from 'react';
import heroBg from '../assets/hero-warehouse.jpg';

interface Section1HomeProps {
  onExploreWork?: () => void;
  onExploreServices?: () => void;
  onContactUs?: () => void;
}

export const Section1Home: React.FC<Section1HomeProps> = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-screen flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Much brighter overlay: gentle gradient focused only behind the text for clarity */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

      {/* Soft warm ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#EE6E00]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        
        {/* Main Content Layout with Bigger Changa One font style */}
        <div className="max-w-4xl lg:max-w-5xl space-y-6 sm:space-y-8 font-changa">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/30 text-xs sm:text-sm text-white shadow-lg tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EE6E00] animate-pulse"></span>
            <span>1. Home • Official B2B Distribution Portfolio</span>
          </div>

          {/* Big Bold Headline in Changa One */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] text-white tracking-normal leading-[1.08] drop-shadow-xl">
            Powering India's <br />
            <span className="text-[#EE6E00]">Security & Technology</span> <br />
            Distribution Network.
          </h1>

          {/* Bigger Body Text in Changa One */}
          <p className="text-base sm:text-xl lg:text-2xl text-white/95 leading-relaxed max-w-3xl drop-shadow-md tracking-wide font-normal">
            <strong>Realtech Vision</strong> connects world-class CCTV surveillance, enterprise networking, biometric access control, and specialized storage OEMs with over <strong>4,000+ system integrators, dealers, and corporate installers</strong> across India. 15+ years of channel integrity, transparent pricing, and zero direct retail conflict.
          </p>

        </div>

      </div>
    </section>
  );
};

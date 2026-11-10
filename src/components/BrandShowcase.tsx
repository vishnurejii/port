import React, { useState, useEffect } from 'react';
import { ArrowRight, LayoutGrid, Orbit, UserPlus } from 'lucide-react';
import { PORTAL_BRANDS } from '../data/companyData';
import { BrandSpiralOrbit } from './BrandSpiralOrbit';

interface BrandShowcaseProps {
  onOpenPartnerModal: () => void;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = ({ onOpenPartnerModal }) => {
  const [viewMode, setViewMode] = useState<'spiral' | 'grid'>('spiral');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Detect system reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  const showSpiral = viewMode === 'spiral' && !prefersReducedMotion;

  return (
    <section
      id="brands"
      className="py-16 sm:py-20 relative transition-colors duration-300 bg-[#FFFFFF]"
    >
      {/* Subtle warm low-glare grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(31, 38, 44, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(31, 38, 44, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Title */}
        <div className={`text-center max-w-3xl mx-auto mb-10 ${showSpiral ? 'lg:hidden' : 'block'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F262C] font-sans tracking-tight">
            Premier Technology <span className="text-[#EE6E00]">Brand Alliances</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5F666D] mt-2.5 leading-relaxed max-w-2xl mx-auto">
            Authorized distribution portfolio of <span className="text-[#B53E00] font-semibold">{PORTAL_BRANDS.length} leading brands</span> across CCTV surveillance, enterprise networking, storage, and premises access.
          </p>

          {/* Desktop Layout Switcher (Spiral Orbit vs Responsive Grid) */}
          {!prefersReducedMotion && (
            <div className="hidden lg:inline-flex items-center gap-1 mt-6 p-1 bg-[#FFFFFF] border border-[#E5E8EC] rounded-full shadow-sm">
              <button
                type="button"
                onClick={() => setViewMode('spiral')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-[#EE6E00] ${
                  viewMode === 'spiral'
                    ? 'bg-[#F0F1F3] text-[#B53E00] border border-[#EE6E00]/30 shadow-sm'
                    : 'text-[#5F666D] hover:text-[#1F262C]'
                }`}
                aria-pressed={viewMode === 'spiral'}
              >
                <Orbit className="w-3.5 h-3.5" />
                <span>Spiral Orbit</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-[#EE6E00] ${
                  viewMode === 'grid'
                    ? 'bg-[#F0F1F3] text-[#B53E00] border border-[#EE6E00]/30 shadow-sm'
                    : 'text-[#5F666D] hover:text-[#1F262C]'
                }`}
                aria-pressed={viewMode === 'grid'}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Standard Grid</span>
              </button>
            </div>
          )}
        </div>

        {/* 1. Spiral/Orbital View */}
        {showSpiral ? (
          <div className="hidden lg:block">
            <BrandSpiralOrbit
              onOpenPartnerModal={onOpenPartnerModal}
              viewMode={viewMode}
              onToggleView={setViewMode}
            />
          </div>
        ) : null}

        {/* 2. Responsive Grid View */}
        <div className={showSpiral ? 'lg:hidden' : 'block'}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5">
            {PORTAL_BRANDS.map((b) => (
              <div
                key={b.name}
                className="p-4 bg-[#FFFFFF] hover:bg-[#FFFFFF] border border-[#E5E8EC] hover:border-[#EE6E00]/40 rounded-xl transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-es-card"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xl" aria-hidden="true">{b.emoji}</span>
                  <span className="text-[10px] text-[#2F6B48] font-bold uppercase tracking-wider bg-[#E3EEE6] px-2 py-0.5 rounded-full border border-[#2F6B48]/20">
                    Authorized
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#1F262C] group-hover:text-[#B53E00] transition-colors tracking-tight">
                    {b.name}
                  </h3>
                  <p className="text-[11px] text-[#5F666D] mt-0.5 line-clamp-1">
                    {b.sub}
                  </p>
                </div>

                <div className="pt-2.5 mt-2.5 border-t border-[#E5E8EC] text-right">
                  <button
                    onClick={onOpenPartnerModal}
                    className="text-[11px] font-semibold text-[#B53E00] hover:text-[#E04F00] hover:underline focus-visible:ring-2 focus-visible:ring-[#EE6E00] rounded"
                  >
                    Inquire About Brand →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Bottom Primary Action */}
        <div className="mt-10 text-center">
          <a
            href="https://realtechvision.in/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-es-primary text-xs sm:text-sm py-2.5 px-7 shadow-sm inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#EE6E00]"
          >
            <UserPlus className="w-4 h-4" />
            <span>Become a Dealer</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default BrandShowcase;

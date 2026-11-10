import React from 'react';
import { Reveal } from './Reveal';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#f5f5f5] py-20 lg:py-24 border-b border-[#e8e8e8]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Editorial & Strategic Narrative */}
          <Reveal variant="left" className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center space-x-2.5 mb-4">
              <span className="w-6 h-[2px] bg-[#F85C08]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#666666]">
                Who We Are
              </span>
            </div>

            <h2 className="font-manrope text-3xl lg:text-[36px] font-semibold text-[#262626] mb-6 leading-[1.2] tracking-[-0.02em]">
              15+ Years of B2B Technology Distribution
            </h2>

            <p className="text-[15px] sm:text-base text-[#666666] mb-10 leading-[1.8]">
              Operating out of Chennai's premier electronic distribution nerve center on Ritchie Street, Realtech Vision provides verified system integrators and electrical contractors with uncompromised direct OEM access. We protect dealer margins through structured price tiers, zero retail cannibalization, and genuine manufacturer warranties.
            </p>

            {/* Mission and Vision (Clean Balanced Structural Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#e8e8e8]">
              <div>
                <div className="flex items-center space-x-2 mb-2.5">
                  <span className="w-8 h-8 rounded-lg bg-[#F85C08]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#F85C08] text-[17px]">verified</span>
                  </span>
                  <h3 className="font-manrope text-[15px] font-semibold text-[#262626] tracking-[-0.01em]">
                    Our Mission
                  </h3>
                </div>
                <p className="text-[13px] text-[#666666] leading-[1.75]">
                  To empower trade contractors across the subcontinent with immediate warehouse dispatch, factory-guaranteed authenticity, and dedicated technical backline support.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2.5">
                  <span className="w-8 h-8 rounded-lg bg-[#F85C08]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#F85C08] text-[17px]">visibility</span>
                  </span>
                  <h3 className="font-manrope text-[15px] font-semibold text-[#262626] tracking-[-0.01em]">
                    Our Vision
                  </h3>
                </div>
                <p className="text-[13px] text-[#666666] leading-[1.75]">
                  To set the gold standard in institutional hardware supply channels, anchoring long-term commercial relationships through pricing transparency and logistics speed.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Warehouse Image (3:2 Ratio) */}
          <Reveal variant="right" delay={120} className="lg:col-span-6">
            <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden border border-[#e8e8e8] bg-[#ffffff] shadow-md group">
              <picture>
                <source srcSet="/rtv_portfolio_coverimg1.png" type="image/png" />
                <img
                  alt="Realtech Vision Central Distribution Depot Ritchie Street HQ"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  src="/rtv_portfolio_coverimg1.png"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/redesign/about-warehouse.jpg";
                  }}
                />
              </picture>
              {/* Location chip */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/85 backdrop-blur-md border border-[#e8e8e8] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F85C08] animate-pulse-dot" />
                <span className="text-[11px] font-semibold text-[#262626] tracking-wide">
                  Ritchie Street HQ, Chennai
                </span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

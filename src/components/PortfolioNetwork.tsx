import React from 'react';
import { BRANCHES } from '../data/portalData';

export const PortfolioNetwork: React.FC = () => {
  return (
    <section id="network" className="py-20 sm:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#EE6E00] mb-3">
            <span>📍</span>
            <span>LOGISTICS INFRASTRUCTURE & HUBS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
            5 Strategic Regional <span className="text-[#EE6E00]">Distribution Hubs</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Coordinated from our central Chennai headquarters, our warehouse network enables same-day packing and express 24–48 hour transit to all 28 Indian states.
          </p>
        </div>

        {/* 5 Hub Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
          {BRANCHES.map((b) => (
            <div
              key={b.city}
              className="bg-[#F4F5F7] border-2 border-gray-200/90 hover:border-[#EE6E00] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-black text-white">
                    {b.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600">
                    Active Hub
                  </span>
                </div>

                <h3 className="font-bold text-base text-black group-hover:text-[#EE6E00] transition-colors mb-2">
                  {b.city}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {b.address}
                </p>
              </div>

              {/* Contact Link */}
              <div className="pt-4 border-t border-gray-200/80">
                <span className="text-[10px] text-gray-400 block font-mono">Hub Dispatch Line:</span>
                <a
                  href={`tel:${b.phone.replace(/[^0-9]/g, '')}`}
                  className="text-xs font-bold text-[#EE6E00] font-mono hover:underline block mt-0.5"
                >
                  {b.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dispatch Metrics Banner */}
        <div className="bg-black text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#EE6E00]">Same-Day</div>
              <div className="text-sm font-bold text-white mt-1">Order Dispatch Guarantee</div>
              <div className="text-xs text-gray-400 mt-1">Orders confirmed before 3:00 PM packed and dispatched same day.</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">100% Insured</div>
              <div className="text-sm font-bold text-white mt-1">Transit & Cargo Protection</div>
              <div className="text-xs text-gray-400 mt-1">Zero transit risk for high-value optical sensors and recording servers.</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#EE6E00]">28 States</div>
              <div className="text-sm font-bold text-white mt-1">Express Regional Reach</div>
              <div className="text-xs text-gray-400 mt-1">Partnered with premier express logistics providers across all pin codes.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

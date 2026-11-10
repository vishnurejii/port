import React from 'react';
import { BRANCHES } from '../data/portalData';

export const Section2About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill & Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#EE6E00] mb-3">
            <span>🏢</span>
            <span>2. ABOUT THE COMPANY • CORPORATE PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
            15+ Years of Supply Chain Leadership & Channel Stewardship.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Realtech Vision was founded with an unyielding commitment: to provide India’s technology and security integrators with direct OEM access, authentic product pipelines, and absolute channel margin protection.
          </p>
        </div>

        {/* 4 Essential Stats Cards moved from Hero Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-5 sm:p-6 bg-[#F4F5F7] border-2 border-gray-200/90 rounded-2xl shadow-sm hover:border-[#EE6E00] transition-colors">
            <div className="text-3xl sm:text-4xl font-black text-[#EE6E00] font-mono">15+</div>
            <div className="text-sm font-bold text-black mt-1.5">Years Active</div>
            <div className="text-xs text-gray-500 mt-0.5">Continuous distribution excellence</div>
          </div>

          <div className="p-5 sm:p-6 bg-[#F4F5F7] border-2 border-gray-200/90 rounded-2xl shadow-sm hover:border-[#EE6E00] transition-colors">
            <div className="text-3xl sm:text-4xl font-black text-black font-mono">4,000+</div>
            <div className="text-sm font-bold text-black mt-1.5">Authorized Dealers</div>
            <div className="text-xs text-gray-500 mt-0.5">Trusted across 28 Indian states</div>
          </div>

          <div className="p-5 sm:p-6 bg-[#F4F5F7] border-2 border-gray-200/90 rounded-2xl shadow-sm hover:border-[#EE6E00] transition-colors">
            <div className="text-3xl sm:text-4xl font-black text-[#EE6E00] font-mono">10 OEM</div>
            <div className="text-sm font-bold text-black mt-1.5">Brand Alliances</div>
            <div className="text-xs text-gray-500 mt-0.5">Direct Tier-1 distribution</div>
          </div>

          <div className="p-5 sm:p-6 bg-[#F4F5F7] border-2 border-gray-200/90 rounded-2xl shadow-sm hover:border-[#EE6E00] transition-colors">
            <div className="text-3xl sm:text-4xl font-black text-black font-mono">5 Hubs</div>
            <div className="text-sm font-bold text-black mt-1.5">Regional Warehouses</div>
            <div className="text-xs text-gray-500 mt-0.5">Same-day order dispatch</div>
          </div>
        </div>

        {/* 1. Company History and Background */}
        <div className="bg-[#F4F5F7] border-2 border-gray-200 rounded-3xl p-6 sm:p-10 mb-14 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-[#EE6E00] uppercase tracking-wider block">
                Heritage & Legacy
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-black">
                Company History & Background
              </h3>
            </div>
            <span className="text-xs font-mono font-bold bg-white px-3 py-1.5 rounded-full border border-gray-300 text-black">
              Established 2009 • Ritchie Street, Chennai
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              In 2009, <strong>Realtech Vision</strong> commenced operations in Ritchie Street, Mount Road, Chennai — recognized across Asia as one of India's most bustling electronics commercial epicenters. Initially addressing the regional demand for quality coaxial CCTV cabling and analog surveillance hardware, we quickly gained a reputation for zero-compromise authenticity and reliable stock holds.
            </p>
            <p>
              Over the past 15+ years, as security technology transitioned from analog composite video to 4K Ultra HD IP cameras, AI behavioral analytics, and high-density enterprise PoE networks, Realtech Vision scaled proportionally. Today, we are proud to serve over <strong>4,000+ active system integrators, government contractors, and enterprise dealers</strong> across all 28 states and union territories.
            </p>
          </div>
        </div>

        {/* 2. Mission, Vision, and Values */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-[#EE6E00] uppercase tracking-wider block mb-1">
              Guiding Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-black">
              Mission, Vision & Core Values
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-orange-50/60 to-white border-2 border-orange-200/90 rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#EE6E00] text-white flex items-center justify-center text-2xl mb-4 font-bold shadow-sm">
                🎯
              </div>
              <h4 className="text-lg font-bold text-black mb-2">Our Mission</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                To empower Indian electronics security integrators and IT contractors with direct OEM factory pricing, verified inventory allocations, expedited technical RMA turnarounds, and unwavering channel integrity.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center text-2xl mb-4 font-bold shadow-sm">
                🔭
              </div>
              <h4 className="text-lg font-bold text-black mb-2">Our Vision</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                To stand as India's most dependable, technologically sophisticated pure B2B electronics distribution powerhouse — setting the national benchmark for authentic sourcing, transparent pricing, and partner growth.
              </p>
            </div>
          </div>

          {/* 4 Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#F4F5F7] border border-gray-200 rounded-2xl p-5 hover:border-[#EE6E00] transition-colors">
              <div className="text-2xl mb-2">🛡️</div>
              <h5 className="font-bold text-sm text-black mb-1">Channel Stewardship</h5>
              <p className="text-xs text-gray-600 leading-relaxed">
                100% pure B2B policy. We never compete with our dealers or sell retail directly to end consumers.
              </p>
            </div>

            <div className="bg-[#F4F5F7] border border-gray-200 rounded-2xl p-5 hover:border-[#EE6E00] transition-colors">
              <div className="text-2xl mb-2">🔍</div>
              <h5 className="font-bold text-sm text-black mb-1">Authenticity & Serials</h5>
              <p className="text-xs text-gray-600 leading-relaxed">
                Direct factory allocations with verifiable barcodes, authorized manufacturer warranties, and GST billing.
              </p>
            </div>

            <div className="bg-[#F4F5F7] border border-gray-200 rounded-2xl p-5 hover:border-[#EE6E00] transition-colors">
              <div className="text-2xl mb-2">🛠️</div>
              <h5 className="font-bold text-sm text-black mb-1">Technical Excellence</h5>
              <p className="text-xs text-gray-600 leading-relaxed">
                In-house engineering lab for pre-sales tender BOM design, firmware flashing, and fast replacement RMA.
              </p>
            </div>

            <div className="bg-[#F4F5F7] border border-gray-200 rounded-2xl p-5 hover:border-[#EE6E00] transition-colors">
              <div className="text-2xl mb-2">⚡</div>
              <h5 className="font-bold text-sm text-black mb-1">Speed & Scale</h5>
              <p className="text-xs text-gray-600 leading-relaxed">
                Same-day dispatch from 5 regional fulfillment hubs delivering 24–48 hour express regional transit.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Headquarters and Areas of Operation */}
        <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 sm:p-10 mb-14 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold text-[#EE6E00] uppercase tracking-wider block mb-1">
              Physical Presence & Reach
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-black">
              Headquarters & Areas of Operation
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
              Operating from our Central Headquarters on Ritchie Street, Chennai, alongside 4 fully stocked regional branches serving all 28 states and union territories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {BRANCHES.map((b) => (
              <div
                key={b.city}
                className="bg-[#F4F5F7] border border-gray-200 rounded-2xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-black text-white">
                      {b.tag}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-emerald-600">Active</span>
                  </div>
                  <h4 className="font-bold text-sm text-black">{b.city}</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">{b.address}</p>
                </div>
                <div className="pt-3 mt-3 border-t border-gray-200">
                  <span className="text-[11px] font-mono font-bold text-[#EE6E00] block">{b.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Distribution and Technical R&D Capabilities */}
        <div className="bg-black text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-800">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-[#EE6E00] uppercase tracking-wider block mb-1">
              Infrastructure & Capacity
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Warehousing, RMA Lab & Distribution Capabilities
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
              Designed for enterprise volume, mission-critical delivery SLAs, and end-to-end technical support for installers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-2xl font-black text-[#EE6E00] font-mono">01. Stocking Scale</div>
              <h4 className="text-base font-bold text-white">5 High-Density Regional Hubs</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Strategic warehousing in Chennai, Delhi, Bangalore, Hyderabad, and Surat holding ready inventory for rapid order turnaround.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-2xl font-black text-white font-mono">02. Engineering Lab</div>
              <h4 className="text-base font-bold text-white">In-House Technical & RMA Bench</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Equipped with testing benches, firmware flashers, and specialized diagnostics to guarantee swift warranty replacements.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-2xl font-black text-[#EE6E00] font-mono">03. Project Tender Support</div>
              <h4 className="text-base font-bold text-white">Tender Authorization & BOM Sizing</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Assisting partners with official OEM authorization letters, optical distance calculations, and project quantity holds.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

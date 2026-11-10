import React from 'react';
import { BRANDS } from '../data/portalData';
import { ImagePlaceholder } from './ImagePlaceholder';

export const Section4ClientsCredentials: React.FC = () => {
  // Certifications and industry memberships
  const certifications = [
    {
      code: 'ISO 9001:2015',
      title: 'Quality Management Certified',
      desc: 'Certified quality processes for warehouse storage, RMA diagnostics, and order dispatch.',
      badge: 'Certified',
    },
    {
      code: 'BIS Registered',
      title: 'Bureau of Indian Standards',
      desc: 'All distributed cameras, SMPS, and recorders comply with compulsory BIS safety norms.',
      badge: 'Standard',
    },
    {
      code: 'CE • FCC • RoHS',
      title: 'Global Compliance Standards',
      desc: 'Hardware adheres to international electromagnetic compatibility and environmental criteria.',
      badge: 'Compliant',
    },
    {
      code: 'AIESA Member',
      title: 'Electronic Security Association',
      desc: 'Active trade partner and compliance member of All India Electronic Security Association.',
      badge: 'Member',
    },
  ];

  // Quality standards & compliance
  const qualityStandards = [
    {
      title: '100% Barcode Serial Tracking',
      desc: 'Every camera, NVR, hard drive, and switch is tracked via unique manufacturer serial barcode upon warehouse entry and dispatch.',
    },
    {
      title: 'E-Way Bill & GST Compliant Billing',
      desc: 'Standard computerized tax invoices with seamless Input Tax Credit (ITC) eligibility for all registered trade partners.',
    },
    {
      title: 'Tamper-Evident Holographic OEM Seals',
      desc: 'Hardware is shipped with original manufacturer holographic warranty seals intact, guaranteeing zero open-box or refurbished stock.',
    },
    {
      title: 'Anti-Counterfeit Protection',
      desc: 'Direct manufacturer factory inward channel eliminating unauthorized grey-market or counterfeit products from the supply chain.',
    },
  ];

  return (
    <section id="clients-credentials" className="py-20 sm:py-28 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#EE6E00] mb-3">
            <span>🏆</span>
            <span>4. CLIENTS, PARTNERS & CREDENTIALS • TRUST & COMPLIANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
            Authorized OEM Alliances, Credentials & Dealer Trust.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Our reputation is built on 15+ years of verified compliance, direct brand partnerships, industry awards, and the trust of 4,000+ system integrators nationwide.
          </p>
        </div>

        {/* 1. Authorized Client and Partner Logos (image7 - image16) */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-gray-200 gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-[#EE6E00] uppercase tracking-wider block">
                Direct OEM Alliances
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-black">
                Authorized Brand Partner Logos (image7 – image16)
              </h3>
            </div>
            <span className="text-xs font-mono font-bold bg-[#F4F5F7] px-3 py-1.5 rounded-full border border-gray-300 text-black">
              10 Global OEM Distribution Agreements
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="bg-[#F4F5F7] border-2 border-gray-200 hover:border-[#EE6E00] rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Placeholder with label image7 - image16 */}
                  <div className="mb-4">
                    <ImagePlaceholder
                      label={brand.imageLabel}
                      aspectRatio="aspect-[16/9]"
                      className="w-full bg-white group-hover:border-[#EE6E00]/40 transition-colors"
                      icon={brand.emoji}
                    />
                  </div>

                  <div className="space-y-1 mb-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-black group-hover:text-[#EE6E00] transition-colors">
                        {brand.name}
                      </h4>
                      <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Tier-1
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-snug">
                      {brand.sub}
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-[11px] font-bold text-gray-400 group-hover:text-[#EE6E00] transition-colors">
                  Authorized Distribution Partner ✓
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Certifications and Industry Memberships */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold text-[#EE6E00] uppercase tracking-wider block mb-1">
              Verified Compliance
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-black">
              Certifications & Industry Memberships
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Fully accredited distribution infrastructure complying with Indian statutory norms and international electronics quality benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((c, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200/90 rounded-3xl p-6 shadow-sm hover:border-[#EE6E00] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-black font-mono text-[#EE6E00] bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200">
                      {c.code}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-black text-white">
                      {c.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-black mb-1">{c.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                  <span>✓</span>
                  <span>Officially Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Quality Standards and Relevant Compliance Credentials */}
        <div className="bg-black text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-800">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold text-[#EE6E00] uppercase tracking-wider block mb-1">
              Compliance Protocol
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Quality Standards & Channel Verification Protocol
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
              Every shipment leaving our warehouses undergoes strict multi-tier verification to safeguard hardware authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((qs, idx) => (
              <div key={idx} className="p-5 bg-gray-900 border border-gray-800 rounded-2xl space-y-2">
                <div className="text-xs font-mono font-bold text-[#EE6E00]">Standard 0{idx + 1}</div>
                <h4 className="text-sm font-bold text-white">{qs.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{qs.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

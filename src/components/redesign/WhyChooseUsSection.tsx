import React from 'react';
import { ShieldCheck, Truck, Percent, CheckCircle2, Award, Zap } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      step: '01',
      tag: 'Channel Integrity',
      title: 'Protected Trade Margins',
      desc: 'We operate on a 100% strict pure-B2B supply model. We never bid on end-user commercial tenders, meaning your project margin and client relationships are 100% protected.',
      icon: <Percent className="w-6 h-6 text-[#F85C08]" />,
      stats: '0% Retail Conflict',
      features: ['No Direct Installation Bids', 'Exclusive Trade Pricing Tiers', 'Protected Customer Retention'],
    },
    {
      step: '02',
      tag: 'OEM Authenticity',
      title: 'Factory-Sealed Genuine Stock',
      desc: 'Every camera, switch, storage drive, and biometric terminal carries official OEM serial barcodes and tamper-evident seals with direct manufacturer warranty backing.',
      icon: <ShieldCheck className="w-6 h-6 text-[#F85C08]" />,
      stats: '100% Verified Serials',
      features: ['BIS Certified Hardware', 'Direct Factory Procurement', 'Complete Tamper-Proof Seals'],
    },
    {
      step: '03',
      tag: 'Speed & SLA',
      title: 'Same-Day Regional Dispatch',
      desc: 'Our 5 regional mega-depots and central Ritchie Street warehouse maintain a 98.4% ready inventory fill rate, shipping confirmed trade orders on the exact same business day.',
      icon: <Truck className="w-6 h-6 text-[#F85C08]" />,
      stats: '17:00 IST Cut-off',
      features: ['Express Highway Surface Cargo', 'Live Transit Barcode Tracking', 'Overnight Delivery across South India'],
    },
  ];

  return (
    <section id="why-us" className="w-full bg-white py-20 lg:py-28 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[11px] font-bold text-[#F85C08] uppercase tracking-[0.2em] mb-3">
            <span>Enterprise Distribution Standards</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-4">
            Why Dealers &amp; Integrators <br />
            <span className="text-gradient-brand">Choose Realtech Vision</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Over 15 years as India’s dependable supply backbone for high-stakes electronic security, banking surveillance, and enterprise network rollouts.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="white-card p-8 sm:p-10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100">
                    Step {item.step}
                  </span>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F85C08] block mb-2">
                  {item.tag}
                </span>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="space-y-2.5 mb-6">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-xs sm:text-[13px] text-slate-700 font-semibold">
                      <CheckCircle2 size={16} className="text-[#F85C08] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-500 font-medium">Channel Promise</span>
                  <span className="text-[#F85C08]">{item.stats}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default WhyChooseUsSection;

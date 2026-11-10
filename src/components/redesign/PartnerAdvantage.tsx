import React from 'react';
import { ShieldCheck, Layers, Wrench, Warehouse } from 'lucide-react';

export const PartnerAdvantage: React.FC = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#F85C08]" />,
      title: 'Pure B2B Channel Protection',
      body: 'Zero direct retail stores, zero consumer checkout, and zero project bidding against our own registered integrators.',
      stat: '100%',
      statLabel: 'Protected Margins',
    },
    {
      icon: <Layers className="w-6 h-6 text-[#F85C08]" />,
      title: 'Genuine OEM Sourcing',
      body: 'Direct institutional allocation from 27 major surveillance and networking brands with full factory warranty.',
      stat: '98.4%',
      statLabel: 'Ready Stock Fill Rate',
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#F85C08]" />,
      title: 'In-House Testing & RMA Bench',
      body: 'Dedicated diagnostic engineering labs at Ritchie Street for firmware testing, advance replacements, and rapid warranty swaps.',
      stat: '< 24h',
      statLabel: 'Diagnostic Turnaround',
    },
    {
      icon: <Warehouse className="w-6 h-6 text-[#F85C08]" />,
      title: 'PAN-India 5-Hub Fulfilment',
      body: 'High-density warehousing in Chennai, Delhi, Hyderabad, Bangalore, and Surat for ultra-fast regional surface dispatch.',
      stat: '5',
      statLabel: 'Regional Warehouses',
    },
  ];

  return (
    <section id="advantage" className="w-full bg-[#0F172A] text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-bold text-[#F85C08] uppercase tracking-[0.2em] mb-3">
            <span>The Realtech Advantage</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-4">
            Engineered Exclusively for the <br />
            <span className="text-gradient-brand">Professional Trade Channel</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
            From factory procurement to express doorstep logistics, our entire operation is fine-tuned to safeguard dealer margins and installation reputations.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-orange-500/50 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <div className="text-right">
                    <div className="font-display text-xl font-extrabold text-white group-hover:text-[#F85C08] transition-colors">
                      {pillar.stat}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                      {pillar.statLabel}
                    </div>
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-white">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed mb-6">
                  {pillar.body}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-[#F85C08] font-bold">
                <span>Authorized Guarantee</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F85C08]"></span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default PartnerAdvantage;

import React from 'react';
import { Reveal } from './Reveal';

export const WhyUsSection: React.FC = () => {
  const points = [
    {
      num: '01',
      title: 'Pure B2B Channel',
      desc: 'Strict trade-only distribution; zero direct retail sales or consumer bidding. We preserve project margins for integrators exclusively.',
    },
    {
      num: '02',
      title: 'Genuine OEM Products',
      desc: '100% factory-direct sourcing with verified serial numbers and tamper seals. Complete manufacturer compliance across every batch.',
    },
    {
      num: '03',
      title: 'In-House RMA Support',
      desc: 'Dedicated engineering test bench in Chennai for rapid diagnostics, firmware validation, and accelerated warranty turnaround.',
    },
    {
      num: '04',
      title: '5-Hub Fulfilment',
      desc: 'Strategic warehousing across major regional trade hubs ensuring same-day dispatch and reliable inventory continuity throughout India.',
    },
  ];

  return (
    <section id="advantage" className="w-full bg-[#ffffff] py-20 lg:py-24 border-b border-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-margin">
        <Reveal className="mb-14">
          <div className="flex items-center space-x-2.5 mb-4">
            <span className="w-6 h-[2px] bg-[#F85C08]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#666666]">
              The Realtech Difference
            </span>
          </div>
          <h2 className="font-manrope text-3xl lg:text-[36px] font-semibold text-[#262626] tracking-[-0.02em]">
            Partner Advantage
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x divide-[#e8e8e8]">
          {points.map((p, idx) => (
            <Reveal
              key={idx}
              delay={idx * 100}
              className={`lg:px-7 ${idx === 0 ? 'lg:pl-0' : ''} ${
                idx === points.length - 1 ? 'lg:pr-0' : ''
              } flex flex-col group`}
            >
              <div className="font-manrope text-[34px] font-bold text-[#666666]/30 group-hover:text-[#F85C08] transition-colors duration-300 mb-3 leading-none tracking-[-0.02em]">
                {p.num}
              </div>
              <h3 className="font-manrope text-[17px] font-semibold text-[#262626] mb-2.5 tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="text-[13.5px] text-[#666666] leading-[1.75]">
                {p.desc}
              </p>
              {/* hover accent line */}
              <span className="mt-4 h-[2px] w-0 bg-[#F85C08] rounded-full transition-all duration-300 group-hover:w-10" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

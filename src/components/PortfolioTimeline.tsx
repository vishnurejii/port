import React from 'react';

export const PortfolioTimeline: React.FC = () => {
  const milestones = [
    {
      year: '2009',
      title: 'Foundation in Ritchie Street, Chennai',
      desc: 'Established in South India’s premier electronics corridor, catering to the first generation of electronic security installers.',
    },
    {
      year: '2014',
      title: '1,000+ Dealer Network Milestone',
      desc: 'Expanded distribution footprint across Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh with dedicated RMA warranty facilities.',
    },
    {
      year: '2017',
      title: 'IP Video & 4K Surveillance Transition',
      desc: 'Signed strategic Tier-1 distribution alliances with Hikvision and Trueview to pioneer high-definition IP surveillance deployment.',
    },
    {
      year: '2020',
      title: '5 Regional Fulfillment Super-Hubs',
      desc: 'Commissioned full-scale logistics and stocking branches in Delhi NCR, Hyderabad, Bangalore, and Surat for express national delivery.',
    },
    {
      year: '2023',
      title: 'Enterprise Infrastructure Expansion',
      desc: 'Integrated Toshiba 24x7 surveillance storage, Fyber high-power PoE networking, and Maxxion biometric systems into the portfolio.',
    },
    {
      year: 'Today',
      title: '4,000+ Dealers & Next-Gen B2B Desk',
      desc: 'Serving over 4,000 verified system integrators nationwide with instant digital catalog quotes and unwavering channel price protection.',
    },
  ];

  return (
    <section id="timeline" className="py-20 sm:py-24 bg-[#F4F5F7] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-300 text-xs font-bold text-black mb-3 shadow-sm">
            <span>⏳</span>
            <span>15+ YEARS TRACK RECORD & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
            Our Growth <span className="text-[#EE6E00]">Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            From our origins on Ritchie Street to nationwide distribution leadership — a timeline built on reliability and channel trust.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-gray-200 hover:border-[#EE6E00] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl sm:text-2xl font-black font-mono text-[#EE6E00]">
                    {m.year}
                  </span>
                  <span className="text-xs font-bold font-mono text-gray-400">
                    Step {idx + 1}
                  </span>
                </div>

                <h3 className="font-bold text-base text-black group-hover:text-[#EE6E00] transition-colors mb-2">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-2 text-[11px] font-bold text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EE6E00]"></span>
                <span>Verified Milestone</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';

export const PortfolioSolutions: React.FC = () => {
  const solutions = [
    {
      icon: '🏢',
      title: 'Commercial & Retail Security',
      tagline: 'Perimeter & Loss Prevention',
      desc: 'High-definition 4MP to 8MP AI dome and bullet camera architectures with ColorVu full night vision for malls, retail chains, and corporate towers.',
      specs: ['4K Ultra HD Sensors', 'AI Person & Vehicle Detection', 'Weatherproof IP67 Housing'],
    },
    {
      icon: '🏙️',
      title: 'Smart Cities & Public Infrastructure',
      tagline: 'Wide-Area Command & Control',
      desc: 'High-speed PTZ cameras with 25x optical zoom, auto-tracking, and 100m IR illumination integrated with municipal centralized recording networks.',
      specs: ['25x Optical Zoom PTZ', '16CH to 64CH 4K NVRs', 'H.265+ High Compression'],
    },
    {
      icon: '🌐',
      title: 'Industrial PoE & Campus Networks',
      tagline: 'High-Density Backbone Infrastructure',
      desc: 'Ruggedized 8-port and 16-port PoE switches delivering up to 240W power budgets with Gigabit SFP uplinks and intelligent bandwidth QoS.',
      specs: ['120W–240W PoE Power Budgets', '100% Solid Bare Copper LAN', 'Gigabit Fiber SFP Uplinks'],
    },
    {
      icon: '💾',
      title: 'Mission-Critical Video Storage',
      tagline: 'Zero Frame-Drop 24×7 Retention',
      desc: 'Surveillance-grade 2TB to 4TB enterprise HDDs engineered specifically for continuous multi-stream write workloads across banking and defense sites.',
      specs: ['5400 RPM 64MB Cache', 'Engineered for 24×7 Operations', 'Multi-Stream Write Optimized'],
    },
    {
      icon: '🔐',
      title: 'Biometric Access Control',
      tagline: 'Premises Security & Time-Attendance',
      desc: 'Fingerprint biometric terminals and contactless RFID access kits with magnetic locks, cloud reporting software, and TCP/IP network interfaces.',
      specs: ['1,000+ Fingerprint Capacity', 'TCP/IP Cloud Connectivity', 'Fail-Safe Magnetic Lock Kits'],
    },
    {
      icon: '⚡',
      title: 'Regulated Power Infrastructure',
      tagline: 'Clean Surge-Free Surveillance Power',
      desc: 'Regulated 12V 5A SMPS power supply systems built with automatic overload, overvoltage, and short-circuit protection circuits.',
      specs: ['12V Regulated DC Output', 'Automatic Surge Suppression', 'Short-Circuit Protection'],
    },
  ];

  return (
    <section id="solutions" className="py-20 sm:py-24 bg-[#F4F5F7] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-300 text-xs font-bold text-black mb-3 shadow-sm">
            <span>⚙️</span>
            <span>SYSTEM ARCHITECTURE & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
            Integrated Solutions <span className="text-[#EE6E00]">Portfolio</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            From smart city perimeter surveillance to enterprise cloud access control, our distribution ecosystem powers mission-critical deployments across India.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-gray-200/90 hover:border-[#EE6E00] rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl p-3 bg-orange-50 rounded-2xl block border border-orange-100">
                    {sol.icon}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#EE6E00] uppercase bg-orange-50 px-2.5 py-1 rounded-full">
                    {sol.tagline}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-black group-hover:text-[#EE6E00] transition-colors mb-2">
                  {sol.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  {sol.desc}
                </p>
              </div>

              {/* Specs Pills */}
              <div className="pt-4 border-t border-gray-100 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                  Key Specifications:
                </span>
                {sol.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-xs text-black font-medium">
                    <span className="text-[#EE6E00] font-bold">✓</span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

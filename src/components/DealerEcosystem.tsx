import React from 'react';
import {
  ShieldAlert,
  Truck,
  Wrench,
  Award,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Building2,
  CheckCircle2
} from 'lucide-react';

interface DealerEcosystemProps {
  onOpenPartnerModal: () => void;
}

export const DealerEcosystem: React.FC<DealerEcosystemProps> = ({ onOpenPartnerModal }) => {
  const enterpriseCards = [
    {
      id: 'pure-distribution',
      badge: 'CHANNEL COVENANT',
      badgeColor: 'bg-[#EE6E00] text-white',
      title: '100% Pure Distribution. Zero Direct Retail.',
      description:
        'We never sell to end users or compete on retail tenders. Every lead, inquiry, and margin is strictly protected for our 4,000+ verified channel dealers.',
      actionText: 'Read dealer covenant',
      link: '#dealer-program',
      category: 'Wholesale Ethics',
      icon: ShieldCheck,
      graphicBg: 'from-blue-900 to-slate-900',
      highlights: 'Strict Dealer Protection • Zero Retail Bidding'
    },
    {
      id: 'super-hubs',
      badge: 'NATIONAL LOGISTICS',
      badgeColor: 'bg-[#7fba00] text-white',
      title: '5 Regional Super-Hubs with 24-48h Dispatch',
      description:
        'Strategic distribution hubs in Chennai, Delhi, Hyderabad, Bangalore, and Surat ensure instant stock availability and expedited transit across all 28 states.',
      actionText: 'Locate 5 regional hubs',
      link: '#network',
      category: 'Supply Chain',
      icon: Truck,
      graphicBg: 'from-emerald-950 to-slate-900',
      highlights: 'High Fill-Rate • Real-Time Warehouse Telemetry'
    },
    {
      id: 'rma-lab',
      badge: 'WARRANTY DESK',
      badgeColor: 'bg-[#f25022] text-white',
      title: 'In-House Certified Component RMA Facility',
      description:
        'In-house certified hardware engineering lab providing rapid chip-level diagnostics, firmware recovery, and expedited OEM warranty turnaround within 48 hours.',
      actionText: 'Explore RMA desk',
      link: '#services',
      category: 'Engineering Care',
      icon: Wrench,
      graphicBg: 'from-red-950 to-slate-900',
      highlights: 'In-House Testing • Genuine Replacement Parts'
    },
    {
      id: 'oem-alliances',
      badge: 'TIER-1 OEM ALLIANCE',
      badgeColor: 'bg-[#ffb900] text-black',
      title: 'Authorized Distribution for Global OEM Brands',
      description:
        'Direct factory distribution agreements with Hikvision, Dahua, CP Plus, Ruijie, Toshiba, and Western Digital guarantee genuine serials and priority allocations.',
      actionText: 'View partner brands',
      link: '#brands',
      category: 'OEM Direct',
      icon: Award,
      graphicBg: 'from-amber-950 to-slate-900',
      highlights: 'Factory Sealed • Direct Brand Warranty Sync'
    }
  ];

  return (
    <section id="dealer-program" className="py-14 sm:py-18 bg-white border-b border-[#E5E8EC]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Microsoft Style: Left-Aligned Clean H2) */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5F666D] uppercase tracking-wider mb-2">
            <Building2 className="w-3.5 h-3.5 text-[#EE6E00]" />
            <span>Channel Infrastructure & Ethics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#1F262C] font-sans tracking-tight">
            For Enterprise Integrators & Channel Partners
          </h2>
          <p className="text-sm sm:text-base text-[#5F666D] max-w-2xl mt-1">
            Industry-leading distribution covenants, certified engineering RMA, and multi-state fulfillment built over 15+ years.
          </p>
        </div>

        {/* Microsoft 4-Card Multi-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {enterpriseCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className="ms-card flex flex-col justify-between group overflow-hidden bg-white border border-[#E5E8EC]"
              >
                {/* Visual Header / Graphic Card (16:9 Aspect Ratio) */}
                <div className={`relative h-48 bg-gradient-to-br ${card.graphicBg} p-5 flex flex-col justify-between overflow-hidden text-white`}>
                  
                  {/* Subtle Grid Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Top Badge */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-[2px] uppercase tracking-wider ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                    <span className="text-[11px] font-mono text-white/70">
                      {card.category}
                    </span>
                  </div>

                  {/* Center Icon Graphic */}
                  <div className="flex items-center justify-center my-auto relative z-10">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Bottom Specs Strip */}
                  <div className="relative z-10 pt-2 border-t border-white/15 text-[11px] text-white/80 font-mono flex items-center justify-between">
                    <span>{card.highlights}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1F262C] leading-snug mb-2 group-hover:underline">
                      {card.title}
                    </h3>
                    <p className="text-[13px] text-[#5F666D] leading-relaxed mb-6 font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Action Link (Microsoft Primary Blue Button) */}
                  <div className="pt-2">
                    <button
                      onClick={onOpenPartnerModal}
                      className="ms-btn-primary w-full justify-between text-xs py-2"
                    >
                      <span>Join Dealer Network</span>
                      <ArrowRight className="w-3.5 h-3.5 ms-chevron" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DealerEcosystem;

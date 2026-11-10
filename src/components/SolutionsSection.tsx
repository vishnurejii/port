import React from 'react';
import {
  Camera,
  Network,
  HardDrive,
  ShieldCheck,
  ArrowRight,
  Shield,
  Layers,
  Wrench
} from 'lucide-react';

interface SolutionsSectionProps {
  onOpenPartnerModal: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenPartnerModal }) => {
  const cards = [
    {
      id: 'cctv-optics',
      badge: 'FLAGSHIP LINE',
      title: 'Ultra-HD 4K ColorVu Cameras & AI Decoders',
      description:
        'Equip commercial and industrial facilities with 24/7 vivid color surveillance, AI perimeter intrusion detection, and centralized multi-channel decoding NVRs.',
      category: 'Video Surveillance',
      specs: '4K / 8MP • ColorVu 24/7 • AI AcuSense',
      bullets: [
        'Smart perimeter intrusion and vehicle/human classification',
        'Multi-channel NVR recording with H.265+ stream compression'
      ],
      icon: Camera
    },
    {
      id: 'poe-network',
      badge: 'ENTERPRISE POE',
      title: 'Enterprise Managed PoE+ Switches & Routers',
      description:
        'Deliver reliable high-power PoE up to 250 meters. Engineered with 6kV surge suppression and dedicated VLAN isolation for smooth video streams.',
      category: 'Data Connectivity',
      specs: '8/16/24 Ports • 250m Reach • 6kV Surge',
      bullets: [
        'Dedicated VLAN isolation engineered for continuous video streams',
        'Up to 250-meter long-range PoE transmission with surge protection'
      ],
      icon: Network
    },
    {
      id: 'storage-it',
      badge: 'CONTINUOUS DUTY',
      title: 'Surveillance HDDs (2TB to 10TB Workloads)',
      description:
        'Purpose-calibrated drives for continuous multi-camera write workloads. Zero frame degradation and factory direct serial warranty verification.',
      category: 'Storage Infrastructure',
      specs: 'Toshiba / WD • 1M Hours MTBF • 3-Yr Warranty',
      bullets: [
        'Calibrated for continuous 24/7 multi-camera write workloads',
        'Streaming firmware tuned to prevent video frame drops'
      ],
      icon: HardDrive
    },
    {
      id: 'access-control',
      badge: 'UNIFIED ACCESS',
      title: 'Touchless Biometric Terminals & Smart Locks',
      description:
        'Secure corporate perimeters with sub-0.5 second facial recognition, RFID turnstile integrations, and real-time cloud attendance logging.',
      category: 'Premises Access',
      specs: 'Touchless Face/RFID • Real-Time Cloud Sync',
      bullets: [
        'Sub-0.5s touchless facial recognition and RFID card validation',
        'Seamless relay integration for turnstiles, EM locks & attendance'
      ],
      icon: ShieldCheck
    }
  ];

  return (
    <section
      id="solutions"
      className="py-16 sm:py-20 bg-[#F4F5F7] relative overflow-hidden transition-colors duration-300"
    >
      {/* Subtle warm low-glare grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(31, 38, 44, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(31, 38, 44, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F262C] font-sans tracking-tight">
            Core Hardware & <span className="text-[#EE6E00]">Surveillance Solutions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5F666D] mt-2.5 leading-relaxed max-w-2xl mx-auto">
            Pure wholesale supply of tier-1 security and IT hardware for system integrators, dealers, and installation contractors across India.
          </p>

          {/* Shared Trust Line at Section Level */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 pt-3 border-t border-[#E5E8EC]/70 text-xs font-medium text-[#5F666D]">
            <span className="inline-flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#B53E00]" />
              <span>Factory-sealed genuine OEM serials</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#B53E00]" />
              <span>Direct regional branch buffer stock</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-[#B53E00]" />
              <span>In-house RMA & technical support</span>
            </span>
          </div>
        </div>

        {/* 4-Card Multi-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className="bg-[#FFFFFF] hover:bg-[#FFFFFF] rounded-2xl border border-[#E5E8EC] hover:border-[#EE6E00]/40 shadow-es-card hover:shadow-es-card-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Visual Header / Graphic Card on Image Panel color with subtle radial spot */}
                <div className="relative h-44 bg-[#E6E2DA] p-5 flex flex-col justify-between overflow-hidden text-[#1F262C] border-b border-[#E5E8EC]">
                  {/* Faint lighter radial spot behind product for contrast */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.75)_0%,transparent_75%)] pointer-events-none" />

                  {/* Top Badge */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-[#F0F1F3] text-[#B53E00] border border-[#EE6E00]/20">
                      {card.badge}
                    </span>
                    <span className="text-[11px] font-mono text-[#5F666D]">
                      {card.category}
                    </span>
                  </div>

                  {/* Center Icon Graphic */}
                  <div className="flex items-center justify-center my-auto relative z-10">
                    <div className="w-14 h-14 rounded-full bg-[#FFFFFF] border border-[#E5E8EC] flex items-center justify-center text-[#EE6E00] shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Bottom Specs Strip */}
                  <div className="relative z-10 pt-2 border-t border-[#E5E8EC] text-[11px] text-[#5F666D] font-mono flex items-center justify-between">
                    <span>{card.specs}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1F262C] leading-snug mb-2 group-hover:text-[#B53E00] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#5F666D] leading-relaxed mb-5 font-normal">
                      {card.description}
                    </p>

                    {/* Differentiated Bullet Indicators */}
                    <div className="space-y-2 text-xs text-[#1F262C] mb-6">
                      {card.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="icon-dot mt-1.5" />
                          <span className="leading-tight text-[#1F262C]">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link (Unified Become a Dealer CTA) */}
                  <div className="pt-2 border-t border-[#E5E8EC]">
                    <a
                      href="https://realtechvision.in/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-es-outline w-full justify-center text-xs py-2 rounded-full flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#EE6E00]"
                    >
                      <span>Become a Dealer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* After-Products Conversion Strip */}
        <div className="mt-10 p-4 sm:p-5 bg-[#FFFFFF] border border-[#E5E8EC] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-sm font-bold text-[#1F262C] block">
              Need custom BOM pricing for large enterprise or institutional projects?
            </span>
            <span className="text-xs text-[#5F666D] block mt-0.5">
              Submit your dealer credentials to unlock project registrations and volume discounts.
            </span>
          </div>
          <a
            href="https://realtechvision.in/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-es-primary text-xs py-2 px-5 flex-shrink-0 inline-flex items-center gap-1.5"
          >
            <span>Become a Dealer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;

import React from 'react';
import { Building2, Warehouse, Cpu, Layers, ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

interface VisualShowcaseProps {
  onOpenPartnerModal?: () => void;
}

export const VisualShowcase: React.FC<VisualShowcaseProps> = ({ onOpenPartnerModal }) => {
  const caseStudies = [
    {
      id: 'banking-surveillance',
      isFeatured: true,
      categoryTags: ['Banking & Finance', 'Multi-Site Security', 'Centralized NVR'],
      title: 'Multi-Branch Financial Surveillance Grid with Centralized Decoders',
      outcomeBlurb:
        'Architected high-definition optical surveillance and sequential write-intensive storage arrays for over 120+ retail bank branches. Delivered 100% video stream retention, 24/7 centralized multi-site monitoring, and automated tamper alert triggers with zero packet loss.',
      keyMetrics: [
        { label: 'Branches Deployed', val: '120+' },
        { label: 'Video Retention', val: '100%' },
        { label: 'Stream Reliability', val: '99.99%' }
      ],
      icon: Building2
    },
    {
      id: 'logistics-infrastructure',
      isFeatured: false,
      categoryTags: ['Logistics & Supply Chain', 'High-Budget PoE'],
      title: 'Industrial Logistics Yard High-Budget PoE Backbone',
      outcomeBlurb:
        'Deployed extended 250m long-distance PoE+ switching and solid copper Cat6 infrastructure across a 40-acre multi-warehouse distribution center, eliminating mid-span repeaters and cutting deployment latency by 35%.',
      keyMetrics: [
        { label: 'Perimeter Coverage', val: '40 Acres' },
        { label: 'PoE Long-Reach', val: '250 Meters' }
      ],
      icon: Warehouse
    },
    {
      id: 'biometric-premises',
      isFeatured: false,
      categoryTags: ['Commercial Tech Park', 'Premises Access'],
      title: 'Unified Touchless Biometric & Access Control Ecosystem',
      outcomeBlurb:
        'Integrated 3,500+ employee facial/fingerprint terminals with heavy-duty electromagnetic locking assemblies for a modern IT corridor campus. Achieved sub-0.5 second entry verification and real-time attendance telemetry.',
      keyMetrics: [
        { label: 'User Directory', val: '3,500+' },
        { label: 'Recognition Speed', val: '<0.5 Sec' }
      ],
      icon: Cpu
    }
  ];

  return (
    <section id="case-studies" className="py-14 sm:py-20 bg-white border-b border-[#E5E8EC]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5F666D] uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5 text-[#EE6E00]" />
            <span>Enterprise Case Studies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#1F262C] font-sans tracking-tight">
            Proven Commercial & Critical Infrastructure Deployments
          </h2>
          <p className="text-sm sm:text-base text-[#5F666D] max-w-2xl mt-1">
            Real-world hardware architectures engineered and fulfilled in collaboration with certified regional system integrators.
          </p>
        </div>

        {/* Microsoft Fluent Case Studies Grid (1 Large Featured + 2 Companions) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Featured Card (7 cols) */}
          {caseStudies
            .filter((c) => c.isFeatured)
            .map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.id}
                  className="lg:col-span-7 ms-card p-6 sm:p-8 flex flex-col justify-between bg-white border border-[#E5E8EC] relative overflow-hidden group"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-[#F0F1F3] text-[#EE6E00] uppercase tracking-wider">
                        FEATURED DEPLOYMENT
                      </span>
                      {c.categoryTags.map((t) => (
                        <span key={t} className="text-[11px] text-[#5F666D] bg-[#FFFFFF] px-2 py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#1F262C] leading-snug mb-3 group-hover:text-[#EE6E00] transition-colors">
                      {c.title}
                    </h3>

                    <p className="text-sm text-[#5F666D] leading-relaxed mb-8">
                      {c.outcomeBlurb}
                    </p>
                  </div>

                  {/* Metrics Row */}
                  <div className="pt-6 border-t border-[#E5E8EC]">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {c.keyMetrics.map((m) => (
                        <div key={m.label} className="border-l-2 border-[#EE6E00] pl-3">
                          <span className="text-xl sm:text-2xl font-bold text-[#1F262C] block">
                            {m.val}
                          </span>
                          <span className="text-xs text-[#5F666D]">{m.label}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={onOpenPartnerModal}
                      className="ms-btn-primary text-xs py-2"
                    >
                      <span>Inquire Technical Architecture BOM</span>
                      <ArrowRight className="w-3.5 h-3.5 ms-chevron" />
                    </button>
                  </div>
                </div>
              );
            })}

          {/* Companion Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {caseStudies
              .filter((c) => !c.isFeatured)
              .map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.id}
                    className="ms-card p-6 flex flex-col justify-between bg-white border border-[#E5E8EC] group"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {c.categoryTags.map((t) => (
                          <span key={t} className="text-[11px] text-[#5F666D] bg-[#FFFFFF] px-2 py-0.5">
                            {t}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#1F262C] leading-snug mb-2 group-hover:text-[#EE6E00] transition-colors">
                        {c.title}
                      </h3>

                      <p className="text-xs text-[#5F666D] leading-relaxed mb-4">
                        {c.outcomeBlurb}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E5E8EC] flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs">
                        {c.keyMetrics.map((m) => (
                          <span key={m.label} className="font-semibold text-[#1F262C]">
                            {m.val} <span className="font-normal text-[#5F666D]">{m.label}</span>
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={onOpenPartnerModal}
                        className="ms-link text-xs font-semibold"
                      >
                        <span>Details</span>
                        <ChevronRight className="w-3.5 h-3.5 ms-chevron" />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisualShowcase;

import React from 'react';
import {
  Globe,
  ClipboardCheck,
  PhoneCall,
  ShoppingBag,
  ExternalLink,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  UserPlus
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface BecomePartnerSectionProps {
  onOpenPartnerModal: () => void;
}

export const BecomePartnerSection: React.FC<BecomePartnerSectionProps> = ({ onOpenPartnerModal }) => {
  const steps = [
    {
      step: '01',
      badge: 'Step 1',
      title: 'Initiate Onboarding',
      description:
        'Launch our online dealer verification form right here or log in directly if you already hold portal credentials.',
      icon: Globe,
      iconColor: 'text-[#EE6E00]',
      iconBg: 'bg-[#F0F1F3]',
      badgeBg: 'bg-[#F0F1F3] text-[#B53E00]',
      primaryAction: {
        type: 'modal',
        label: 'Become a Dealer'
      }
    },
    {
      step: '02',
      badge: 'Step 2',
      title: 'Submit Credentials',
      description:
        'Provide your registered business name, GSTIN, operating region, and channel role (CCTV Dealer, Integrator, or IT Retailer).',
      icon: ClipboardCheck,
      iconColor: 'text-[#EE6E00]',
      iconBg: 'bg-[#F0F1F3]',
      badgeBg: 'bg-[#F0F1F3] text-[#B53E00]',
      primaryAction: {
        type: 'modal',
        label: 'Submit Details'
      }
    },
    {
      step: '03',
      badge: 'Step 3',
      title: 'Regional Verification',
      description:
        'A dedicated branch manager from your nearest logistics hub contacts you within 2 business hours to verify credentials and assign dealer tiers.',
      icon: PhoneCall,
      iconColor: 'text-[#2F6B48]',
      iconBg: 'bg-[#E3EEE6]',
      badgeBg: 'bg-[#E3EEE6] text-[#2F6B48]',
      primaryAction: {
        type: 'whatsapp',
        label: 'WhatsApp Desk'
      }
    },
    {
      step: '04',
      badge: 'Step 4',
      title: 'Direct Wholesale Ordering',
      description:
        'Unlock protected dealer prices, place bulk consignments, reserve inventory across 5 regional hubs, and receive express dispatch.',
      icon: ShoppingBag,
      iconColor: 'text-[#EE6E00]',
      iconBg: 'bg-[#F0F1F3]',
      badgeBg: 'bg-[#F0F1F3] text-[#B53E00]',
      primaryAction: {
        type: 'portal',
        label: 'Dealer Portal Login'
      }
    }
  ];

  return (
    <section
      id="how-to-partner"
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
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E8EC] text-[#B53E00] text-xs font-semibold mb-3 shadow-sm">
            <span>PARTNER ONBOARDING PROCESS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F262C] font-sans tracking-tight leading-tight">
            How to Become an Authorized Dealer & <span className="text-[#EE6E00]">Start Purchasing</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5F666D] mt-2.5 leading-relaxed max-w-2xl mx-auto">
            A transparent 4-step onboarding sequence to establish your wholesale trade account, unlock protected margins, and access direct OEM stock.
          </p>
        </div>

        {/* 4-Step Sequence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#FFFFFF] hover:bg-[#FFFFFF] rounded-2xl border border-[#E5E8EC] hover:border-[#EE6E00]/40 p-6 flex flex-col justify-between transition-all duration-200 shadow-card hover:shadow-card-hover group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-[#F4F5F7] text-[#1F262C] border border-[#E5E8EC]">
                      {item.step}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-105`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#1F262C] group-hover:text-[#B53E00] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#5F666D] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Step Action Button */}
                <div className="pt-3 border-t border-[#E5E8EC]">
                  {item.primaryAction.type === 'modal' && (
                    <button
                      onClick={onOpenPartnerModal}
                      className="btn-es-outline w-full justify-center text-xs py-2 rounded-full inline-flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#EE6E00]"
                    >
                      <span>{item.primaryAction.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {item.primaryAction.type === 'whatsapp' && (
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full text-xs py-2 rounded-full bg-[#E3EEE6] hover:bg-[#2F6B48] text-[#2F6B48] hover:text-white font-semibold transition-all shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{item.primaryAction.label}</span>
                    </a>
                  )}

                  {item.primaryAction.type === 'portal' && (
                    <a
                      href={COMPANY_INFO.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-es-outline w-full justify-center text-xs py-2 rounded-full inline-flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#EE6E00]"
                    >
                      <span>{item.primaryAction.label}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Dark Band CTA Banner */}
        <div className="mt-12 p-8 sm:p-10 bg-[#2A323A] text-[#ECEAE5] border border-[#3A444E] rounded-3xl shadow-[0_16px_36px_rgba(31,38,44,0.16)] flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle warm glow inside banner */}
          <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-[#EE6E00]/10 blur-3xl pointer-events-none" />

          <div className="space-y-2 text-center lg:text-left relative z-10">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-white/10 px-3 py-0.5 rounded-full text-[#ECEAE5] border border-white/15">
                100% Wholesale Covenant
              </span>
              <span className="text-xs text-[#EE6E00] font-medium">• Zero Retail Bypass Guarantee</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Ready to start? Establish your <span className="text-[#EE6E00]">authorized dealer account</span> today.
            </h3>
            <p className="text-xs sm:text-sm text-[#B6BCC4] max-w-2xl leading-relaxed">
              Submit your dealer credentials to unlock protected wholesale price tiers, regional buffer stock reservations, and dedicated branch desk support.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0 relative z-10">
            {/* Primary: Become a Dealer */}
            <a
              href="https://realtechvision.in/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-es-white text-xs sm:text-sm py-2.5 px-6 shadow-md inline-flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-[#EE6E00]"
            >
              <UserPlus className="w-4 h-4 text-[#141C22]" />
              <span>Become a Dealer</span>
            </a>

            {/* Secondary: Dealer Portal Login */}
            <a
              href={COMPANY_INFO.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#B6BCC4]/50 hover:border-[#ECEAE5] text-[#ECEAE5] hover:bg-white/10 text-xs sm:text-sm font-semibold py-2.5 px-5 transition-all inline-flex items-center gap-1.5"
            >
              <span>Dealer Portal Login</span>
              <ExternalLink className="w-4 h-4 text-[#B6BCC4]" />
            </a>

            {/* Tertiary: WhatsApp Desk */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2F6B48] hover:bg-[#25563a] text-white text-xs sm:text-sm font-semibold py-2.5 px-5 rounded-full transition-all inline-flex items-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>

        {/* Benefits Checklist Bar */}
        <div className="mt-6 p-5 sm:p-6 bg-[#FFFFFF] border border-[#E5E8EC] rounded-2xl shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#5F666D]">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#EE6E00] flex-shrink-0" />
            <span><strong className="text-[#1F262C]">Zero registration fees:</strong> Verification is free for bona fide trade installers.</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#EE6E00] flex-shrink-0" />
            <span><strong className="text-[#1F262C]">2-Hour response:</strong> Prompt credential dispatch by regional logistics desks.</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#EE6E00] flex-shrink-0" />
            <span><strong className="text-[#1F262C]">Margin protection:</strong> Direct wholesale supply without retail project bidding.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BecomePartnerSection;

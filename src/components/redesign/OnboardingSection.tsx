import React from 'react';
import { UserCheck, FileCheck, CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';

interface OnboardingSectionProps {
  onOpenDealerModal?: () => void;
}

const steps = [
  {
    num: '01',
    icon: <UserCheck className="w-6 h-6 text-[#F85C08]" />,
    title: 'Register Trade Entity',
    body: 'Complete our rapid digital onboarding form with your firm profile. Zero complex paperwork required to start.',
  },
  {
    num: '02',
    icon: <FileCheck className="w-6 h-6 text-[#F85C08]" />,
    title: 'Submit GSTIN Details',
    body: 'Provide your commercial GSTIN and billing address for institutional trade authentication.',
  },
  {
    num: '03',
    icon: <CheckCircle2 className="w-6 h-6 text-[#F85C08]" />,
    title: '4-Hour Review Protocol',
    body: 'Our central Ritchie Street desk verifies installer credentials and activates your wholesale portal access.',
  },
  {
    num: '04',
    icon: <ShoppingBag className="w-6 h-6 text-[#F85C08]" />,
    title: 'Unlock Direct OEM Pricing',
    body: 'Gain instant access to tier-1 dealer price cards, volume rebates, and dedicated account support.',
  },
];

export const OnboardingSection: React.FC<OnboardingSectionProps> = ({ onOpenDealerModal }) => {
  return (
    <section id="onboarding" className="w-full bg-white py-20 lg:py-28 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[11px] font-bold text-[#F85C08] uppercase tracking-[0.2em] mb-3">
            <span>Seamless Trade Activation</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-4">
            Become a Verified Dealer in <span className="text-gradient-brand">4 Fast Steps</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Designed specifically for CCTV installers, system integrators, and electrical contractors looking for a dependable supply partner.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="white-card p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#F85C08] px-2.5 py-1 rounded-md bg-orange-50 border border-orange-200/60">
                    Step {step.num}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[#F85C08] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  {step.body}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-400">
                <span>Fast Track Verified</span>
              </div>

            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenDealerModal || (() => {
              window.open('https://realtechvision.in/index.html', '_blank');
            })}
            className="btn-primary-orange text-sm font-bold"
          >
            <span>Start Trade Application</span>
            <ArrowRight size={17} />
          </button>
          <div className="text-xs text-slate-500 mt-3 font-medium">
            Average verification turnaround: <span className="text-slate-900 font-bold">4 business hours</span>
          </div>
        </div>

      </div>
    </section>
  );
};
export default OnboardingSection;

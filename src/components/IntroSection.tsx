import React from 'react';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Lock, Cpu, Database } from 'lucide-react';

interface IntroSectionProps {
  onOpenPartnerModal: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="intro" className="py-24 sm:py-32 relative border-t border-slate-200/80">
      {/* Precision corner crosshairs */}
      <div className="absolute top-8 left-8 font-mono text-xs text-slate-400 select-none pointer-events-none">+</div>
      <div className="absolute top-8 right-8 font-mono text-xs text-slate-400 select-none pointer-events-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetrical Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Dominant Typography Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-rtv-orange" />
              <span>Channel Stewardship</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 font-heading tracking-tight leading-[1.08]">
              Channel stewardship founded on technical discipline, regional reach, and mutual trust.
            </h2>

            {/* Security Protocol Painted Wall Panels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
              <div className="p-5 rounded-2xl bg-white/80 border border-stone-200/90 shadow-sm">
                <span className="text-[10px] font-mono font-bold text-rtv-orange uppercase tracking-wider block mb-1">
                  Integrity Covenant
                </span>
                <span className="text-xs font-bold text-slate-950 block">
                  Zero Direct End-User Retail
                </span>
                <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                  Total protection of dealer margins and client relationships.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/80 border border-stone-200/90 shadow-sm">
                <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                  Serial Verification
                </span>
                <span className="text-xs font-bold text-slate-950 block">
                  Original Factory Stock
                </span>
                <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                  Direct OEM inward allocation with validated warranty records.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/80 border border-stone-200/90 shadow-sm">
                <span className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  Support Infrastructure
                </span>
                <span className="text-xs font-bold text-slate-950 block">
                  In-House RMA Lab
                </span>
                <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                  Bench testing and manufacturer replacement management.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Supporting Description, Value Points & CTA (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:pt-4">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Operating exclusively within the B2B wholesale corridor, Real Tech Vision provides authorized factory allocation of physical security hardware, optical sensors, enterprise video recorders, and network transport infrastructure.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We insulate our partner ecosystem through verifiable sourcing covenants: we decline end-user commercial tenders, pass all enterprise installation leads to registered local integrators, and maintain deterministic hardware reserves across 5 regional hubs.
            </p>

            {/* Micro Highlights */}
            <div className="space-y-3 pt-2 border-t border-slate-200/80 font-mono text-xs">
              <div className="flex items-center gap-2.5 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Active fulfillment for 4,000+ registered channel firms</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Central Ritchie St. Chennai HO + 4 regional depots</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Deterministic RMA triage & replacement dispatch</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenPartnerModal}
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-950 hover:text-rtv-orange transition-colors"
              >
                <span>Review channel onboarding documentation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-rtv-orange" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

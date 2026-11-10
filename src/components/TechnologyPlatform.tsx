import React from 'react';
import { Cpu, ArrowUpRight, CheckCircle2, Eye, ShoppingCart, FileText, Award, Truck, Search, ShieldCheck } from 'lucide-react';
import { DIGITAL_CAPABILITIES, COMPANY_INFO } from '../data/companyData';

export const TechnologyPlatform: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Eye':
        return Eye;
      case 'ShoppingCart':
        return ShoppingCart;
      case 'FileText':
        return FileText;
      case 'Award':
        return Award;
      case 'Truck':
        return Truck;
      case 'Search':
        return Search;
      default:
        return Cpu;
    }
  };

  return (
    <section className="py-24 sm:py-32 relative border-t border-stone-200/60">
      {/* Precision corner crosshairs */}
      <div className="absolute top-6 left-6 font-mono text-xs text-stone-300 select-none pointer-events-none">+</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-stone-300 select-none pointer-events-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Description Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <Cpu className="w-3.5 h-3.5 text-rtv-orange" />
              <span>Realconnect™ Digital Platform</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-heading tracking-tight leading-[1.1]">
              Realconnect Wholesale Transaction & Telemetry Architecture
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              We leverage modern digital systems to eradicate traditional distribution friction. Through our proprietary <strong>Realconnect</strong> platform, registered integrators experience transparent catalog discovery, instant inventory telemetry across 5 regional hubs, streamlined order dispatch, and live RMA claim tracking.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Deterministic stock telemetry across Chennai, Delhi, Hyderabad, Bangalore & Surat</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Automated ledger reconciliation, digital invoices & GST credit records</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Transparent quarterly volume slabs & tier achievement tracking</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={COMPANY_INFO.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-slate-950 hover:bg-rtv-orange shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Access Realconnect Platform</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Digital Feature Mockup & Cards (7 cols) - Painted Architectural Instrument */}
          <div className="lg:col-span-7 space-y-6">
            <div className="qodeca-card border border-slate-200 rounded-3xl p-5 sm:p-7 relative">
              {/* Console header bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-200/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-stone-300" />
                  <div className="w-3 h-3 rounded-full bg-stone-300" />
                  <div className="w-3 h-3 rounded-full bg-stone-300" />
                </div>
                <div className="px-4 py-1 rounded-full bg-white border border-stone-200 text-stone-700 font-mono text-[11px] flex items-center gap-2 shadow-sm">
                  <span className="text-rtv-orange">🔒</span>
                  <span>realconnect.realtechvision.in // SSL-TLS-1.3</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-800 bg-emerald-50/90 border border-emerald-300/80 px-2.5 py-0.5 rounded-full font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>HUB-TELEMETRY: ONLINE</span>
                </div>
              </div>

              {/* Console Telemetry Metrics */}
              <div className="space-y-4">
                <div className="bg-white/90 rounded-2xl p-4 border border-stone-200/90 shadow-[0_2px_8px_rgba(15,23,42,0.03)]">
                  <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-3">
                    <span className="font-bold text-slate-800">INTEGRATOR CONSOLE // CHENNAI HO COMMAND</span>
                    <span className="text-rtv-orange font-semibold">DISPATCH QUEUE: ACTIVE</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-stone-50/90 p-3 rounded-xl border border-stone-200/70">
                      <span className="text-[10px] text-stone-500 font-mono block">Sourced SKUs</span>
                      <span className="text-base font-bold text-slate-950 font-heading">4,000+</span>
                    </div>
                    <div className="bg-stone-50/90 p-3 rounded-xl border border-stone-200/70">
                      <span className="text-[10px] text-stone-500 font-mono block">RMA TAT</span>
                      <span className="text-base font-bold text-emerald-700 font-mono">&lt; 48 Hrs</span>
                    </div>
                    <div className="bg-stone-50/90 p-3 rounded-xl border border-stone-200/70">
                      <span className="text-[10px] text-stone-500 font-mono block">Logistics Depots</span>
                      <span className="text-base font-bold text-rtv-orange font-heading">5 Hubs</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Inward Serial Verification Search */}
                <div className="bg-white/90 rounded-2xl p-4 border border-stone-200/90 shadow-[0_2px_8px_rgba(15,23,42,0.03)] font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px] text-stone-400 mb-2">
                    <span>SERIAL-VERIFY-DAEMON // v2.4</span>
                    <span className="text-emerald-700 font-medium">STATUS: VERIFIED</span>
                  </div>
                  <div className="p-2.5 bg-stone-100 rounded-xl text-stone-700 flex items-center justify-between">
                    <span className="truncate font-mono">QUERY: HK-2CD2047G2-LU-892411</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">OEM GENUINE</span>
                  </div>
                </div>

                {/* Micro Capabilities List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DIGITAL_CAPABILITIES.slice(0, 4).map((item) => {
                    const Icon = getIcon(item.iconName);
                    return (
                      <div
                        key={item.title}
                        className="bg-white/90 border border-stone-200/90 rounded-2xl p-4 hover:border-stone-400 transition-all shadow-[0_2px_8px_rgba(15,23,42,0.03)]"
                      >
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-rtv-orange">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <h3 className="text-xs font-bold text-slate-950">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-[11px] text-stone-600 leading-relaxed mb-2">
                          {item.description}
                        </p>
                        <span className="text-[10px] font-mono text-emerald-700 block font-medium">
                          ✓ {item.benefit}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

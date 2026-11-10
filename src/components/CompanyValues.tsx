import React from 'react';
import { Shield, Handshake, Zap, Cpu, TrendingUp, HeartHandshake } from 'lucide-react';
import { COMPANY_VALUES } from '../data/companyData';

export const CompanyValues: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Shield':
        return Shield;
      case 'Handshake':
        return Handshake;
      case 'Zap':
        return Zap;
      case 'Cpu':
        return Cpu;
      case 'TrendingUp':
        return TrendingUp;
      default:
        return HeartHandshake;
    }
  };

  return (
    <section className="py-24 sm:py-32 relative border-t border-stone-200/60">
      {/* Precision corner crosshairs */}
      <div className="absolute top-6 left-6 font-mono text-xs text-stone-300 select-none pointer-events-none">+</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-stone-300 select-none pointer-events-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-4">
            <HeartHandshake className="w-3.5 h-3.5 text-rtv-orange" />
            <span>Principles of Channel Stewardship</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-heading tracking-tight leading-[1.1] mb-5">
            Principles of Channel Stewardship
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Physical security distribution requires unwavering reliability. For 15+ years, Real Tech Vision has maintained foundational disciplines that insulate our partner ecosystem.
          </p>
        </div>

        {/* 5 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {COMPANY_VALUES.map((val, idx) => {
            const Icon = getIcon(val.iconName);

            return (
              <div
                key={val.title}
                className="bg-white/90 border border-stone-200/90 rounded-3xl p-7 hover:border-stone-400 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-rtv-orange mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase text-rtv-orange block mb-1.5">
                    {val.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 mb-3 font-heading group-hover:text-rtv-orange transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="mt-8 pt-3 border-t border-stone-200/80 text-[11px] font-mono text-stone-400">
                  Principle 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

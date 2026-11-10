import React from 'react';
import {
  ShieldAlert,
  Award,
  Users,
  CheckCircle2,
  RefreshCw,
  Headphones,
  MapPin,
  TrendingUp,
  PackageCheck,
  Cpu,
  Star
} from 'lucide-react';
import { DIFFERENTIATORS } from '../data/companyData';

export const WhyRealtech: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert':
        return ShieldAlert;
      case 'Award':
        return Award;
      case 'Users':
        return Users;
      case 'CheckCircle2':
        return CheckCircle2;
      case 'RefreshCw':
        return RefreshCw;
      case 'Headphones':
        return Headphones;
      case 'MapPin':
        return MapPin;
      case 'TrendingUp':
        return TrendingUp;
      case 'PackageCheck':
        return PackageCheck;
      case 'Cpu':
        return Cpu;
      default:
        return Star;
    }
  };

  return (
    <section id="why-realtech" className="py-24 sm:py-32 relative border-t border-stone-200/60">
      {/* Precision corner crosshairs */}
      <div className="absolute top-6 left-6 font-mono text-xs text-stone-300 select-none pointer-events-none">+</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-stone-300 select-none pointer-events-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-4">
            <Award className="w-3.5 h-3.5 text-rtv-orange" />
            <span>Operational Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-heading tracking-tight leading-[1.1] mb-5">
            Operational Security & Distribution Disciplines
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Ten verifiable operational disciplines establishing Real Tech Vision as India's trusted wholesale physical security and technology distributor.
          </p>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((item, idx) => {
            const Icon = getIcon(item.iconName);
            const isFeatured = idx === 0;

            return (
              <div
                key={item.id}
                className={`qodeca-card p-7 sm:p-8 border transition-all duration-300 relative group flex flex-col justify-between ${
                  isFeatured
                    ? 'border-orange-200/80 md:col-span-2 lg:col-span-2'
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        isFeatured
                          ? 'bg-slate-950 text-white shadow-sm'
                          : 'bg-orange-50 text-rtv-orange border border-orange-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-3">
                      {item.highlightTag && (
                        <span
                          className={`text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full ${
                            isFeatured
                              ? 'bg-rtv-orange text-white shadow-sm'
                              : 'bg-stone-100 text-stone-800 border border-stone-300/70'
                          }`}
                        >
                          {item.highlightTag}
                        </span>
                      )}
                      <span className="text-2xl sm:text-3xl font-black font-mono text-stone-300 group-hover:text-rtv-orange/40 transition-colors select-none">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-semibold text-rtv-orange uppercase tracking-wider block mb-2">
                    {item.subtitle}
                  </span>
                  <h3
                    className={`font-black font-heading mb-3 tracking-tight ${
                      isFeatured
                        ? 'text-2xl sm:text-3xl text-slate-950'
                        : 'text-xl text-slate-950 group-hover:text-rtv-orange transition-colors'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`leading-relaxed text-stone-600 ${
                      isFeatured
                        ? 'text-base'
                        : 'text-sm'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-200/70 flex items-center justify-between text-xs text-stone-400 font-mono">
                  <span>DISCIPLINE // {String(idx + 1).padStart(2, '0')}</span>
                  <span className="group-hover:text-slate-900 transition-colors font-medium">Channel Protocol</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

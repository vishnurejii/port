import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Wrench, Building2 } from 'lucide-react';
import { STATS } from '../data/companyData';

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const statsToDisplay = [
    {
      value: STATS[0].value, // 15
      suffix: '+',
      label: 'Years Distribution',
      subtext: 'Channel integrity, wholesale scaling & supply stability since 2008.',
      icon: Award
    },
    {
      value: STATS[1].value, // 4000
      suffix: '+',
      label: 'Channel Dealers',
      subtext: 'System integrators & IT contractors empowered across India.',
      icon: Users
    },
    {
      value: STATS[2].value, // 130
      suffix: '+',
      label: 'In-House Personnel',
      subtext: 'Engineers, RMA technicians & regional logistics coordinators.',
      icon: Wrench
    },
    {
      value: 5,
      suffix: ' Hubs',
      label: 'Regional Super-Hubs',
      subtext: 'Warehouses in Chennai, Delhi, Hyderabad, Bangalore, Surat.',
      icon: Building2
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600;
          const steps = 35;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCounts([
              Math.floor(statsToDisplay[0].value * easeOutQuart),
              Math.floor(statsToDisplay[1].value * easeOutQuart),
              Math.floor(statsToDisplay[2].value * easeOutQuart),
              Math.floor(statsToDisplay[3].value * easeOutQuart),
            ]);

            if (step >= steps) {
              setCounts([
                statsToDisplay[0].value,
                statsToDisplay[1].value,
                statsToDisplay[2].value,
                statsToDisplay[3].value,
              ]);
              clearInterval(timer);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="bg-[#FFFFFF] border-b border-[#E5E8EC] py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Microsoft 4-Column Stat Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsToDisplay.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white border border-[#E5E8EC] p-6 shadow-fluent rounded-[2px] transition-all hover:border-[#EE6E00]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded bg-[#F0F1F3] text-[#EE6E00] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#5F666D] uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-bold text-[#1F262C] font-sans tracking-tight mb-2">
                  {hasAnimated ? counts[idx] : 0}
                  <span className="text-[#EE6E00]">{stat.suffix}</span>
                </div>

                <p className="text-xs text-[#5F666D] leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;

import React from 'react';
import { Award, Users, ShieldAlert, Warehouse } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      value: '15+',
      title: 'Years of Market Trust',
      subtitle: 'Continuous distribution leadership since 2010',
      icon: <Award className="w-5 h-5 text-[#F85C08]" />,
    },
    {
      value: '4,000+',
      title: 'Active Trade Integrators',
      subtitle: 'Registered B2B security & IT dealers across India',
      icon: <Users className="w-5 h-5 text-[#F85C08]" />,
    },
    {
      value: '27',
      title: 'Authorised OEM Alliances',
      subtitle: 'Direct factory pricing across surveillance & networking',
      icon: <ShieldAlert className="w-5 h-5 text-[#F85C08]" />,
    },
    {
      value: '5',
      title: 'Regional Logistics Hubs',
      subtitle: 'Chennai, Delhi, Hyderabad, Bangalore & Surat',
      icon: <Warehouse className="w-5 h-5 text-[#F85C08]" />,
    },
  ];

  return (
    <section id="stats" className="w-full bg-white border-y border-slate-200/80 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-slate-200">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-center px-4 lg:px-8 ${idx === 0 ? 'lg:pl-0' : ''} ${
                idx === stats.length - 1 ? 'lg:pr-0' : ''
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                  {stat.icon}
                </div>
                <span className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight">
                  {stat.value}
                </span>
              </div>
              <h4 className="font-display font-bold text-slate-800 text-sm sm:text-[15px] mb-1">
                {stat.title}
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsStrip;

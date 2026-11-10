import React from 'react';
import { MapPin, Phone, Building2, Clock } from 'lucide-react';

interface Hub {
  id: string;
  city: string;
  region: string;
  address: string;
  desk: string;
}

export const HubsSection: React.FC = () => {
  const hubs: Hub[] = [
    {
      id: 'delhi',
      city: 'Delhi NCR Hub',
      region: 'North India Fulfilment Depot',
      address: 'Nehru Place Commercial Electronics Complex, Phase II, New Delhi 110019',
      desk: '+91 11 4100 2819',
    },
    {
      id: 'hyderabad',
      city: 'Hyderabad Hub',
      region: 'Telangana & Andhra Pradesh Depot',
      address: 'CTC Parklane Trade Center, Secunderabad, Hyderabad 500003',
      desk: '+91 40 6632 1090',
    },
    {
      id: 'bangalore',
      city: 'Bangalore Hub',
      region: 'Karnataka & South-West Depot',
      address: 'SP Road Electronics Commercial Center, Bangalore 560002',
      desk: '+91 80 2211 4455',
    },
    {
      id: 'surat',
      city: 'Surat Hub',
      region: 'Gujarat & Western Region Depot',
      address: 'Ring Road Commercial Logistics & Trade Center, Surat 395002',
      desk: '+91 261 247 8891',
    },
  ];

  return (
    <section id="hubs" className="w-full bg-[#FAFAFC] py-20 lg:py-28 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[11px] font-bold text-[#F85C08] uppercase tracking-[0.2em] mb-3">
            <span>Physical Logistics Infrastructure</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-4">
            5 Regional <span className="text-gradient-brand">Distribution Hubs</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Anchored by our central 15-year Ritchie Street command centre, enabling rapid same-day dispatch across tier-1 and tier-2 Indian cities.
          </p>
        </div>

        {/* Chennai Headquarters - Master Card */}
        <div className="mb-8 white-card p-8 sm:p-12 border-orange-200/80 bg-gradient-to-br from-white via-orange-50/20 to-white relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#F85C08] uppercase tracking-wider mb-4">
                <Building2 size={14} />
                <span>Central Distribution Nerve Center (HQ)</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Chennai Central Headquarters
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                No. 42 Ritchie Street, Narasingapuram Street, Mount Road, Chennai, Tamil Nadu 600002.
                <br />
                Central master warehouse stocking over 5,000+ ready SKUs across cameras, NVRs, and storage drives.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100">
                <a
                  href="tel:+919840001515"
                  className="flex items-center space-x-2.5 text-sm font-bold text-slate-900 hover:text-[#F85C08] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-50 text-[#F85C08] flex items-center justify-center">
                    <Phone size={14} />
                  </div>
                  <span>Direct: +91 98400 01515</span>
                </a>

                <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
                  <Clock size={14} className="text-[#F85C08]" />
                  <span>Cut-off for same-day dispatch: 17:00 IST</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="font-display text-2xl font-extrabold text-slate-900 mb-0.5">98.4%</div>
                <div className="text-xs text-slate-500 font-medium">Ready Stock Fill Rate</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="font-display text-2xl font-extrabold text-[#F85C08] mb-0.5">15+ Yrs</div>
                <div className="text-xs text-slate-500 font-medium">Ritchie St Operations</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="font-display text-2xl font-extrabold text-slate-900 mb-0.5">&lt; 24h</div>
                <div className="text-xs text-slate-500 font-medium">RMA Diagnostic Bench</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="font-display text-2xl font-extrabold text-emerald-600 mb-0.5">Active</div>
                <div className="text-xs text-slate-500 font-medium">Daily Express Logistics</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Regional Hubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub) => (
            <div
              key={hub.id}
              className="white-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F85C08]">
                    <MapPin size={18} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Regional Depot
                  </span>
                </div>

                <h4 className="font-display text-lg font-bold text-slate-900 mb-1 group-hover:text-[#F85C08] transition-colors">
                  {hub.city}
                </h4>
                <p className="text-[11px] font-bold text-[#F85C08] mb-2.5">
                  {hub.region}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {hub.address}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center space-x-2 text-xs font-bold text-slate-800">
                <Phone size={13} className="text-[#F85C08]" />
                <span>{hub.desk}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default HubsSection;

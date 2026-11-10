import React from 'react';
import { Phone, Clock, ExternalLink, MapPin } from 'lucide-react';
import { BRANCHES } from '../data/companyData';

export const PanIndiaNetwork: React.FC = () => {
  return (
    <section
      id="network"
      className="py-16 sm:py-20 bg-[#FFFFFF] relative overflow-hidden transition-colors duration-300"
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
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0F1F3] text-[#B53E00] border border-[#EE6E00]/20 text-xs font-semibold mb-3 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#EE6E00]" />
            <span>PAN-INDIA DISTRIBUTION LOGISTICS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F262C] font-sans tracking-tight">
            5 Strategic <span className="text-[#EE6E00]">Regional Super-Hubs</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5F666D] mt-2.5 leading-relaxed">
            Coordinated from Ritchie Street, Chennai, providing same-day packing and 24–48 hour express order dispatch to all 28 states and union territories.
          </p>
        </div>

        {/* 5 Scannable Uniform Hub Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {BRANCHES.map((b) => {
            const phoneRaw = b.phone.replace(/[^0-9]/g, '');
            const isHeadquarter = b.isHeadquarter;

            return (
              <div
                key={b.id}
                className="bg-[#FFFFFF] hover:bg-[#FFFFFF] border border-[#E5E8EC] p-5 rounded-2xl shadow-card hover:shadow-card-hover hover:border-[#EE6E00]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Hub Tag & HQ Status */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-[#B53E00] uppercase bg-[#F0F1F3] border border-[#EE6E00]/20 px-2.5 py-0.5 rounded-full">
                      {isHeadquarter ? 'CHE-HQ' : `${b.city.substring(0, 3).toUpperCase()}-HUB`}
                    </span>
                    {isHeadquarter && (
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-[#E3EEE6] text-[#2F6B48] border border-[#2F6B48]/20 rounded-full">
                        CENTRAL HQ
                      </span>
                    )}
                  </div>

                  {/* Hub Title */}
                  <h3 className="text-base font-bold text-[#1F262C] mb-1.5 group-hover:text-[#B53E00] transition-colors leading-snug">
                    {b.city} {isHeadquarter ? 'Super-HQ' : 'Hub'}
                  </h3>

                  {/* Address */}
                  {/* TODO: Update regional branches (Delhi, Hyderabad, Bangalore, Surat) with exact street address once confirmed */}
                  <p className="text-xs text-[#5F666D] mb-4 line-clamp-3 leading-relaxed">
                    {b.address}
                  </p>
                </div>

                {/* Dispatch Speed & Direct Contact */}
                <div className="pt-3 border-t border-[#E5E8EC] space-y-2.5 text-xs">
                  <div className="inline-flex items-center gap-1.5 text-[#1F262C] bg-[#F4F5F7] px-2.5 py-1 rounded-full border border-[#E5E8EC] text-[11px] w-full justify-center">
                    <Clock className="w-3.5 h-3.5 text-[#B53E00] flex-shrink-0" />
                    <span className="font-medium font-mono text-[10.5px]">{b.transitTime}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    {/* TODO: Connect dedicated regional telephone extensions */}
                    <a
                      href={`tel:${phoneRaw}`}
                      className="font-medium text-[#B53E00] hover:text-[#E04F00] hover:underline flex items-center gap-1 text-[11px] focus-visible:ring-2 focus-visible:ring-[#EE6E00] rounded"
                      title={`Call ${b.city} desk`}
                    >
                      <Phone className="w-3 h-3" />
                      <span>{b.phone}</span>
                    </a>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-[#F4F5F7] hover:bg-[#EE6E00] text-[#5F666D] hover:text-[#141C22] flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-[#EE6E00]"
                      aria-label={`View ${b.city} location on map`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PanIndiaNetwork;

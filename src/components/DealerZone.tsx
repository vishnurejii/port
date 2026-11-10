import React from 'react';

interface DealerZoneProps {
  onSelectZone: (zone: string) => void;
}

export const DealerZone: React.FC<DealerZoneProps> = ({ onSelectZone }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="bg-white border border-gray-200/90 rounded-3xl p-5 sm:p-6 shadow-sm">
        <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
          Dealer Exclusive Zone
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          
          {/* Card 1 — Offer Zone */}
          <div
            onClick={() => onSelectZone('offers')}
            className="group cursor-pointer rounded-2xl p-5 border border-orange-200 bg-gradient-to-br from-orange-50/80 to-amber-50/40 hover:shadow-md hover:border-[#EE6E00] transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EE6E00] to-amber-400" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#EE6E00] text-white flex items-center justify-center text-2xl shadow-md shadow-[#EE6E00]/20 flex-shrink-0 group-hover:scale-105 transition-transform">
                🎉
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-base font-bold text-black leading-tight">Offer Zone</div>
                <div className="text-xs text-gray-500 mt-1 line-clamp-1">Exclusive dealer volume pricing</div>
                <div className="text-xs font-bold text-[#EE6E00] mt-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore Deals →
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Combo Deals */}
          <div
            onClick={() => onSelectZone('combos')}
            className="group cursor-pointer rounded-2xl p-5 border border-gray-200 bg-gradient-to-br from-gray-50 to-orange-50/30 hover:shadow-md hover:border-[#EE6E00] transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-700 to-black" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center text-2xl shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
                🎁
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-base font-bold text-black leading-tight">Combo Deals</div>
                <div className="text-xs text-gray-500 mt-1 line-clamp-1">Bundles that save you more</div>
                <div className="text-xs font-bold text-black mt-2 flex items-center gap-1 group-hover:text-[#EE6E00] transition-colors">
                  Explore Bundles →
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 — Achieve & Win */}
          <div
            onClick={() => onSelectZone('schemes')}
            className="group cursor-pointer rounded-2xl p-5 border border-orange-200 bg-gradient-to-br from-orange-50/50 to-amber-50/30 hover:shadow-md hover:border-[#EE6E00] transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EE6E00] to-orange-400" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#EE6E00] text-white flex items-center justify-center text-2xl shadow-md shadow-[#EE6E00]/20 flex-shrink-0 group-hover:scale-105 transition-transform">
                🏆
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-base font-bold text-black leading-tight">Achieve & Win</div>
                <div className="text-xs text-gray-500 mt-1 line-clamp-1">Bill more, unlock real gifts</div>
                <div className="text-xs font-bold text-black mt-2 flex items-center gap-1 group-hover:text-[#EE6E00] transition-colors">
                  View Schemes →
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { TRUST_CARDS } from '../data/portalData';

export const TrustStrip: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {TRUST_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200/90 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#EE6E00]/40 transition-all flex flex-col items-start gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-xl flex-shrink-0">
              {card.icon}
            </div>
            <div>
              <div className="font-bold text-sm text-black leading-snug">{card.title}</div>
              <div className="text-xs text-gray-500 mt-0.5 leading-tight">{card.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

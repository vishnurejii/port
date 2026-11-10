import React from 'react';
import { BRANDS } from '../data/portalData';
import { ImagePlaceholder } from './ImagePlaceholder';

interface TopBrandsProps {
  onSelectBrand: (brandName: string) => void;
  selectedBrand: string;
}

export const TopBrands: React.FC<TopBrandsProps> = ({ onSelectBrand, selectedBrand }) => {
  return (
    <section id="brands" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Section Band */}
      <div className="bg-slate-100/90 border-l-4 border-slate-700 rounded-2xl p-4 sm:p-5 mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-slate-800">
            🏆
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-black flex items-center gap-2">
              Top Brands
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              The brands customers walk in asking for — official authorized distributor stocks
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Brands */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {BRANDS.map((b) => {
          const isSelected = selectedBrand === b.name;
          return (
            <div
              key={b.name}
              onClick={() => onSelectBrand(b.name)}
              className={`cursor-pointer rounded-2xl p-4 text-center transition-all duration-200 border flex flex-col items-center justify-between group ${
                isSelected
                  ? 'bg-orange-50 border-[#EE6E00] shadow-md ring-2 ring-[#EE6E00]/20'
                  : 'bg-white border-gray-200 hover:border-[#EE6E00]/50 hover:shadow-md'
              }`}
            >
              {/* Image Placeholder for Brand Logo */}
              <div className="w-full mb-3">
                <ImagePlaceholder
                  label={b.imageLabel}
                  aspectRatio="aspect-[16/9]"
                  className="bg-gray-50 border-gray-200 group-hover:border-[#EE6E00]/40"
                  icon={b.emoji}
                />
              </div>

              <div>
                <div className="font-bold text-sm text-black group-hover:text-[#EE6E00] transition-colors leading-tight">
                  {b.name}
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">
                  {b.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

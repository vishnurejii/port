import React from 'react';
import { BRANDS, Brand } from '../data/portalData';
import { ImagePlaceholder } from './ImagePlaceholder';

interface PortfolioBrandsProps {
  onSelectBrandFilter: (brandName: string) => void;
}

export const PortfolioBrands: React.FC<PortfolioBrandsProps> = ({ onSelectBrandFilter }) => {
  return (
    <section id="brands" className="py-20 sm:py-24 bg-[#F4F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-300 text-xs font-bold text-black mb-3 shadow-sm">
              <span className="text-base">🏆</span>
              <span>AUTHORIZED TIER-1 OEM ALLIANCES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
              Our Premier Brand <span className="text-[#EE6E00]">Portfolio</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
              We hold authorized distribution agreements with 10 global technology leaders, guaranteeing authentic hardware, valid manufacturer warranties, and privileged project pricing.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs font-mono font-bold text-gray-500 uppercase block">
              Direct OEM Supply
            </span>
            <span className="text-lg font-extrabold text-black font-mono">
              100% Genuine Barcodes
            </span>
          </div>
        </div>

        {/* 10 Brands Portfolio Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              onClick={() => onSelectBrandFilter(brand.name)}
              className="bg-white border-2 border-gray-200/90 hover:border-[#EE6E00] rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1"
            >
              <div>
                {/* Image Placeholder */}
                <div className="mb-4">
                  <ImagePlaceholder
                    label={brand.imageLabel}
                    aspectRatio="aspect-[16/9]"
                    className="w-full bg-gray-50 group-hover:border-[#EE6E00]/40 transition-colors"
                    icon={brand.emoji}
                  />
                </div>

                {/* Brand Details */}
                <div className="space-y-1 mb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base text-black group-hover:text-[#EE6E00] transition-colors">
                      {brand.name}
                    </h3>
                    <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Authorized
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-snug">
                    {brand.sub}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#EE6E00]">
                <span>View Products</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { CATEGORIES } from '../data/portalData';
import { ImagePlaceholder } from './ImagePlaceholder';

interface CategorySectionProps {
  onSelectCategory: (categoryName: string) => void;
  selectedCategory: string;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory, selectedCategory }) => {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Section Band */}
      <div className="bg-orange-50/70 border-l-4 border-[#EE6E00] rounded-2xl p-4 sm:p-5 mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-[#EE6E00]">
            📂
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-black flex items-center gap-2">
              Shop by Category
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              Know what you want? Jump straight into specialized hardware lines
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
        {CATEGORIES.map((c) => {
          const isSelected = selectedCategory === c.name;
          return (
            <div
              key={c.name}
              onClick={() => onSelectCategory(c.name)}
              className={`cursor-pointer rounded-2xl p-3 text-center transition-all duration-200 border flex flex-col justify-between group ${
                isSelected
                  ? 'bg-orange-50 border-[#EE6E00] shadow-md ring-2 ring-[#EE6E00]/20'
                  : 'bg-white border-gray-200 hover:border-[#EE6E00]/50 hover:shadow-md'
              }`}
            >
              {/* Image Placeholder */}
              <div className="w-full mb-2">
                <ImagePlaceholder
                  label={c.imageLabel}
                  aspectRatio="aspect-square"
                  className="bg-gray-50 border-gray-200 group-hover:border-[#EE6E00]/40 text-xs"
                  icon={c.emoji}
                />
              </div>

              <div>
                <div className="font-bold text-xs sm:text-sm text-black group-hover:text-[#EE6E00] transition-colors leading-tight line-clamp-1">
                  {c.name}
                </div>
                <div className="text-[10px] text-gray-500 mt-0.5">
                  {c.count} items
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

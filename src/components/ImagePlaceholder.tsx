import React from 'react';
import image1Asset from '../assets/images/image1.webp';

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string;
  icon?: string;
  src?: string;
  alt?: string;
}

// Registry mapping placeholder labels to real images
export const IMAGE_REGISTRY: Record<string, string> = {
  image1: image1Asset,
  'image 1': image1Asset,
};

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  className = '',
  aspectRatio = 'aspect-video',
  icon,
  src,
  alt
}) => {
  const normalizedKey = label.toLowerCase().replace(/\s+/g, '');
  const imageSrc = src || IMAGE_REGISTRY[label.toLowerCase()] || IMAGE_REGISTRY[normalizedKey];

  if (imageSrc) {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden ${aspectRatio} ${className}`}>
        <img
          src={imageSrc}
          alt={alt || label}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${aspectRatio} bg-gray-100 hover:bg-gray-200/80 border-2 border-dashed border-gray-300 hover:border-[#EE6E00]/60 rounded-xl flex flex-col items-center justify-center p-3 text-center transition-all duration-200 select-none group ${className}`}
    >
      <div className="flex items-center gap-1.5 text-gray-500 group-hover:text-[#EE6E00] transition-colors">
        {icon && <span className="text-base">{icon}</span>}
        <span className="font-mono text-sm font-bold tracking-wider">{label}</span>
      </div>
      <span className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider font-sans">Image Space</span>
    </div>
  );
};

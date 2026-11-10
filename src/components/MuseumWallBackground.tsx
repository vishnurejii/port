import React from 'react';

export const MuseumWallBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none" aria-hidden="true">
      {/* Base Museum Gallery Wall Color (White) */}
      <div className="absolute inset-0 bg-[#FBFBFA]" />

      {/* Museum Exhibition Track Spotlights (Soft Overhead Washes) */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% -80px, rgba(255, 255, 255, 0.95) 0%, rgba(248, 248, 246, 0.4) 45%, transparent 70%),
            radial-gradient(circle at 18% 120px, rgba(255, 255, 255, 0.8) 0%, rgba(245, 245, 242, 0.25) 35%, transparent 60%),
            radial-gradient(circle at 82% 120px, rgba(255, 255, 255, 0.8) 0%, rgba(245, 245, 242, 0.25) 35%, transparent 60%),
            radial-gradient(circle at 50% 600px, rgba(255, 255, 255, 0.6) 0%, transparent 55%),
            radial-gradient(circle at 30% 1200px, rgba(255, 255, 255, 0.7) 0%, transparent 50%),
            radial-gradient(circle at 70% 1800px, rgba(255, 255, 255, 0.7) 0%, transparent 50%),
            radial-gradient(circle at 50% 2600px, rgba(255, 255, 255, 0.6) 0%, transparent 55%)
          `
        }}
      />

      {/* Subtle Fine Stucco / Plaster Texture via SVG Noise Filter */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.032] mix-blend-multiply">
        <filter id="plasterGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.1   0 0 0 0 0.1   0 0 0 0 0.1  0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#plasterGrain)" />
      </svg>

      {/* Architectural Gallery Datum Grid - Fine Faint Wall Lines */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}
      />

      {/* Subtle Museum Vignette (Very soft corner falloff mimicking gallery room depth) */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 65%, rgba(15, 23, 42, 0.025) 100%)'
        }}
      />
    </div>
  );
};

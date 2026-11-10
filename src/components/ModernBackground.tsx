import React from 'react';

export const ModernBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle top ambient gradient wash */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(ellipse at 50% 20%, rgba(238, 110, 0, 0.06) 0%, rgba(59, 130, 246, 0.04) 40%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#0F172A 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Soft secondary ambient glow in lower viewport */}
      <div 
        className="absolute top-[40%] right-[-10%] w-[800px] h-[800px] rounded-full opacity-30 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(238, 110, 0, 0.05) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />
    </div>
  );
};

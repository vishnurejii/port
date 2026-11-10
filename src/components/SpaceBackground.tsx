import React, { useEffect, useRef } from 'react';

export const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Star model
    interface Star {
      x: number;
      y: number;
      size: number;
      alpha: number;
      baseAlpha: number;
      speedY: number;
      speedX: number;
      twinkleSpeed: number;
      twinkleOffset: number;
    }

    const starCount = Math.min(Math.floor((width * height) / 10000), 160);
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.2,
        baseAlpha: Math.random() * 0.7 + 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        speedX: (Math.random() - 0.5) * 0.15,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle drifting stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Autonomous slow zero-gravity drift
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around borders
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Gentle twinkle
        const alpha = star.baseAlpha + Math.sin(time * star.twinkleSpeed * 50 + star.twinkleOffset) * 0.25;
        const clampedAlpha = Math.max(0.1, Math.min(1, alpha));

        ctx.fillStyle = `rgba(255, 255, 255, ${clampedAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle soft glow for brighter, larger stars
        if (star.size > 1.2) {
          ctx.fillStyle = `rgba(238, 110, 0, ${clampedAlpha * 0.2})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#030712]">
      {/* Deep cosmic nebula gradients */}
      <div 
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] rounded-full opacity-20 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(238,110,0,0.4) 0%, rgba(59,130,246,0.15) 50%, transparent 80%)'
        }}
      />
      <div 
        className="absolute top-[35%] -left-[10%] w-[800px] h-[800px] rounded-full opacity-15 blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.3) 0%, rgba(30,27,75,0.2) 60%, transparent 80%)'
        }}
      />
      <div 
        className="absolute top-[65%] -right-[10%] w-[900px] h-[900px] rounded-full opacity-15 blur-[150px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(238,110,0,0.3) 0%, rgba(99,102,241,0.15) 60%, transparent 80%)'
        }}
      />
      <div 
        className="absolute bottom-0 left-1/3 w-[800px] h-[600px] rounded-full opacity-20 blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)'
        }}
      />

      {/* Subtle cosmic coordinate grid */}
      <div className="absolute inset-0 bg-cosmic-grid opacity-30" />

      {/* Dynamic Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

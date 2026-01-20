
import React, { useMemo } from 'react';

export const Community: React.FC = () => {
  const shoePool = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=60&w=250&auto=format',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=60&w=250&auto=format',
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=60&w=250&auto=format',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=60&w=250&auto=format',
    'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=60&w=250&auto=format',
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=60&w=250&auto=format',
    'https://images.unsplash.com/photo-1539185441755-769473a23570?q=60&w=250&auto=format',
    'https://images.unsplash.com/photo-1520639889410-d24199dd024a?q=60&w=250&auto=format',
  ];

  const row1 = useMemo(() => Array.from({ length: 24 }, (_, i) => shoePool[i % shoePool.length]), [shoePool]);
  const row2 = useMemo(() => Array.from({ length: 24 }, (_, i) => shoePool[(i + 4) % shoePool.length]), [shoePool]);

  const getArchY = (index: number, total: number, isTop: boolean) => {
    const x = (index / (total - 1)) * 2 - 1;
    const curvature = 160; 
    const y = Math.pow(x, 2) * curvature;
    return isTop ? y : -y;
  };

  return (
    <section id="community" className="py-64 px-6 max-w-[2400px] mx-auto text-center relative overflow-hidden content-auto">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(54,203,167,0.06)_0%,transparent_90%)] pointer-events-none"></div>

      <div className="relative z-10 space-y-56">
        <div className="relative">
          <div className="flex justify-center gap-6 py-24 animate-moveX-liquid">
            {row1.map((img, i) => (
              <div 
                key={`top-${i}`} 
                className="group relative flex-shrink-0"
                style={{ 
                  transform: `translateY(${getArchY(i, row1.length, true)}px)`,
                }}
              >
                <div 
                  className="w-20 h-20 md:w-36 md:h-36 rounded-[40px] overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl animate-wave-smooth transition-all duration-1000 group-hover:scale-[2] group-hover:z-[100] group-hover:-translate-y-12 group-hover:rotate-6 group-hover:border-brand-accent cursor-crosshair"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <img src={img} loading="lazy" decoding="async" className="w-full h-full object-cover" alt="Collective Asset" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto py-12 relative px-4">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[2px] h-40 bg-gradient-to-t from-brand-accent/40 to-transparent"></div>
          <span className="text-[12px] font-black uppercase tracking-[0.7em] text-brand-accent/60 mb-10 block italic">Universal Motion Lab</span>
          <h2 className="text-7xl md:text-[140px] font-black mb-12 tracking-tighter uppercase leading-[0.75] italic">
            Step into the<br/><span className="text-brand-accent text-glow">Liquid Future</span>
          </h2>
          <div className="mt-24 flex flex-col items-center gap-8">
             <div className="flex -space-x-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-16 h-16 rounded-full border-4 border-white dark:border-zinc-950 bg-zinc-200 overflow-hidden shadow-2xl transition-transform hover:-translate-y-4">
                    <img src={`https://i.pravatar.cc/150?u=user_rb_${i}`} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-16 h-16 rounded-full border-4 border-white dark:border-zinc-950 bg-zinc-900 text-brand-accent flex items-center justify-center text-[12px] font-black italic shadow-2xl">+100K</div>
             </div>
             <button className="px-14 py-6 bg-brand-accent text-white rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-2xl active:translate-y-0.5 transition-transform hover:scale-105">
                Join the Collective Stride
             </button>
          </div>
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[2px] h-40 bg-gradient-to-b from-brand-accent/40 to-transparent"></div>
        </div>

        <div className="relative">
          <div className="flex justify-center gap-6 py-24 animate-moveX-liquid-reverse">
            {row2.map((img, i) => (
              <div 
                key={`bottom-${i}`} 
                className="group relative flex-shrink-0"
                style={{ transform: `translateY(${getArchY(i, row2.length, false)}px)` }}
              >
                <div 
                  className="w-20 h-20 md:w-36 md:h-36 rounded-[40px] overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl animate-wave-smooth transition-all duration-1000 group-hover:scale-[2] group-hover:z-[100] group-hover:translate-y-12 cursor-crosshair"
                  style={{ animationDelay: `${i * 0.3 + 0.5}s` }}
                >
                  <img src={img} loading="lazy" decoding="async" className="w-full h-full object-cover" alt="Collective Asset" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

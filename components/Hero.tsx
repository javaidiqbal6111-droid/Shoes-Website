
import React, { useEffect, useState, useMemo } from 'react';

interface HeroProps {
  onCardClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCardClick }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const shoes = useMemo(() => [
    { id: 1, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format', name: 'Velocity Crimson' },
    { id: 2, img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format', name: 'Alabaster Air' },
    { id: 3, img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format', name: 'Jade Runner' },
    { id: 4, img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format', name: 'Cobalt Cloud' },
    { id: 5, img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=600&auto=format', name: 'Neon Flux' },
    { id: 6, img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=600&auto=format', name: 'Pink Pulse' },
    { id: 7, img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=600&auto=format', name: 'Amber Trail' },
    { id: 8, img: 'https://images.unsplash.com/photo-1512374382149-433a72b9a5a5?q=80&w=600&auto=format', name: 'Dune Step' },
    { id: 9, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format', name: 'Amethyst Glide' },
    { id: 10, img: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?q=80&w=600&auto=format', name: 'Glacier Peak' },
    { id: 11, img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=600&auto=format', name: 'Mono Stealth' },
    { id: 12, img: 'https://images.unsplash.com/photo-1511556532299-8f660fc26c06?q=80&w=600&auto=format', name: 'Silver Surge' },
  ], []);

  const getStackPos = (index: number, total: number) => {
    const t = (index / (total - 1)) * 2 - 1;
    const xOffset = t * 240; 
    const yOffset = Math.abs(t) * 80; 
    const rotation = t * 20; 
    return { x: xOffset, y: yOffset, r: rotation };
  };

  return (
    <section className="pt-8 pb-32 px-6 max-w-[2200px] mx-auto overflow-hidden">
      <div className="rounded-[88px] border border-black/5 dark:border-white/5 bg-white/60 dark:bg-white/[0.03] backdrop-blur-3xl shadow-4xl relative overflow-hidden transition-all duration-1000 min-h-[1200px] flex flex-col items-center">
        
        <div className="absolute top-1/2 left-1/2 w-[1400px] h-[1400px] bg-brand-accent/5 blur-[250px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="pt-32 pb-24 text-center z-10 px-6 max-w-5xl animate-hero-text">
          <div className="flex flex-col items-center mb-16">
             <span className="text-brand-accent text-sm font-black uppercase tracking-[0.8em] italic mb-6">The Collective Motion</span>
             <span className="w-24 h-[3px] bg-brand-accent rounded-full"></span>
          </div>
          
          <h1 className="text-7xl md:text-[120px] font-black tracking-tighter leading-[0.85] mb-12 uppercase italic">
            A place to display your <br/>
            <span className="text-brand-accent text-glow-brand">Masterpiece</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-black/50 dark:text-white/40 leading-relaxed text-2xl mb-16 font-medium italic">
            Artists can display their masterpieces, and buyers can discover and acquire elite motion gear seamlessly. 
            A dynamic community where creativity meets peak performance.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <button 
              onClick={onCardClick}
              className="px-14 py-6 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all hover:bg-brand-accent dark:hover:bg-brand-accent dark:hover:text-white shadow-2xl active:translate-y-1"
            >
              Join the Circle
            </button>
            <button className="px-14 py-6 bg-white/70 dark:bg-zinc-800/40 border border-black/5 dark:border-white/10 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all hover:bg-black/5 dark:hover:bg-white/10 shadow-lg backdrop-blur-xl active:translate-y-1">
              Read Story
            </button>
          </div>
        </div>

        <div className="relative w-full h-[550px] flex items-center justify-center perspective-3000 z-10 mt-12 mb-20">
          <div className="stack-container relative w-full h-full flex items-center justify-center animate-float-stack">
            {shoes.map((shoe, i) => {
              const config = getStackPos(i, shoes.length);
              return (
                <div
                  key={shoe.id}
                  onClick={onCardClick}
                  className={`absolute w-44 h-56 md:w-56 md:h-72 rounded-[48px] overflow-hidden shadow-4xl border-4 border-white dark:border-zinc-900 group selectable-card cursor-pointer opacity-0 ${isMounted ? 'animate-stack-reveal' : ''}`}
                  style={{
                    '--target-x': `${config.x}px`,
                    '--target-y': `${config.y}px`,
                    '--target-r': `${config.r}deg`,
                    animationDelay: `${i * 0.1}s`,
                    zIndex: i,
                  } as React.CSSProperties}
                >
                  <div className="relative w-full h-full bg-zinc-100 dark:bg-zinc-800">
                    <img 
                      src={shoe.img} 
                      alt={shoe.name} 
                      loading={i > 3 ? "lazy" : "eager"}
                      decoding="async"
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" 
                    />
                    
                    <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-zinc-900/95 text-[9px] font-black text-brand-accent shadow-2xl opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 italic uppercase tracking-widest">
                      @{shoe.name.split(' ')[0].toLowerCase()}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-left">
                       <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="text-white text-2xl font-black uppercase tracking-tighter italic mb-3 leading-none">{shoe.name}</h3>
                          <div className="w-10 h-1 bg-brand-accent rounded-full"></div>
                       </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-zinc-950 flex items-center overflow-hidden">
           <div className="flex whitespace-nowrap animate-moveX-liquid text-white/5 text-[14px] font-black uppercase tracking-[1.8em] italic">
             {[...Array(6)].map((_, i) => (
               <span key={i} className="mx-36 shrink-0">Showcase • Sell • Acquire • Masterpiece • Community • Motion Laboratory</span>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

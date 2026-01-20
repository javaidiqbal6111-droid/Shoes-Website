
import React, { useRef, useMemo } from 'react';

interface MarketplaceProps {
  onCardClick?: () => void;
}

export const Marketplace: React.FC<MarketplaceProps> = ({ onCardClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const moveBy = 400;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - moveBy : scrollLeft + moveBy,
        behavior: 'smooth'
      });
    }
  };

  const shoes = useMemo(() => [
    { title: 'Neon Flux Pro', user: '2024 Release', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=70&w=450&auto=format' },
    { title: 'Skyline Hybrid', user: 'Limited Edition', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=70&w=450&auto=format' },
    { title: 'Onyx Streak', user: 'Performance', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=70&w=450&auto=format' },
    { title: 'Cloud Walker', user: 'New Arrival', img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=70&w=450&auto=format' },
    { title: 'Ultra Boost-X', user: 'Men Series', img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=70&w=450&auto=format' },
  ], []);

  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto overflow-hidden content-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <span className="text-[11px] tracking-[0.3em] font-black text-brand-accent uppercase mb-6 block">HOTTEST DROPS</span>
          <h2 className="text-5xl md:text-8xl font-black leading-tight mb-6 uppercase tracking-tighter italic">Live the Chase.</h2>
          <p className="text-black/50 dark:text-white/50 text-xl max-w-xl">
            Explore our curated selection of high-traction, ultra-breathable joggers built for the urban marathon.
          </p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-14 h-14 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black/5 transition-all text-xl"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-14 h-14 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black/5 transition-all text-xl"
            aria-label="Scroll right"
          >
            →
          </button>
          <button 
            onClick={onCardClick}
            className="px-10 py-5 bg-brand-accent text-white rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-2xl shadow-brand-accent/30"
          >
            Shop Now
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto custom-scrollbar scroll-smooth snap-x snap-mandatory pb-12"
      >
        {shoes.map((shoe, idx) => (
          <article 
            key={idx} 
            onClick={onCardClick}
            className="snap-start flex-shrink-0 w-[350px] group cursor-pointer"
          >
            <div className="relative rounded-[56px] overflow-hidden border-4 border-white dark:border-zinc-800 shadow-3xl aspect-[3/4] mb-8 transform group-hover:-translate-y-4 transition-all duration-700">
              <img src={shoe.img} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={shoe.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
                <div className="px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[9px] font-black tracking-widest uppercase">
                  {shoe.user}
                </div>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-zinc-900 shadow-2xl text-xl font-bold">↗</div>
              </div>
            </div>
            <h4 className="text-2xl font-black uppercase italic tracking-tighter px-4 group-hover:text-brand-accent transition-colors">{shoe.title}</h4>
          </article>
        ))}
      </div>
    </section>
  );
};

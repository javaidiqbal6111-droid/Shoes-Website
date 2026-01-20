
import React, { useEffect, useState, useMemo } from 'react';
import { Navbar } from './Navbar';
import { CartItem } from '../App';

interface GalleryViewProps {
  onClose: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onAddToCart: (item: CartItem) => void;
  cartCount: number;
  onCartClick: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onClose, theme, toggleTheme, onAddToCart, cartCount, onCartClick }) => {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState<'all' | 'men' | 'women'>('all');

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const products = useMemo(() => [
    { id: '1', title: 'Velocity Racer', price: 129.99, gender: 'men', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=70&w=400&auto=format' },
    { id: '2', title: 'Lunar Glide', price: 89.99, gender: 'women', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=70&w=400&auto=format' },
    { id: '3', title: 'Carbon Strike', price: 159.99, gender: 'men', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=70&w=400&auto=format' },
    { id: '4', title: 'Swift Petal', price: 110.00, gender: 'women', img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=70&w=400&auto=format' },
    { id: '5', title: 'Dark Matter', price: 199.99, gender: 'men', img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=70&w=400&auto=format' },
    { id: '6', title: 'Arctic Flow', price: 135.50, gender: 'women', img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=70&w=400&auto=format' },
    { id: '7', title: 'Trail Master', price: 145.00, gender: 'men', img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=70&w=400&auto=format' },
    { id: '8', title: 'Zen Jogger', price: 95.00, gender: 'women', img: 'https://images.unsplash.com/photo-1520639889410-d24199dd024a?q=70&w=400&auto=format' },
  ], []);

  const filteredItems = useMemo(() => products.filter(p => filter === 'all' || p.gender === filter), [products, filter]);

  return (
    <div className={`fixed inset-0 z-[100] overflow-y-auto bg-[#f8fafc] dark:bg-[#0b0c0f] transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${mounted ? 'translate-y-0' : 'translate-y-full'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} cartCount={cartCount} onCartClick={onCartClick} />
      
      <main className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <button 
              onClick={onClose}
              className="flex items-center gap-2 group text-black/40 dark:text-white/40 hover:text-brand-accent transition-colors"
            >
              <span className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all">←</span>
              <span className="font-black uppercase text-xs tracking-widest">Store Home</span>
            </button>
            <h2 className="text-6xl font-black uppercase tracking-tighter italic">The Catalog.</h2>
          </div>
          
          <div className="flex p-1 bg-black/5 dark:bg-white/5 rounded-full border border-black/5 w-fit">
            {(['all', 'men', 'women'] as const).map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-white dark:bg-zinc-800 shadow-xl text-brand-accent' : 'opacity-40'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredItems.map((item, idx) => (
            <article 
              key={item.id} 
              className={`group transition-all duration-700 ease-out`}
              style={{ 
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(32px)'
              }}
            >
              <div className="relative rounded-[48px] overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl aspect-[3/4] mb-6 transform group-hover:-translate-y-4 transition-all duration-700">
                <img src={item.img} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-white/90 text-zinc-900 font-black text-[10px] shadow-xl uppercase tracking-widest italic">${item.price}</div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <button 
                    onClick={() => onAddToCart({ id: item.id, name: item.title, price: item.price, img: item.img, size: 'US 10' })}
                    className="w-full py-4 bg-brand-accent text-white rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                  >
                    Quick Add +
                  </button>
                </div>
              </div>
              <div className="px-4">
                <span className="block text-[9px] font-black uppercase tracking-[0.3em] opacity-30 mb-1">{item.gender}'s collection</span>
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-black uppercase tracking-tighter">{item.title}</h4>
                  <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-40 text-center pb-20">
          <p className="text-black/30 dark:text-white/30 text-[10px] font-black tracking-[0.4em] uppercase mb-10">You've explored the peak of performance</p>
          <button 
            onClick={onClose}
            className="px-12 py-5 bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white rounded-full font-black uppercase tracking-widest text-sm hover:scale-110 transition-all shadow-2xl"
          >
            Back to Home
          </button>
        </div>
      </main>
    </div>
  );
};

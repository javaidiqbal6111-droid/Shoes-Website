
import React, { useState } from 'react';

export const Vision: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pro' | 'casual'>('pro');

  const gearItems = [
    { title: 'Carbon Plate X', user: 'Tech', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop' },
    { title: 'Cloud Foam 4', user: 'Comf', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop' },
    { id: 3, title: 'Mesh Breez', user: 'Cool', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop' },
    { id: 4, title: 'Grip Master', user: 'Wild', img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=500&fit=crop' },
    { id: 5, title: 'Neon Pulse', user: 'Dark', img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=500&fit=crop' },
    { id: 6, title: 'Ice Glide', user: 'Lite', img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=500&fit=crop' },
  ];

  return (
    <section id="solution" className="py-24 px-6 max-w-[1200px] mx-auto">
      <div className="grid lg:grid-cols-[450px,1fr] gap-16 items-start">
        <div className="sticky top-24">
          <span className="text-[11px] tracking-[0.3em] font-black text-brand-accent uppercase mb-6 block">MOTION VISION</span>
          <h2 className="text-5xl md:text-6xl font-black leading-[1] mb-8 uppercase tracking-tighter italic">
            Defining the Future of Human Motion.
          </h2>
          <p className="text-black/50 dark:text-white/50 text-xl mb-10 leading-relaxed font-medium">
            Every stride tells a story of perseverance. Our performance lab 
            integrates bio-mechanical data with cutting-edge materials to redefine speed.
          </p>
          <button className="px-8 py-4 rounded-full border border-black/10 dark:border-white/10 font-black text-xs uppercase tracking-widest hover:bg-black/5 transition-all">
            Innovation Report
          </button>
          
          <div className="mt-16 flex flex-wrap gap-4 opacity-30">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-12 h-12 rounded-2xl border-2 border-black/10 flex items-center justify-center font-black text-xs italic">{i+1}</div>
            ))}
          </div>
        </div>

        <div className="bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[60px] border border-black/5 dark:border-white/5 p-10 shadow-3xl">
          <div className="flex items-center justify-between mb-12">
            <div className="flex p-1.5 bg-black/5 dark:bg-white/5 rounded-full border border-black/5">
              <button 
                onClick={() => setActiveTab('pro')}
                className={`px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'pro' ? 'bg-white dark:bg-zinc-800 shadow-xl text-brand-accent' : 'text-black/40 dark:text-white/40'}`}
              >
                Pro Lab
              </button>
              <button 
                onClick={() => setActiveTab('casual')}
                className={`px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'casual' ? 'bg-white dark:bg-zinc-800 shadow-xl text-brand-accent' : 'text-black/40 dark:text-white/40'}`}
              >
                City Run
              </button>
            </div>
            <button className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center text-2xl font-black hover:scale-110 transition-transform shadow-xl">
              +
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {gearItems.map((item, i) => (
              <div key={i} className="group relative">
                <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-[3/4] border-4 border-white dark:border-zinc-800 transform group-hover:-translate-y-3 transition-all duration-700">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 dark:bg-zinc-800/95 text-[9px] font-black shadow-2xl uppercase tracking-widest text-brand-accent">
                  {item.user}
                </div>
                <h4 className="mt-4 text-[10px] font-black opacity-40 group-hover:opacity-100 group-hover:text-brand-accent transition-all uppercase tracking-[0.2em] italic">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


import React from 'react';

export const EcommerceFeature: React.FC = () => {
  const logos = [
    { name: 'RunWorld', icon: 'RW' },
    { name: 'AthletePlus', icon: 'A+' },
    { name: 'Motion', icon: 'M' },
    { name: 'SprintLab', icon: 'SL' },
    { name: 'LinearStep', icon: 'LS' },
    { name: 'GripCo', icon: 'G' },
  ];

  return (
    <section id="ecommerce" className="py-24 px-6 max-w-[1200px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-[11px] tracking-[0.3em] font-black text-brand-accent uppercase mb-6 block">PERFORMANCE ECOSYSTEM</span>
          <h2 className="text-5xl md:text-7xl font-black leading-[1] mb-8 uppercase tracking-tighter italic">
            Discover, Test,<br />
            <span className="text-brand-accent">& Acquire Elite</span> Gear<br />
            in Our Hub.
          </h2>
          <p className="text-black/50 dark:text-white/50 text-xl mb-10 leading-relaxed max-w-lg font-medium">
            SoleStride isn't just a store; it's a dynamic community where performance runners 
            and design enthusiasts converge to push the boundaries of movement.
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="#pricing" className="px-10 py-5 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-2xl shadow-black/20">
              Join Elite Membership
            </a>
            <a href="#solution" className="px-10 py-5 bg-transparent border border-black/10 dark:border-white/10 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:bg-black/5">
              Our Tech
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -top-10 -right-4 px-4 py-2 rounded-full border border-black/5 bg-white/90 dark:bg-zinc-800 text-[10px] font-black text-brand-accent shadow-xl z-20 animate-pulse uppercase tracking-widest">@pro_runner</div>
          <div className="absolute top-20 -left-10 px-4 py-2 rounded-full border border-black/5 bg-white/90 dark:bg-zinc-800 text-[10px] font-black text-blue-500 shadow-xl z-20 uppercase tracking-widest">@marathon_man</div>
          <div className="absolute bottom-10 -right-8 px-4 py-2 rounded-full border border-black/5 bg-white/90 dark:bg-zinc-800 text-[10px] font-black text-brand-pink shadow-xl z-20 uppercase tracking-widest">@fit_track</div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6 pt-16">
              <div className="rounded-[40px] overflow-hidden shadow-3xl rotate-[-4deg] border-4 border-white dark:border-zinc-900 aspect-[3/4] transition-transform duration-500 group-hover:rotate-0">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=700&fit=crop" className="w-full h-full object-cover" alt="Performance Sneaker" />
              </div>
              <div className="rounded-[40px] overflow-hidden shadow-3xl rotate-[3deg] border-4 border-white dark:border-zinc-900 aspect-square transition-transform duration-500 group-hover:rotate-0">
                <img src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop" className="w-full h-full object-cover" alt="Running Gear" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-[40px] overflow-hidden shadow-3xl rotate-[4deg] border-4 border-white dark:border-zinc-900 aspect-square transition-transform duration-500 group-hover:rotate-0">
                <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop" className="w-full h-full object-cover" alt="Jogger Sole" />
              </div>
              <div className="rounded-[40px] overflow-hidden shadow-3xl rotate-[-3deg] border-4 border-white dark:border-zinc-900 aspect-[3/4] transition-transform duration-500 group-hover:rotate-0">
                <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=700&fit=crop" className="w-full h-full object-cover" alt="Elite Footwear" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-16 border-t border-black/5 dark:border-white/5">
        <div className="text-[10px] font-black text-black/30 dark:text-white/20 uppercase tracking-[0.4em] mb-12 text-center italic">Supported by Global Performance Partners</div>
        <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {logos.map(logo => (
            <div key={logo.name} className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-black text-[10px] uppercase tracking-tighter group-hover:bg-brand-accent transition-colors">{logo.icon}</div>
              <span className="font-black text-sm tracking-widest uppercase italic">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


import React from 'react';

export const Banner: React.FC = () => {
  return (
    <section id="strategy" className="py-24 px-6 max-w-[1200px] mx-auto">
      <div className="rounded-[60px] p-12 bg-gradient-to-br from-[#e7ff52] to-brand-accent border border-black/5 shadow-3xl overflow-hidden grid md:grid-cols-[1.3fr,0.7fr] gap-12 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="flex flex-col justify-center relative z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-black/40">Exclusive Member Access</span>
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6 tracking-tighter leading-[0.9] uppercase italic">Inspired by Speed. ✨ The Pro-Runner Drop.</h2>
          <p className="text-black/60 text-xl leading-relaxed mb-10 max-w-lg font-medium">
            Join the inner circle. Get early access to limited performance colorways, 
            bi-weekly motion analysis, and free global express shipping.
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="#contact" className="px-10 py-5 bg-zinc-900 text-white rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-2xl">
              Apply to Inner Circle
            </a>
            <a href="#archives" className="px-10 py-5 bg-white/40 border border-black/5 text-zinc-900 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:bg-white/60">
              See Drops
            </a>
          </div>
        </div>
        
        <div className="relative hidden md:block group">
          <div className="h-80 rounded-[48px] border-4 border-white/40 bg-gradient-to-tr from-brand-accent to-emerald-400 shadow-inner flex items-center justify-center overflow-hidden">
             <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop" className="w-full h-full object-cover transform scale-125 rotate-12 group-hover:rotate-0 transition-transform duration-1000" alt="Banner Shoe" />
          </div>
          <div className="absolute -left-8 -bottom-8 flex gap-3 p-4 bg-white/90 rounded-3xl shadow-2xl border border-black/5">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="w-8 h-8 rounded-xl border border-black/10 bg-brand-accent flex items-center justify-center text-[10px] font-black text-white italic">Elite</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

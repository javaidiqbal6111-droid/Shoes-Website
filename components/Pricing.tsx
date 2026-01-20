
import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 max-w-[1120px] mx-auto">
      <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-12 items-center">
        <div>
          <span className="text-2xl mb-4 block opacity-40">•</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Membership</h2>
          <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed max-w-md">
            Offering buyers a chance to own a piece of that narrative.
            This platform is where stories come alive through art.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-zinc-900/40 shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="text-xs font-medium text-black/60 dark:text-white/60 mb-6 uppercase">Monthly</div>
              <div className="flex items-start font-bold mb-2">
                <span className="text-base mt-1 mr-0.5">$</span>
                <span className="text-4xl tracking-tight">9</span>
                <span className="text-base mt-1 opacity-70">.99</span>
              </div>
            </div>
            <div className="text-[11px] text-black/40 dark:text-white/40">Regular monthly payment</div>
          </div>

          <div className="p-6 rounded-2xl border-none bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-2xl flex flex-col justify-between h-full transform lg:scale-105">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-medium uppercase text-white/90">Quarterly</span>
                <span className="text-[10px] px-2 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/20 font-bold uppercase">Popular</span>
              </div>
              <div className="flex items-start font-bold mb-2">
                <span className="text-base mt-1 mr-0.5">$</span>
                <span className="text-4xl tracking-tight">12</span>
                <span className="text-base mt-1 opacity-70">.99</span>
              </div>
            </div>
            <div className="text-[11px] text-white/80">Regular monthly payment</div>
          </div>

          <div className="p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-zinc-900/40 shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="text-xs font-medium text-black/60 dark:text-white/60 mb-6 uppercase">Annually</div>
              <div className="flex items-start font-bold mb-2">
                <span className="text-base mt-1 mr-0.5">$</span>
                <span className="text-4xl tracking-tight">19</span>
                <span className="text-base mt-1 opacity-70">.99</span>
              </div>
            </div>
            <div className="text-[11px] text-black/40 dark:text-white/40">Plus $5.66 off for 1 year</div>
          </div>
        </div>
      </div>
    </section>
  );
};

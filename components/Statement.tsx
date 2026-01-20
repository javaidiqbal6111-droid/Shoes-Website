
import React from 'react';

export const Statement: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-[1200px] mx-auto">
      <div className="rounded-[64px] border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] backdrop-blur-3xl shadow-3xl py-24 px-12 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-brand-accent/5 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-500/5 blur-[100px] rounded-full"></div>
        
        <h3 className="text-3xl md:text-5xl font-black leading-[1.2] max-w-5xl mx-auto relative z-10 uppercase tracking-tighter italic">
          Whether you’re a <span className="px-4 py-1.5 rounded-2xl bg-brand-accent text-white inline-block -rotate-1 shadow-lg shadow-brand-accent/20">pro athlete</span> pushing limits<br className="hidden md:block" />
          or a walker seeking <span className="px-4 py-1.5 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 inline-block rotate-1 shadow-xl">comfort</span>, SoleStride<br className="hidden md:block" />
          connects you to the world of movement.
        </h3>
        
        <div className="mt-16 flex justify-center items-center gap-6 opacity-20">
           <div className="h-[2px] w-24 bg-current"></div>
           <div className="flex gap-4">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="w-2.5 h-2.5 rounded-full bg-brand-accent"></span>
              ))}
           </div>
           <div className="h-[2px] w-24 bg-current"></div>
        </div>
      </div>
    </section>
  );
};

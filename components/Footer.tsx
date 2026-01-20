
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-32 pb-12 px-6 max-w-[1200px] mx-auto border-t border-black/5 dark:border-white/5 bg-white/5 dark:bg-transparent">
      <div className="grid md:grid-cols-2 lg:grid-cols-[1.6fr,1fr,1fr,1fr] gap-16 mb-20">
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <span className="text-brand-accent">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </span>
            <span className="font-black text-2xl tracking-tighter uppercase italic">SoleStride</span>
          </div>
          <p className="text-black/50 dark:text-white/40 leading-relaxed text-base max-w-sm font-medium">
            Defining the urban pace since 2024. Our gear celebrates the motion of life, 
            bridging performance engineering with street aesthetic.
          </p>
          <div className="flex gap-4">
            {['Instagram', 'Twitter', 'Tiktok', 'Youtube'].map((social, i) => (
              <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 hover:bg-brand-accent hover:text-white transition-all text-[10px] font-black uppercase tracking-tighter">
                {social.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em] mb-4 italic">Collections</div>
          {['Performance Joggers', 'Street Runners', 'Elite Track', 'Casual Walkers', 'Limited Drops'].map(item => (
            <a key={item} href="#" className="text-sm font-black uppercase tracking-tighter text-black/60 dark:text-white/60 hover:text-brand-accent transition-colors">{item}</a>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <div className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em] mb-4 italic">Support</div>
          <a href="#" className="text-sm font-black uppercase tracking-tighter text-black/60 dark:text-white/60 hover:text-brand-accent flex items-center">
            Tracking <span className="ml-2 text-[8px] px-2 py-0.5 rounded-full bg-brand-accent text-white font-black uppercase italic">Live</span>
          </a>
          {['Shipping', 'Returns', 'Size Guide', 'Member FAQ'].map(item => (
            <a key={item} href="#" className="text-sm font-black uppercase tracking-tighter text-black/60 dark:text-white/60 hover:text-brand-accent transition-colors">{item}</a>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <div className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em] mb-4 italic">SoleStride</div>
          <a href="#" className="text-sm font-black uppercase tracking-tighter text-black/60 dark:text-white/60 hover:text-brand-accent">About Us</a>
          <a href="#" className="text-sm font-black uppercase tracking-tighter text-black/60 dark:text-white/60 hover:text-brand-accent">Careers</a>
          <a href="#" className="text-sm font-black uppercase tracking-tighter text-black/60 dark:text-white/60 hover:text-brand-accent flex items-center">
            Store Locator <span className="ml-2 text-[8px] px-2 py-0.5 rounded-full bg-brand-pink text-white font-black uppercase italic">New</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-black/5 dark:border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-black/30 dark:text-white/20 italic">
        <span>© 2025 SoleStride Performance Lab. All rights reserved.</span>
        <div className="flex gap-8">
           <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a>
           <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms</a>
           <a href="#top" className="hover:text-brand-accent flex items-center gap-2 transition-colors">
            To the Top <span className="text-lg">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

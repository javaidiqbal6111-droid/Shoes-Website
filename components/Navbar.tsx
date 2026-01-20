
import React, { useState } from 'react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  cartCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Men', href: '#men' },
    { name: 'Women', href: '#women' },
    { name: 'Performance', href: '#performance', dot: true },
    { name: 'New Drops', href: '#new' },
    { name: 'Sale', href: '#sale' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-black/5 dark:border-white/5 bg-white/30 dark:bg-black/30">
      <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="text-brand-accent">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </span>
          <span className="font-black text-lg tracking-tighter uppercase opacity-90 group-hover:opacity-100 transition-opacity">SoleStride</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-black/60 dark:text-white/70">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="hover:text-brand-accent transition-all hover:-translate-y-0.5 flex items-center"
            >
              {link.dot && <span className="w-1 h-1 rounded-full bg-brand-accent mr-2"></span>}
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={onCartClick}
            className="relative w-10 h-10 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition-all"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white dark:border-black">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition-all"
          >
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button 
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1 rounded-full border border-black/10 dark:border-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-4 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-4 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="absolute top-16 right-6 w-56 p-4 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl border border-black/10 dark:border-white/10 shadow-2xl md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold uppercase tracking-tight" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

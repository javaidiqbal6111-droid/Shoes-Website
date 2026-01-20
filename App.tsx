
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EcommerceFeature } from './components/EcommerceFeature';
import { Statement } from './components/Statement';
import { Vision } from './components/Vision';
import { Community } from './components/Community';
import { Marketplace } from './components/Marketplace';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { GalleryView } from './components/GalleryView';
import { CartSidebar } from './components/CartSidebar';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  img: string;
  size: string;
}

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });
  const [showGallery, setShowGallery] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const openGallery = () => {
    setShowGallery(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setShowGallery(false);
    document.body.style.overflow = 'auto';
  };

  const addToCart = (item: CartItem) => {
    setCart(prev => [...prev, item]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-brand-accent/30 font-sans">
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-40 dark:opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-accent/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[25%] right-[20%] w-[900px] h-[600px] bg-blue-500/10 blur-[110px] rounded-full"></div>
      </div>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onRemove={removeFromCart} 
      />

      {!showGallery ? (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
          <main className="space-y-0">
            <Hero onCardClick={openGallery} />
            <EcommerceFeature />
            <Statement />
            <Vision />
            <Community />
            <Marketplace onCardClick={openGallery} />
            <Banner />
            <div className="mt-20">
              <Footer />
            </div>
          </main>
        </>
      ) : (
        <GalleryView 
          onClose={closeGallery} 
          theme={theme} 
          toggleTheme={toggleTheme} 
          onAddToCart={addToCart}
          cartCount={cart.length}
          onCartClick={() => setIsCartOpen(true)}
        />
      )}
    </div>
  );
};

export default App;

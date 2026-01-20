
import React from 'react';
import { CartItem } from '../App';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (index: number) => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <div 
        className={`fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div className={`fixed top-0 right-0 h-full w-full max-w-md z-[201] bg-white dark:bg-zinc-900 shadow-3xl transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col p-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-black uppercase tracking-tighter italic">Your Bag</h2>
            <button onClick={onClose} className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center font-bold">✕</button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 custom-scrollbar">
            {items.length === 0 ? (
              <div className="text-center py-20 opacity-30 italic">Bag is empty. Time to step up.</div>
            ) : (
              items.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-black/5 shrink-0">
                    <img src={item.img} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="font-bold text-sm uppercase">{item.name}</h4>
                      <p className="text-[10px] opacity-50 uppercase font-medium">Size: {item.size}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm text-brand-accent">${item.price}</span>
                      <button onClick={() => onRemove(i)} className="text-[10px] font-bold uppercase text-red-500 hover:underline">Remove</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="pt-8 border-t border-black/5 dark:border-white/10 mt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold uppercase opacity-50">Subtotal</span>
              <span className="text-2xl font-black">${total.toFixed(2)}</span>
            </div>
            <button className="w-full py-5 bg-brand-accent text-white rounded-full font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-brand-accent/20">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

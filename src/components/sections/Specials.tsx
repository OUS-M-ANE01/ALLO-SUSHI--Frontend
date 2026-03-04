import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const specials = [
  {
    name: 'Shake Roll',
    description: 'Saumon, avocat, cheese, ext tobiko, saumon',
    price: '6 000',
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=800&q=80',
    featured: true,
  },
  {
    name: 'Dragon',
    description: 'Avocat, crevette tempura, sauce dragon',
    price: '6 000',
    badge: 'Création Chef',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=700&q=80',
  },
  {
    name: 'Alaska',
    description: 'Saumon, avocat, concombre, mayo épicée',
    price: '6 000',
    badge: 'Création Chef',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=700&q=80',
  },
  {
    name: 'Kaytan',
    description: 'Thon, avocat, sésame, sauce yuzu',
    price: '6 000',
    badge: 'Création Chef',
  },
  {
    name: 'Okinawa',
    description: 'Crevette, avocat, mangue, tobiko',
    price: '6 000',
    badge: 'Création Chef',
  },
];

export const Specials: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const [featured, ...rest] = specials;
  const centerCards = rest.slice(0, 2);
  const sideCards = rest.slice(2);

  return (
    <section className="bg-gray-950 py-12 md:py-16 px-4 sm:px-8 md:px-16" id="specials">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
      >
        <span className="inline-block text-red-500 text-xs font-semibold tracking-widest uppercase mb-3.5">
          Créations du Chef
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-white mb-4">
          Nos Spécialités <em className="italic text-red-500">Signature</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">

        {/* Colonne gauche — carte featured */}
        <div
          className={`relative rounded-2xl overflow-hidden h-[320px] bg-gray-900 border border-gray-800 flex flex-col justify-between transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
        >
          <img
            src={featured.image}
            alt={featured.name}
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 flex flex-col justify-end h-full p-6">
            <div className="text-xs text-red-500 uppercase tracking-[3px] font-semibold mb-2">{featured.badge}</div>
            <div className="font-serif text-2xl text-white font-bold mb-1">{featured.name}</div>
            <div className="text-sm text-gray-400 mb-3">{featured.description}</div>
            <div className="font-serif text-2xl text-red-500 font-bold">{featured.price} <span className="text-sm font-sans text-gray-500">FCFA</span></div>
          </div>
        </div>

        {/* Colonne centre — 2 cartes avec images */}
        <div className="flex flex-col gap-3">
          {centerCards.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden h-[152px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
              style={{ transitionDelay: `${(i + 2) * 100}ms` }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                <div className="text-[10px] text-red-500 uppercase tracking-[2px] font-semibold mb-0.5">{item.badge}</div>
                <div className="font-serif text-base text-white font-bold mb-0.5">{item.name}</div>
                <div className="font-serif text-base text-red-500 font-bold">{item.price} <span className="text-xs font-sans text-gray-400">FCFA</span></div>
              </div>
            </div>
          ))}
        </div>

        {/* Colonne droite — 2 cartes texte */}
        <div className="flex flex-col gap-3">
          {sideCards.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl bg-gray-900 border border-gray-800 h-[152px] flex flex-col justify-end p-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
              style={{ transitionDelay: `${(i + 4) * 100}ms` }}
            >
              <div className="text-[10px] text-red-500 uppercase tracking-[3px] font-semibold mb-1.5">{item.badge}</div>
              <div className="font-serif text-lg text-white font-bold mb-1">{item.name}</div>
              <div className="text-xs text-gray-400 mb-2">{item.description}</div>
              <div className="font-serif text-lg text-red-500 font-bold">{item.price} <span className="text-sm font-sans text-gray-500">FCFA</span></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

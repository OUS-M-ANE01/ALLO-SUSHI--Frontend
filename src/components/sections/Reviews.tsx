import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const reviews = [
  {
    name: 'Fatou Diallo',
    location: 'Plateau, Dakar',
    rating: 5,
    date: 'Février 2026',
    text: 'Meilleur sushi de Dakar sans hésitation ! La livraison était rapide et les rolls étaient frais et délicieux. Le Dragon Roll est incroyable. Je commande chaque semaine.',
    avatar: 'FD',
    color: 'bg-red-500',
  },
  {
    name: 'Moussa Ndiaye',
    location: 'Almadies, Dakar',
    rating: 5,
    date: 'Janvier 2026',
    text: 'Nous avons commandé un assortiment 60 pièces pour un anniversaire. Tout le monde était bluffé par la qualité. Présentation soignée, goût authentique. Alloo Sushi, c\'est le top !',
    avatar: 'MN',
    color: 'bg-gray-700',
  },
  {
    name: 'Aminata Sow',
    location: 'Point E, Dakar',
    rating: 5,
    date: 'Janvier 2026',
    text: 'Le Shake Roll et l\'Alaska sont mes préférés. Livraison en moins de 45 min, toujours chaud et bien emballé. Service client super réactif sur WhatsApp.',
    avatar: 'AS',
    color: 'bg-orange-500',
  },
  {
    name: 'Ibrahima Fall',
    location: 'Mermoz, Dakar',
    rating: 5,
    date: 'Décembre 2025',
    text: 'J\'ai découvert Alloo Sushi via une recommandation et je ne regrette pas. Les ingrédients sont vraiment frais, le riz parfaitement préparé. Les woks sont excellents aussi !',
    avatar: 'IF',
    color: 'bg-blue-600',
  },
  {
    name: 'Mariama Ba',
    location: 'Sacré-Cœur, Dakar',
    rating: 5,
    date: 'Décembre 2025',
    text: 'Commande pour un événement d\'entreprise — 120 pièces livrées à l\'heure. Présentation parfaite, tous nos invités ont adoré. Professionnel et fiable.',
    avatar: 'MB',
    color: 'bg-purple-600',
  },
  {
    name: 'Cheikh Diop',
    location: 'Rte de la Corniche, Dakar',
    rating: 5,
    date: 'Novembre 2025',
    text: 'Le meilleur rapport qualité-prix de Dakar pour les sushis. Le Menu 5 est parfait pour deux personnes. La fraîcheur est au rendez-vous à chaque commande.',
    avatar: 'CD',
    color: 'bg-green-600',
  },
];

const Stars: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <i key={i} className="fas fa-star text-yellow-400 text-xs"></i>
    ))}
  </div>
);

export const Reviews: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % reviews.length);
    }, 4000);
  };

  useEffect(() => {
    startAuto();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const goTo = (i: number) => {
    setActiveIndex(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAuto();
  };

  return (
    <section className="bg-gray-950 py-16 md:py-24 px-4 sm:px-8 md:px-16" id="avis">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-red-500 text-xs font-semibold tracking-widest uppercase">Témoignages</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-1">
              Ce que disent <em className="italic text-red-500">nos clients</em>
            </h2>
          </div>
          {/* Rating global */}
          <div className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-2xl px-6 py-4">
            <div className="text-center">
              <div className="font-['Bebas_Neue'] text-5xl text-white leading-none">5.0</div>
              <Stars count={5} />
              <div className="text-gray-500 text-[10px] mt-1 uppercase tracking-widest">Note moyenne</div>
            </div>
            <div className="w-px h-12 bg-gray-800"></div>
            <div className="text-center">
              <div className="font-['Bebas_Neue'] text-5xl text-white leading-none">200+</div>
              <div className="text-gray-500 text-[10px] mt-1 uppercase tracking-widest">Clients satisfaits</div>
            </div>
          </div>
        </div>

        {/* Carousel desktop : 3 cartes visibles */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} active={i === activeIndex} onClick={() => goTo(i)} />
          ))}
        </div>

        {/* Carousel mobile : 1 carte */}
        <div className="md:hidden">
          <ReviewCard review={reviews[activeIndex]} active={true} onClick={() => {}} />
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex
                  ? 'w-6 h-2 bg-red-500'
                  : 'w-2 h-2 bg-gray-700 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewCard: React.FC<{
  review: typeof reviews[0];
  active: boolean;
  onClick: () => void;
}> = ({ review, active, onClick }) => (
  <button
    onClick={onClick}
    className={`text-left rounded-2xl border p-6 transition-all duration-400 cursor-pointer w-full ${
      active
        ? 'bg-gray-900 border-red-500/40 shadow-lg shadow-red-500/10'
        : 'bg-gray-900/50 border-gray-800 hover:border-gray-600'
    }`}
  >
    {/* Quote */}
    <div className="text-red-500 text-3xl font-serif leading-none mb-3 opacity-60">"</div>
    <p className="text-gray-300 text-sm leading-relaxed mb-5">{review.text}</p>

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
          {review.avatar}
        </div>
        <div>
          <div className="text-white text-sm font-semibold">{review.name}</div>
          <div className="text-gray-500 text-[11px]">{review.location}</div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <Stars count={review.rating} />
        <span className="text-gray-600 text-[10px]">{review.date}</span>
      </div>
    </div>
  </button>
);

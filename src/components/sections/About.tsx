import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    { icon: 'fa-fish', title: 'Produits Frais', desc: 'Sélectionnés chaque jour pour la meilleure qualité' },
    { icon: 'fa-motorcycle', title: 'Livraison Rapide', desc: '7j/7 dans toutes les zones de Dakar' },
    { icon: 'fa-star', title: 'Fait à la Commande', desc: 'Jamais préparé à l\'avance, toujours frais' },
    { icon: 'fa-concierge-bell', title: 'Service Traiteur', desc: 'Mariages, séminaires, soirées privées' }
  ];

  return (
    <section className="bg-white py-16 md:py-25 px-4 sm:px-8 md:px-16" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div 
          ref={ref}
          className={`relative h-[320px] sm:h-[420px] md:h-[520px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
        >
          <div className="absolute left-0 top-0 w-[72%] h-[82%] rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80" 
              alt="Chef"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-1/2 h-[54%] rounded-xl overflow-hidden shadow-2xl border-5 border-white">
            <img 
              src="https://images.unsplash.com/photo-1562802378-063ec186a863?w=500&q=80" 
              alt="Rolls"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-6 right-4 z-10 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center flex-col text-center text-white shadow-lg shadow-red-600/40">
            <div className="font-['Bebas_Neue'] text-[26px] leading-none">N°1</div>
            <div className="text-[9px] font-semibold tracking-widest uppercase opacity-85">à Dakar</div>
          </div>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
          <SectionHeader 
            label="Notre Histoire"
            title="Fraîcheur & Qualité Garanties"
            subtitle="Nos recettes sont élaborées à partir d'ingrédients rigoureusement sélectionnés. Chaque plat est préparé uniquement à la commande, jamais à l'avance."
          />
          
          <div className="grid grid-cols-2 gap-4 mt-9">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-5.5 bg-[#faf8f4] rounded-xl border border-gray-200 transition-all duration-300 hover:border-red-300 hover:-translate-y-0.5"
              >
                <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center mb-3">
                  <i className={`fas ${feature.icon} text-red-600 text-sm`}></i>
                </div>
                <h4 className="text-sm font-semibold mb-1.5">{feature.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

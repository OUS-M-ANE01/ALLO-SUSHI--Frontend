import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { deliveryZones } from '../../data/menuData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Delivery: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-white py-16 md:py-25 px-4 sm:px-8 md:px-16" id="livraison">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div 
          ref={ref}
          className={`rounded-2xl overflow-hidden h-[260px] sm:h-[360px] md:h-[480px] relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
        >
          <img 
            src="/livraison.png" 
            alt="Livraison"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute -bottom-4  bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3">
            <i className="fas fa-motorcycle text-red-600 text-[22px]"></i>
            <div>
              <strong className="text-sm text-gray-900 block">Livraison rapide</strong>
              <span className="text-xs text-gray-600">Partout à Dakar, 7j/7</span>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
          <SectionHeader 
            label="Livraison à Domicile"
            title="Livraison Partout à Dakar"
            subtitle="Où vous voulez et quand vous voulez. Nos spécialités préparées exclusivement à la commande, livrées chez vous avec des ingrédients de première qualité."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
            {deliveryZones.map((zone, index) => (
              <div 
                key={index}
                className="bg-[#faf8f4] border border-gray-200 rounded-xl p-4 text-center transition-all duration-300 hover:border-red-600 hover:bg-red-50"
              >
                <div className="font-['Bebas_Neue'] text-[26px] text-red-600">{zone.price}</div>
                <div className="text-xs text-gray-600 mt-0.5 uppercase tracking-wide">{zone.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-3 flex-wrap mt-9">
            <Button href="tel:338423011" icon={<i className="fas fa-phone"></i>}>
              33 842 30 11
            </Button>
            <Button 
              variant="ghost" 
              href="https://wa.me/221781424646"
              icon={<i className="fab fa-whatsapp"></i>}
            >
              78 142 46 46
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

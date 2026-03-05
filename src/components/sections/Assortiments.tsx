import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { assortiments } from '../../data/menuData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Assortiments: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-[#faf8f4] py-16 md:py-25 px-4 sm:px-8 md:px-16" id="assortiments">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div 
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
        >
          <SectionHeader 
            label="Grands Formats"
            title="Nos Assortiments"
            subtitle="Parfaits pour vos événements, repas en famille ou entre amis. Un mix de nos meilleures créations."
          />
          
          <div className="flex flex-col gap-2.5 mt-9">
            {assortiments.map((assort, index) => (
              <div 
                key={index}
                className="flex items-center justify-between bg-white rounded-2xl px-6 py-4.5 border border-gray-200 transition-all duration-300 cursor-pointer hover:border-red-600 hover:translate-x-1.5 hover:shadow-lg hover:shadow-red-600/12"
              >
                <div className="flex items-center gap-4.5">
                  <div className="font-['Bebas_Neue'] text-[42px] text-red-600 leading-none w-14">
                    {assort.pieces}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{assort.title}</h4>
                    <p className="text-xs text-gray-600 mt-0.5">{assort.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-serif text-[22px] font-bold text-gray-900">
                      {assort.price.toLocaleString()}
                    </div>
                    <span className="font-sans text-xs text-gray-600 block text-right">FCFA</span>
                  </div>
                  <i className="fas fa-arrow-right text-red-600 text-sm"></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`rounded-2xl overflow-hidden h-[260px] sm:h-[380px] md:h-[520px] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
          <img 
            src="https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=800&q=80" 
            alt="Assortiments"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

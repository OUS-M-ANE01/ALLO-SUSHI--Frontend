import React from 'react';

export const InfoStrip: React.FC = () => {
  const items = [
    { icon: 'fa-motorcycle', text: 'Livraison', strong: '7j/7' },
    { icon: 'fa-phone', text: '', strong: '33 842 30 11' },
    { icon: 'fa-whatsapp fab', text: '', strong: '78 142 46 46' },
    { icon: 'fa-map-marker-alt', text: '62 Rue Félix Faure,', strong: 'Plateau' },
    { icon: 'fa-clock', text: 'Ouvert', strong: 'tous les jours' }
  ];

  return (
    <div className="bg-gray-900 flex flex-wrap px-4 sm:px-8 md:px-16">
      {items.map((item, index) => (
        <div 
          key={index}
          className={`flex items-center gap-2 py-3 md:py-4 flex-1 min-w-[140px] justify-center text-white/75 text-xs md:text-sm ${index < items.length - 1 ? 'border-r border-white/8' : ''}`}
        >
          <i className={`fas ${item.icon} text-red-600 text-sm`}></i>
          <span>
            {item.text} <strong className="text-white font-semibold">{item.strong}</strong>
          </span>
        </div>
      ))}
    </div>
  );
};

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
    <div className="bg-gray-900 grid grid-cols-2 md:grid-cols-5">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-center gap-2 py-3 md:py-4 text-white/75 text-xs md:text-sm border-white/8
            ${index % 2 === 0 && index !== items.length - 1 ? 'border-r' : ''}
            ${index < items.length - 2 ? 'border-b md:border-b-0' : ''}
            ${index === items.length - 1 ? 'col-span-2 md:col-span-1 border-t md:border-t-0 border-white/8' : ''}
            ${index > 0 ? 'md:border-l md:border-white/8' : ''}
          `}
        >
          <i className={`fas ${item.icon} text-red-500 text-sm`}></i>
          <span>
            {item.text && `${item.text} `}<strong className="text-white font-semibold">{item.strong}</strong>
          </span>
        </div>
      ))}
    </div>
  );
};

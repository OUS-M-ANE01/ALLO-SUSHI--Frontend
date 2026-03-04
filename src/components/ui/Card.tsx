import React from 'react';
import type { MenuItem } from '../../types';

interface CardProps {
  item: MenuItem;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="h-44 overflow-hidden relative">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {item.badge && (
          <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {item.badge}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold mb-1.5 text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-3.5">{item.description}</p>
        <div className="flex items-center justify-between">
          <div className="font-serif text-2xl font-bold text-red-600">
            {item.price.toLocaleString()} <span className="text-xs text-gray-600 font-sans">FCFA</span>
          </div>
          <button className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group">
            <i className="fas fa-arrow-right text-xs text-red-600 group-hover:text-white transition-colors"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

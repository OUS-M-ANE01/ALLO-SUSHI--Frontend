import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { menuItems } from '../../data/menuData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

type TabType = 'menus' | 'californias' | 'makis' | 'nigiris' | 'woks' | 'fastfood';

export const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('menus');
  const { ref, isVisible } = useScrollAnimation();

  const tabs: { id: TabType; label: string }[] = [
    { id: 'menus', label: 'Menus' },
    { id: 'californias', label: 'Californias' },
    { id: 'makis', label: 'Makis & Aromakis' },
    { id: 'nigiris', label: 'Nigiris & Sashimis' },
    { id: 'woks', label: 'Woks & Thaï' },
    { id: 'fastfood', label: 'Fast Food' }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeTab);

  return (
    <section className="bg-[#faf8f4] py-16 md:py-25 px-4 sm:px-8 md:px-16" id="menu">
      <div 
        ref={ref}
        className={`flex items-end justify-between mb-12 flex-wrap gap-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
      >
        <SectionHeader 
          label="Notre Carte"
          title="Explorez Notre Menu"
        />
        
        <div className="flex gap-1.5 bg-white p-1.5 rounded-2xl border border-gray-200 flex-wrap md:rounded-full overflow-x-auto max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full border-none cursor-pointer font-medium text-xs transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                  : 'bg-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5.5">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <Card item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

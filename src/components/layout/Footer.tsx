import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white/70 px-4 sm:px-8 md:px-16 pt-12 md:pt-16 pb-7">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-15 mb-12">
        <div>
          <div className="flex items-center gap-2.5 mb-4.5">
            <a href="#" className="flex items-center gap-2.5 no-underline">
        <img src="/logo-alloo2.png" alt="Logo Alloo" className="h-12 w-auto object-contain" />
        <div className="font-['Bebas_Neue'] text-[26px] tracking-[2px] text-white">
          ALL<span className="text-red-600">OO</span> SUSHI
        </div>
      </a>
          </div>
          <p className="text-sm leading-relaxed text-white/40 max-w-[260px]">
            Sushis, Thaï & Woks préparés à la commande avec des ingrédients de première qualité. Livraison 7j/7 à Dakar.
          </p>
          <div className="flex gap-2.5 mt-5">
            {['facebook-f', 'instagram', 'whatsapp'].map((social, index) => (
              <a 
                key={index}
                href={social === 'whatsapp' ? 'https://wa.me/221781424646' : '#'}
                target={social === 'whatsapp' ? '_blank' : undefined}
                rel={social === 'whatsapp' ? 'noopener noreferrer' : undefined}
                className="w-9 h-9 bg-white/6 border border-white/10 rounded-full flex items-center justify-center text-white/40 no-underline transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:text-white"
              >
                <i className={`fab fa-${social} text-xs`}></i>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4.5 tracking-wide">Navigation</h4>
          <ul className="list-none flex flex-col gap-2.5">
            {([
              { label: 'Accueil', href: '#' },
              { label: 'À Propos', href: '#about' },
              { label: 'Menu', href: '#menu' },
              { label: 'Spécialités', href: '#specials' },
              { label: 'Assortiments', href: '#assortiments' },
              { label: 'Livraison', href: '#livraison' },
              { label: 'Contact', href: '#contact' },
            ] as { label: string; href: string }[]).map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-white/40 no-underline text-sm transition-colors duration-300 hover:text-red-600">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4.5 tracking-wide">Menu</h4>
          <ul className="list-none flex flex-col gap-2.5">
            {['Sushis & Rolls', 'Makis & Aromakis', 'Nigiris & Sashimis', 'Woks & Thaï', 'Burgers & Pizzas'].map((item, index) => (
              <li key={index}>
                <a href="#menu" className="text-white/40 no-underline text-sm transition-colors duration-300 hover:text-red-600">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4.5 tracking-wide">Contact</h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li><a href="tel:338423011" className="text-white/40 no-underline text-sm transition-colors duration-300 hover:text-red-600">33 842 30 11</a></li>
            <li><a href="https://wa.me/221781424646" className="text-white/40 no-underline text-sm transition-colors duration-300 hover:text-red-600">78 142 46 46</a></li>
            <li><a href="mailto:contact@allosushifood.com" className="text-white/40 no-underline text-sm transition-colors duration-300 hover:text-red-600">contact@allosushifood.com</a></li>
            <li><a href="mailto:Traiteur@alloosushi.com" className="text-white/40 no-underline text-sm transition-colors duration-300 hover:text-red-600">Traiteur@alloosushi.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8 pt-5.5 flex flex-col md:flex-row justify-between items-center gap-2.5 text-sm text-white/25">
        <span>&copy; 2025 Alloo Sushi · Tous droits réservés</span>
        <span>62 Rue Félix Faure, Plateau, Dakar, Sénégal</span>
      </div>
    </footer>
  );
};

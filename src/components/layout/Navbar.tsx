import React, { useEffect, useState } from 'react';

const navLinks = [
  { label: 'À Propos', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Spécialités', href: '#specials' },
  { label: 'Livraison', href: '#livraison' },
  { label: 'Contact', href: '#contact' },
] as const;

interface NavbarProps {
  onTraiteur: () => void;
  onAbout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onTraiteur, onAbout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      if (open) setOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 h-[74px] flex items-center justify-between bg-white/95 backdrop-blur-md border-b border-gray-100 transition-shadow duration-300 ${scrolled ? 'shadow-lg shadow-gray-900/8' : ''}`}>
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <img src="/logo-alloo.png" alt="Logo Alloo" className="h-12 w-auto object-contain" />
          <div className="font-['Bebas_Neue'] text-[26px] tracking-[2px] text-gray-900">
            ALL<span className="text-red-600">OO</span> SUSHI
          </div>
        </a>

        {/* Liens desktop */}
        <ul className="hidden md:flex gap-9 list-none">
          {navLinks.map((item, index) =>
            item.label === 'À Propos' ? (
              <li key={index}>
                <button
                  onClick={onAbout}
                  className="text-gray-600 bg-transparent border-0 p-0 cursor-pointer text-sm font-medium transition-colors duration-250 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:rounded-sm after:transition-all after:duration-300 hover:text-gray-900 hover:after:w-full"
                >
                  {item.label}
                </button>
              </li>
            ) : (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-gray-600 no-underline text-sm font-medium transition-colors duration-250 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:rounded-sm after:transition-all after:duration-300 hover:text-gray-900 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={onTraiteur}
            className="hidden md:flex items-center gap-1.5 text-sm font-medium text-gray-600 border border-gray-200 px-4 py-2 rounded-full hover:border-red-400 hover:text-red-600 transition-all duration-250"
          >
            <i className="fas fa-concierge-bell text-xs"></i> Traiteur
          </button>
          <a
            href="tel:338423011"
            className="hidden md:flex bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-medium no-underline items-center gap-2 transition-all duration-300 shadow-lg shadow-red-600/30 hover:bg-red-700 hover:-translate-y-0.5"
          >
            <i className="fas fa-phone text-xs"></i> Commander
          </a>

          {/* Hamburger mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-9 h-9 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Menu mobile déroulant */}
      <div
        className={`fixed top-[74px] left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 md:hidden ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
      >
        <ul className="list-none flex flex-col px-6 py-2">
          {navLinks.map((item, index) =>
            item.label === 'À Propos' ? (
              <li key={index} className="border-b border-gray-100">
                <button
                  onClick={() => { setOpen(false); onAbout(); }}
                  className="w-full text-left block py-4 text-gray-700 text-sm font-medium hover:text-red-600 transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ) : (
              <li key={index} className="border-b border-gray-100">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-gray-700 no-underline text-sm font-medium hover:text-red-600 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            )
          )}
          <li className="border-b border-gray-100">
            <button
              onClick={() => { setOpen(false); onTraiteur(); }}
              className="w-full text-left py-4 text-gray-700 text-sm font-medium hover:text-red-600 transition-colors flex items-center gap-2"
            >
              <i className="fas fa-concierge-bell text-red-500 text-xs"></i> Traiteur
            </button>
          </li>
          <li className="py-4">
            <a
              href="tel:338423011"
              className="flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-sm font-medium no-underline shadow-lg shadow-red-600/30"
            >
              <i className="fas fa-phone text-xs"></i> Commander — 33 842 30 11
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

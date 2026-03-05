import React from 'react';

export const NotFoundPage: React.FC = () => (
  <div className="min-h-screen bg-[#faf8f4] flex flex-col items-center justify-center px-6 text-center">
    <a href="/" className="mb-8 no-underline opacity-80 hover:opacity-100 transition-opacity">
      <img src="/logo-alloo.png" alt="AllooSushi" className="h-14 w-auto object-contain mx-auto" />
    </a>

    {/* Big 404 */}
    <div
      className="font-['Bebas_Neue'] leading-none select-none pointer-events-none text-gray-900/[0.04]"
      style={{ fontSize: 'clamp(120px, 30vw, 240px)' }}
    >
      404
    </div>

    <div className="-mt-4 sm:-mt-8 mb-5">
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
        Page introuvable
      </h1>
      <p className="text-gray-500 text-sm sm:text-base max-w-sm leading-relaxed mx-auto">
        Cette page n'existe pas… mais nos sushis, eux, sont bien réels —<br className="hidden sm:block" />
        préparés à la commande et livrés frais chez vous.
      </p>
    </div>

    {/* CTAs */}
    <div className="flex flex-col sm:flex-row gap-3 mt-2">
      <a
        href="/"
        className="bg-red-600 text-white px-8 py-3 rounded-full text-sm font-semibold no-underline shadow-lg shadow-red-600/30 hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <i className="fas fa-home"></i>
        Retour à l'accueil
      </a>
      <a
        href="tel:338423011"
        className="bg-white text-gray-800 border border-gray-200 px-8 py-3 rounded-full text-sm font-semibold no-underline hover:border-red-300 hover:text-red-600 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <i className="fas fa-phone text-red-600"></i>
        Commander
      </a>
      <a
        href="https://wa.me/221781424646"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-gray-800 border border-gray-200 px-8 py-3 rounded-full text-sm font-semibold no-underline hover:border-green-400 hover:text-green-600 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <i className="fab fa-whatsapp text-green-500"></i>
        WhatsApp
      </a>
    </div>

    {/* Subtle decoration */}
    <div className="mt-14 flex gap-6 text-4xl opacity-[0.07] select-none pointer-events-none">
      <span>🍣</span><span>🍱</span><span>🥢</span>
    </div>

    <p className="mt-8 text-gray-400 text-xs">
      © AllooSushi · 62 Rue Félix Faure, Dakar
    </p>
  </div>
);

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <>
      {/* ── DESKTOP (md+) : 3 colonnes ── */}
      <div className="hidden md:grid min-h-screen pt-[74px] bg-[#faf8f4] overflow-hidden relative md:grid-cols-[1fr_auto_1fr]">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-red-600/6 to-transparent -top-[150px] left-1/2 -translate-x-1/2 pointer-events-none"></div>

        {/* Image gauche */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          <img src="/g-alloo.png" alt="Sushi gauche" className="w-full h-full object-cover animate-[heroZoom_10s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#faf8f4]"></div>
        </motion.div>

        {/* Contenu central */}
        <motion.div
          className="flex flex-col items-center justify-center px-10 py-20 relative z-10 text-center w-[520px]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase w-fit mb-8">
            <i className="fas fa-circle text-[7px]"></i> Livraison 7j/7 · Dakar
          </div>
          <h1 className="font-serif text-7xl leading-none font-bold text-gray-900 mb-6 tracking-tight">
            L'Art du<span className="italic text-red-600"> Sushi</span><br />à Dakar
          </h1>
          <p className="text-base text-gray-600 max-w-md leading-relaxed mb-10 font-light">
            Sushis, Thaï & Woks préparés à la commande avec des ingrédients rigoureusement sélectionnés. Livraison à domicile partout à Dakar.
          </p>
          <div className="flex gap-3.5 flex-wrap justify-center">
            <Button href="#menu" icon={<i className="fas fa-book-open"></i>}>Voir le Menu</Button>
            <Button variant="ghost" href="https://wa.me/221781424646" icon={<i className="fab fa-whatsapp"></i>}>WhatsApp</Button>
          </div>
        </motion.div>

        {/* Image droite */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          <img src="/d-alloo.png" alt="Sushi droite" className="w-full h-full object-cover animate-[heroZoom_10s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#faf8f4]"></div>
        </motion.div>
      </div>

      {/* ── MOBILE / TABLETTE (< md) ── */}
      <div className="md:hidden pt-[74px] bg-[#faf8f4] overflow-hidden flex flex-col">

        {/* Texte */}
        <motion.div
          className="flex flex-col items-center text-center px-5 pt-8 pb-4 relative z-10"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase w-fit mb-3">
            <i className="fas fa-circle text-[6px]"></i> Livraison 7j/7 · Dakar
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl leading-tight font-bold text-gray-900 mb-3 tracking-tight">
            L'Art du <span className="italic text-red-600">Sushi</span><br />à Dakar
          </h1>
          <p className="text-sm text-gray-600 max-w-xs leading-relaxed mb-5 font-light">
            Sushis, Thaï & Woks préparés à la commande. Livraison partout à Dakar.
          </p>
          <div className="flex gap-3 flex-wrap justify-center mb-1">
            <Button href="#menu" icon={<i className="fas fa-book-open"></i>}>Voir le Menu</Button>
            <Button variant="ghost" href="https://wa.me/221781424646" icon={<i className="fab fa-whatsapp"></i>}>WhatsApp</Button>
          </div>
        </motion.div>

        {/* Images côte à côte */}
        <div className="flex mt-3">
          <motion.div
            className="flex-1 overflow-hidden h-[220px] sm:h-[280px]"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
          >
            <img src="/g-alloo.png" alt="Sushi gauche" loading="eager" decoding="async" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            className="flex-1 overflow-hidden h-[220px] sm:h-[280px]"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
          >
            <img src="/d-alloo.png" alt="Sushi droite" loading="eager" decoding="async" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

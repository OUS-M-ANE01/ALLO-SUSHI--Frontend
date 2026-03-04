import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <div className="min-h-screen pt-[74px] bg-[#faf8f4] overflow-hidden relative flex flex-col md:grid md:grid-cols-[1fr_auto_1fr]">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-red-600/6 to-transparent -top-[150px] left-1/2 -translate-x-1/2 pointer-events-none"></div>

      {/* Image gauche */}
      <motion.div
        className="hidden md:block relative overflow-hidden"
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
      >
        <img
          src="/gauche.png"
          alt="Sushi gauche"
          className="w-full h-full object-cover animate-[heroZoom_10s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#faf8f4]"></div>
      </motion.div>

      {/* Contenu central */}
      <motion.div
        className="flex flex-col items-center justify-center px-6 sm:px-10 py-16 md:py-20 relative z-10 text-center w-full md:w-[520px]"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
      >
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase w-fit mb-6 md:mb-8">
          <i className="fas fa-circle text-[7px]"></i> Livraison 7j/7 · Dakar
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-none font-bold text-gray-900 mb-6 tracking-tight">
          L'Art du
          <span className="italic text-red-600"> Sushi</span><br />
          à Dakar
        </h1>

        <p className="text-base text-gray-600 max-w-md leading-relaxed mb-10 font-light">
          Sushis, Thaï & Woks préparés à la commande avec des ingrédients rigoureusement sélectionnés. Livraison à domicile partout à Dakar.
        </p>

        <div className="flex gap-3.5 flex-wrap justify-center mb-12">
          <Button href="#menu" icon={<i className="fas fa-book-open"></i>}>
            Voir le Menu
          </Button>
          <Button
            variant="ghost"
            href="https://wa.me/221781424646"
            icon={<i className="fab fa-whatsapp"></i>}
          >
            WhatsApp
          </Button>
        </div>
      </motion.div>

      {/* Image droite */}
      <motion.div
        className="hidden md:block relative overflow-hidden"
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
      >
        <img
          src="/droite.png"
          alt="Sushi droite"
          className="w-full h-full object-cover animate-[heroZoom_10s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#faf8f4]"></div>
      </motion.div>
    </div>
  );
};

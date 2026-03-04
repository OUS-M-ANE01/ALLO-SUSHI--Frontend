import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Loader: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onDone, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] bg-gray-950 flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center gap-4 mb-14"
      >
        <img
          src="/logo-alloo2.png"
          alt="AlloSushi"
          className="h-32 w-auto object-contain"
        />
        <div className="font-['Bebas_Neue'] text-4xl tracking-[6px] text-white">
          ALL<span className="text-red-600">OO</span> SUSHI
        </div>
        <p className="text-xs text-white/30 tracking-widest uppercase">
          L'Art du Sushi à Dakar
        </p>
      </motion.div>

      {/* Barre de progression */}
      <motion.div
        className="w-[220px] h-[2px] bg-white/10 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="h-full bg-red-600 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </motion.div>

      {/* Pourcentage */}
      <motion.span
        className="mt-4 text-xs text-white/25 font-mono tabular-nums"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {progress}%
      </motion.span>

      {/* Points animés */}
      <div className="absolute bottom-10 flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-red-600"
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

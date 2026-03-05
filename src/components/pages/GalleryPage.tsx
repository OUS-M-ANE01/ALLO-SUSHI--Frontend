import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryPageProps {
  onClose: () => void;
}

type Category = 'tout' | 'rolls' | 'makis' | 'nigiris' | 'woks' | 'ambiance';

const photos: { src: string; label: string; category: Category }[] = [
  // Rolls / Californias
  { src: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=800&q=85', label: 'Dragon Roll', category: 'rolls' },
  { src: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=85', label: 'Shake Roll', category: 'rolls' },
  { src: 'https://images.unsplash.com/photo-1617196034099-2b4d98a55ba1?w=800&q=85', label: 'Ebi Fry Roll', category: 'rolls' },
  { src: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=800&q=85', label: 'Roll Philadelphia', category: 'rolls' },
  { src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=85', label: 'Alaska Roll', category: 'rolls' },
  { src: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=85', label: 'Crunchy Saumon', category: 'rolls' },
  { src: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=85', label: 'Tokyo Roll', category: 'rolls' },
  { src: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=800&q=85', label: 'Okinawa Roll', category: 'rolls' },

  // Makis & Aromakis
  { src: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=85', label: 'Aromaki Saumon', category: 'makis' },
  { src: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=85', label: 'Maki Saumon', category: 'makis' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85', label: 'Maki Avocat', category: 'makis' },
  { src: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800&q=85', label: 'Casablanca', category: 'makis' },
  { src: 'https://images.unsplash.com/photo-1617196034876-1fb8bf03a57a?w=800&q=85', label: 'Aromaki Crevette', category: 'makis' },

  // Nigiris & Sashimis
  { src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=85', label: 'Nigiri Saumon', category: 'nigiris' },
  { src: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=800&q=85', label: 'Sashimi Saumon', category: 'nigiris' },
  { src: 'https://images.unsplash.com/photo-1617196034096-523f28e35623?w=800&q=85', label: 'Nigiri Thon', category: 'nigiris' },

  // Woks & Thaï
  { src: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=85', label: 'Wok Poulet', category: 'woks' },
  { src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=85', label: 'Poulet Curry', category: 'woks' },
  { src: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&q=85', label: 'Pad Thaï', category: 'woks' },
  { src: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=85', label: 'Wok Bœuf', category: 'woks' },

  // Ambiance / assortiments
  { src: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=800&q=85', label: 'Assortiment 60 pièces', category: 'ambiance' },
  { src: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=85', label: 'Plateau événement', category: 'ambiance' },
  { src: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=85', label: 'Mise en place', category: 'ambiance' },
  { src: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=85', label: 'Plateau sushi', category: 'ambiance' },
];

const tabs: { id: Category; label: string; icon: string }[] = [
  { id: 'tout',     label: 'Tout',           icon: 'fa-th' },
  { id: 'rolls',    label: 'Rolls',          icon: 'fa-circle' },
  { id: 'makis',    label: 'Makis',          icon: 'fa-layer-group' },
  { id: 'nigiris',  label: 'Nigiris',        icon: 'fa-fish' },
  { id: 'woks',     label: 'Woks & Thaï',   icon: 'fa-fire' },
  { id: 'ambiance', label: 'Assortiments',   icon: 'fa-star' },
];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('tout');
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Fermer lightbox avec Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const filtered = activeCategory === 'tout'
    ? photos
    : photos.filter(p => p.category === activeCategory);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-white flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* ── HEADER ── */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-8 md:px-16 py-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-4">
          <img src="/logo-alloo.png" alt="AlooSushi" className="h-10 w-auto" />
          <div>
            <h1 className="font-serif text-xl font-bold text-gray-900">Galerie Photos</h1>
            <p className="text-xs text-gray-500">{filtered.length} photo{filtered.length > 1 ? 's' : ''} · Alloo Sushi · Dakar</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-red-600 hover:text-red-600 transition-all duration-200"
        >
          <i className="fas fa-arrow-left text-xs"></i>
          <span className="hidden sm:inline">Retour au site</span>
        </button>
      </div>

      {/* ── TABS ── */}
      <div className="bg-white border-b border-gray-200 flex-shrink-0 overflow-x-auto">
        <div className="flex px-4 sm:px-8 md:px-16 gap-0">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`flex items-center gap-2 px-4 py-4 text-xs font-semibold border-b-2 transition-all duration-200 whitespace-nowrap ${
                activeCategory === tab.id
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              <i className={`fas ${tab.icon} text-[10px]`}></i>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── GRILLE ── */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 md:px-16 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((photo, i) => (
              <motion.div
                key={photo.src + i}
                className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer bg-gray-100"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                onClick={() => setLightbox(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.label}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-medium">{photo.label}</span>
                  <i className="fas fa-expand text-white/80 text-xs ml-auto"></i>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── FOOTER BAR ── */}
      <div className="bg-white border-t border-gray-200 px-4 sm:px-8 md:px-16 py-4 flex items-center justify-between flex-shrink-0">
        <div className="text-gray-500 text-xs">Livraison 7j/7 · <span className="text-gray-900 font-semibold">33 842 30 11</span></div>
        <a
          href="https://wa.me/221781424646"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
        >
          <i className="fab fa-whatsapp"></i> Commander
        </a>
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.label}
                className="w-full rounded-2xl object-contain max-h-[80vh]"
              />
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium bg-black/60 px-3 py-1.5 rounded-full">
                {lightbox.label}
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-black/60 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <i className="fas fa-times text-sm"></i>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const previewPhotos = [
  { src: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80', label: 'Dragon Roll', tall: true },
  { src: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&q=80', label: 'Shake Roll', tall: false },
  { src: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80', label: 'Aromaki Saumon', tall: false },
  { src: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80', label: 'Wok Poulet', tall: true },
  { src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80', label: 'Alaska Roll', tall: false },
  { src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80', label: 'Poulet Curry', tall: false },
];

interface GalleryPreviewProps {
  onOpen: () => void;
}

export const GalleryPreview: React.FC<GalleryPreviewProps> = ({ onOpen }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="galerie" className="bg-white py-16 md:py-24 px-4 sm:px-8 md:px-16">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <span className="text-red-600 text-xs font-semibold tracking-widest uppercase">Galerie</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-1">
              Nos plats en <em className="italic text-red-600">images</em>
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-md">
              Chaque plat est préparé à la commande avec des ingrédients rigoureusement sélectionnés.
            </p>
          </div>
          <button
            onClick={onOpen}
            className="self-start md:self-auto inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-red-600/30 whitespace-nowrap"
          >
            <i className="fas fa-images text-white text-xs"></i>
            Voir toute la galerie
            <i className="fas fa-arrow-right text-xs text-white"></i>
          </button>
        </div>

        {/* Grid aperçu */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {previewPhotos.map((photo, i) => (
            <div
              key={i}
              className={`relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group ${
                photo.tall ? 'row-span-2' : ''
              } ${i === 5 ? 'hidden sm:block' : ''}`}
              style={{ height: photo.tall ? undefined : '180px' }}
              onClick={onOpen}
            >
              <img
                src={photo.src}
                alt={photo.label}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ height: photo.tall ? '372px' : '180px' }}
              />
              {/* Overlay hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <i className="fas fa-expand text-white text-sm"></i>
                </div>
              </div>
              {/* Label */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-xs font-medium">{photo.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bas */}
        <div className="mt-6 text-center">
          <button
            onClick={onOpen}
            className="text-sm text-gray-500 hover:text-red-600 transition-colors font-medium"
          >
            + Voir les {24 - 6} autres photos →
          </button>
        </div>
      </div>
    </section>
  );
};

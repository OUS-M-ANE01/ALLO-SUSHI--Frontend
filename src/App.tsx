import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './components/ui/Loader';
import { MenuPage } from './components/pages/MenuPage';
import { GalleryPage } from './components/pages/GalleryPage';
import { TraiteurPage } from './components/pages/TraiteurPage';
import { AboutPage } from './components/pages/AboutPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { Navbar } from './components/layout/Navbar';
import { InfoStrip } from './components/layout/InfoStrip';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Menu } from './components/sections/Menu';
import { Specials } from './components/sections/Specials';
import { Assortiments } from './components/sections/Assortiments';
import { Delivery } from './components/sections/Delivery';
import { Reviews } from './components/sections/Reviews';
import { GalleryPreview } from './components/sections/GalleryPreview';
import { Contact } from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [showMenuPage, setShowMenuPage] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showTraiteur, setShowTraiteur] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const pathname = window.location.pathname;
  const is404 = pathname !== '/' && pathname !== '';

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && is404 && <NotFoundPage />}

      {!loading && !is404 && (
      <div className="font-['Outfit'] bg-white text-gray-800 overflow-x-hidden">
        <AnimatePresence>
          {showMenuPage && <MenuPage onClose={() => setShowMenuPage(false)} />}
        </AnimatePresence>
        <AnimatePresence>
          {showGallery && <GalleryPage onClose={() => setShowGallery(false)} />}
        </AnimatePresence>
        <AnimatePresence>
          {showTraiteur && <TraiteurPage onClose={() => setShowTraiteur(false)} />}
        </AnimatePresence>
        <AnimatePresence>
          {showAbout && (
            <AboutPage
              onClose={() => setShowAbout(false)}
              onTraiteur={() => { setShowAbout(false); setShowTraiteur(true); }}
            />
          )}
        </AnimatePresence>
      <Navbar onTraiteur={() => setShowTraiteur(true)} onAbout={() => setShowAbout(true)} />
      <Hero />
      <InfoStrip />
      <About onOpenTraiteur={() => setShowTraiteur(true)} onOpenAbout={() => setShowAbout(true)} />
      <GalleryPreview onOpen={() => setShowGallery(true)} />
      <Menu onOpenFullMenu={() => setShowMenuPage(true)} />
      <Specials />
      <Assortiments />
      <Delivery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
      )}
    </>
  );
}

export default App;

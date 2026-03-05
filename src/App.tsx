import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './components/ui/Loader';
import { Navbar } from './components/layout/Navbar';
import { InfoStrip } from './components/layout/InfoStrip';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Menu } from './components/sections/Menu';
import { Specials } from './components/sections/Specials';
import { Assortiments } from './components/sections/Assortiments';
import { Delivery } from './components/sections/Delivery';
import { Contact } from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
      <div className="font-['Outfit'] bg-white text-gray-800 overflow-x-hidden">
      <Navbar />
      <Hero />
      <InfoStrip />
      <About />
      <Menu />
      <Specials />
      <Assortiments />
      <Delivery />
      <Contact />
      <Footer />
    </div>
      )}
    </>
  );
}

export default App;

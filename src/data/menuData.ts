import type { MenuItem, Assortiment, Zone, ContactInfo } from '../types';

export const menuItems: MenuItem[] = [
  // ── MENUS ──
  { id: 'menu-1', name: 'Menu 1', description: '4 Roll Philadelphia · 4 Roll Ebi Fry · 4 Roll Classic', price: 7000, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&q=80', badge: '12 pièces', category: 'menus' },
  { id: 'menu-2', name: 'Menu 2', description: '4 Philadelphia · 4 Roll Saumon · 6 Maki Saumon', price: 9000, image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=500&q=80', badge: '14 pièces', category: 'menus' },
  { id: 'menu-3', name: 'Menu 3', description: '4 Shake Roll · 4 Avocat Crevette · 4 Natan', price: 10000, image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&q=80', badge: '12 pièces', category: 'menus' },
  { id: 'menu-4', name: 'Menu 4', description: '4 Dragon · 4 Alaska · 4 Naomi', price: 11000, image: 'https://images.unsplash.com/photo-1617196034099-2b4d98a55ba1?w=500&q=80', badge: '12 pièces', category: 'menus' },
  { id: 'menu-5', name: 'Menu 5', description: '4 Kis of Casablanca · 6 Aromaki Saumon · 6 Aromaki Crevette', price: 12000, image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&q=80', badge: '16 pièces', category: 'menus' },
  { id: 'menu-6', name: 'Menu 6', description: '4 Shake Roll · 4 Kaytan · 4 Okinawa · 4 Natan', price: 14000, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80', badge: '16 pièces', category: 'menus' },
  { id: 'menu-7', name: 'Menu 7', description: '4 Tokyo · 4 Tigre · 4 Crunchy Saumon · 4 Casablanca', price: 16000, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&q=80', badge: '16 pièces', category: 'menus' },
  { id: 'menu-8', name: 'Menu 8', description: '4 Shake Roll · 4 Dragon · 4 Kisses Casablanca · 6 Aromaki · 6 Maki', price: 18000, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&q=80', badge: '24 pièces', category: 'menus' },
  { id: 'menu-9', name: 'Menu 9', description: '4 Tokyo · 4 Naomi · 4 Tigre · 4 Crunchy Saumon · 6 Casablanca · 6 Aromaki', price: 22000, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&q=80', badge: '28 pièces', category: 'menus' },
  { id: 'menu-10', name: 'Menu 10', description: '4 Shake Roll · 4 Alaska · 4 Kaytan · 4 Dragon · 6 Casablanca · 6 Aromaki', price: 24000, image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=500&q=80', badge: '28 pièces', category: 'menus' },
  { id: 'menu-11', name: 'Menu 11', description: '4 Tigre · 4 Tokyo · 4 Naomi · 6 Aromaki Crevette · 6 Maki Saumon · 4 Nigiri', price: 26000, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80', badge: '28 pièces', category: 'menus' },
  { id: 'menu-12', name: 'Menu 12', description: '6 Sashimi · 2 Nigiri · 4 Tokyo · 4 Alaska · 6 Aromaki · 6 Maki Avocat', price: 28500, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80', badge: '32 pièces', category: 'menus' },

  // ── CALIFORNIAS (4 pièces) ──
  { id: 'roll-classic', name: 'Roll Classic', description: 'Avocat, surimi, concombre, mayo japonaise, masago', price: 3000, image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=500&q=80', badge: '4 pièces', category: 'californias' },
  { id: 'roll-saumon', name: 'Roll Saumon', description: 'Saumon, avocat, mayo japonaise, sésame', price: 4000, image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=500&q=80', badge: '4 pièces', category: 'californias' },
  { id: 'roll-philadelphia', name: 'Roll Philadelphia', description: 'Saumon, avocat, surimi, tobiko, cheese', price: 4000, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80', badge: '4 pièces', category: 'californias' },
  { id: 'roll-ebi-fry', name: 'Roll Ebi Fry', description: 'Crevette tempura, avocat, mayonnaise épicée', price: 4000, image: 'https://images.unsplash.com/photo-1617196034099-2b4d98a55ba1?w=500&q=80', badge: '4 pièces', category: 'californias' },
  { id: 'shake-roll', name: 'Shake Roll', description: 'Saumon, avocat, cheese, ext tobiko', price: 5000, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&q=80', badge: '4 pièces', category: 'californias' },
  { id: 'dragon-roll', name: 'Dragon Roll', description: 'Avocat, crevette tempura, sauce dragon', price: 5000, image: 'https://images.unsplash.com/photo-1617196034099-2b4d98a55ba1?w=500&q=80', badge: '4 pièces', category: 'californias' },
  { id: 'alaska-roll', name: 'Alaska Roll', description: 'Saumon, avocat, concombre, mayo épicée', price: 5000, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80', badge: '4 pièces', category: 'californias' },
  { id: 'naomi-roll', name: 'Naomi Roll', description: 'Saumon grillé, avocat, cheese fondu, ciboulette', price: 5000, image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=500&q=80', badge: '4 pièces', category: 'californias' },
  { id: 'tokyo-roll', name: 'Tokyo Roll', description: 'Thon, avocat, sauce soja sucrée, sésame', price: 5000, image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=500&q=80', badge: '4 pièces', category: 'californias' },
  { id: 'tigre-roll', name: 'Tigre Roll', description: 'Crevette, avocat, sauce piment doux, masago', price: 5000, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80', badge: '4 pièces', category: 'californias' },
  { id: 'kaytan-roll', name: 'Kaytan Roll', description: 'Thon, avocat, sésame, sauce yuzu', price: 6000, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&q=80', badge: '4 pièces', category: 'californias' },
  { id: 'okinawa-roll', name: 'Okinawa Roll', description: 'Crevette, avocat, mangue, tobiko', price: 6000, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80', badge: '4 pièces', category: 'californias' },
  { id: 'natan-roll', name: 'Natan Roll', description: 'Saumon, mangue, avocat, sauce yuzu', price: 5000, image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=500&q=80', badge: '4 pièces', category: 'californias' },
  { id: 'crunchy-saumon', name: 'Crunchy Saumon', description: 'Saumon, avocat, panko croustillant, sriracha', price: 5500, image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=500&q=80', badge: '4 pièces', category: 'californias' },
  { id: 'avocat-crevette', name: 'Avocat Crevette', description: 'Crevette, avocat, mayo coco, masago', price: 4500, image: 'https://images.unsplash.com/photo-1617196034099-2b4d98a55ba1?w=500&q=80', badge: '4 pièces', category: 'californias' },

  // ── MAKIS & AROMAKIS ──
  { id: 'maki-saumon', name: 'Maki Saumon', description: 'Saumon, riz, nori', price: 4000, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80', badge: '6 pièces', category: 'makis' },
  { id: 'maki-avocat', name: 'Maki Avocat', description: 'Avocat, riz shari, nori', price: 3000, image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=500&q=80', badge: '6 pièces', category: 'makis' },
  { id: 'maki-thon', name: 'Maki Thon', description: 'Thon, riz, nori', price: 4000, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&q=80', badge: '6 pièces', category: 'makis' },
  { id: 'aromaki-saumon', name: 'Aromaki Saumon', description: 'Saumon, avocat, surimi, cheese, tobiko', price: 6000, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&q=80', badge: '6 pièces', category: 'makis' },
  { id: 'aromaki-crevette', name: 'Aromaki Crevette', description: 'Crevette, avocat, mayo épicée, tobiko', price: 6000, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&q=80', badge: '6 pièces', category: 'makis' },
  { id: 'casablanca', name: 'Casablanca', description: 'Saumon, fromage, avocat, sauce mangue', price: 6000, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80', badge: '6 pièces', category: 'makis' },
  { id: 'kis-casablanca', name: 'Kis of Casablanca', description: 'Variante du Casablanca avec sauce yuzu et tobiko orange', price: 6000, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80', badge: '6 pièces', category: 'makis' },

  // ── NIGIRIS & SASHIMIS ──
  { id: 'nigiri-saumon', name: 'Nigiri Saumon', description: 'Tranche de saumon frais sur riz vinaigré', price: 4000, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80', badge: '2 pièces', category: 'nigiris' },
  { id: 'nigiri-thon', name: 'Nigiri Thon', description: 'Tranche de thon frais sur riz vinaigré', price: 4500, image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=500&q=80', badge: '2 pièces', category: 'nigiris' },
  { id: 'nigiri-crevette', name: 'Nigiri Crevette', description: 'Crevette pochée sur riz vinaigré', price: 4000, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80', badge: '2 pièces', category: 'nigiris' },
  { id: 'sashimi-saumon', name: 'Sashimi Saumon', description: 'Tranches de saumon frais, sans riz', price: 5000, image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=500&q=80', badge: '4 pièces', category: 'nigiris' },
  { id: 'sashimi-thon', name: 'Sashimi Thon', description: 'Tranches de thon frais, sans riz', price: 5500, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&q=80', badge: '4 pièces', category: 'nigiris' },

  // ── WOKS & THAÏ ──
  { id: 'wok-poulet', name: 'Wok Poulet', description: 'Au choix : sauce soja, aigre-doux, teryaki ou oyster', price: 6000, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80', badge: 'Wok', category: 'woks' },
  { id: 'wok-crevette', name: 'Wok Crevette', description: 'Crevettes sautées, légumes, au choix soja / teryaki', price: 7000, image: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=500&q=80', badge: 'Wok', category: 'woks' },
  { id: 'wok-boeuf', name: 'Wok Bœuf', description: 'Émincé de bœuf, poivrons, oignons, sauce huître', price: 7000, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80', badge: 'Wok', category: 'woks' },
  { id: 'poulet-curry', name: 'Poulet Curry', description: 'Poulet, lait de coco, curry, oignon — servi avec riz', price: 6500, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80', badge: 'Thaï', category: 'woks' },
  { id: 'pad-thai', name: 'Pad Thaï', description: 'Nouilles de riz, œuf, cacahuètes, sauce thaï, légumes', price: 6500, image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500&q=80', badge: 'Thaï', category: 'woks' },
  { id: 'riz-cantonnais', name: 'Riz Cantonnais', description: 'Riz sauté, œuf, petits pois, jambon, sauce soja', price: 5000, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80', badge: 'Thaï', category: 'woks' },

  // ── FAST FOOD ──
  { id: 'hamburger', name: 'Hamburger Complet', description: 'Viande, fromage, oeuf, frite, laitue, tomate, cornichons', price: 4500, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80', badge: 'Burger', category: 'fastfood' },
  { id: 'hamburger-double', name: 'Double Burger', description: 'Double viande, double fromage, laitue, tomate, cornichons', price: 6000, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80', badge: 'Burger', category: 'fastfood' },
  { id: 'pizza-margarita', name: 'Pizza Margarita', description: 'Sauce tomate, mozzarella, oignon', price: 4500, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80', badge: 'Médium', category: 'fastfood' },
  { id: 'pizza-margarita-l', name: 'Pizza Margarita Large', description: 'Sauce tomate, mozzarella, oignon — format large', price: 6000, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80', badge: 'Large', category: 'fastfood' },
  { id: 'frites', name: 'Frites Maison', description: 'Frites croustillantes, sauce au choix', price: 2000, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80', badge: 'Accomp.', category: 'fastfood' },
];

export const assortiments: Assortiment[] = [
  { pieces: 40, title: 'Assortiment 40 pièces', description: 'Mix californias, makis et aromakis', price: 35000 },
  { pieces: 60, title: 'Assortiment 60 pièces', description: 'Mix californias, makis et aromakis', price: 50000 },
  { pieces: 80, title: 'Assortiment 80 pièces', description: 'Mix californias, makis et aromakis', price: 65000 },
  { pieces: 100, title: 'Assortiment 100 pièces', description: 'Idéal pour les grandes tablées', price: 80000 },
  { pieces: 120, title: 'Assortiment 120 pièces', description: 'Le format événement par excellence', price: 95000 }
];

export const deliveryZones: Zone[] = [
  { number: 1, label: 'Zone 1', price: 500 },
  { number: 2, label: 'Zone 2', price: 1000 },
  { number: 3, label: 'Zone 3', price: 1500 },
  { number: 4, label: 'Zone 4', price: 2000 },
  { number: 5, label: 'Zone 5', price: 2500 },
  { number: 6, label: 'Zone 6', price: 3000 }
];

export const contactInfo: ContactInfo = {
  phone: '338423011',
  whatsapp: '221781424646',
  email: 'contact@allosushifood.com',
  address: '62 Rue Félix Faure, à côté Hôtel Fleur de Lys, Plateau — Dakar',
  website: 'www.allosushifood.com'
};

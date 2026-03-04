import type { MenuItem, Assortiment, Zone, ContactInfo } from '../types';

export const menuItems: MenuItem[] = [
  // Menus
  {
    id: 'menu-1',
    name: 'Menu 1',
    description: '4 Roll Philadelphia · 4 Roll Ebi Fry · 4 Roll Classic',
    price: 7000,
    image: 'https://images.unsplash.com/photo-1617196034096-2186592b2ca0?w=500&q=80',
    badge: '12 pièces',
    category: 'menus'
  },
  {
    id: 'menu-2',
    name: 'Menu 2',
    description: '4 Philadelphia · 4 Roll Saumon · 6 Maki Saumon',
    price: 9000,
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=500&q=80',
    badge: '14 pièces',
    category: 'menus'
  },
  {
    id: 'menu-3',
    name: 'Menu 3',
    description: '4 Shake Roll · 4 Avocat Crevette · 4 Natan',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1532803006695-64f26ea5f48e?w=500&q=80',
    badge: '12 pièces',
    category: 'menus'
  },
  {
    id: 'menu-5',
    name: 'Menu 5',
    description: '4 Kis of Casablanca · 6 Aromaki Saumon · 6 Aromaki Crevette',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&q=80',
    badge: '16 pièces',
    category: 'menus'
  },
  {
    id: 'menu-9',
    name: 'Menu 9',
    description: '4 Tokyo · 4 Naomi · 4 Tigre · 4 Crunchy Saumon · 6 Casablanca · 6 Aromaki',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?w=500&q=80',
    badge: '28 pièces',
    category: 'menus'
  },
  {
    id: 'menu-12',
    name: 'Menu 12',
    description: '6 Sashimi · 2 Nigiri · 4 Tokyo · 4 Alaska · 6 Aromaki · 6 Maki Avocat',
    price: 28500,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80',
    badge: '32 pièces',
    category: 'menus'
  },
  // Californias
  {
    id: 'roll-classic',
    name: 'Roll Classic',
    description: 'Avocat, surimi, concombre, mayo japonaise, masago',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1617196034094-f6e95d23c89d?w=500&q=80',
    badge: '4 pièces',
    category: 'californias'
  },
  {
    id: 'roll-saumon',
    name: 'Roll Saumon',
    description: 'Saumon, avocat, mayo japonaise, sésame',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=500&q=80',
    badge: '4 pièces',
    category: 'californias'
  },
  {
    id: 'roll-philadelphia',
    name: 'Roll Philadelphia',
    description: 'Saumon, avocat, surimi, tobiko, cheese',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80',
    badge: '4 pièces',
    category: 'californias'
  },
  // Makis
  {
    id: 'maki-saumon',
    name: 'Maki Saumon',
    description: 'Saumon, riz, nori',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1617196034082-1f645e3bbafc?w=500&q=80',
    badge: '6 pièces',
    category: 'makis'
  },
  {
    id: 'aromaki-saumon',
    name: 'Aromaki Saumon',
    description: 'Saumon, avocat, surimi, cheese, tobiko',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&q=80',
    badge: '6 pièces',
    category: 'makis'
  },
  // Nigiris
  {
    id: 'nigiri-saumon',
    name: 'Nigiri Saumon',
    description: 'Tranche de saumon frais sur riz vinaigré',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1617196034181-4e9a8f0a3ea2?w=500&q=80',
    badge: '2 pièces',
    category: 'nigiris'
  },
  {
    id: 'sashimi-saumon',
    name: 'Sashimi Saumon',
    description: 'Tranches de saumon frais, sans riz',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80',
    badge: '4 pièces',
    category: 'nigiris'
  },
  // Woks
  {
    id: 'wok-poulet',
    name: 'Wok Poulet',
    description: 'Au choix : sauce soja, aigre-doux, teryaki ou oyster',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80',
    badge: 'Wok',
    category: 'woks'
  },
  {
    id: 'poulet-curry',
    name: 'Poulet Curry',
    description: 'Poulet, lait de coco, curry, oignon — servi avec riz',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80',
    badge: 'Thaï',
    category: 'woks'
  },
  // Fast Food
  {
    id: 'hamburger',
    name: 'Hamburger Complet',
    description: 'Viande, fromage, oeuf, frite, laitue, tomate, cornichons',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',
    badge: 'Burger',
    category: 'fastfood'
  },
  {
    id: 'pizza',
    name: 'Pizza Margarita',
    description: 'Sauce tomate, mozzarella, oignon — Médium 4 500 / Large 6 000',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80',
    badge: 'Pizza',
    category: 'fastfood'
  }
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

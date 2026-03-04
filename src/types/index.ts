export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  category: 'menus' | 'californias' | 'makis' | 'nigiris' | 'woks' | 'fastfood';
}

export type Assortiment = {
  pieces: number;
  title: string;
  description: string;
  price: number;
}

export type Zone = {
  number: number;
  label: string;
  price: number;
}

export type ContactInfo = {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  website: string;
}

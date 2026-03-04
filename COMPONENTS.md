# Documentation des Composants

## 📦 Composants UI

### Button

Bouton réutilisable avec deux variantes.

**Props:**
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}
```

**Utilisation:**
```tsx
<Button variant="primary" icon={<i className="fas fa-phone"></i>}>
  Commander
</Button>

<Button variant="ghost" href="https://wa.me/221781424646">
  WhatsApp
</Button>
```

**Variantes:**
- `primary`: Bouton vert avec ombre
- `ghost`: Bouton avec bordure

---

### Card

Carte produit pour afficher les items du menu.

**Props:**
```typescript
interface CardProps {
  item: MenuItem;
}
```

**Utilisation:**
```tsx
<Card item={menuItem} />
```

**Fonctionnalités:**
- Image avec effet hover
- Badge personnalisable
- Prix formaté
- Bouton d'action

---

### SectionHeader

En-tête standardisé pour les sections.

**Props:**
```typescript
interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}
```

**Utilisation:**
```tsx
<SectionHeader 
  label="Notre Carte"
  title="Explorez Notre Menu"
  subtitle="Description optionnelle"
  centered={false}
/>
```

---

## 🏗️ Composants Layout

### Navbar

Navigation principale avec effet de scroll.

**Fonctionnalités:**
- Sticky au scroll
- Ombre dynamique
- Logo cliquable
- Menu de navigation
- Bouton CTA

**État:**
```typescript
const [scrolled, setScrolled] = useState(false);
```

**Responsive:**
- Desktop: Menu complet
- Mobile: Menu caché (à implémenter)

---

### InfoStrip

Bande d'informations sous le hero.

**Données affichées:**
- Livraison 7j/7
- Téléphone
- WhatsApp
- Adresse
- Horaires

**Style:**
- Fond noir
- Icônes vertes
- Séparateurs entre items

---

### Footer

Pied de page avec liens et informations.

**Sections:**
1. Logo et description
2. Navigation
3. Menu
4. Contact

**Fonctionnalités:**
- Liens sociaux
- Grid responsive
- Copyright

---

## 📄 Composants Sections

### Hero

Section d'accueil principale.

**Éléments:**
- Badge "Livraison 7j/7"
- Titre principal
- Description
- Boutons CTA
- Statistiques
- Image avec overlay
- Carte flottante (desktop)

**Animations:**
- Zoom sur l'image
- Flottement de la carte

---

### About

Section "À propos" avec images et features.

**Structure:**
- Grid 2 colonnes
- Images superposées
- Badge "N°1 à Dakar"
- 4 features en grid

**Animation:**
- Fade-up au scroll

---

### Menu

Menu interactif avec onglets.

**État:**
```typescript
const [activeTab, setActiveTab] = useState<TabType>('menus');
```

**Onglets:**
- Menus
- Californias
- Makis & Aromakis
- Nigiris & Sashimis
- Woks & Thaï
- Fast Food

**Fonctionnalités:**
- Filtrage par catégorie
- Grid responsive
- Animation des cartes

---

### Specials

Spécialités signature du chef.

**Layout:**
- Grande carte principale
- 2 petites cartes à côté

**Overlay:**
- Tag "Best Seller" / "Création Chef"
- Nom du plat
- Description
- Prix

---

### Assortiments

Grands formats pour événements.

**Structure:**
- Liste interactive
- Image à côté
- Hover effects

**Données:**
- 40, 60, 80, 100, 120 pièces
- Prix et descriptions

---

### Delivery

Informations de livraison.

**Éléments:**
- Image avec badge
- Zones de livraison (grid)
- Boutons de contact

**Zones:**
- 6 zones avec prix
- Hover effect

---

### Contact

Formulaire de contact WhatsApp.

**État:**
```typescript
const [formData, setFormData] = useState({
  nom: '',
  tel: '',
  adresse: '',
  commande: ''
});
```

**Fonctionnalités:**
- Validation du formulaire
- Envoi via WhatsApp
- Informations de contact

**Champs:**
- Nom et prénom
- Téléphone
- Adresse de livraison
- Commande (textarea)

---

## 🎣 Hooks Personnalisés

### useScrollAnimation

Hook pour animer les éléments au scroll.

**Retour:**
```typescript
{
  ref: RefObject<HTMLDivElement>;
  isVisible: boolean;
}
```

**Utilisation:**
```tsx
const { ref, isVisible } = useScrollAnimation();

<div 
  ref={ref}
  className={`transition-all duration-700 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
  }`}
>
  Contenu
</div>
```

**Configuration:**
- Threshold: 0.1
- Root margin: '0px 0px -40px 0px'

---

## 📊 Types TypeScript

### MenuItem

```typescript
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  category: 'menus' | 'californias' | 'makis' | 'nigiris' | 'woks' | 'fastfood';
}
```

### Assortiment

```typescript
interface Assortiment {
  pieces: number;
  title: string;
  description: string;
  price: number;
}
```

### Zone

```typescript
interface Zone {
  number: number;
  label: string;
  price: number;
}
```

### ContactInfo

```typescript
interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  website: string;
}
```

---

## 🎨 Classes Tailwind Communes

### Animations

```css
/* Fade up */
transition-all duration-700
opacity-0 translate-y-7  /* Initial */
opacity-100 translate-y-0 /* Visible */

/* Hover lift */
hover:-translate-y-1.5
hover:shadow-xl

/* Scale on hover */
hover:scale-105
```

### Couleurs

```css
/* Vert principal */
bg-green-600
text-green-600
border-green-600

/* Vert clair */
bg-green-50
text-green-50

/* Crème */
bg-[#faf8f4]
```

### Espacements

```css
/* Padding sections */
py-25 px-16

/* Gaps */
gap-3.5
gap-5.5
gap-9
```

### Typographie

```css
/* Titres */
font-serif text-4xl md:text-5xl font-bold

/* Corps */
text-base text-gray-600 leading-relaxed

/* Labels */
text-xs font-semibold tracking-widest uppercase
```

---

## 🔧 Patterns de Développement

### Composant avec Animation

```tsx
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const MySection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-25 px-16">
      <div className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
      }`}>
        {/* Contenu */}
      </div>
    </section>
  );
};
```

### Composant avec État

```tsx
import { useState } from 'react';

export const MyComponent: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <button onClick={() => setActive(!active)}>
      {active ? 'Actif' : 'Inactif'}
    </button>
  );
};
```

### Composant avec Props

```tsx
interface MyComponentProps {
  title: string;
  items: Item[];
  onSelect?: (item: Item) => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({ 
  title, 
  items, 
  onSelect 
}) => {
  return (
    <div>
      <h2>{title}</h2>
      {items.map(item => (
        <div key={item.id} onClick={() => onSelect?.(item)}>
          {item.name}
        </div>
      ))}
    </div>
  );
};
```

---

## 📝 Conventions de Code

### Nommage

- **Composants**: PascalCase (`MyComponent`)
- **Fichiers**: PascalCase (`MyComponent.tsx`)
- **Hooks**: camelCase avec préfixe `use` (`useMyHook`)
- **Types**: PascalCase (`MyType`)
- **Variables**: camelCase (`myVariable`)

### Structure de Fichier

```tsx
// 1. Imports
import React from 'react';
import { MyType } from '../types';

// 2. Types/Interfaces
interface MyComponentProps {
  // ...
}

// 3. Composant
export const MyComponent: React.FC<MyComponentProps> = ({ prop }) => {
  // 4. État
  const [state, setState] = useState();
  
  // 5. Effets
  useEffect(() => {
    // ...
  }, []);
  
  // 6. Handlers
  const handleClick = () => {
    // ...
  };
  
  // 7. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};
```

### Commentaires

```tsx
// Commentaire simple pour une ligne

/**
 * Commentaire détaillé pour une fonction
 * @param item - L'item à afficher
 * @returns Le composant rendu
 */
```

---

## 🧪 Tests (À implémenter)

### Test d'un Composant

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    screen.getByText('Click').click();
    expect(handleClick).toHaveBeenCalled();
  });
});
```

---

## 🎯 Checklist Nouveau Composant

- [ ] Créer le fichier dans le bon dossier
- [ ] Définir les types/interfaces
- [ ] Implémenter le composant
- [ ] Ajouter les styles Tailwind
- [ ] Gérer le responsive
- [ ] Ajouter les animations si nécessaire
- [ ] Documenter les props
- [ ] Tester visuellement
- [ ] Exporter depuis index si nécessaire

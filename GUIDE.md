# Guide de Développement - Alloo Sushi

## 🎯 Structure du Projet

### Composants Layout (`components/layout/`)
Composants qui structurent la page:
- **Navbar**: Navigation principale avec scroll effect
- **InfoStrip**: Bande d'informations (téléphone, horaires, etc.)
- **Footer**: Pied de page avec liens et réseaux sociaux

### Composants Sections (`components/sections/`)
Sections principales de la page:
- **Hero**: Section d'accueil avec titre et CTA
- **About**: Présentation du restaurant
- **Menu**: Menu interactif avec onglets
- **Specials**: Spécialités signature
- **Assortiments**: Grands formats pour événements
- **Delivery**: Informations de livraison
- **Contact**: Formulaire de contact WhatsApp

### Composants UI (`components/ui/`)
Composants réutilisables:
- **Button**: Bouton avec variantes (primary, ghost)
- **Card**: Carte produit pour le menu
- **SectionHeader**: En-tête de section standardisé

## 🔧 Modification des Données

### Ajouter un Plat au Menu

Ouvrez `src/data/menuData.ts` et ajoutez:

```typescript
{
  id: 'mon-plat',
  name: 'Nom du Plat',
  description: 'Description détaillée',
  price: 5000,
  image: 'https://images.unsplash.com/...',
  badge: '4 pièces',
  category: 'menus' // menus | californias | makis | nigiris | woks | fastfood
}
```

### Modifier les Zones de Livraison

Dans `src/data/menuData.ts`, éditez `deliveryZones`:

```typescript
export const deliveryZones: Zone[] = [
  { number: 1, label: 'Zone 1', price: 500 },
  // Ajoutez ou modifiez les zones
];
```

### Changer les Informations de Contact

Modifiez `contactInfo` dans `src/data/menuData.ts`:

```typescript
export const contactInfo: ContactInfo = {
  phone: '338423011',
  whatsapp: '221781424646',
  email: 'contact@allosushifood.com',
  address: '62 Rue Félix Faure...',
  website: 'www.allosushifood.com'
};
```

## 🎨 Personnalisation du Style

### Couleurs

Éditez `tailwind.config.js`:

```javascript
colors: {
  green: {
    50: '#edf7e6',    // Vert très clair
    600: '#5aaa2a',   // Vert principal
    700: '#4a9120',   // Vert foncé
  }
}
```

### Polices

Les polices sont définies dans `index.css`:
- **Outfit**: Police principale
- **Cormorant Garamond**: Titres élégants
- **Bebas Neue**: Chiffres et badges

### Espacements

Espacements personnalisés dans `tailwind.config.js`:

```javascript
spacing: {
  '4.5': '1.125rem',
  '5.5': '1.375rem',
  // etc.
}
```

## 🔄 Hooks Personnalisés

### useScrollAnimation

Hook pour animer les éléments au scroll:

```typescript
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const MyComponent = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
      }`}
    >
      Contenu animé
    </div>
  );
};
```

## 📱 Responsive Design

### Breakpoints Tailwind

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Exemple d'utilisation

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 colonne mobile, 2 tablette, 3 desktop */}
</div>
```

## 🚀 Commandes Utiles

```bash
# Développement
npm run dev

# Build production
npm run build

# Prévisualisation
npm run preview

# Lint
npm run lint

# Type check
tsc --noEmit
```

## 📦 Ajout de Nouvelles Fonctionnalités

### 1. Créer un Nouveau Composant

```typescript
// src/components/ui/MonComposant.tsx
import React from 'react';

interface MonComposantProps {
  title: string;
  // autres props
}

export const MonComposant: React.FC<MonComposantProps> = ({ title }) => {
  return (
    <div className="...">
      <h2>{title}</h2>
    </div>
  );
};
```

### 2. Ajouter un Type

```typescript
// src/types/index.ts
export interface MonType {
  id: string;
  name: string;
  // autres propriétés
}
```

### 3. Créer un Hook

```typescript
// src/hooks/useMonHook.ts
import { useState, useEffect } from 'react';

export const useMonHook = () => {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    // logique
  }, []);
  
  return { state };
};
```

## 🐛 Débogage

### Erreurs Courantes

1. **Module not found**: Vérifiez les imports et chemins
2. **Type errors**: Assurez-vous que les types sont corrects
3. **Style non appliqué**: Vérifiez que Tailwind est configuré

### Outils de Développement

- React DevTools (extension navigateur)
- Console du navigateur
- TypeScript errors dans l'éditeur

## 📚 Ressources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

## 💡 Bonnes Pratiques

1. **Nommage**: Utilisez des noms descriptifs
2. **Composants**: Gardez-les petits et focalisés
3. **Types**: Typez toujours vos props et états
4. **CSS**: Utilisez Tailwind plutôt que du CSS custom
5. **Performance**: Évitez les re-renders inutiles
6. **Accessibilité**: Utilisez les balises sémantiques

## 🔐 Sécurité

- Ne commitez jamais de clés API
- Validez les entrées utilisateur
- Utilisez HTTPS en production
- Sanitisez les données avant affichage

## 📞 Support

Pour toute question sur le code:
1. Consultez ce guide
2. Vérifiez la documentation des librairies
3. Examinez les composants existants comme exemples

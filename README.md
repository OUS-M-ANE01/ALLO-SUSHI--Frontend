# Alloo Sushi - Application React

Application web moderne pour le restaurant Alloo Sushi à Dakar, développée avec React, TypeScript et Tailwind CSS.

## 🏗️ Architecture

```
src/
├── components/
│   ├── layout/          # Composants de mise en page
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── InfoStrip.tsx
│   ├── sections/        # Sections de la page
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Menu.tsx
│   │   ├── Specials.tsx
│   │   ├── Assortiments.tsx
│   │   ├── Delivery.tsx
│   │   └── Contact.tsx
│   └── ui/              # Composants réutilisables
│       ├── Button.tsx
│       ├── Card.tsx
│       └── SectionHeader.tsx
├── data/                # Données statiques
│   └── menuData.ts
├── hooks/               # Hooks personnalisés
│   └── useScrollAnimation.ts
├── types/               # Types TypeScript
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Principes de Design

### Composants Modulaires
- Chaque section est un composant indépendant
- Composants UI réutilisables (Button, Card, SectionHeader)
- Séparation claire entre layout, sections et UI

### Gestion des Données
- Données centralisées dans `data/menuData.ts`
- Types TypeScript pour la sécurité du code
- Facile à maintenir et à étendre

### Animations
- Hook personnalisé `useScrollAnimation` pour les animations au scroll
- Transitions fluides avec Tailwind CSS
- Animations CSS pour les effets spéciaux

### Responsive Design
- Mobile-first avec Tailwind CSS
- Breakpoints adaptés pour tous les écrans
- Grid et Flexbox pour les layouts

## 🚀 Démarrage

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview
```

## 📦 Technologies

- **React 19** - Framework UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utilitaire
- **Vite** - Build tool rapide
- **Font Awesome** - Icônes

## 🎯 Fonctionnalités

- Navigation fluide avec scroll smooth
- Menu interactif avec onglets
- Formulaire de commande WhatsApp
- Animations au scroll
- Design responsive
- Performance optimisée

## 📝 Bonnes Pratiques

1. **Composants Fonctionnels** - Utilisation exclusive de composants fonctionnels avec hooks
2. **TypeScript** - Typage strict pour éviter les erreurs
3. **Séparation des Responsabilités** - Chaque composant a une responsabilité unique
4. **Réutilisabilité** - Composants UI génériques et configurables
5. **Performance** - Lazy loading et optimisations Vite
6. **Accessibilité** - Sémantique HTML et attributs ARIA

## 🔧 Personnalisation

### Ajouter un Nouveau Plat

Éditez `src/data/menuData.ts` et ajoutez un nouvel objet dans le tableau `menuItems`:

```typescript
{
  id: 'nouveau-plat',
  name: 'Nom du Plat',
  description: 'Description',
  price: 5000,
  image: 'url-image',
  badge: 'Badge',
  category: 'menus' // ou autre catégorie
}
```

### Modifier les Couleurs

Éditez `tailwind.config.js` pour personnaliser les couleurs:

```javascript
colors: {
  green: {
    600: '#5aaa2a', // Couleur principale
  }
}
```

### Ajouter une Nouvelle Section

1. Créez un nouveau composant dans `src/components/sections/`
2. Importez-le dans `App.tsx`
3. Ajoutez-le dans le JSX

## 📱 Contact

- **Téléphone**: 33 842 30 11
- **WhatsApp**: 78 142 46 46
- **Email**: contact@allosushifood.com
- **Adresse**: 62 Rue Félix Faure, Plateau, Dakar

## 📄 Licence

© 2025 Alloo Sushi - Tous droits réservés

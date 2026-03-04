# Architecture du Projet Alloo Sushi

## 🏛️ Vue d'Ensemble

Application React moderne construite avec:
- **React 19** + **TypeScript** pour la robustesse
- **Tailwind CSS** pour le styling rapide et cohérent
- **Vite** pour un build ultra-rapide
- Architecture modulaire et scalable

## 📁 Structure des Dossiers

```
frontend/
├── public/                 # Fichiers statiques
├── src/
│   ├── components/        # Tous les composants React
│   │   ├── layout/       # Composants de structure (Navbar, Footer)
│   │   ├── sections/     # Sections de page (Hero, Menu, etc.)
│   │   └── ui/           # Composants réutilisables (Button, Card)
│   ├── data/             # Données statiques et configuration
│   ├── hooks/            # Hooks React personnalisés
│   ├── types/            # Définitions TypeScript
│   ├── App.tsx           # Composant racine
│   ├── main.tsx          # Point d'entrée
│   └── index.css         # Styles globaux
├── index.html            # Template HTML
├── package.json          # Dépendances
├── tailwind.config.js    # Configuration Tailwind
├── tsconfig.json         # Configuration TypeScript
└── vite.config.ts        # Configuration Vite
```

## 🎯 Principes Architecturaux

### 1. Séparation des Responsabilités

**Layout** → Structure de la page (Navbar, Footer)
**Sections** → Contenu principal (Hero, Menu, Contact)
**UI** → Composants réutilisables (Button, Card)

### 2. Single Source of Truth

Toutes les données sont centralisées dans `data/menuData.ts`:
- Menu items
- Assortiments
- Zones de livraison
- Informations de contact

### 3. Type Safety

TypeScript pour éviter les erreurs:
```typescript
interface MenuItem {
  id: string;
  name: string;
  // ...
}
```

### 4. Composition over Inheritance

Composants petits et composables:
```tsx
<SectionHeader label="Menu" title="Notre Carte" />
<Card item={menuItem} />
```

## 🔄 Flux de Données

```
menuData.ts (Source)
    ↓
Menu.tsx (Filtrage)
    ↓
Card.tsx (Affichage)
```

**Unidirectionnel**: Les données descendent via les props.

## 🎨 Système de Design

### Couleurs

```javascript
colors: {
  green: {
    50: '#edf7e6',   // Backgrounds
    600: '#5aaa2a',  // Primary
    700: '#4a9120',  // Hover
  },
  cream: '#faf8f4',  // Sections alternées
}
```

### Typographie

- **Outfit**: Corps de texte (300, 400, 500, 600)
- **Cormorant Garamond**: Titres élégants
- **Bebas Neue**: Chiffres et badges

### Espacements

Système cohérent basé sur Tailwind:
- `gap-3.5` (14px)
- `py-25` (100px)
- `px-16` (64px)

## 🔌 Hooks Personnalisés

### useScrollAnimation

Gère les animations au scroll avec Intersection Observer:

```typescript
const { ref, isVisible } = useScrollAnimation();
```

**Avantages:**
- Réutilisable
- Performance optimale
- Configuration centralisée

## 📦 Gestion d'État

### État Local

Utilisé pour:
- Onglets actifs (Menu)
- Formulaires (Contact)
- UI temporaire (Navbar scroll)

```tsx
const [activeTab, setActiveTab] = useState('menus');
```

### Pas de State Management Global

Pas besoin de Redux/Zustand car:
- Application simple
- Pas de partage d'état complexe
- Props drilling minimal

## 🎭 Patterns de Composants

### 1. Composant Présentationnel

```tsx
interface CardProps {
  item: MenuItem;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  return <div>{item.name}</div>;
};
```

**Caractéristiques:**
- Reçoit des données via props
- Pas de logique métier
- Réutilisable

### 2. Composant Conteneur

```tsx
export const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState('menus');
  const filteredItems = menuItems.filter(/* ... */);
  
  return <div>{/* Render */}</div>;
};
```

**Caractéristiques:**
- Gère l'état
- Contient la logique
- Compose d'autres composants

### 3. Composant Layout

```tsx
export const Navbar: React.FC = () => {
  return <nav>{/* Structure */}</nav>;
};
```

**Caractéristiques:**
- Structure de page
- Toujours visible
- Peu de logique

## 🚀 Performance

### Code Splitting

Vite fait automatiquement:
- Chunks séparés par route
- Lazy loading des images
- Tree shaking

### Optimisations

1. **Images**: Unsplash avec paramètres optimisés (`?w=500&q=80`)
2. **CSS**: Tailwind purge les classes inutilisées
3. **JS**: Minification et compression
4. **Fonts**: Preconnect Google Fonts

### Métriques Cibles

- First Contentful Paint: < 1.8s
- Time to Interactive: < 3.8s
- Lighthouse Score: > 90

## 🔐 Sécurité

### Bonnes Pratiques

1. **Pas de secrets dans le code**
2. **Validation des entrées** (formulaire)
3. **Liens externes** avec `rel="noopener noreferrer"`
4. **HTTPS** en production

### Sanitization

```tsx
// Éviter dangerouslySetInnerHTML
// Utiliser des composants React
```

## ♿ Accessibilité

### Sémantique HTML

```tsx
<nav>      // Navigation
<section>  // Sections
<button>   // Actions
<a>        // Liens
```

### ARIA

```tsx
<button aria-label="Commander">
  <i className="fas fa-phone" />
</button>
```

### Contraste

Toutes les couleurs respectent WCAG AA:
- Texte: #2a2a2a sur #ffffff
- Vert: #5aaa2a avec texte blanc

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile first */
.class { /* Mobile */ }

@media (min-width: 768px) {
  .class { /* Tablet */ }
}

@media (min-width: 1024px) {
  .class { /* Desktop */ }
}
```

### Stratégie

1. **Mobile**: 1 colonne, menu caché
2. **Tablet**: 2 colonnes, menu visible
3. **Desktop**: 3 colonnes, full layout

## 🧪 Tests (Recommandés)

### Structure de Tests

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Button.test.tsx
```

### Types de Tests

1. **Unit**: Composants isolés
2. **Integration**: Interactions entre composants
3. **E2E**: Parcours utilisateur complet

### Outils Suggérés

- **Vitest**: Tests unitaires
- **Testing Library**: Tests React
- **Playwright**: Tests E2E

## 🔄 Workflow de Développement

### 1. Nouvelle Fonctionnalité

```bash
# 1. Créer une branche
git checkout -b feature/nouvelle-fonctionnalite

# 2. Développer
# - Créer les types
# - Créer les composants
# - Ajouter les styles

# 3. Tester
npm run dev

# 4. Build
npm run build

# 5. Commit
git add .
git commit -m "feat: ajouter nouvelle fonctionnalité"

# 6. Push
git push origin feature/nouvelle-fonctionnalite
```

### 2. Correction de Bug

```bash
git checkout -b fix/nom-du-bug
# Corriger
git commit -m "fix: corriger le bug X"
```

### 3. Refactoring

```bash
git checkout -b refactor/nom-refactor
# Refactorer
git commit -m "refactor: améliorer le composant X"
```

## 📚 Conventions de Code

### Commits

Format: `type(scope): message`

Types:
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `refactor`: Refactoring
- `style`: Changements de style
- `docs`: Documentation
- `test`: Tests

### Nommage

```typescript
// Composants: PascalCase
export const MyComponent: React.FC = () => {};

// Fonctions: camelCase
const handleClick = () => {};

// Constantes: UPPER_SNAKE_CASE
const API_URL = 'https://api.example.com';

// Types: PascalCase
interface MyType {}
```

## 🎓 Ressources d'Apprentissage

### Documentation

- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)

### Patterns

- [React Patterns](https://reactpatterns.com)
- [TypeScript Patterns](https://www.patterns.dev)

## 🔮 Évolutions Futures

### Court Terme

- [ ] Menu mobile hamburger
- [ ] Panier de commande
- [ ] Favoris
- [ ] Recherche de plats

### Moyen Terme

- [ ] Backend API
- [ ] Authentification
- [ ] Historique de commandes
- [ ] Programme de fidélité

### Long Terme

- [ ] Application mobile (React Native)
- [ ] Système de réservation
- [ ] Live tracking livraison
- [ ] Paiement en ligne

## 🤝 Contribution

### Guidelines

1. Suivre l'architecture existante
2. Respecter les conventions de code
3. Documenter les nouveaux composants
4. Tester avant de commit
5. Faire des PR petites et focalisées

### Code Review

Points à vérifier:
- [ ] Code propre et lisible
- [ ] Types TypeScript corrects
- [ ] Responsive design
- [ ] Performance
- [ ] Accessibilité
- [ ] Documentation

## 📞 Support

Pour questions sur l'architecture:
1. Consulter cette documentation
2. Vérifier les exemples de code
3. Lire les commentaires dans le code
4. Consulter la documentation des librairies

---

**Dernière mise à jour**: Mars 2025
**Version**: 1.0.0
**Mainteneur**: Équipe Alloo Sushi

# 🚀 Démarrage Rapide - Alloo Sushi

## Installation

```bash
cd frontend
npm install
```

## Lancement

```bash
npm run dev
```

Ouvrez http://localhost:5173 dans votre navigateur.

## Structure Créée

✅ **18 fichiers TypeScript/React** organisés en:
- 3 composants layout (Navbar, Footer, InfoStrip)
- 7 sections (Hero, About, Menu, Specials, Assortiments, Delivery, Contact)
- 3 composants UI réutilisables (Button, Card, SectionHeader)
- 1 hook personnalisé (useScrollAnimation)
- Types TypeScript
- Données du menu

## Fonctionnalités Implémentées

### ✅ Navigation
- Navbar sticky avec effet scroll
- Menu de navigation
- Bouton d'appel à l'action

### ✅ Hero Section
- Titre accrocheur
- Statistiques
- Boutons CTA
- Image avec animation
- Carte flottante

### ✅ Menu Interactif
- 6 catégories (Menus, Californias, Makis, Nigiris, Woks, Fast Food)
- Filtrage par onglets
- Cartes produits avec images
- Prix et descriptions

### ✅ Sections Complètes
- À propos avec images
- Spécialités signature
- Assortiments pour événements
- Informations de livraison
- Formulaire de contact WhatsApp

### ✅ Animations
- Fade-up au scroll
- Hover effects
- Transitions fluides

### ✅ Responsive
- Mobile, tablette, desktop
- Grid adaptatif
- Images optimisées

## Prochaines Étapes

### 1. Personnaliser les Données

Éditez `src/data/menuData.ts` pour:
- Ajouter/modifier des plats
- Changer les prix
- Mettre à jour les images
- Modifier les informations de contact

### 2. Ajuster les Couleurs

Éditez `tailwind.config.js`:
```javascript
colors: {
  green: {
    600: '#5aaa2a', // Votre couleur principale
  }
}
```

### 3. Ajouter des Images

Remplacez les URLs Unsplash par vos propres images:
- Placez les images dans `public/images/`
- Mettez à jour les URLs dans `menuData.ts`

### 4. Configurer WhatsApp

Dans `src/data/menuData.ts`:
```typescript
export const contactInfo: ContactInfo = {
  whatsapp: '221781424646', // Votre numéro
  // ...
};
```

## Commandes Utiles

```bash
# Développement
npm run dev

# Build production
npm run build

# Prévisualisation du build
npm run preview

# Vérification TypeScript
npx tsc --noEmit

# Lint
npm run lint
```

## Architecture

```
src/
├── components/
│   ├── layout/      → Structure (Navbar, Footer)
│   ├── sections/    → Contenu (Hero, Menu, etc.)
│   └── ui/          → Réutilisables (Button, Card)
├── data/            → Données du menu
├── hooks/           → Hooks personnalisés
├── types/           → Types TypeScript
└── App.tsx          → Composant racine
```

## Technologies

- ⚛️ React 19
- 📘 TypeScript
- 🎨 Tailwind CSS
- ⚡ Vite
- 🎭 Font Awesome

## Documentation

- 📖 [README.md](./README.md) - Vue d'ensemble
- 🏗️ [ARCHITECTURE.md](./ARCHITECTURE.md) - Architecture détaillée
- 📦 [COMPONENTS.md](./COMPONENTS.md) - Documentation des composants
- 📚 [GUIDE.md](./GUIDE.md) - Guide de développement
- 🚀 [DEPLOYMENT.md](./DEPLOYMENT.md) - Guide de déploiement

## Problèmes Courants

### Port déjà utilisé

```bash
# Changer le port dans vite.config.ts
server: {
  port: 3000
}
```

### Erreurs TypeScript

```bash
# Vérifier les types
npx tsc --noEmit

# Installer les types manquants
npm install --save-dev @types/node
```

### Styles non appliqués

```bash
# Vérifier que Tailwind est configuré
# Redémarrer le serveur
npm run dev
```

## Support

- 📧 Email: contact@allosushifood.com
- 📱 WhatsApp: +221 78 142 46 46
- 📞 Téléphone: 33 842 30 11

## Licence

© 2025 Alloo Sushi - Tous droits réservés

---

**Bon développement! 🎉**

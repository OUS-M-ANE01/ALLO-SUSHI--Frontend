# Guide de Déploiement - Alloo Sushi

## 🚀 Déploiement en Production

### Préparation

1. **Vérifier le build**
```bash
npm run build
```

2. **Tester le build localement**
```bash
npm run preview
```

### Options de Déploiement

#### 1. Vercel (Recommandé)

```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel
```

Configuration automatique pour Vite + React.

#### 2. Netlify

```bash
# Installation de Netlify CLI
npm i -g netlify-cli

# Déploiement
netlify deploy --prod
```

Configuration:
- Build command: `npm run build`
- Publish directory: `dist`

#### 3. GitHub Pages

1. Installer gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Ajouter dans `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://username.github.io/repo-name"
}
```

3. Modifier `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/repo-name/',
  plugins: [react()],
})
```

4. Déployer:
```bash
npm run deploy
```

#### 4. Serveur VPS (Ubuntu/Debian)

```bash
# Sur le serveur
sudo apt update
sudo apt install nginx

# Copier les fichiers build
scp -r dist/* user@server:/var/www/alloosushi

# Configuration Nginx
sudo nano /etc/nginx/sites-available/alloosushi
```

Configuration Nginx:
```nginx
server {
    listen 80;
    server_name allosushifood.com www.allosushifood.com;
    root /var/www/alloosushi;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

```bash
# Activer le site
sudo ln -s /etc/nginx/sites-available/alloosushi /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 🔒 HTTPS avec Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d allosushifood.com -d www.allosushifood.com
```

## ⚡ Optimisations

### 1. Variables d'Environnement

Créer `.env.production`:
```env
VITE_API_URL=https://api.allosushifood.com
VITE_WHATSAPP_NUMBER=221781424646
```

Utilisation dans le code:
```typescript
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
```

### 2. Optimisation des Images

```bash
# Installer sharp pour optimisation
npm install --save-dev vite-plugin-imagemin
```

Dans `vite.config.ts`:
```typescript
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      webp: { quality: 80 }
    })
  ]
});
```

### 3. Code Splitting

Vite fait déjà du code splitting automatique, mais vous pouvez optimiser:

```typescript
// Lazy loading des sections
const Menu = lazy(() => import('./components/sections/Menu'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Dans App.tsx
<Suspense fallback={<div>Chargement...</div>}>
  <Menu />
  <Contact />
</Suspense>
```

### 4. PWA (Progressive Web App)

```bash
npm install vite-plugin-pwa -D
```

Configuration dans `vite.config.ts`:
```typescript
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Alloo Sushi',
        short_name: 'Alloo Sushi',
        description: 'Restaurant de sushis à Dakar',
        theme_color: '#5aaa2a',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
```

## 📊 Analytics

### Google Analytics

```bash
npm install react-ga4
```

Dans `main.tsx`:
```typescript
import ReactGA from 'react-ga4';

ReactGA.initialize('G-XXXXXXXXXX');
ReactGA.send('pageview');
```

## 🔍 SEO

### Meta Tags

Ajouter dans `index.html`:
```html
<meta name="description" content="Alloo Sushi - Restaurant de sushis, thaï et woks à Dakar. Livraison 7j/7.">
<meta name="keywords" content="sushi, dakar, restaurant, livraison, thaï, wok">
<meta property="og:title" content="Alloo Sushi - Sushis à Dakar">
<meta property="og:description" content="Sushis, Thaï & Woks préparés à la commande">
<meta property="og:image" content="https://allosushifood.com/og-image.jpg">
<meta property="og:url" content="https://allosushifood.com">
<meta name="twitter:card" content="summary_large_image">
```

### Sitemap

Créer `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://allosushifood.com/</loc>
    <lastmod>2025-03-04</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### robots.txt

Créer `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://allosushifood.com/sitemap.xml
```

## 📱 Tests Avant Déploiement

### Checklist

- [ ] Build sans erreurs
- [ ] Tests sur mobile (responsive)
- [ ] Tests sur différents navigateurs
- [ ] Liens WhatsApp fonctionnels
- [ ] Formulaire de contact opérationnel
- [ ] Images chargées correctement
- [ ] Performance (Lighthouse > 90)
- [ ] Accessibilité (WCAG AA)
- [ ] SEO optimisé

### Outils de Test

```bash
# Lighthouse
npm install -g lighthouse
lighthouse https://allosushifood.com --view

# Bundle analyzer
npm install --save-dev rollup-plugin-visualizer
```

## 🔄 CI/CD

### GitHub Actions

Créer `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🐛 Monitoring

### Sentry (Error Tracking)

```bash
npm install @sentry/react
```

Configuration:
```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production",
});
```

## 📞 Support Post-Déploiement

- Vérifier les logs serveur
- Monitorer les performances
- Collecter les retours utilisateurs
- Mettre à jour régulièrement

## 🔐 Sécurité

- [ ] HTTPS activé
- [ ] Headers de sécurité configurés
- [ ] CORS configuré correctement
- [ ] Rate limiting sur l'API
- [ ] Validation des entrées
- [ ] Protection CSRF

## 📈 Performance Targets

- First Contentful Paint: < 1.8s
- Time to Interactive: < 3.8s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

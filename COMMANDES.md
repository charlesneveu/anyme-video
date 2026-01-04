# 📋 Commandes rapides

## 🏃 Démarrage rapide

```bash
# 1. Tester en local
python3 -m http.server 8000
# Puis ouvrir http://localhost:8000

# 2. Remplacer la vidéo
rm assets/video.mp4
cp /chemin/votre/video.mp4 assets/video.mp4

# 3. Configurer l'URL du bouton
# Éditer script.js ligne 2 : const NEXT_URL = "https://..."

# 4. Commit initial
git add .
git commit -m "Initial commit"

# 5. Créer repo GitHub et push (avec gh CLI)
gh repo create anyme-video --public --source=. --remote=origin --push
gh api repos/MON_USERNAME/anyme-video/pages -X POST -f source[type]=branch -f source[branch]=main

# 6. Générer QR code
npm install
npm run generate-qr
# (Modifier qr/generate-qr.js avec votre URL d'abord)

# 7. Commit QR code
git add qr/qrcode.svg
git commit -m "Add QR code"
git push
```

## 🔧 Commandes utiles

```bash
# Tester en local (différentes options)
python3 -m http.server 8000
# ou
npx http-server -p 8000
# ou
php -S localhost:8000

# Générer QR code (après npm install)
npm run generate-qr

# Mettre à jour le site
git add .
git commit -m "Update"
git push
```

## 📝 Remplacements à faire

1. **Vidéo** : `assets/video.mp4` → Votre fichier vidéo
2. **URL bouton** : `script.js` ligne 2 → `const NEXT_URL = "https://..."`
3. **Username GitHub** : Remplacer `MON_USERNAME` dans toutes les commandes
4. **QR code** : Générer après déploiement avec l'URL finale


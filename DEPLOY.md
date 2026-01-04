# 🚀 Guide de déploiement - Commandes exactes

## Étape 1 : Préparer le projet local

```bash
# Se placer dans le dossier du projet
cd anyme-video

# Vérifier que tous les fichiers sont présents
ls -la
```

## Étape 2 : Remplacer la vidéo (si nécessaire)

```bash
# Supprimer le placeholder
rm assets/video.mp4

# Copier votre vidéo
cp /chemin/vers/votre/video.mp4 assets/video.mp4
```

## Étape 3 : Configurer l'URL du bouton

Éditez `script.js` et modifiez la ligne 2 :
```javascript
const NEXT_URL = "https://votre-url.com";
```

## Étape 4 : Initialiser Git et premier commit

```bash
# Vérifier que git est initialisé (déjà fait)
git status

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit: site vidéo Anyme"
```

## Étape 5 : Créer le repo GitHub et déployer

### Option A : Avec GitHub CLI (gh)

```bash
# Créer le repo et push
gh repo create anyme-video --public --source=. --remote=origin --push

# Activer GitHub Pages
gh api repos/MON_USERNAME/anyme-video/pages -X POST \
  -f source[type]=branch \
  -f source[branch]=main

# Vérifier l'URL
echo "Site disponible à : https://MON_USERNAME.github.io/anyme-video/"
```

### Option B : Interface GitHub (manuelle)

```bash
# 1. Créer le repo sur GitHub.com
#    Aller sur https://github.com/new
#    - Nom : anyme-video
#    - Public
#    - Ne pas initialiser avec README

# 2. Lier le repo local
git remote add origin https://github.com/MON_USERNAME/anyme-video.git
git branch -M main
git push -u origin main

# 3. Activer GitHub Pages
#    - Aller dans Settings > Pages
#    - Source : Deploy from a branch
#    - Branch : main / (root)
#    - Save
```

### Option C : Commandes Git classiques

```bash
# Créer le repo sur GitHub.com d'abord (via interface web)
# Puis :

git remote add origin https://github.com/MON_USERNAME/anyme-video.git
git branch -M main
git push -u origin main
```

## Étape 6 : Générer le QR code

Une fois le site déployé et l'URL connue :

### Méthode 1 : Script Node.js (recommandé)

```bash
# Installer qrcode
npm install qrcode

# Modifier qr/generate-qr.js avec votre URL
# Puis exécuter :
node qr/generate-qr.js
```

### Méthode 2 : En ligne

1. Aller sur https://www.qr-code-generator.com/
2. Entrer l'URL : `https://MON_USERNAME.github.io/anyme-video/`
3. Télécharger en SVG
4. Remplacer `qr/qrcode.svg`

### Méthode 3 : Avec qrcode CLI

```bash
# Installer globalement
npm install -g qrcode

# Générer
qrcode -o qr/qrcode.svg "https://MON_USERNAME.github.io/anyme-video/"
```

## Étape 7 : Commit et push du QR code

```bash
git add qr/qrcode.svg
git commit -m "Add QR code"
git push
```

## ✅ Vérifications finales

1. **Vérifier le site** : https://MON_USERNAME.github.io/anyme-video/
2. **Tester la vidéo** : Play/pause fonctionne
3. **Tester la navigation** : Fin de vidéo → Revoir/Suivant
4. **Tester sur mobile** : Responsive et contrôles natifs
5. **Tester le QR code** : Scanner avec un téléphone

## 🔄 Mises à jour futures

Pour mettre à jour le site :

```bash
# Modifier les fichiers
# Puis :
git add .
git commit -m "Description des changements"
git push
```

GitHub Pages se met à jour automatiquement (quelques minutes).


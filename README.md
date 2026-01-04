# Site Vidéo Anyme - GitHub Pages

Site web statique minimal pour afficher une vidéo avec navigation vers un écran suivant.

## 📁 Structure du projet

```
anyme-video/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # Logique JavaScript
├── assets/
│   ├── video.mp4       # ⚠️ À remplacer par votre vidéo
│   └── README.md       # Instructions pour remplacer la vidéo
├── qr/
│   └── qrcode.svg      # QR code vers le site (généré après déploiement)
└── README.md           # Ce fichier
```

## 🚀 Lancement en local

### Option 1 : Ouvrir directement
```bash
# Depuis le dossier du projet
open index.html
```
⚠️ Note : Certaines fonctionnalités peuvent ne pas fonctionner avec `file://` (notamment la vidéo selon le navigateur).

### Option 2 : Serveur local (recommandé)
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (avec http-server)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Puis ouvrez : `http://localhost:8000`

## 🎬 Remplacer la vidéo

1. **Préparez votre fichier vidéo** :
   - Format : MP4 (codec H.264 recommandé)
   - Nom : `video.mp4`

2. **Remplacez le fichier** :
   ```bash
   # Supprimez le placeholder actuel
   rm assets/video.mp4
   
   # Copiez votre vidéo
   cp /chemin/vers/votre/video.mp4 assets/video.mp4
   ```

3. **Alternative : URL externe** :
   Modifiez `index.html` ligne 15 :
   ```html
   <source src="https://votre-url.com/video.mp4" type="video/mp4">
   ```

Voir `assets/README.md` pour plus de détails sur l'optimisation.

## 🔗 Changer le lien du bouton

Modifiez `script.js` ligne 2 :
```javascript
const NEXT_URL = "https://votre-nouvelle-url.com";
```

## 📱 Déploiement sur GitHub Pages

### Prérequis
- Compte GitHub
- Git installé
- (Optionnel) GitHub CLI (`gh`) installé

### Méthode 1 : GitHub CLI (recommandé)

```bash
# 1. Initialiser Git (si pas déjà fait)
cd anyme-video
git init
git add .
git commit -m "Initial commit"

# 2. Créer le repo sur GitHub et push
gh repo create anyme-video --public --source=. --remote=origin --push

# 3. Activer GitHub Pages
gh api repos/MON_USERNAME/anyme-video/pages -X POST \
  -f source[type]=branch \
  -f source[branch]=main

# 4. Vérifier l'URL
echo "Votre site sera disponible à : https://MON_USERNAME.github.io/anyme-video/"
```

### Méthode 2 : Interface GitHub (manuelle)

```bash
# 1. Initialiser Git
cd anyme-video
git init
git add .
git commit -m "Initial commit"

# 2. Créer le repo sur GitHub.com
# - Allez sur https://github.com/new
# - Nom : anyme-video
# - Visibilité : Public
# - Ne cochez PAS "Initialize with README"

# 3. Lier et push
git remote add origin https://github.com/MON_USERNAME/anyme-video.git
git branch -M main
git push -u origin main

# 4. Activer GitHub Pages
# - Allez dans Settings > Pages
# - Source : Deploy from a branch
# - Branch : main / (root)
# - Save
```

### Méthode 3 : Commandes Git classiques

```bash
cd anyme-video
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/MON_USERNAME/anyme-video.git
git push -u origin main
```

Puis activez GitHub Pages via l'interface web (Settings > Pages).

## 🔲 Générer le QR code

Une fois le site déployé, générez le QR code pointant vers votre URL GitHub Pages.

### Option 1 : En ligne
- Allez sur https://www.qr-code-generator.com/ ou https://qr.io/
- Entrez l'URL : `https://MON_USERNAME.github.io/anyme-video/`
- Téléchargez en SVG ou PNG
- Placez-le dans `qr/qrcode.svg`

### Option 2 : Avec qrcode.js (Node.js)

```bash
# Installer qrcode
npm install -g qrcode

# Générer SVG
qrcode -o qr/qrcode.svg "https://MON_USERNAME.github.io/anyme-video/"

# Générer PNG
qrcode -o qr/qrcode.png "https://MON_USERNAME.github.io/anyme-video/"
```

### Option 3 : Avec Python

```bash
# Installer qrcode
pip install qrcode[pil]

# Générer
python3 << EOF
import qrcode
qr = qrcode.QRCode(version=1, box_size=10, border=5)
qr.add_data("https://MON_USERNAME.github.io/anyme-video/")
qr.make(fit=True)
img = qr.make_image(fill_color="black", back_color="white")
img.save("qr/qrcode.png")
EOF
```

### Option 4 : Script Node.js inclus

Créez `qr/generate-qr.js` :
```javascript
const QRCode = require('qrcode');
const url = 'https://MON_USERNAME.github.io/anyme-video/';

QRCode.toFile('qr/qrcode.svg', url, { type: 'svg' }, (err) => {
  if (err) throw err;
  console.log('QR code généré !');
});
```

Puis :
```bash
npm install qrcode
node qr/generate-qr.js
```

## ✅ Vérifications

### En local
- [ ] Ouvrir `index.html` dans un navigateur
- [ ] La vidéo se charge (ou affiche un message si absente)
- [ ] Les contrôles vidéo fonctionnent (play/pause)
- [ ] À la fin de la vidéo, l'écran de fin s'affiche
- [ ] Bouton "Revoir" relance la vidéo
- [ ] Bouton "Suivant" affiche la deuxième vue
- [ ] Bouton "Retour" revient à la vidéo
- [ ] Le bouton "Découvrir" pointe vers la bonne URL

### Sur mobile
- [ ] Tester sur un vrai appareil mobile
- [ ] La vidéo se lance avec les contrôles natifs
- [ ] Play/pause fonctionne
- [ ] L'écran de fin s'affiche correctement
- [ ] Les boutons sont facilement cliquables
- [ ] Le design est responsive

### Après déploiement
- [ ] Le site est accessible sur GitHub Pages
- [ ] La vidéo se charge correctement
- [ ] Toutes les fonctionnalités fonctionnent
- [ ] Le QR code pointe vers la bonne URL

## 🛠️ Personnalisation

### Changer les couleurs
Modifiez les variables CSS dans `styles.css` :
```css
:root {
    --primary-color: #007AFF;    /* Couleur principale */
    --secondary-color: #5856D6;  /* Couleur secondaire */
    /* ... */
}
```

### Ajouter une image de poster
Dans `index.html`, ligne 13 :
```html
<video poster="assets/poster.jpg" ...>
```

### Modifier les textes
- Titres et boutons : `index.html`
- Messages : `index.html` et `script.js`

## 📝 Notes

- **Vidéo** : Utilisez un format MP4 optimisé pour le web (H.264)
- **Taille** : Gardez la vidéo sous 50MB si possible pour un chargement rapide
- **Mobile** : L'attribut `playsinline` permet la lecture en plein écran sur iOS
- **Contrôles** : Les contrôles natifs du navigateur sont utilisés pour une meilleure compatibilité

## 🐛 Dépannage

### La vidéo ne se charge pas
- Vérifiez que le fichier existe : `assets/video.mp4`
- Vérifiez le format (MP4 recommandé)
- Testez avec un serveur local (pas `file://`)

### GitHub Pages ne fonctionne pas
- Vérifiez que la branche est `main` (ou `master`)
- Vérifiez que GitHub Pages est activé dans Settings > Pages
- Attendez quelques minutes pour la propagation

### Le QR code ne fonctionne pas
- Vérifiez que l'URL est correcte
- Testez le QR code avec plusieurs applications
- Régénérez le QR code si nécessaire

## 📄 Licence

Ce projet est libre d'utilisation. Modifiez-le selon vos besoins.


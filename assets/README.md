# Remplacement de la vidéo

## Instructions

Pour remplacer la vidéo par défaut :

1. **Préparez votre fichier vidéo** :
   - Format recommandé : MP4 (codec H.264)
   - Nom du fichier : `video.mp4`
   - Taille recommandée : optimisée pour mobile (max 1920x1080)

2. **Remplacez le fichier** :
   - Supprimez ou remplacez le fichier `assets/video.mp4` actuel
   - Placez votre nouvelle vidéo dans ce dossier avec le nom `video.mp4`

3. **Alternatives** :
   - Si vous préférez utiliser une URL externe, modifiez `index.html` :
     ```html
     <source src="https://votre-url.com/video.mp4" type="video/mp4">
     ```
   - Ou modifiez `script.js` pour charger dynamiquement la vidéo

## Formats supportés

- **MP4** (recommandé) : meilleure compatibilité mobile
- **WebM** : alternative moderne, ajoutez une balise `<source>` supplémentaire
- **OGV** : pour compatibilité avec certains navigateurs

## Optimisation

Pour réduire la taille du fichier :
- Utilisez un outil comme HandBrake ou FFmpeg
- Réduisez la résolution si nécessaire (720p suffit souvent pour mobile)
- Compressez la vidéo avec un bitrate adapté

Exemple avec FFmpeg :
```bash
ffmpeg -i input.mp4 -vf scale=1280:720 -b:v 2M -b:a 128k assets/video.mp4
```


// Configuration
const NEXT_URL = "https://example.com"; // ⚠️ MODIFIER ICI : URL du bouton "Pour découvrir comment se réconcilier avec Anyme" (optionnel, non utilisé si vue table)

// Éléments DOM
const video = document.getElementById('main-video');
const endScreen = document.getElementById('end-screen');
const btnRevoir = document.getElementById('btn-revoir');
const btnSuivant = document.getElementById('btn-suivant');
const btnRetour = document.getElementById('btn-retour');
const btnDiscover = document.getElementById('btn-discover');
const btnRetourTable = document.getElementById('btn-retour-table');
const viewVideo = document.getElementById('view-video');
const viewNext = document.getElementById('view-next');
const viewTable = document.getElementById('view-table');

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Écouter la fin de la vidéo
    video.addEventListener('ended', () => {
        showEndScreen();
    });
    
    // Bouton "Revoir"
    btnRevoir.addEventListener('click', () => {
        replayVideo();
    });
    
    // Bouton "Suivant"
    btnSuivant.addEventListener('click', () => {
        goToNextView();
    });
    
    // Bouton "Découvrir" - mène à la vue table
    btnDiscover.addEventListener('click', () => {
        goToTableView();
    });
    
    // Bouton "Retour" (depuis view-next)
    btnRetour.addEventListener('click', () => {
        goBackToVideo();
    });
    
    // Bouton "Retour" (depuis view-table)
    btnRetourTable.addEventListener('click', () => {
        goBackToNextView();
    });
    
    // Empêcher la propagation des clics sur l'end screen vers la vidéo
    endScreen.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Gérer le clic en dehors de l'end screen pour le masquer (optionnel)
    // Désactivé par défaut pour éviter les interactions accidentelles
});

/**
 * Affiche l'écran de fin de vidéo
 */
function showEndScreen() {
    endScreen.classList.remove('hidden');
}

/**
 * Relance la vidéo depuis le début
 */
function replayVideo() {
    video.currentTime = 0;
    video.play();
    endScreen.classList.add('hidden');
}

/**
 * Passe à la vue suivante
 */
function goToNextView() {
    viewVideo.classList.remove('active');
    viewNext.classList.add('active');
    // Pause la vidéo si elle est en cours
    video.pause();
    endScreen.classList.add('hidden');
}

/**
 * Passe à la vue table (après le bouton "Découvrir")
 */
function goToTableView() {
    viewNext.classList.remove('active');
    viewTable.classList.add('active');
}

/**
 * Retourne à la vue vidéo
 */
function goBackToVideo() {
    viewNext.classList.remove('active');
    viewTable.classList.remove('active');
    viewVideo.classList.add('active');
    // Optionnel : relancer la vidéo depuis le début
    // video.currentTime = 0;
}

/**
 * Retourne à la vue next (depuis la vue table)
 */
function goBackToNextView() {
    viewTable.classList.remove('active');
    viewNext.classList.add('active');
}


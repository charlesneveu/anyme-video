/**
 * Script pour générer le QR code
 * 
 * Usage:
 * 1. Installer qrcode: npm install qrcode
 * 2. Modifier l'URL ci-dessous avec votre URL GitHub Pages
 * 3. Exécuter: node generate-qr.js
 */

const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// ⚠️ MODIFIER ICI : URL de votre site GitHub Pages
const GITHUB_PAGES_URL = 'https://charlesneveu.github.io/anyme-video/';

// Générer SVG
QRCode.toFile(
    path.join(__dirname, 'qrcode.svg'),
    GITHUB_PAGES_URL,
    {
        type: 'svg',
        width: 300,
        margin: 2,
        color: {
            dark: '#000000',
            light: '#FFFFFF'
        }
    },
    (err) => {
        if (err) {
            console.error('Erreur lors de la génération du QR code SVG:', err);
            return;
        }
        console.log('✅ QR code SVG généré : qr/qrcode.svg');
    }
);

// Générer PNG (optionnel)
QRCode.toFile(
    path.join(__dirname, 'qrcode.png'),
    GITHUB_PAGES_URL,
    {
        type: 'png',
        width: 300,
        margin: 2,
        color: {
            dark: '#000000',
            light: '#FFFFFF'
        }
    },
    (err) => {
        if (err) {
            console.error('Erreur lors de la génération du QR code PNG:', err);
            return;
        }
        console.log('✅ QR code PNG généré : qr/qrcode.png');
    }
);


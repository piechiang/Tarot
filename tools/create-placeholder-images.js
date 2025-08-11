#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create placeholder HTML files that will render as images for development
function createPlaceholderImage(cardName, suit, outputPath) {
  const svgContent = `
<svg width="300" height="525" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4C1D95;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1E1B4B;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="300" height="525" fill="url(#cardGrad)" stroke="#F59E0B" stroke-width="3" rx="15"/>
  <text x="150" y="50" text-anchor="middle" fill="#F59E0B" font-family="serif" font-size="16" font-weight="bold">${suit.toUpperCase()}</text>
  <text x="150" y="260" text-anchor="middle" fill="white" font-family="serif" font-size="18" font-weight="bold" text-align="center">
    <tspan x="150" dy="0">${cardName}</tspan>
  </text>
  <circle cx="150" cy="350" r="40" fill="#F59E0B" opacity="0.3"/>
  <text x="150" y="360" text-anchor="middle" fill="white" font-family="serif" font-size="24">
    ${suit === 'major' ? '✨' : 
      suit === 'cups' ? '🏆' :
      suit === 'wands' ? '🔥' :
      suit === 'swords' ? '⚔️' : '💰'}
  </text>
  <text x="150" y="480" text-anchor="middle" fill="#F59E0B" font-family="serif" font-size="12">PLACEHOLDER IMAGE</text>
</svg>`;

  fs.writeFileSync(outputPath, svgContent);
}

// Create placeholder images for all cards
const cards = [
  // Major Arcana
  { id: 0, name: 'The Fool', suit: 'major', filename: '00-fool.svg' },
  { id: 1, name: 'The Magician', suit: 'major', filename: '01-magician.svg' },
  { id: 2, name: 'The High Priestess', suit: 'major', filename: '02-high-priestess.svg' },
  { id: 3, name: 'The Empress', suit: 'major', filename: '03-empress.svg' },
  { id: 4, name: 'The Emperor', suit: 'major', filename: '04-emperor.svg' },
  { id: 5, name: 'The Hierophant', suit: 'major', filename: '05-hierophant.svg' },
  { id: 6, name: 'The Lovers', suit: 'major', filename: '06-lovers.svg' },
  { id: 7, name: 'The Chariot', suit: 'major', filename: '07-chariot.svg' },
  { id: 8, name: 'Strength', suit: 'major', filename: '08-strength.svg' },
  { id: 9, name: 'The Hermit', suit: 'major', filename: '09-hermit.svg' },
  { id: 10, name: 'Wheel of Fortune', suit: 'major', filename: '10-wheel-of-fortune.svg' },
  { id: 11, name: 'Justice', suit: 'major', filename: '11-justice.svg' },
  { id: 12, name: 'The Hanged Man', suit: 'major', filename: '12-hanged-man.svg' },
  { id: 13, name: 'Death', suit: 'major', filename: '13-death.svg' },
  { id: 14, name: 'Temperance', suit: 'major', filename: '14-temperance.svg' },
  { id: 15, name: 'The Devil', suit: 'major', filename: '15-devil.svg' },
  { id: 16, name: 'The Tower', suit: 'major', filename: '16-tower.svg' },
  { id: 17, name: 'The Star', suit: 'major', filename: '17-star.svg' },
  { id: 18, name: 'The Moon', suit: 'major', filename: '18-moon.svg' },
  { id: 19, name: 'The Sun', suit: 'major', filename: '19-sun.svg' },
  { id: 20, name: 'Judgement', suit: 'major', filename: '20-judgement.svg' },
  { id: 21, name: 'The World', suit: 'major', filename: '21-world.svg' },
];

// Create directories if they don't exist
const dirs = ['major-arcana', 'cups', 'wands', 'swords', 'pentacles'];
dirs.forEach(dir => {
  const dirPath = path.join('public', 'images', 'tarot', dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Generate Major Arcana placeholders
cards.forEach(card => {
  const outputPath = path.join('public', 'images', 'tarot', 'major-arcana', card.filename);
  createPlaceholderImage(card.name, card.suit, outputPath);
  console.log(`Created ${outputPath}`);
});

// Generate a few sample minor arcana cards
const minorCards = [
  { name: 'Ace of Cups', suit: 'cups', filename: 'ace-cups.svg' },
  { name: 'Two of Cups', suit: 'cups', filename: '02-cups.svg' },
  { name: 'King of Cups', suit: 'cups', filename: 'king-cups.svg' },
  { name: 'Ace of Wands', suit: 'wands', filename: 'ace-wands.svg' },
  { name: 'Ace of Swords', suit: 'swords', filename: 'ace-swords.svg' },
  { name: 'Ace of Pentacles', suit: 'pentacles', filename: 'ace-pentacles.svg' },
];

minorCards.forEach(card => {
  const outputPath = path.join('public', 'images', 'tarot', card.suit, card.filename);
  createPlaceholderImage(card.name, card.suit, outputPath);
  console.log(`Created ${outputPath}`);
});

// Create card back
const cardBackSvg = `
<svg width="300" height="525" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="backGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#7C3AED;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1E1B4B;stop-opacity:1" />
    </radialGradient>
    <pattern id="stars" patternUnits="userSpaceOnUse" width="50" height="50">
      <circle cx="25" cy="25" r="2" fill="#F59E0B" opacity="0.6"/>
    </pattern>
  </defs>
  <rect width="300" height="525" fill="url(#backGrad)" stroke="#F59E0B" stroke-width="4" rx="15"/>
  <rect x="10" y="10" width="280" height="505" fill="url(#stars)" opacity="0.3" rx="10"/>
  <circle cx="150" cy="260" r="60" fill="none" stroke="#F59E0B" stroke-width="3"/>
  <text x="150" y="270" text-anchor="middle" fill="#F59E0B" font-family="serif" font-size="32">🌟</text>
  <text x="150" y="350" text-anchor="middle" fill="white" font-family="serif" font-size="16" font-weight="bold">TAROT</text>
</svg>`;

fs.writeFileSync(path.join('public', 'images', 'tarot', 'card-back.svg'), cardBackSvg);
console.log('Created card-back.svg');

console.log('\n✅ Placeholder images created!');
console.log('📝 To use real tarot images:');
console.log('1. Replace .svg files with .jpg versions of actual Waite tarot cards');
console.log('2. Update the image paths in tarot-images.ts to use .jpg extension');
console.log('3. Ensure all 78 cards are present in the correct directories');
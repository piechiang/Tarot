#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create placeholder SVG for any tarot card
function createPlaceholderImage(cardName, suit, outputPath) {
  const svgContent = `<svg width="300" height="525" xmlns="http://www.w3.org/2000/svg">
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

// All 78 Tarot Cards
const allCards = [
  // Major Arcana (22 cards)
  { name: 'The Fool', suit: 'major', filename: 'major-arcana/00-fool.svg' },
  { name: 'The Magician', suit: 'major', filename: 'major-arcana/01-magician.svg' },
  { name: 'The High Priestess', suit: 'major', filename: 'major-arcana/02-high-priestess.svg' },
  { name: 'The Empress', suit: 'major', filename: 'major-arcana/03-empress.svg' },
  { name: 'The Emperor', suit: 'major', filename: 'major-arcana/04-emperor.svg' },
  { name: 'The Hierophant', suit: 'major', filename: 'major-arcana/05-hierophant.svg' },
  { name: 'The Lovers', suit: 'major', filename: 'major-arcana/06-lovers.svg' },
  { name: 'The Chariot', suit: 'major', filename: 'major-arcana/07-chariot.svg' },
  { name: 'Strength', suit: 'major', filename: 'major-arcana/08-strength.svg' },
  { name: 'The Hermit', suit: 'major', filename: 'major-arcana/09-hermit.svg' },
  { name: 'Wheel of Fortune', suit: 'major', filename: 'major-arcana/10-wheel-of-fortune.svg' },
  { name: 'Justice', suit: 'major', filename: 'major-arcana/11-justice.svg' },
  { name: 'The Hanged Man', suit: 'major', filename: 'major-arcana/12-hanged-man.svg' },
  { name: 'Death', suit: 'major', filename: 'major-arcana/13-death.svg' },
  { name: 'Temperance', suit: 'major', filename: 'major-arcana/14-temperance.svg' },
  { name: 'The Devil', suit: 'major', filename: 'major-arcana/15-devil.svg' },
  { name: 'The Tower', suit: 'major', filename: 'major-arcana/16-tower.svg' },
  { name: 'The Star', suit: 'major', filename: 'major-arcana/17-star.svg' },
  { name: 'The Moon', suit: 'major', filename: 'major-arcana/18-moon.svg' },
  { name: 'The Sun', suit: 'major', filename: 'major-arcana/19-sun.svg' },
  { name: 'Judgement', suit: 'major', filename: 'major-arcana/20-judgement.svg' },
  { name: 'The World', suit: 'major', filename: 'major-arcana/21-world.svg' },

  // Cups (14 cards)
  { name: 'Ace of Cups', suit: 'cups', filename: 'cups/ace-cups.svg' },
  { name: 'Two of Cups', suit: 'cups', filename: 'cups/02-cups.svg' },
  { name: 'Three of Cups', suit: 'cups', filename: 'cups/03-cups.svg' },
  { name: 'Four of Cups', suit: 'cups', filename: 'cups/04-cups.svg' },
  { name: 'Five of Cups', suit: 'cups', filename: 'cups/05-cups.svg' },
  { name: 'Six of Cups', suit: 'cups', filename: 'cups/06-cups.svg' },
  { name: 'Seven of Cups', suit: 'cups', filename: 'cups/07-cups.svg' },
  { name: 'Eight of Cups', suit: 'cups', filename: 'cups/08-cups.svg' },
  { name: 'Nine of Cups', suit: 'cups', filename: 'cups/09-cups.svg' },
  { name: 'Ten of Cups', suit: 'cups', filename: 'cups/10-cups.svg' },
  { name: 'Page of Cups', suit: 'cups', filename: 'cups/page-cups.svg' },
  { name: 'Knight of Cups', suit: 'cups', filename: 'cups/knight-cups.svg' },
  { name: 'Queen of Cups', suit: 'cups', filename: 'cups/queen-cups.svg' },
  { name: 'King of Cups', suit: 'cups', filename: 'cups/king-cups.svg' },

  // Wands (14 cards)
  { name: 'Ace of Wands', suit: 'wands', filename: 'wands/ace-wands.svg' },
  { name: 'Two of Wands', suit: 'wands', filename: 'wands/02-wands.svg' },
  { name: 'Three of Wands', suit: 'wands', filename: 'wands/03-wands.svg' },
  { name: 'Four of Wands', suit: 'wands', filename: 'wands/04-wands.svg' },
  { name: 'Five of Wands', suit: 'wands', filename: 'wands/05-wands.svg' },
  { name: 'Six of Wands', suit: 'wands', filename: 'wands/06-wands.svg' },
  { name: 'Seven of Wands', suit: 'wands', filename: 'wands/07-wands.svg' },
  { name: 'Eight of Wands', suit: 'wands', filename: 'wands/08-wands.svg' },
  { name: 'Nine of Wands', suit: 'wands', filename: 'wands/09-wands.svg' },
  { name: 'Ten of Wands', suit: 'wands', filename: 'wands/10-wands.svg' },
  { name: 'Page of Wands', suit: 'wands', filename: 'wands/page-wands.svg' },
  { name: 'Knight of Wands', suit: 'wands', filename: 'wands/knight-wands.svg' },
  { name: 'Queen of Wands', suit: 'wands', filename: 'wands/queen-wands.svg' },
  { name: 'King of Wands', suit: 'wands', filename: 'wands/king-wands.svg' },

  // Swords (14 cards)
  { name: 'Ace of Swords', suit: 'swords', filename: 'swords/ace-swords.svg' },
  { name: 'Two of Swords', suit: 'swords', filename: 'swords/02-swords.svg' },
  { name: 'Three of Swords', suit: 'swords', filename: 'swords/03-swords.svg' },
  { name: 'Four of Swords', suit: 'swords', filename: 'swords/04-swords.svg' },
  { name: 'Five of Swords', suit: 'swords', filename: 'swords/05-swords.svg' },
  { name: 'Six of Swords', suit: 'swords', filename: 'swords/06-swords.svg' },
  { name: 'Seven of Swords', suit: 'swords', filename: 'swords/07-swords.svg' },
  { name: 'Eight of Swords', suit: 'swords', filename: 'swords/08-swords.svg' },
  { name: 'Nine of Swords', suit: 'swords', filename: 'swords/09-swords.svg' },
  { name: 'Ten of Swords', suit: 'swords', filename: 'swords/10-swords.svg' },
  { name: 'Page of Swords', suit: 'swords', filename: 'swords/page-swords.svg' },
  { name: 'Knight of Swords', suit: 'swords', filename: 'swords/knight-swords.svg' },
  { name: 'Queen of Swords', suit: 'swords', filename: 'swords/queen-swords.svg' },
  { name: 'King of Swords', suit: 'swords', filename: 'swords/king-swords.svg' },

  // Pentacles (14 cards)
  { name: 'Ace of Pentacles', suit: 'pentacles', filename: 'pentacles/ace-pentacles.svg' },
  { name: 'Two of Pentacles', suit: 'pentacles', filename: 'pentacles/02-pentacles.svg' },
  { name: 'Three of Pentacles', suit: 'pentacles', filename: 'pentacles/03-pentacles.svg' },
  { name: 'Four of Pentacles', suit: 'pentacles', filename: 'pentacles/04-pentacles.svg' },
  { name: 'Five of Pentacles', suit: 'pentacles', filename: 'pentacles/05-pentacles.svg' },
  { name: 'Six of Pentacles', suit: 'pentacles', filename: 'pentacles/06-pentacles.svg' },
  { name: 'Seven of Pentacles', suit: 'pentacles', filename: 'pentacles/07-pentacles.svg' },
  { name: 'Eight of Pentacles', suit: 'pentacles', filename: 'pentacles/08-pentacles.svg' },
  { name: 'Nine of Pentacles', suit: 'pentacles', filename: 'pentacles/09-pentacles.svg' },
  { name: 'Ten of Pentacles', suit: 'pentacles', filename: 'pentacles/10-pentacles.svg' },
  { name: 'Page of Pentacles', suit: 'pentacles', filename: 'pentacles/page-pentacles.svg' },
  { name: 'Knight of Pentacles', suit: 'pentacles', filename: 'pentacles/knight-pentacles.svg' },
  { name: 'Queen of Pentacles', suit: 'pentacles', filename: 'pentacles/queen-pentacles.svg' },
  { name: 'King of Pentacles', suit: 'pentacles', filename: 'pentacles/king-pentacles.svg' },
];

// Create directories if they don't exist
const dirs = ['major-arcana', 'cups', 'wands', 'swords', 'pentacles'];
dirs.forEach(dir => {
  const dirPath = path.join('public', 'images', 'tarot', dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Generate all 78 cards
let createdCount = 0;
let skippedCount = 0;

allCards.forEach(card => {
  const outputPath = path.join('public', 'images', 'tarot', card.filename);
  
  // Only create if it doesn't exist
  if (!fs.existsSync(outputPath)) {
    createPlaceholderImage(card.name, card.suit, outputPath);
    console.log(`✅ Created ${card.filename}`);
    createdCount++;
  } else {
    console.log(`⏭️  Skipped ${card.filename} (already exists)`);
    skippedCount++;
  }
});

// Create card back if it doesn't exist
const cardBackPath = path.join('public', 'images', 'tarot', 'card-back.svg');
if (!fs.existsSync(cardBackPath)) {
  const cardBackSvg = `<svg width="300" height="525" xmlns="http://www.w3.org/2000/svg">
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
  
  fs.writeFileSync(cardBackPath, cardBackSvg);
  console.log('✅ Created card-back.svg');
  createdCount++;
}

console.log(`\n🎯 Summary:`);
console.log(`✅ Created: ${createdCount} new images`);
console.log(`⏭️  Skipped: ${skippedCount} existing images`);
console.log(`📊 Total: ${createdCount + skippedCount} images available`);

if (createdCount > 0) {
  console.log('\n🔮 All 78 tarot card placeholder images are now ready!');
  console.log('🌐 Refresh your browser to see the images loading properly.');
} else {
  console.log('\n✨ All images already exist - no action needed!');
}
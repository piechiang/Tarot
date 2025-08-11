// Tarot card image mapping
// This file maps tarot card IDs to their corresponding image paths

export interface TarotCardImage {
  id: number;
  suit: string;
  name: string;
  imagePath: string;
  imageUrl: string;
}

// Generate image paths for all 78 tarot cards
export const tarotCardImages: Record<number, TarotCardImage> = {
  // Major Arcana (0-21)
  0: { id: 0, suit: 'major', name: 'The Fool', imagePath: '/images/tarot/major-arcana/00-fool.png', imageUrl: '/images/tarot/major-arcana/00-fool.png' },
  1: { id: 1, suit: 'major', name: 'The Magician', imagePath: '/images/tarot/major-arcana/01-magician.png', imageUrl: '/images/tarot/major-arcana/01-magician.png' },
  2: { id: 2, suit: 'major', name: 'The High Priestess', imagePath: '/images/tarot/major-arcana/02-high-priestess.png', imageUrl: '/images/tarot/major-arcana/02-high-priestess.png' },
  3: { id: 3, suit: 'major', name: 'The Empress', imagePath: '/images/tarot/major-arcana/03-empress.png', imageUrl: '/images/tarot/major-arcana/03-empress.png' },
  4: { id: 4, suit: 'major', name: 'The Emperor', imagePath: '/images/tarot/major-arcana/04-emperor.png', imageUrl: '/images/tarot/major-arcana/04-emperor.png' },
  5: { id: 5, suit: 'major', name: 'The Hierophant', imagePath: '/images/tarot/major-arcana/05-hierophant.png', imageUrl: '/images/tarot/major-arcana/05-hierophant.png' },
  6: { id: 6, suit: 'major', name: 'The Lovers', imagePath: '/images/tarot/major-arcana/06-lovers.png', imageUrl: '/images/tarot/major-arcana/06-lovers.png' },
  7: { id: 7, suit: 'major', name: 'The Chariot', imagePath: '/images/tarot/major-arcana/07-chariot.png', imageUrl: '/images/tarot/major-arcana/07-chariot.png' },
  8: { id: 8, suit: 'major', name: 'Strength', imagePath: '/images/tarot/major-arcana/08-strength.png', imageUrl: '/images/tarot/major-arcana/08-strength.png' },
  9: { id: 9, suit: 'major', name: 'The Hermit', imagePath: '/images/tarot/major-arcana/09-hermit.png', imageUrl: '/images/tarot/major-arcana/09-hermit.png' },
  10: { id: 10, suit: 'major', name: 'Wheel of Fortune', imagePath: '/images/tarot/major-arcana/10-wheel-of-fortune.png', imageUrl: '/images/tarot/major-arcana/10-wheel-of-fortune.png' },
  11: { id: 11, suit: 'major', name: 'Justice', imagePath: '/images/tarot/major-arcana/11-justice.png', imageUrl: '/images/tarot/major-arcana/11-justice.png' },
  12: { id: 12, suit: 'major', name: 'The Hanged Man', imagePath: '/images/tarot/major-arcana/12-hanged-man.png', imageUrl: '/images/tarot/major-arcana/12-hanged-man.png' },
  13: { id: 13, suit: 'major', name: 'Death', imagePath: '/images/tarot/major-arcana/13-death.png', imageUrl: '/images/tarot/major-arcana/13-death.png' },
  14: { id: 14, suit: 'major', name: 'Temperance', imagePath: '/images/tarot/major-arcana/14-temperance.png', imageUrl: '/images/tarot/major-arcana/14-temperance.png' },
  15: { id: 15, suit: 'major', name: 'The Devil', imagePath: '/images/tarot/major-arcana/15-devil.png', imageUrl: '/images/tarot/major-arcana/15-devil.png' },
  16: { id: 16, suit: 'major', name: 'The Tower', imagePath: '/images/tarot/major-arcana/16-tower.png', imageUrl: '/images/tarot/major-arcana/16-tower.png' },
  17: { id: 17, suit: 'major', name: 'The Star', imagePath: '/images/tarot/major-arcana/17-star.png', imageUrl: '/images/tarot/major-arcana/17-star.png' },
  18: { id: 18, suit: 'major', name: 'The Moon', imagePath: '/images/tarot/major-arcana/18-moon.png', imageUrl: '/images/tarot/major-arcana/18-moon.png' },
  19: { id: 19, suit: 'major', name: 'The Sun', imagePath: '/images/tarot/major-arcana/19-sun.png', imageUrl: '/images/tarot/major-arcana/19-sun.png' },
  20: { id: 20, suit: 'major', name: 'Judgement', imagePath: '/images/tarot/major-arcana/20-judgement.png', imageUrl: '/images/tarot/major-arcana/20-judgement.png' },
  21: { id: 21, suit: 'major', name: 'The World', imagePath: '/images/tarot/major-arcana/21-world.png', imageUrl: '/images/tarot/major-arcana/21-world.png' },

  // Cups (22-35)
  22: { id: 22, suit: 'cups', name: 'Ace of Cups', imagePath: '/images/tarot/cups/ace-cups.png', imageUrl: '/images/tarot/cups/ace-cups.png' },
  23: { id: 23, suit: 'cups', name: 'Two of Cups', imagePath: '/images/tarot/cups/02-cups.png', imageUrl: '/images/tarot/cups/02-cups.png' },
  24: { id: 24, suit: 'cups', name: 'Three of Cups', imagePath: '/images/tarot/cups/03-cups.png', imageUrl: '/images/tarot/cups/03-cups.png' },
  25: { id: 25, suit: 'cups', name: 'Four of Cups', imagePath: '/images/tarot/cups/04-cups.png', imageUrl: '/images/tarot/cups/04-cups.png' },
  26: { id: 26, suit: 'cups', name: 'Five of Cups', imagePath: '/images/tarot/cups/05-cups.png', imageUrl: '/images/tarot/cups/05-cups.png' },
  27: { id: 27, suit: 'cups', name: 'Six of Cups', imagePath: '/images/tarot/cups/06-cups.png', imageUrl: '/images/tarot/cups/06-cups.png' },
  28: { id: 28, suit: 'cups', name: 'Seven of Cups', imagePath: '/images/tarot/cups/07-cups.png', imageUrl: '/images/tarot/cups/07-cups.png' },
  29: { id: 29, suit: 'cups', name: 'Eight of Cups', imagePath: '/images/tarot/cups/08-cups.png', imageUrl: '/images/tarot/cups/08-cups.png' },
  30: { id: 30, suit: 'cups', name: 'Nine of Cups', imagePath: '/images/tarot/cups/09-cups.png', imageUrl: '/images/tarot/cups/09-cups.png' },
  31: { id: 31, suit: 'cups', name: 'Ten of Cups', imagePath: '/images/tarot/cups/10-cups.png', imageUrl: '/images/tarot/cups/10-cups.png' },
  32: { id: 32, suit: 'cups', name: 'Page of Cups', imagePath: '/images/tarot/cups/page-cups.png', imageUrl: '/images/tarot/cups/page-cups.png' },
  33: { id: 33, suit: 'cups', name: 'Knight of Cups', imagePath: '/images/tarot/cups/knight-cups.png', imageUrl: '/images/tarot/cups/knight-cups.png' },
  34: { id: 34, suit: 'cups', name: 'Queen of Cups', imagePath: '/images/tarot/cups/queen-cups.png', imageUrl: '/images/tarot/cups/queen-cups.png' },
  35: { id: 35, suit: 'cups', name: 'King of Cups', imagePath: '/images/tarot/cups/king-cups.png', imageUrl: '/images/tarot/cups/king-cups.png' },

  // Wands (36-49)
  36: { id: 36, suit: 'wands', name: 'Ace of Wands', imagePath: '/images/tarot/wands/ace-wands.png', imageUrl: '/images/tarot/wands/ace-wands.png' },
  37: { id: 37, suit: 'wands', name: 'Two of Wands', imagePath: '/images/tarot/wands/02-wands.png', imageUrl: '/images/tarot/wands/02-wands.png' },
  38: { id: 38, suit: 'wands', name: 'Three of Wands', imagePath: '/images/tarot/wands/03-wands.png', imageUrl: '/images/tarot/wands/03-wands.png' },
  39: { id: 39, suit: 'wands', name: 'Four of Wands', imagePath: '/images/tarot/wands/04-wands.png', imageUrl: '/images/tarot/wands/04-wands.png' },
  40: { id: 40, suit: 'wands', name: 'Five of Wands', imagePath: '/images/tarot/wands/05-wands.png', imageUrl: '/images/tarot/wands/05-wands.png' },
  41: { id: 41, suit: 'wands', name: 'Six of Wands', imagePath: '/images/tarot/wands/06-wands.png', imageUrl: '/images/tarot/wands/06-wands.png' },
  42: { id: 42, suit: 'wands', name: 'Seven of Wands', imagePath: '/images/tarot/wands/07-wands.png', imageUrl: '/images/tarot/wands/07-wands.png' },
  43: { id: 43, suit: 'wands', name: 'Eight of Wands', imagePath: '/images/tarot/wands/08-wands.png', imageUrl: '/images/tarot/wands/08-wands.png' },
  44: { id: 44, suit: 'wands', name: 'Nine of Wands', imagePath: '/images/tarot/wands/09-wands.png', imageUrl: '/images/tarot/wands/09-wands.png' },
  45: { id: 45, suit: 'wands', name: 'Ten of Wands', imagePath: '/images/tarot/wands/10-wands.png', imageUrl: '/images/tarot/wands/10-wands.png' },
  46: { id: 46, suit: 'wands', name: 'Page of Wands', imagePath: '/images/tarot/wands/page-wands.png', imageUrl: '/images/tarot/wands/page-wands.png' },
  47: { id: 47, suit: 'wands', name: 'Knight of Wands', imagePath: '/images/tarot/wands/knight-wands.png', imageUrl: '/images/tarot/wands/knight-wands.png' },
  48: { id: 48, suit: 'wands', name: 'Queen of Wands', imagePath: '/images/tarot/wands/queen-wands.png', imageUrl: '/images/tarot/wands/queen-wands.png' },
  49: { id: 49, suit: 'wands', name: 'King of Wands', imagePath: '/images/tarot/wands/king-wands.png', imageUrl: '/images/tarot/wands/king-wands.png' },

  // Swords (50-63)
  50: { id: 50, suit: 'swords', name: 'Ace of Swords', imagePath: '/images/tarot/swords/ace-swords.png', imageUrl: '/images/tarot/swords/ace-swords.png' },
  51: { id: 51, suit: 'swords', name: 'Two of Swords', imagePath: '/images/tarot/swords/02-swords.png', imageUrl: '/images/tarot/swords/02-swords.png' },
  52: { id: 52, suit: 'swords', name: 'Three of Swords', imagePath: '/images/tarot/swords/03-swords.png', imageUrl: '/images/tarot/swords/03-swords.png' },
  53: { id: 53, suit: 'swords', name: 'Four of Swords', imagePath: '/images/tarot/swords/04-swords.png', imageUrl: '/images/tarot/swords/04-swords.png' },
  54: { id: 54, suit: 'swords', name: 'Five of Swords', imagePath: '/images/tarot/swords/05-swords.png', imageUrl: '/images/tarot/swords/05-swords.png' },
  55: { id: 55, suit: 'swords', name: 'Six of Swords', imagePath: '/images/tarot/swords/06-swords.png', imageUrl: '/images/tarot/swords/06-swords.png' },
  56: { id: 56, suit: 'swords', name: 'Seven of Swords', imagePath: '/images/tarot/swords/07-swords.png', imageUrl: '/images/tarot/swords/07-swords.png' },
  57: { id: 57, suit: 'swords', name: 'Eight of Swords', imagePath: '/images/tarot/swords/08-swords.png', imageUrl: '/images/tarot/swords/08-swords.png' },
  58: { id: 58, suit: 'swords', name: 'Nine of Swords', imagePath: '/images/tarot/swords/09-swords.png', imageUrl: '/images/tarot/swords/09-swords.png' },
  59: { id: 59, suit: 'swords', name: 'Ten of Swords', imagePath: '/images/tarot/swords/10-swords.png', imageUrl: '/images/tarot/swords/10-swords.png' },
  60: { id: 60, suit: 'swords', name: 'Page of Swords', imagePath: '/images/tarot/swords/page-swords.png', imageUrl: '/images/tarot/swords/page-swords.png' },
  61: { id: 61, suit: 'swords', name: 'Knight of Swords', imagePath: '/images/tarot/swords/knight-swords.png', imageUrl: '/images/tarot/swords/knight-swords.png' },
  62: { id: 62, suit: 'swords', name: 'Queen of Swords', imagePath: '/images/tarot/swords/queen-swords.png', imageUrl: '/images/tarot/swords/queen-swords.png' },
  63: { id: 63, suit: 'swords', name: 'King of Swords', imagePath: '/images/tarot/swords/king-swords.png', imageUrl: '/images/tarot/swords/king-swords.png' },

  // Pentacles (64-77)
  64: { id: 64, suit: 'pentacles', name: 'Ace of Pentacles', imagePath: '/images/tarot/pentacles/ace-pentacles.png', imageUrl: '/images/tarot/pentacles/ace-pentacles.png' },
  65: { id: 65, suit: 'pentacles', name: 'Two of Pentacles', imagePath: '/images/tarot/pentacles/02-pentacles.png', imageUrl: '/images/tarot/pentacles/02-pentacles.png' },
  66: { id: 66, suit: 'pentacles', name: 'Three of Pentacles', imagePath: '/images/tarot/pentacles/03-pentacles.png', imageUrl: '/images/tarot/pentacles/03-pentacles.png' },
  67: { id: 67, suit: 'pentacles', name: 'Four of Pentacles', imagePath: '/images/tarot/pentacles/04-pentacles.png', imageUrl: '/images/tarot/pentacles/04-pentacles.png' },
  68: { id: 68, suit: 'pentacles', name: 'Five of Pentacles', imagePath: '/images/tarot/pentacles/05-pentacles.png', imageUrl: '/images/tarot/pentacles/05-pentacles.png' },
  69: { id: 69, suit: 'pentacles', name: 'Six of Pentacles', imagePath: '/images/tarot/pentacles/06-pentacles.png', imageUrl: '/images/tarot/pentacles/06-pentacles.png' },
  70: { id: 70, suit: 'pentacles', name: 'Seven of Pentacles', imagePath: '/images/tarot/pentacles/07-pentacles.png', imageUrl: '/images/tarot/pentacles/07-pentacles.png' },
  71: { id: 71, suit: 'pentacles', name: 'Eight of Pentacles', imagePath: '/images/tarot/pentacles/08-pentacles.png', imageUrl: '/images/tarot/pentacles/08-pentacles.png' },
  72: { id: 72, suit: 'pentacles', name: 'Nine of Pentacles', imagePath: '/images/tarot/pentacles/09-pentacles.png', imageUrl: '/images/tarot/pentacles/09-pentacles.png' },
  73: { id: 73, suit: 'pentacles', name: 'Ten of Pentacles', imagePath: '/images/tarot/pentacles/10-pentacles.png', imageUrl: '/images/tarot/pentacles/10-pentacles.png' },
  74: { id: 74, suit: 'pentacles', name: 'Page of Pentacles', imagePath: '/images/tarot/pentacles/page-pentacles.png', imageUrl: '/images/tarot/pentacles/page-pentacles.png' },
  75: { id: 75, suit: 'pentacles', name: 'Knight of Pentacles', imagePath: '/images/tarot/pentacles/knight-pentacles.png', imageUrl: '/images/tarot/pentacles/knight-pentacles.png' },
  76: { id: 76, suit: 'pentacles', name: 'Queen of Pentacles', imagePath: '/images/tarot/pentacles/queen-pentacles.png', imageUrl: '/images/tarot/pentacles/queen-pentacles.png' },
  77: { id: 77, suit: 'pentacles', name: 'King of Pentacles', imagePath: '/images/tarot/pentacles/king-pentacles.png', imageUrl: '/images/tarot/pentacles/king-pentacles.png' },
};

// Helper function to get card image by ID
export function getCardImage(cardId: number): TarotCardImage | null {
  return tarotCardImages[cardId] || null;
}

// Helper function to get card image URL with fallback
export function getCardImageUrl(cardId: number, fallback?: string): string {
  const cardImage = getCardImage(cardId);
  return cardImage?.imageUrl || fallback || '/images/tarot/card-back.png';
}

// Generate card back image path
export const CARD_BACK_IMAGE = '/images/tarot/card-back.png';

// Check if card image exists (for development)
export function hasCardImage(cardId: number): boolean {
  return cardId in tarotCardImages;
}
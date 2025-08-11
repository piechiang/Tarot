// Tarot card enhancer - automatically adds image URLs to tarot cards
import { TarotCard } from './tarot-data';
import { tarotCardImages } from './tarot-images';

// Enhance tarot cards with image URLs
export function enhanceTarotCards(cards: TarotCard[]): TarotCard[] {
  return cards.map(card => {
    const imageData = tarotCardImages[card.id];
    return {
      ...card,
      imageUrl: imageData?.imageUrl || `/images/tarot/card-back.svg`,
      imagePath: imageData?.imagePath || `/images/tarot/card-back.svg`
    };
  });
}

// Helper function to get enhanced card by ID
export function getEnhancedCard(cards: TarotCard[], cardId: number): TarotCard | null {
  const card = cards.find(c => c.id === cardId);
  if (!card) return null;
  
  const imageData = tarotCardImages[cardId];
  return {
    ...card,
    imageUrl: imageData?.imageUrl || `/images/tarot/card-back.svg`,
    imagePath: imageData?.imagePath || `/images/tarot/card-back.svg`
  };
}

// Get image URL with fallback
export function getCardImageUrl(card: TarotCard): string {
  if (card.imageUrl) return card.imageUrl;
  
  const imageData = tarotCardImages[card.id];
  return imageData?.imageUrl || `/images/tarot/card-back.svg`;
}

// Check if card has image
export function cardHasImage(card: TarotCard): boolean {
  return !!(card.imageUrl || tarotCardImages[card.id]);
}
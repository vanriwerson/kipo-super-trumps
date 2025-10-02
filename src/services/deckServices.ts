import type { Card } from '../interfaces';

// Algoritmo Fisher-Yates.
export const shuffleCards = (cards: Card[]): Card[] => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const distributeCards = (
  cards: Card[]
): { handOne: Card[]; handTwo: Card[] } => {
  const mid = Math.floor(cards.length / 2);
  const handOne = cards.slice(0, mid);
  const handTwo = cards.slice(mid);
  return { handOne, handTwo };
};

export const getPartialDeck = (cards: Card[], length: number): Card[] => {
  const trumpCard = cards.find((c) => c.isTrumpCard);

  if (!trumpCard) {
    throw new Error('Nenhuma carta trunfo encontrada no baralho.');
  }

  const shuffled = shuffleCards(cards);

  const partialDeck = shuffled.slice(0, length);

  if (!partialDeck.includes(trumpCard)) {
    const randomIndex = Math.floor(Math.random() * partialDeck.length);
    partialDeck[randomIndex] = trumpCard;
  }

  return partialDeck;
};

export const addCards = (playerHand: Card[], inGameCards: Card[]): Card[] => {
  return [...playerHand, ...inGameCards];
};

export const removeCard = (playerHand: Card[]): Card[] => {
  return playerHand.slice(1);
};

import type { Card } from '../../interfaces';

export const resolveSuperTrump = (cards: Card[]): number | null => {
  const [playerCard, AICard] = cards;
  let winnerIndex: number | null = null;

  if (playerCard.isTrumpCard) {
    winnerIndex = AICard.id.includes('A') ? 1 : 0;
  } else if (AICard.isTrumpCard) {
    winnerIndex = playerCard.id.includes('A') ? 0 : 1;
  }

  return winnerIndex;
};

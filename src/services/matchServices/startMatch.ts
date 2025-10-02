import type { Card, GameState, PlayerState } from '../../interfaces';
import { distributeCards, shuffleCards } from '../deckServices';

export const startMatch = (deck: Card[], playerNames: string[]): GameState => {
  const shuffled = shuffleCards(deck);
  const { handOne, handTwo } = distributeCards(shuffled);

  const players: PlayerState[] = [
    { name: playerNames[0], hand: handOne },
    { name: playerNames[1], hand: handTwo },
  ];

  return {
    turnsCount: 1,
    players,
    currentTurnCards: [],
    stack: [],
    choosingPlayer: 0,
  };
};

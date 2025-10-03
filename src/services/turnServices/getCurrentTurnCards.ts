import type { Card, GameState } from '../../interfaces';

export const getCurrentTurnCards = (gameState: GameState): Card[] => {
  const currentTurnCards = gameState.players.map((player) => player.hand[0]);

  return currentTurnCards;
};

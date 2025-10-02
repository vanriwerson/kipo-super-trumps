import type { GameState } from '../../interfaces';

export const getCurrentTurnCards = (gameState: GameState): GameState => {
  const currentTurnCards = gameState.players.map((player) => player.hand[0]);

  return {
    ...gameState,
    currentTurnCards,
  };
};

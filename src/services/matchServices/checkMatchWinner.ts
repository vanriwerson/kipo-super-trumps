import type { GameState, PlayerState } from '../../interfaces';

export const checkMatchWinner = (gameState: GameState): PlayerState | null => {
  const loser = gameState.players.find((p) => p.hand.length === 0);
  if (loser) {
    return gameState.players.find((p) => p.hand.length > 0)!;
  }
  return null;
};

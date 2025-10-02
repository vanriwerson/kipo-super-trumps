import type { GameState } from '../../interfaces';
import { removeCard } from '../deckServices';

export const removeCurrentTurnCardsFromPlayersHands = (
  gameState: GameState
): GameState => {
  const updatedPlayers = gameState.players.map((player) => ({
    ...player,
    hand: removeCard(player.hand),
  }));

  return {
    ...gameState,
    players: updatedPlayers,
  };
};

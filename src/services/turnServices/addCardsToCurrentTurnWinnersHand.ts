import type { GameState } from '../../interfaces';
import { addCards } from '../deckServices';

export const addCardsToCurrentTurnWinnersHand = (
  gameState: GameState,
  winnerIndex: number
): GameState => {
  const updatedPlayers = gameState.players.map((player, index) => {
    if (index === winnerIndex) {
      return {
        ...player,
        hand: addCards(player.hand, [
          ...gameState.currentTurnCards,
          ...gameState.stack,
        ]),
      };
    }
    return player;
  });

  return {
    ...gameState,
    players: updatedPlayers,
    currentTurnCards: [],
    stack: [],
    turnsCount: gameState.turnsCount + 1,
  };
};

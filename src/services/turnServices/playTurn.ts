import type { GameState, Card } from '../../interfaces';
import { addCards } from '../deckServices';
import { getCurrentTurnCards } from './getCurrentTurnCards';
import { removeCurrentTurnCardsFromPlayersHands } from './removeCurrentTurnCardsFromPlayersHands';
import { resolveSuperTrump } from './resolveSuperTrump';

export const playTurn = (
  gameState: GameState,
  chosenAttr: keyof Omit<Card, 'id' | 'name' | 'imgLink' | 'isTrumpCard'>
): GameState => {
  const currentTurnCards = getCurrentTurnCards(gameState);

  const updatedState = removeCurrentTurnCardsFromPlayersHands(gameState);
  const { players, stack } = updatedState;

  const superTrumpWinner = resolveSuperTrump(currentTurnCards);
  if (superTrumpWinner !== null) {
    const updatedPlayers = players.map((player, i) =>
      i === superTrumpWinner
        ? {
            ...player,
            hand: addCards(player.hand, [...currentTurnCards, ...stack]),
          }
        : player
    );
    return {
      ...updatedState,
      players: updatedPlayers,
      currentTurnCards: [],
      stack: [],
      turnsCount: updatedState.turnsCount + 1,
      choosingPlayer: superTrumpWinner,
    };
  }

  const [playerCard, aiCard] = currentTurnCards;
  const playerValue = playerCard[chosenAttr] as number;
  const aiValue = aiCard[chosenAttr] as number;

  let winnerIndex: number | null = null;
  if (playerValue > aiValue) winnerIndex = 0;
  else if (aiValue > playerValue) winnerIndex = 1;

  if (winnerIndex !== null) {
    const updatedPlayers = players.map((p, i) =>
      i === winnerIndex
        ? { ...p, hand: addCards(p.hand, [...currentTurnCards, ...stack]) }
        : p
    );
    return {
      ...updatedState,
      players: updatedPlayers,
      currentTurnCards: [],
      stack: [],
      turnsCount: updatedState.turnsCount + 1,
      choosingPlayer: winnerIndex,
    };
  }

  return {
    ...updatedState,
    currentTurnCards: [],
    stack: [...stack, ...currentTurnCards],
    turnsCount: updatedState.turnsCount + 1,
  };
};

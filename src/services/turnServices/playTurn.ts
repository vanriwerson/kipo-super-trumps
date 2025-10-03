import type { GameState, Card } from '../../interfaces';
import { addCards } from '../deckServices';
import { removeCurrentTurnCardsFromPlayersHands } from './removeCurrentTurnCardsFromPlayersHands';
import { resolveSuperTrump } from './resolveSuperTrump';

export const playTurn = (
  gameState: GameState,
  chosenAttr: keyof Omit<Card, 'id' | 'name' | 'imgLink' | 'isTrumpCard'>
): GameState => {
  const updatedState = removeCurrentTurnCardsFromPlayersHands(gameState);
  const { currentTurnCards, players, stack } = updatedState;

  if (currentTurnCards.length !== 2) {
    throw new Error('Turno inválido: não há exatamente 2 cartas em jogo.');
  }

  const superTrumpWinner = resolveSuperTrump(currentTurnCards);
  if (superTrumpWinner !== null) {
    const updatedPlayers = players.map((player, index) => {
      if (index === superTrumpWinner) {
        return {
          ...player,
          hand: addCards(player.hand, [...currentTurnCards, ...stack]),
        };
      }
      return player;
    });

    return {
      ...updatedState,
      players: updatedPlayers,
      currentTurnCards: [],
      stack: [],
      turnsCount: updatedState.turnsCount + 1,
    };
  }

  const [playerCard, AICard] = currentTurnCards;
  const value1 = playerCard[chosenAttr] as number;
  const value2 = AICard[chosenAttr] as number;

  if (value1 > value2) {
    const updatedPlayers = players.map((player, index) => {
      if (index === 0) {
        return {
          ...player,
          hand: addCards(player.hand, [...currentTurnCards, ...stack]),
        };
      }
      return player;
    });

    return {
      ...updatedState,
      players: updatedPlayers,
      currentTurnCards: [],
      stack: [],
      turnsCount: updatedState.turnsCount + 1,
      choosingPlayer: 0,
    };
  }

  if (value2 > value1) {
    const updatedPlayers = players.map((player, index) => {
      if (index === 1) {
        return {
          ...player,
          hand: addCards(player.hand, [...currentTurnCards, ...stack]),
        };
      }
      return player;
    });

    return {
      ...updatedState,
      players: updatedPlayers,
      currentTurnCards: [],
      stack: [],
      turnsCount: updatedState.turnsCount + 1,
      choosingPlayer: 1,
    };
  }

  return {
    ...updatedState,
    stack: [...stack, ...currentTurnCards],
    currentTurnCards: [],
    turnsCount: updatedState.turnsCount + 1,
  };
};

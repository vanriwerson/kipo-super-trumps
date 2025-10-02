import type { GameState, Card } from '../../interfaces';
import { addCards } from '../deckServices';
import { resolveSuperTrump } from './resolveSuperTrump';

export const playTurn = (
  gameState: GameState,
  chosenAttr: keyof Omit<Card, 'id' | 'name' | 'imgLink' | 'isTrumpCard'>
): GameState => {
  const { currentTurnCards, players, stack } = gameState;

  if (currentTurnCards.length !== 2) {
    throw new Error('Turno inválido: não há exatamente 2 cartas em jogo.');
  }

  // 1. Verificar Super Trunfo
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
      ...gameState,
      players: updatedPlayers,
      currentTurnCards: [],
      stack: [],
      turnsCount: gameState.turnsCount + 1,
    };
  }

  // 2. Comparação normal
  const [playerCard, AICard] = currentTurnCards;
  const value1 = playerCard[chosenAttr] as number;
  const value2 = AICard[chosenAttr] as number;

  if (value1 > value2) {
    // Jogador 1 vence
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
      ...gameState,
      players: updatedPlayers,
      currentTurnCards: [],
      stack: [],
      turnsCount: gameState.turnsCount + 1,
    };
  }

  if (value2 > value1) {
    // Jogador 2 vence
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
      ...gameState,
      players: updatedPlayers,
      currentTurnCards: [],
      stack: [],
      turnsCount: gameState.turnsCount + 1,
    };
  }

  // 3. Empate → vai para a mesa (stack)
  return {
    ...gameState,
    stack: [...stack, ...currentTurnCards],
    currentTurnCards: [],
    turnsCount: gameState.turnsCount + 1,
  };
};

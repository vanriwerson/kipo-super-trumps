import type { GameState } from '../../interfaces';
import { deckMock } from './deckMock';

export const gameStateMock: GameState = {
  turnsCount: 1,
  choosingPlayer: 0,
  currentTurnCards: [],
  stack: [],
  players: [
    {
      name: 'Player One',
      hand: [deckMock[0], deckMock[1], deckMock[2]], // 3 cartas
    },
    {
      name: 'Player Two',
      hand: [deckMock[3], deckMock[4], deckMock[5]], // 3 cartas
    },
  ],
};

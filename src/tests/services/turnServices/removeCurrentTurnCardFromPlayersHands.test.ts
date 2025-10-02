import { describe, it, expect } from 'vitest';
import { removeCurrentTurnCardsFromPlayersHands } from '../../../services/turnServices/removeCurrentTurnCardsFromPlayersHands';
import { deckMock } from '../../mocks/deckMock';

describe('removeCurrentTurnCardsFromPlayersHands', () => {
  it('deve remover a primeira carta da mão de cada jogador', () => {
    const players = [
      { name: 'Jogador 1', hand: [deckMock[0], deckMock[1]] },
      { name: 'Jogador 2', hand: [deckMock[2], deckMock[3]] },
    ];
    const updated = removeCurrentTurnCardsFromPlayersHands({
      turnsCount: 1,
      players,
      currentTurnCards: [],
      stack: [],
      choosingPlayer: 0,
    });
    expect(updated.players[0].hand).toEqual([deckMock[1]]);
    expect(updated.players[1].hand).toEqual([deckMock[3]]);
  });
});

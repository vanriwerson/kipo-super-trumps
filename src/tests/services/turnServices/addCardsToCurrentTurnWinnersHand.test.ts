import { describe, it, expect } from 'vitest';
import { addCardsToCurrentTurnWinnersHand } from '../../../services/turnServices/addCardsToCurrentTurnWinnersHand';
import { deckMock } from '../../mocks/deckMock';

describe('addCardsToCurrentTurnWinnersHand', () => {
  it('deve adicionar as cartas da rodada ao vencedor', () => {
    const players = [
      { name: 'Jogador 1', hand: [deckMock[0]] },
      { name: 'Jogador 2', hand: [] },
    ];
    const gameState = {
      turnsCount: 1,
      players,
      currentTurnCards: [deckMock[1], deckMock[2]],
      stack: [],
      choosingPlayer: 0,
    };

    const updated = addCardsToCurrentTurnWinnersHand(gameState, 0);
    expect(updated.players[0].hand).toContain(deckMock[1]);
    expect(updated.players[0].hand).toContain(deckMock[2]);
  });
});

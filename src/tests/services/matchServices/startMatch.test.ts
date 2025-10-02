import { describe, it, expect } from 'vitest';
import { startMatch } from '../../../services/matchServices/startMatch';
import { deckMock } from '../../mocks/deckMock';

describe('startMatch', () => {
  it('deve iniciar a partida com 2 jogadores e dividir as cartas', () => {
    const gameState = startMatch(deckMock, ['Jogador 1', 'Jogador 2']);
    expect(gameState.players).toHaveLength(2);
    expect(
      gameState.players[0].hand.length + gameState.players[1].hand.length
    ).toBe(deckMock.length);
    expect(gameState.turnsCount).toBe(1);
  });
});

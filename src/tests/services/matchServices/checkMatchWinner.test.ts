import { describe, it, expect } from 'vitest';
import { checkMatchWinner } from '../../../services/matchServices/checkMatchWinner';
import { gameStateMock } from '../../mocks/gameStateMock';
import { deckMock } from '../../mocks/deckMock';

describe('checkMatchWinner', () => {
  it('deve retornar null se ambos jogadores ainda tiverem cartas', () => {
    const winner = checkMatchWinner(gameStateMock);
    expect(winner).toBeNull();
  });

  it('deve retornar o jogador vencedor quando o outro ficar sem cartas', () => {
    const losingState = {
      ...gameStateMock,
      players: [
        { name: 'Player One', hand: [] },
        { name: 'Player Two', hand: [deckMock[0]] },
      ],
    };
    const winner = checkMatchWinner(losingState);
    expect(winner?.name).toBe('Player Two');
  });
});

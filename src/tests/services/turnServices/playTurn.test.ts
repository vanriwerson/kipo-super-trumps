import { describe, it, expect } from 'vitest';
import { playTurn } from '../../../services/turnServices/playTurn';
import { gameStateMock } from '../../mocks/gameStateMock';

describe('turnServices', () => {
  describe('playTurn', () => {
    it('deve adicionar cartas à stack em caso de empate', () => {
      const tiedState = {
        ...gameStateMock,
        currentTurnCards: [
          { ...gameStateMock.players[0].hand[2] },
          { ...gameStateMock.players[1].hand[5] },
        ],
      };
      const newState = playTurn(tiedState, 'strength');
      expect(newState.stack.length).toBe(2);
    });
  });
});

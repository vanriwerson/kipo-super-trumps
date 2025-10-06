import { describe, it, expect, vi } from 'vitest';
import { playTurn } from '../../../services';
import * as turnServices from '../../../services/turnServices/getCurrentTurnCards';
import { gameStateMock, deckMock } from '../../mocks';

describe('turnServices', () => {
  describe('playTurn', () => {
    it('deve adicionar cartas à stack em caso de empate', () => {
      vi.spyOn(turnServices, 'getCurrentTurnCards').mockReturnValue([
        { ...deckMock[0], strength: 5 },
        { ...deckMock[1], strength: 5 },
      ]);

      const tiedState = JSON.parse(JSON.stringify(gameStateMock));
      tiedState.stack = [];

      const newState = playTurn(tiedState, 'strength');

      expect(newState.stack.length).toBe(2);
    });
  });
});

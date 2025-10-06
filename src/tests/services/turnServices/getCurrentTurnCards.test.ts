import { describe, it, expect } from 'vitest';
import { getCurrentTurnCards } from '../../../services/turnServices/getCurrentTurnCards';
import { deckMock, gameStateMock } from '../../mocks';

describe('getCurrentTurnCards', () => {
  it('deve retornar a primeira carta da mão de cada jogador', () => {
    const currentTurnCards = getCurrentTurnCards(gameStateMock);
    expect(currentTurnCards).toEqual([deckMock[0], deckMock[3]]);
  });
});

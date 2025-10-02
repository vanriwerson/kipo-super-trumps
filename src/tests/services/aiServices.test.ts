import { describe, it, expect } from 'vitest';
import { AIChooseAttr } from '../../services/aiServices';
import { deckMock } from '../mocks/deckMock';

describe('aiServices', () => {
  describe('AIChooseAttr', () => {
    it('deve sempre retornar uma chave válida de atributo', () => {
      const card = deckMock[0];
      const attr = AIChooseAttr(card);
      expect(['strength', 'agility', 'intelligence', 'charisma']).toContain(
        attr
      );
    });

    it('deve variar os atributos escolhidos em execuções diferentes', () => {
      const card = deckMock[0];
      const results = new Set();
      for (let i = 0; i < 20; i++) {
        results.add(AIChooseAttr(card));
      }
      expect(results.size).toBeGreaterThan(1); // deve escolher mais de um atributo ao longo do tempo
    });
  });
});

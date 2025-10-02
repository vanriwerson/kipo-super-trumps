import { describe, it, expect } from 'vitest';
import { deckMock } from '../mocks/deckMock';
import {
  shuffleCards,
  distributeCards,
  getPartialDeck,
  addCards,
  removeCard,
} from '../../services';

describe('deckServices', () => {
  describe('shuffleCards', () => {
    it('deve retornar um novo array com a mesma quantidade de cartas', () => {
      const shuffled = shuffleCards(deckMock);
      expect(shuffled).toHaveLength(deckMock.length);
    });

    it('não deve modificar o array original', () => {
      const original = [...deckMock];
      shuffleCards(deckMock);
      expect(deckMock).toEqual(original);
    });

    it('deve conter as mesmas cartas do baralho original', () => {
      const shuffled = shuffleCards(deckMock);
      const originalIds = deckMock.map((c) => c.id).sort();
      const shuffledIds = shuffled.map((c) => c.id).sort();
      expect(shuffledIds).toEqual(originalIds);
    });
  });

  describe('distributeCards', () => {
    it('deve dividir o baralho em duas mãos com o mesmo tamanho', () => {
      const { handOne, handTwo } = distributeCards(deckMock);
      expect(handOne).toHaveLength(deckMock.length / 2);
      expect(handTwo).toHaveLength(deckMock.length / 2);
    });

    it('deve conter todas as cartas sem repetição', () => {
      const { handOne, handTwo } = distributeCards(deckMock);
      const allCards = [...handOne, ...handTwo];
      const uniqueIds = new Set(allCards.map((c) => c.id));
      expect(uniqueIds.size).toBe(deckMock.length);
    });
  });

  describe('getPartialDeck', () => {
    it('deve retornar um baralho com o tamanho especificado', () => {
      const length = 4;
      const partial = getPartialDeck(deckMock, length);
      expect(partial).toHaveLength(length);
    });

    it('deve sempre incluir a carta trunfo', () => {
      const length = 3;
      const partial = getPartialDeck(deckMock, length);
      const hasTrump = partial.some((c) => c.isTrumpCard);
      expect(hasTrump).toBe(true);
    });

    it('deve lançar erro caso não exista carta trunfo', () => {
      const deckWithoutTrump = deckMock.filter((c) => !c.isTrumpCard);
      expect(() => getPartialDeck(deckWithoutTrump, 3)).toThrowError(
        'Nenhuma carta trunfo encontrada no baralho.'
      );
    });
  });

  describe('addCards', () => {
    it('deve adicionar múltiplas cartas ao final da mão', () => {
      const hand = [deckMock[0]];
      const newCards = [deckMock[1], deckMock[2]];
      const updated = addCards(hand, newCards);

      expect(updated).toHaveLength(3);
      expect(updated.slice(-2)).toEqual(newCards);
    });

    it('não deve modificar o array original', () => {
      const hand = [deckMock[0]];
      const newCards = [deckMock[1]];
      const original = [...hand];
      addCards(hand, newCards);
      expect(hand).toEqual(original);
    });
  });

  describe('removeCard', () => {
    it('deve remover a primeira carta da mão', () => {
      const hand = [deckMock[0], deckMock[1], deckMock[2]];
      const updated = removeCard(hand);

      expect(updated).toHaveLength(2);
      expect(updated[0]).toEqual(deckMock[1]);
    });

    it('deve retornar array vazio se a mão tiver apenas uma carta', () => {
      const hand = [deckMock[0]];
      const updated = removeCard(hand);

      expect(updated).toHaveLength(0);
    });

    it('não deve modificar o array original', () => {
      const hand = [deckMock[0], deckMock[1]];
      const original = [...hand];
      removeCard(hand);
      expect(hand).toEqual(original);
    });
  });
});

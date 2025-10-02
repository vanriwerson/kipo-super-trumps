import { describe, it, expect } from 'vitest';
import type { Card } from '../../../interfaces';
import { resolveSuperTrump } from '../../../services/turnServices/resolveSuperTrump';

describe('resolveSuperTrump', () => {
  it('deve retornar 0 quando a primeira carta é super trunfo e a segunda não contém "A" no id', () => {
    const cards: Card[] = [
      { id: 'B1', isTrumpCard: true } as Card,
      { id: 'B2', isTrumpCard: false } as Card,
    ];

    const result = resolveSuperTrump(cards);
    expect(result).toBe(0);
  });

  it('deve retornar 1 quando a segunda carta é super trunfo e a primeira não contém "A" no id', () => {
    const cards: Card[] = [
      { id: 'B1', isTrumpCard: false } as Card,
      { id: 'B2', isTrumpCard: true } as Card,
    ];

    const result = resolveSuperTrump(cards);
    expect(result).toBe(1);
  });

  it('deve retornar null quando nenhuma carta é super trunfo', () => {
    const cards: Card[] = [
      { id: 'B1', isTrumpCard: false } as Card,
      { id: 'B2', isTrumpCard: false } as Card,
    ];

    const result = resolveSuperTrump(cards);
    expect(result).toBeNull();
  });

  it('deve retornar o index da carta adversária quando ela for da família "A"', () => {
    const cards1: Card[] = [
      { id: 'B1', isTrumpCard: true } as Card, // super trunfo
      { id: 'A2', isTrumpCard: false } as Card, // carta com A no id
    ];

    const cards2: Card[] = [
      { id: 'A1', isTrumpCard: false } as Card, // carta com A no id
      { id: 'B2', isTrumpCard: true } as Card, // super trunfo
    ];

    expect(resolveSuperTrump(cards1)).toBe(1);
    expect(resolveSuperTrump(cards2)).toBe(0);
  });
});

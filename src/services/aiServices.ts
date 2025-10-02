import type { Card, CardAttrKey } from '../interfaces';

export const AIChooseAttr = (card: Card): CardAttrKey => {
  const attributes: Record<CardAttrKey, number> = {
    strength: card.strength,
    agility: card.agility,
    intelligence: card.intelligence,
    charisma: card.charisma,
  };

  const total = Object.values(attributes).reduce((a, b) => a + b, 0);
  const r = Math.random() * total;

  let accumulator = 0;
  for (const [key, value] of Object.entries(attributes) as [
    CardAttrKey,
    number
  ][]) {
    accumulator += value;
    if (r <= accumulator) {
      return key;
    }
  }

  return 'strength'; // fallback
};

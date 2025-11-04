import type { CardAttrKey } from '../interfaces';

export const attrDictionary = (attr: CardAttrKey) => {
  const attrs = {
    strength: 'Força',
    agility: 'Agilidade',
    intelligence: 'Inteligência',
    charisma: 'Carisma',
  };

  return attrs[attr];
};

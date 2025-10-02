import type { Card } from '../../interfaces';

export type AttributeKey = keyof Omit<
  Card,
  'id' | 'name' | 'imgLink' | 'isTrumpCard'
>;

export const chooseAttr = (attr: AttributeKey): AttributeKey => {
  return attr;
};
